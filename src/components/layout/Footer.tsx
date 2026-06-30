"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || "id";

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                G
              </div>
              <span className="font-semibold text-white">Gemar Belajar</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("tentang")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-3">
              {tn("simulasi")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/simulasi/tata-surya`}
                  className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {tn("tataSurya")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/simulasi/gravitasi`}
                  className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {tn("gravitasi")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/simulasi/gelombang`}
                  className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {tn("gelombang")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/simulasi/matematika`}
                  className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {tn("matematika")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Source Code */}
          <div>
            <h3 className="font-semibold text-white mb-3">
              {t("sourceCode")}
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Proyek ini open source. Kontribusi sangat dipersilakan!
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm text-slate-300 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>{t("credit")}</p>
        </div>
      </div>
    </footer>
  );
}