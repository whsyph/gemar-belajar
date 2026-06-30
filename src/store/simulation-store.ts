import { create } from "zustand";

interface SimulationState {
  speed: number;
  isPaused: boolean;
  showLabels: boolean;
  selectedPlanet: string | null;
  setSpeed: (speed: number) => void;
  togglePause: () => void;
  toggleLabels: () => void;
  selectPlanet: (planetId: string | null) => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
  speed: 1,
  isPaused: false,
  showLabels: true,
  selectedPlanet: null,
  setSpeed: (speed) => set({ speed }),
  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
  toggleLabels: () => set((state) => ({ showLabels: !state.showLabels })),
  selectPlanet: (planetId) => set({ selectedPlanet: planetId }),
}));
