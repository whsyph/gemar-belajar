"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function MatematikaPage() {
  const t = useTranslations("matematika");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || "id";

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-xl">
        <div className="text-6xl mb-6">📐</div>
        <h1 className="text-3xl font-bold text-white mb-4">{t("title")}</h1>
        <p className="text-slate-400 mb-8">{t("description")}</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700/50 text-sm text-cyan-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {t("comingSoon")}
        </div>
        <div>
          <Link
            href={`/${locale}/simulasi/tata-surya`}
            className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
          >
            ← Coba simulasi Tata Surya 3D
          </Link>
        </div>
      </div>
    </div>
  );
}
