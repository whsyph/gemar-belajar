"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const locales = [
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const params = useParams<{ locale: string }>();
  const currentLocale = params?.locale || "id";

  const handleSwitch = () => {
    const nextLocale = currentLocale === "id" ? "en" : "id";
    const pathParts = window.location.pathname.split("/");
    pathParts[1] = nextLocale;
    window.location.href = pathParts.join("/");
  };

  const current = locales.find((l) => l.code === currentLocale);
  const next = locales.find((l) => l.code !== currentLocale);

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/50"
      title={next?.label}
    >
      <span className="text-base">{current?.flag}</span>
      <span className="hidden sm:inline uppercase font-medium">{current?.code}</span>
    </button>
  );
}