"use client";

import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import Sun from "./Sun";
import Planet from "./Planet";
import OrbitPath from "./OrbitPath";
import { solarSystem } from "@/lib/constants/solar-system";
import { useSimulationStore } from "@/store/simulation-store";

export default function SolarSystemScene() {
  const controlsRef = useRef<any>(null);
  const showLabels = useSimulationStore((s) => s.showLabels);

  const baseOrbitSpeed = 0.3;

  return (
    <>
      <Stars radius={200} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      <Sun showLabel={showLabels} />

      {solarSystem.planets.map((planet) => (
        <group key={planet.id}>
          <Planet data={planet} showLabel={showLabels} baseOrbitSpeed={baseOrbitSpeed} />
          <OrbitPath data={planet} />
        </group>
      ))}

      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.1}
        minDistance={10}
        maxDistance={150}
        target={[0, 0, 0]}
      />
    </>
  );
}