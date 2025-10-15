
import json
import math
import joblib
import numpy as np
import pandas as pd
from typing import Dict, Any, List, Optional

DEFAULT_MODEL_PATH = "../models/random_forest_mining.pkl"

def _ensure_columns(df: pd.DataFrame) -> pd.DataFrame:
    """Add missing expected columns with NA and cast numeric types safely."""
    expected = ["NDVI_pre","NDVI_post","NDBI_pre","NDBI_post","depth_m","volume_m3","area_m2","polygon_id"]
    for c in expected:
        if c not in df.columns:
            df[c] = np.nan
    # Cast numeric columns to floats if possible (non-fatal)
    for c in ["NDVI_pre","NDVI_post","NDBI_pre","NDBI_post","depth_m","volume_m3","area_m2"]:
        df[c] = pd.to_numeric(df[c], errors="coerce")
    return df

def _feature_engineer(df: pd.DataFrame) -> pd.DataFrame:
    """Create features used by the model. Keep same names used during training."""
    df = _ensure_columns(df).copy()

    # differences
    df["dNDVI"] = df["NDVI_pre"] - df["NDVI_post"]
    df["dNDBI"] = df["NDBI_post"] - df["NDBI_pre"]

    # area transformation
    df["area_log"] = np.log1p(df["area_m2"].fillna(0.0))

    # normalized fields (avoid divide-by-zero)
    depth_max = df["depth_m"].replace(0, np.nan).max()
    vol_max = df["volume_m3"].replace(0, np.nan).max()
    df["depth_norm"] = df["depth_m"] / (depth_max if not np.isnan(depth_max) and depth_max>0 else 1.0)
    df["volume_norm"] = df["volume_m3"] / (vol_max if not np.isnan(vol_max) and vol_max>0 else 1.0)

    # Fill NaNs for model input
    df[["dNDVI","dNDBI","depth_norm","volume_norm","area_log"]] = df[["dNDVI","dNDBI","depth_norm","volume_norm","area_log"]].fillna(0.0)
    return df

# -------------------------
# Main inference function
# -------------------------
def predict_mining_activity(input_json: Dict[str,Any], model_path: str = DEFAULT_MODEL_PATH) -> List[Dict[str,Any]]:
    """
    Main entrypoint for backend integration.
    """

    # 🩹 Fix: Robust input validation with auto-wrapping
    if input_json is None:
        raise ValueError("input_json cannot be None.")

    # if frontend accidentally sends list instead of dict
    if isinstance(input_json, list):
        input_json = {"features": input_json}

    # if 'features' missing but input looks like single polygon dict
    if isinstance(input_json, dict) and "features" not in input_json:
        if all(k in input_json for k in ["NDVI_pre", "NDVI_post", "NDBI_pre", "NDBI_post"]):
            input_json = {"features": [input_json]}
        else:
            raise ValueError("input_json must be a dict with key 'features' (list).")

    features = input_json.get("features", [])
    if not isinstance(features, list):
        raise ValueError("'features' must be a list of polygon dicts.")

    # convert to DataFrame
    df = pd.json_normalize(features)
    df = _feature_engineer(df)

    # ensure model exists and load
    try:
        model = joblib.load(model_path)
    except Exception as e:
        raise RuntimeError(f"Could not load model at {model_path}: {e}")

    model_features = ["dNDVI","dNDBI","depth_norm","volume_norm","area_log"]
    X = df[model_features].values

    try:
        probs = model.predict_proba(X)
        if probs.shape[1] == 2:
            prob_illegal = probs[:, 0]
        else:
            prob_illegal = np.zeros(len(X))
    except Exception:
        preds = model.predict(X)
        prob_illegal = np.array([0.8 if p==0 else 0.2 for p in preds])

    preds_label = model.predict(X)

    out = []
    for i, row in df.reset_index(drop=True).iterrows():
        p = {
            "prediction": "Illegal" if int(preds_label[i]) == 0 else "Legal",
            "confidence": float(round(prob_illegal[i] * 100, 2))
        }
        out.append(p)

    return out


# -------------------------
# Convenience: small CLI test
# -------------------------
if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Run ML inference from JSON input file.")
    parser.add_argument("--input", help="Path to input JSON file (features list).", required=False)
    parser.add_argument("--model", help="Path to model .pkl (joblib).", default=DEFAULT_MODEL_PATH)
    parser.add_argument("--output", help="Path to output JSON (predictions).", default="ml_predictions.json")
    args = parser.parse_args()

    if args.input:
        with open(args.input) as f:
            input_json = json.load(f)
    else:
        # small demo: synth 3 examples
        input_json = {
            "features": [
                {"polygon_id":"demo_1","NDVI_pre":0.78,"NDVI_post":0.42,"NDBI_pre":0.21,"NDBI_post":0.47,"depth_m":18.0,"volume_m3":6000,"area_m2":1200},
                {"polygon_id":"demo_2","NDVI_pre":0.65,"NDVI_post":0.60,"NDBI_pre":0.30,"NDBI_post":0.32,"depth_m":5.0,"volume_m3":950,"area_m2":800},
                {"polygon_id":"demo_3","NDVI_pre":0.40,"NDVI_post":0.10,"NDBI_pre":0.18,"NDBI_post":0.45,"depth_m":22.0,"volume_m3":15000,"area_m2":3200}
            ]
        }
    preds = predict_mining_activity(input_json, model_path=args.model)
    with open(args.output, "w") as f:
        json.dump(preds, f, indent=2)
    print("Predictions written to", args.output)
