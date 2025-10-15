"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Button } from "./ui/button";

const DEMRaster = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [depthData, setDepthData] = useState<number[][] | null>(null);
  const [showGrid, setShowGrid] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepthData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/region/dem-raster/3", {
          headers: {
            Authorization: "Token 58fdcce847515137d46251c95f7330474217cda9",
          },
        });
        const data = await res.json();
        setDepthData(data.dem_raster);
      } catch (err) {
        console.error("Error fetching depth data:", err);
      }
    };
    fetchDepthData();
  }, []);

  useEffect(() => {
    if (!depthData || !mountRef.current) return;

    setLoading(true);

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xadd8e6);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.autoRotate = autoRotate;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    const sun = new THREE.DirectionalLight(0xffffff, 0.8);
    sun.position.set(1, 2, 1);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0xffffff, 0.3);
    fill.position.set(-1, -1, -1);
    scene.add(fill);

    const rows = depthData.length;
    const cols = depthData[0].length;
    const geometry = new THREE.PlaneGeometry(cols, rows, cols - 1, rows - 1);

    // --- Calculate elevation stats ---
    let minZ = Infinity,
      maxZ = -Infinity;
    depthData.forEach((r) =>
      r.forEach((z) => {
        if (z < minZ) minZ = z;
        if (z > maxZ) maxZ = z;
      })
    );

    const heightRange = maxZ - minZ;
    const horizontalScale = Math.max(rows, cols);
    const heightScale = horizontalScale / 5; // smaller = steeper, larger = flatter

    const pos = geometry.attributes.position as THREE.BufferAttribute;

    // --- Set vertex heights ---
    for (let i = 0; i < pos.count; i++) {
      const ix = i % cols;
      const iy = Math.floor(i / cols);
      const z = depthData[iy][ix];
      const scaledZ = ((z - minZ) / heightRange) * heightScale;
      pos.setZ(i, scaledZ);
    }
    pos.needsUpdate = true;

    geometry.computeVertexNormals();

    // --- Apply color map based on true elevation ---
    const colors: number[] = [];
    const color = new THREE.Color();

    for (let i = 0; i < pos.count; i++) {
      const ix = i % cols;
      const iy = Math.floor(i / cols);
      const z = depthData[iy][ix];
      const t = (z - minZ) / heightRange;

      // Custom mining color gradient (low→high = dark red → brown → green)
      if (t < 0.3) {
        // Deep mining zones — dark red to reddish-brown
        color.setRGB(0.25 + t * 0.2, 0.05 + t * 0.1, 0.05 + t * 0.05);
      } else if (t < 0.6) {
        // Mid elevations — earthy brown
        color.setRGB(0.6 + (t - 0.3) * 0.3, 0.35 + (t - 0.3) * 0.15, 0.2);
      } else {
        // High elevations — green
        color.setRGB(0.2 - (t - 0.6) * 0.1, 0.6 + (t - 0.6) * 0.4, 0.2);
      }

      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: false,
      side: THREE.DoubleSide,
      wireframe: showGrid,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);

    // --- Camera fitting ---
    const bbox = new THREE.Box3().setFromObject(mesh);
    const size = bbox.getSize(new THREE.Vector3());
    const center = bbox.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    camera.position.set(center.x, cameraZ * 0.7 + center.y, center.z + cameraZ);
    camera.lookAt(center);
    controls.target.copy(center);

    setLoading(false);

    const handleResize = () => {
      const w = mountRef.current!.clientWidth;
      const h = mountRef.current!.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        mountRef.current &&
        renderer.domElement &&
        mountRef.current.contains(renderer.domElement)
      )
        mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, [depthData, showGrid, autoRotate]);

  return (
    <div
      style={{ width: "100%", height: "600px", position: "relative" }}
      ref={mountRef}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255,255,255,0.8)",
            zIndex: 10,
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Loading 3D map...
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          display: "flex",
          gap: "0.5rem",
          zIndex: 20,
        }}
      >
        <Button onClick={() => setShowGrid(!showGrid)}>
          {showGrid ? "Hide Grid" : "Show Grid"}
        </Button>
        <Button onClick={() => setAutoRotate(!autoRotate)}>
          {autoRotate ? "Stop Rotate" : "Auto Rotate"}
        </Button>
      </div>
    </div>
  );
};

export default DEMRaster;
