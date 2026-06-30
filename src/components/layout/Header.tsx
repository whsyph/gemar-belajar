"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || "id";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
              G
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              {t("home") === "Beranda" ? "Gemar Belajar" : "Gemar Belajar"}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={`/${locale}`}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/simulasi/tata-surya`}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
            >
              {t("tataSurya")}
            </Link>
            <Link
              href={`/${locale}/simulasi/gravitasi`}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
            >
              {t("gravitasi")}
            </Link>
            <Link
              href={`/${locale}/simulasi/gelombang`}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
            >
              {t("gelombang")}
            </Link>
            <Link
              href={`/${locale}/simulasi/matematika`}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
            >
              {t("matematika")}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}