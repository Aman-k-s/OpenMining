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
    scene.background = new THREE.Color(0xadd8e6); // mining-sky blue

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 5000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.autoRotate = autoRotate;

    // Lighting
    // Ambient light ensures nothing is completely dark
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); 
    scene.add(ambientLight);

    // Soft directional light for subtle shading
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(1, 2, 1);
    directionalLight.castShadow = false; // no harsh shadows
    scene.add(directionalLight);

    // Optional: a second light from the opposite side for balance
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-1, -1, -1);
    scene.add(fillLight);

    // Geometry
    const rows = depthData.length;
    const cols = depthData[0].length;
    const geometry = new THREE.PlaneGeometry(cols, rows, cols - 1, rows - 1);

    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const ix = i % cols;
      const iy = Math.floor(i / cols);
      geometry.attributes.position.setZ(i, depthData[iy][ix]);
    }

    geometry.computeVertexNormals();

    // Colors based on elevation
    const colors = [];
    let min = Infinity,
      max = -Infinity;
    depthData.forEach((row) =>
      row.forEach((z) => {
        min = Math.min(min, z);
        max = Math.max(max, z);
      })
    );

    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const z = geometry.attributes.position.getZ(i);
      const t = (z - min) / (max - min);
      const color = new THREE.Color();
      color.setHSL((1 - t) * 0.0 + t * 0.33, 1, 0.5); // green top -> red bottom
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      wireframe: showGrid,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);

    // Grid helper
    const gridHelper = new THREE.GridHelper(Math.max(cols, rows), Math.max(cols, rows), 0xffffff, 0x555555);
    gridHelper.visible = showGrid;
    scene.add(gridHelper);

    // Fit camera to mesh
    const bbox = new THREE.Box3().setFromObject(mesh);
    const size = bbox.getSize(new THREE.Vector3());
    const center = bbox.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    camera.position.set(center.x, cameraZ * 0.8 + center.y, center.z + cameraZ);
    camera.lookAt(center);

    controls.target.copy(center);

    setLoading(false);

    // Resize handler
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
      if (mountRef.current && renderer && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        try {
          mountRef.current.removeChild(renderer.domElement);
        } catch (err) {
          console.warn('Failed to remove renderer DOM element:', err);
        }
      }
      try {
        geometry.dispose();
      } catch (err) {
        /* ignore */
      }
      try {
        material.dispose();
      } catch (err) {
        /* ignore */
      }
    };
  }, [depthData, showGrid, autoRotate]);

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }} ref={mountRef}>
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
      <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: "0.5rem", zIndex: 20 }}>
        <Button onClick={() => setShowGrid(!showGrid)}>{showGrid ? "Hide Grid" : "Show Grid"}</Button>
        <Button onClick={() => setAutoRotate(!autoRotate)}>{autoRotate ? "Stop Rotate" : "Auto Rotate"}</Button>
      </div>
    </div>
  );
};

export default DEMRaster;
