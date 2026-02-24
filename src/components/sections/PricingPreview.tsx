"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPreview() {
  const t = useTranslations("pricing");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const localePath = (path: string) => `/${currentLocale}${path}`;

  return (
    <section className="py-24 px-6 bg-brand-light-grey relative reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-brand-orange to-brand-red-orange p-[2px] rounded-full mb-6">
            <div className="bg-white px-6 py-2 rounded-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red-orange">
              {t("badge")}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-brand-grey">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Free */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:border-brand-orange transition-colors">
            <h3 className="text-xl font-bold text-green-600 mb-1">
              {t("free.name")}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{t("free.tagline")}</p>
            <p className="text-4xl font-bold mb-1">{t("free.price")}</p>
            <p className="text-sm text-gray-400 mb-6">{t("free.period")}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw("free.features") as string[]).map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check size={16} className="text-green-500 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.mimesa.ch/signup"
              className="block w-full py-3 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors text-center"
            >
              {t("free.cta")}
            </a>
          </div>

          {/* Starter */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:border-brand-orange transition-colors">
            <h3 className="text-xl font-bold text-brand-coffee mb-1">
              {t("starter.name")}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {t("starter.tagline")}
            </p>
            <p className="text-4xl font-bold mb-1">{t("starter.price")}</p>
            <p className="text-sm text-gray-400 mb-6">{t("starter.period")}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw("starter.features") as string[]).map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check size={16} className="text-brand-coffee shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.mimesa.ch/signup"
              className="block w-full py-3 border-2 border-brand-coffee text-brand-coffee font-bold rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              {t("starter.cta")}
            </a>
          </div>

          {/* Pro */}
          <div className="bg-brand-coffee text-white p-8 rounded-2xl shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              {t("pro.badge")}
            </div>
            <h3 className="text-xl font-bold text-brand-orange mb-1">
              {t("pro.name")}
            </h3>
            <p className="text-sm text-white/50 mb-4">{t("pro.tagline")}</p>
            <p className="text-4xl font-bold mb-1">{t("pro.price")}</p>
            <p className="text-sm text-white/50 mb-6">{t("pro.period")}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw("pro.features") as string[]).map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm"
                >
                  <Check size={16} className="text-brand-orange shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.mimesa.ch/signup"
              className="block w-full py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg text-center"
            >
              {t("pro.cta")}
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:border-brand-orange transition-colors">
            <h3 className="text-xl font-bold text-brand-grey mb-1">
              {t("enterprise.name")}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {t("enterprise.tagline")}
            </p>
            <p className="text-2xl font-bold mb-2 pt-2">
              {t("enterprise.price")}
            </p>
            <p className="text-sm text-gray-400 mb-6">
              {t("enterprise.period")}
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw("enterprise.features") as string[]).map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check size={16} className="text-brand-coffee shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              href={localePath("/contact")}
              className="block w-full py-3 border-2 border-brand-grey text-brand-grey font-bold rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              {t("enterprise.cta")}
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-brand-grey mt-10">
          {t("comparison")}
        </p>
      </div>
    </section>
  );
}
