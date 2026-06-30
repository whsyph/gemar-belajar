export interface PlanetData {
  id: string;
  nameKey: string;
  radius: number;
  distance: number;
  orbitSpeed: number;
  rotationSpeed: number;
  color: string;
  emissive?: string;
  tilt: number;
  funFactKey: string;
  orbitPeriodDays: number;
  diameterKm: number;
  distanceFromSunMillionKm: number;
  atmosphereColor?: string;
}

export interface SolarSystemData {
  sunRadius: number;
  sunColor: string;
  sunEmissive: string;
  sunFunFactKey: string;
  sunDiameterKm: number;
  planets: PlanetData[];
}

export const solarSystem: SolarSystemData = {
  sunRadius: 5,
  sunColor: "#FDB813",
  sunEmissive: "#F57C00",
  sunFunFactKey: "matahari",
  sunDiameterKm: 1392700,
  planets: [
    {
      id: "merkurius",
      nameKey: "merkurius",
      radius: 0.4,
      distance: 8,
      orbitSpeed: 4.15,
      rotationSpeed: 0.017,
      color: "#B5B5B5",
      tilt: 0.03,
      funFactKey: "merkurius",
      orbitPeriodDays: 88,
      diameterKm: 4879,
      distanceFromSunMillionKm: 57.9,
    },
    {
      id: "venus",
      nameKey: "venus",
      radius: 0.7,
      distance: 12,
      orbitSpeed: 1.62,
      rotationSpeed: -0.004,
      color: "#E8C37B",
      tilt: 177.4,
      funFactKey: "venus",
      orbitPeriodDays: 225,
      diameterKm: 12104,
      distanceFromSunMillionKm: 108.2,
    },
    {
      id: "bumi",
      nameKey: "bumi",
      radius: 0.75,
      distance: 16,
      orbitSpeed: 1.0,
      rotationSpeed: 1.0,
      color: "#4B7B9E",
      tilt: 23.4,
      funFactKey: "bumi",
      orbitPeriodDays: 365,
      diameterKm: 12756,
      distanceFromSunMillionKm: 149.6,
    },
    {
      id: "mars",
      nameKey: "mars",
      radius: 0.5,
      distance: 20,
      orbitSpeed: 0.53,
      rotationSpeed: 0.97,
      color: "#C1440E",
      tilt: 25.2,
      funFactKey: "mars",
      orbitPeriodDays: 687,
      diameterKm: 6792,
      distanceFromSunMillionKm: 227.9,
    },
    {
      id: "jupiter",
      nameKey: "jupiter",
      radius: 1.8,
      distance: 28,
      orbitSpeed: 0.084,
      rotationSpeed: 2.4,
      color: "#D4A574",
      tilt: 3.1,
      funFactKey: "jupiter",
      orbitPeriodDays: 4333,
      diameterKm: 142984,
      distanceFromSunMillionKm: 778.6,
    },
    {
      id: "saturnus",
      nameKey: "saturnus",
      radius: 1.5,
      distance: 36,
      orbitSpeed: 0.034,
      rotationSpeed: 2.18,
      color: "#EAD6B8",
      tilt: 26.7,
      funFactKey: "saturnus",
      orbitPeriodDays: 10759,
      diameterKm: 120536,
      distanceFromSunMillionKm: 1433.5,
    },
    {
      id: "uranus",
      nameKey: "uranus",
      radius: 1.0,
      distance: 44,
      orbitSpeed: 0.012,
      rotationSpeed: -1.39,
      color: "#7EC8E3",
      tilt: 97.8,
      funFactKey: "uranus",
      orbitPeriodDays: 30687,
      diameterKm: 51118,
      distanceFromSunMillionKm: 2872.5,
    },
    {
      id: "neptunus",
      nameKey: "neptunus",
      radius: 0.95,
      distance: 52,
      orbitSpeed: 0.006,
      rotationSpeed: 1.49,
      color: "#3B5C9C",
      tilt: 28.3,
      funFactKey: "neptunus",
      orbitPeriodDays: 60190,
      diameterKm: 49528,
      distanceFromSunMillionKm: 4495.1,
    },
  ],
};
