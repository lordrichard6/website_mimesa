"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-24 overflow-hidden reveal">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2F2519 0%, #4a3828 50%, #2F2519 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 translate-y-1/2 -translate-x-1/4 pointer-events-none"
        style={{ background: "radial-gradient(circle, #EA580C 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <a
          href="https://app.mimesa.ch/signup"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]"
        >
          {t("button")} <ArrowRight size={20} />
        </a>
        <p className="text-sm text-white/30 mt-4">{t("note")}</p>
      </div>
    </section>
  );
}
