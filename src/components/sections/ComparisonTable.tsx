"use client";

import { useTranslations } from "next-intl";
import { Check, X, ArrowRight } from "lucide-react";

type CompetitorKey = "thefork" | "opentable" | "resy";

function FeatureCell({ value }: { value: boolean }) {
  return value ? (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
        <Check size={18} className="text-green-600" />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
        <X size={18} className="text-red-400" />
      </div>
    </div>
  );
}

export default function ComparisonTable({
  competitorKey,
}: {
  competitorKey: CompetitorKey;
}) {
  const t = useTranslations(`compare.${competitorKey}`);
  const shared = useTranslations("compare_shared");

  const featureCount = competitorKey === "thefork" ? 13 : competitorKey === "opentable" ? 13 : 13;

  const features = Array.from({ length: featureCount }, (_, i) => ({
    feature: t(`features.${i}.feature`),
    mimesa: t(`features.${i}.mimesa`) === "true",
    competitor: t(`features.${i}.competitor`) === "true",
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 px-6 bg-brand-coffee text-white overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-brand-grey font-semibold text-sm uppercase tracking-wider border-b-2 border-gray-200">
                    {shared("feature")}
                  </th>
                  <th className="p-4 text-center font-bold text-lg border-b-2 border-brand-orange min-w-[120px]">
                    <span className="text-brand-orange">{shared("mimesa")}</span>
                  </th>
                  <th className="p-4 text-center font-bold text-lg text-brand-grey border-b-2 border-gray-200 min-w-[120px]">
                    {t("competitorName")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-orange-50/50 transition-colors`}
                  >
                    <td className="p-4 text-brand-coffee font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4">
                      <FeatureCell value={row.mimesa} />
                    </td>
                    <td className="p-4">
                      <FeatureCell value={row.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-24 px-6 bg-gray-50 reveal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-coffee mb-8">
            {shared("verdict")}
          </h2>
          <p className="text-lg text-brand-grey leading-relaxed mb-10">
            {t("verdict")}
          </p>
          <a
            href="https://app.mimesa.ch/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]"
          >
            {shared("switchCta")} <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
