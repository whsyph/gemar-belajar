"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface CanvasWrapperProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  onPointerMissed?: () => void;
}

export default function CanvasWrapper({
  children,
  cameraPosition = [0, 60, 80],
  onPointerMissed,
}: CanvasWrapperProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: cameraPosition,
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: false,
        }}
        onPointerMissed={onPointerMissed}
        style={{ background: "#0a0a1a" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 20, 0]} intensity={0.5} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
