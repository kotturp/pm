"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial,} from "@react-three/drei";
import * as THREE from "three";

import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);


  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3); // ✅ Fix array size
    return random.inSphere(positions, { radius: 1.2 });
  });

  useFrame((state, delta) => {
    if (ref.current) { // ✅ Ensure ref is not null before updating
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* ✅ Fix rotation format */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white" // ✅ Fix invalid color value
          size={0.002}
          sizeAttenuation={true}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
