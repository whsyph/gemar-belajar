"use client";

import { useTranslations } from "next-intl";
import { useSimulationStore } from "@/store/simulation-store";

export default function Controls() {
  const t = useTranslations("tataSurya.controls");
  const { speed, setSpeed, isPaused, togglePause, showLabels, toggleLabels } =
    useSimulationStore();

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/50 px-4 py-2.5 shadow-xl">
        {/* Speed slider */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {t("speed")}
          </span>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-20 h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-cyan-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400"
          />
          <span className="text-xs text-slate-400 w-6 text-right">
            {speed.toFixed(1)}×
          </span>
        </div>

        <div className="w-px h-5 bg-slate-700" />

        {/* Pause/Play */}
        <button
          onClick={togglePause}
          className="px-2 py-1 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
          title={isPaused ? t("play") : t("pause")}
        >
          {isPaused ? "▶" : "⏸"}
        </button>

        {/* Toggle labels */}
        <button
          onClick={toggleLabels}
          className={`px-2 py-1 rounded-lg text-xs transition-all ${
            showLabels
              ? "text-cyan-300 bg-cyan-500/10"
              : "text-slate-300 hover:text-white hover:bg-slate-800"
          }`}
          title={t("labels")}
        >
          Aa
        </button>
      </div>
    </div>
  );
}