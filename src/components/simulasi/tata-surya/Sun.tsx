"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { solarSystem } from "@/lib/constants/solar-system";

interface SunProps {
  showLabel: boolean;
}

export default function Sun({ showLabel }: SunProps) {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[solarSystem.sunRadius * 1.2, 32, 32]} />
        <meshBasicMaterial
          color={solarSystem.sunColor}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Main sun sphere */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[solarSystem.sunRadius, 64, 64]} />
        <meshStandardMaterial
          color={solarSystem.sunColor}
          emissive={solarSystem.sunEmissive}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Point light from sun */}
      <pointLight
        position={[0, 0, 0]}
        intensity={15}
        distance={100}
        decay={2}
        color={solarSystem.sunColor}
      />

      {/* Label */}
      {showLabel && (
        <Text
          position={[0, -solarSystem.sunRadius - 1.5, 0]}
          fontSize={1.2}
          color="#FDB813"
          anchorX="center"
          anchorY="top"
        >
          Matahari
        </Text>
      )}
    </group>
  );
}
