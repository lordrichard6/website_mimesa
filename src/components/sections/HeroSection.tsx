"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-brand-coffee text-white overflow-hidden reveal">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("title")}{" "}
            <span className="text-brand-orange">{t("titleHighlight")}</span>{" "}
            {t("titleSuffix")}
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://app.mimesa.ch/signup"
              className="px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px] text-center"
            >
              {t("cta_primary")}
            </a>
            <a
              href="https://app.mimesa.ch/login"
              className="px-8 py-4 bg-white/10 text-white text-lg font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-center"
            >
              {t("cta_secondary")}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md p-2 md:p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-brand-coffee w-full aspect-[16/10] rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden group">
              <div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="absolute top-16 left-4 w-32 bottom-4 bg-white/5 rounded" />
              <div className="absolute top-16 left-40 right-4 bottom-4 grid grid-cols-3 gap-4 p-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors"
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-coffee via-transparent to-transparent opacity-50" />
            </div>
          </div>
          <div className="absolute -inset-4 bg-brand-orange/20 blur-2xl rounded-full z-0" />
        </div>
      </div>
    </section>
  );
}
