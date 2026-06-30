"use client";

import { useMemo } from "react";
import { Line } from "@react-three/drei";
import type { PlanetData } from "@/lib/constants/solar-system";

interface OrbitPathProps {
  data: PlanetData;
}

export default function OrbitPath({ data }: OrbitPathProps) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push([
        Math.cos(angle) * data.distance,
        0,
        Math.sin(angle) * data.distance,
      ]);
    }
    return pts;
  }, [data.distance]);

  return (
    <Line
      points={points}
      color={data.color}
      opacity={0.2}
      transparent
      lineWidth={1}
    />
  );
}
