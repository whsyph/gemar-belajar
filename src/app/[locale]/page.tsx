"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

const simulations = [
  {
    key: "tataSurya",
    icon: "🪐",
    gradient: "from-orange-500 to-yellow-500",
    href: "tata-surya",
    gradientBg: "from-orange-500/20 to-yellow-500/5",
  },
  {
    key: "gravitasi",
    icon: "🌍",
    gradient: "from-blue-500 to-cyan-500",
    href: "gravitasi",
    gradientBg: "from-blue-500/20 to-cyan-500/5",
  },
  {
    key: "gelombang",
    icon: "〰️",
    gradient: "from-green-500 to-emerald-500",
    href: "gelombang",
    gradientBg: "from-green-500/20 to-emerald-500/5",
  },
  {
    key: "matematika",
    icon: "📐",
    gradient: "from-purple-500 to-pink-500",
    href: "matematika",
    gradientBg: "from-purple-500/20 to-pink-500/5",
  },
];

export default function HomePage() {
  const t = useTranslations("home");
  const tn = useTranslations("nav");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || "id";

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-sm text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              SD · SMP · SMA
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                {t("heroTitle")}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/simulasi/tata-surya`}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                {t("mulaiBelajar")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t("simulasiTersedia")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {simulations.map((sim) => (
            <Link
              key={sim.key}
              href={`/${locale}/simulasi/${sim.href}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 hover:border-slate-600/50 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sim.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{sim.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tn(sim.key)}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t(`${sim.key}Card`)}
                </p>
              </div>

              {/* Decorative gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${sim.gradient} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}