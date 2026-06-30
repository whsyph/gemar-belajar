"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Controls from "@/components/simulasi/tata-surya/Controls";
import InfoPanel from "@/components/simulasi/tata-surya/InfoPanel";
import CanvasWrapper from "@/components/three/CanvasWrapper";
import { useSimulationStore } from "@/store/simulation-store";

const SolarSystemScene = dynamic(
  () => import("@/components/simulasi/tata-surya/SolarSystemScene"),
  { ssr: false }
);

export default function TataSuryaPage() {
  const t = useTranslations("tataSurya");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || "id";
  const selectPlanet = useSimulationStore((s) => s.selectPlanet);

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="relative z-20 px-4 sm:px-6 pt-4 pb-2">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            {t("title")}
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            {t("description")}
          </p>
        </div>
      </div>

      {/* 3D Scene */}
      <div className="flex-1 relative">
        <Controls />
        <div className="absolute inset-0">
          <CanvasWrapper onPointerMissed={() => selectPlanet(null)}>
            <SolarSystemScene />
          </CanvasWrapper>
        </div>
        <InfoPanel locale={locale} />
      </div>
    </div>
  );
}
