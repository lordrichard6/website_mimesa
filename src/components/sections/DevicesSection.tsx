"use client";

import { useTranslations } from "next-intl";
import { Smartphone, Tablet, Laptop } from "lucide-react";

export default function DevicesSection() {
  const t = useTranslations("devices");

  return (
    <section className="py-24 px-6 bg-white reveal">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-brand-grey">{t("subtitle")}</p>
        </div>
        <div className="flex justify-center items-end gap-8 md:gap-16">
          <div className="text-center">
            <Smartphone size={64} className="mx-auto text-brand-grey mb-4" />
            <p className="font-bold text-brand-coffee">{t("mobile")}</p>
          </div>
          <div className="text-center">
            <Tablet size={96} className="mx-auto text-brand-coffee mb-4" />
            <p className="font-bold text-brand-coffee">{t("tablet")}</p>
          </div>
          <div className="text-center">
            <Laptop size={128} className="mx-auto text-brand-grey mb-4" />
            <p className="font-bold text-brand-coffee">{t("desktop")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
