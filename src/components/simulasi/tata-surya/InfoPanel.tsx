"use client";

import { useTranslations } from "next-intl";
import { useSimulationStore } from "@/store/simulation-store";
import { solarSystem } from "@/lib/constants/solar-system";

interface InfoPanelProps {
  locale: string;
}

export default function InfoPanel({ locale }: InfoPanelProps) {
  const t = useTranslations("tataSurya");
  const selectedPlanet = useSimulationStore((s) => s.selectedPlanet);

  if (!selectedPlanet) return null;

  const planetData =
    selectedPlanet === "matahari"
      ? null
      : solarSystem.planets.find((p) => p.id === selectedPlanet);

  const funFactKey =
    selectedPlanet === "matahari"
      ? solarSystem.sunFunFactKey
      : planetData?.funFactKey;

  const planetNameKey =
    selectedPlanet === "matahari" ? "matahari" : planetData?.id;

  return (
    <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80">
      <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/50 p-5 shadow-xl">
        {/* Close button */}
        <button
          onClick={() => useSimulationStore.getState().selectPlanet(null)}
          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all text-sm"
        >
          ✕
        </button>

        {/* Planet name */}
        <h3 className="text-lg font-bold text-white mb-3 pr-6">
          {t(`planets.${planetNameKey}`)}
        </h3>

        {/* Planet info */}
        {planetData && (
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{t("info.distance")}</span>
              <span className="text-white font-medium">
                {planetData.distanceFromSunMillionKm.toLocaleString()}{" "}
                {t("info.distanceUnit")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{t("info.diameter")}</span>
              <span className="text-white font-medium">
                {planetData.diameterKm.toLocaleString()} {t("info.diameterUnit")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{t("info.orbitPeriod")}</span>
              <span className="text-white font-medium">
                {planetData.orbitPeriodDays.toLocaleString()} hari
              </span>
            </div>
          </div>
        )}

        {/* Sun info */}
        {selectedPlanet === "matahari" && (
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{t("info.diameter")}</span>
              <span className="text-white font-medium">
                {solarSystem.sunDiameterKm.toLocaleString()}{" "}
                {t("info.diameterUnit")}
              </span>
            </div>
          </div>
        )}

        {/* Fun fact */}
        <div className="mt-3 pt-3 border-t border-slate-700/50">
          <p className="text-xs text-cyan-300 font-semibold mb-1">
            ✨ {t("info.funFact")}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t(`funFacts.${funFactKey}`)}
          </p>
        </div>
      </div>
    </div>
  );
}