"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { useSimulationStore } from "@/store/simulation-store";
import type { PlanetData } from "@/lib/constants/solar-system";

interface PlanetProps {
  data: PlanetData;
  showLabel: boolean;
  baseOrbitSpeed: number;
}

export default function Planet({
  data,
  showLabel,
  baseOrbitSpeed,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  const speed = useSimulationStore((s) => s.speed);
  const isPaused = useSimulationStore((s) => s.isPaused);
  const selectPlanet = useSimulationStore((s) => s.selectPlanet);

  useFrame((state, delta) => {
    if (isPaused) return;

    // Orbit
    if (groupRef.current) {
      const angle =
        state.clock.elapsedTime * data.orbitSpeed * speed * baseOrbitSpeed;
      groupRef.current.position.x = Math.cos(angle) * data.distance;
      groupRef.current.position.z = Math.sin(angle) * data.distance;
    }

    // Self rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * data.rotationSpeed;
    }
  });

  const scale = isHovered ? 1.3 : 1;

  return (
    <group ref={groupRef}>
      {/* Planet mesh */}
      <mesh
        ref={meshRef}
        scale={scale}
        onClick={(e) => {
          e.stopPropagation();
          selectPlanet(data.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setIsHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setIsHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[data.radius, 48, 48]} />
        <meshStandardMaterial
          color={data.color}
          roughness={0.7}
          metalness={0.1}
          emissive={isHovered ? data.color : undefined}
          emissiveIntensity={isHovered ? 0.3 : 0}
        />
      </mesh>

      {/* Saturn's ring */}
      {data.id === "saturnus" && (
        <mesh rotation={[Math.PI / 2.5, 0, 0]} scale={1.8}>
          <ringGeometry args={[data.radius * 1.4, data.radius * 2.2, 64]} />
          <meshBasicMaterial
            color="#C8B88A"
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Label */}
      {showLabel && (
        <Text
          position={[0, -data.radius - 1, 0]}
          fontSize={0.6}
          color={isHovered ? "#ffffff" : "#94a3b8"}
          anchorX="center"
          anchorY="top"
        >
          {data.nameKey.charAt(0).toUpperCase() + data.nameKey.slice(1)}
        </Text>
      )}

      {/* Hover glow */}
      {isHovered && (
        <mesh>
          <sphereGeometry args={[data.radius * 1.1, 32, 32]} />
          <meshBasicMaterial
            color={data.color}
            transparent
            opacity={0.2}
          />
        </mesh>
      )}
    </group>
  );
}
