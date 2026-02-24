"use client";

import { useTranslations } from "next-intl";

export default function FeatureGrid() {
  const t = useTranslations("featureGrid");
  const items = t.raw("items") as string[];

  return (
    <section className="py-24 px-6 bg-brand-light-grey reveal">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-brand-coffee mb-16">
          {t("title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-brand-coffee font-medium"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
