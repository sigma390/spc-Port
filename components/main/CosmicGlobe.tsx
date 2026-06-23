"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

function GlobeParticles() {
  const pointsRef1 = useRef<THREE.Points>(null);
  const pointsRef2 = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate outer sphere points
  const [outerPoints] = useState(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.2; // radius
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  // Generate inner core points
  const [innerPoints] = useState(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 0.6 + Math.random() * 0.2; // radius
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state) => {
    const { x, y } = state.pointer; // Normalized mouse values between -1 and 1

    if (groupRef.current) {
      // Automatic smooth rotation
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x += 0.001;

      // React to mouse movement by tilting gently
      groupRef.current.rotation.y += (x * 0.4 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-y * 0.4 - groupRef.current.rotation.x) * 0.05;
    }

    if (pointsRef1.current) {
      pointsRef1.current.rotation.y -= 0.001;
    }
    if (pointsRef2.current) {
      pointsRef2.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Cyan Globe */}
      <points ref={pointsRef1}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[outerPoints, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#00e5ff"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner Purple Core */}
      <points ref={pointsRef2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[innerPoints, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#ba9cff"
          transparent
          opacity={0.9}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Orbital Rings */}
      <mesh rotation={[Math.PI / 2, Math.PI / 6, 0]}>
        <ringGeometry args={[1.5, 1.52, 64]} />
        <meshBasicMaterial color="#7042f8" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 3, -Math.PI / 4, 0]}>
        <ringGeometry args={[1.7, 1.71, 64]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function CosmicGlobe() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative select-none">
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[#7042f8]/10 blur-[50px] pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 3.2], fov: 60 }} className="w-full h-full">
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <GlobeParticles />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
