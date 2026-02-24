"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Check, Clock, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

function FeatureRow({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/10 p-3 rounded-lg mt-1 border border-white/5">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-orange">{title}</h3>
        <p className="text-white/60">{desc}</p>
      </div>
    </div>
  );
}

export default function FeatureHighlights() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const localePath = (path: string) => `/${currentLocale}${path}`;

  return (
    <>
      {/* Feature 1: No dedicated hardware */}
      <section className="py-24 px-6 bg-white overflow-hidden reveal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-brand-coffee mb-6">
              {t("feature1.title")}
            </h2>
            <p className="text-xl text-brand-grey mb-8">
              {t("feature1.subtitle")}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg border border-red-100">
              {t("feature1.badge")}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[300px]">
                <span className="text-9xl text-gray-200 relative">
                  <span role="img" aria-label="computer">
                    &#128421;&#65039;
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-2 bg-red-500 rotate-45 rounded-full absolute" />
                    <div className="w-full h-2 bg-red-500 -rotate-45 rounded-full absolute" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Real-time sync */}
      <section className="py-24 px-6 bg-brand-coffee relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-white/10 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500 origin-bottom-right">
              <div className="h-8 bg-gray-900 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="aspect-video bg-gray-800 p-4 grid grid-cols-4 gap-4">
                <div className="col-span-1 bg-white/5 rounded h-full" />
                <div className="col-span-3 bg-white/5 rounded h-full" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {t("feature2.title")}
            </h2>
            <p className="text-lg text-white/60 mb-8">
              {t("feature2.subtitle")}
            </p>
            <ul className="space-y-6">
              <FeatureRow
                title={t("feature2.rows.tables.title")}
                desc={t("feature2.rows.tables.desc")}
                icon={<MapPin className="text-brand-orange" />}
              />
              <FeatureRow
                title={t("feature2.rows.guests.title")}
                desc={t("feature2.rows.guests.desc")}
                icon={<Check className="text-brand-orange" />}
              />
              <FeatureRow
                title={t("feature2.rows.waitlist.title")}
                desc={t("feature2.rows.waitlist.desc")}
                icon={<Clock className="text-brand-orange" />}
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 3: CRM */}
      <section className="py-24 px-6 bg-brand-light-grey reveal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">
              {t("feature3.label")}
            </span>
            <h2 className="text-4xl font-bold text-brand-coffee mb-6">
              {t("feature3.title")}
            </h2>
            <p className="text-xl text-brand-grey mb-8">
              {t("feature3.subtitle")}
            </p>
            <Link
              href={localePath("/features")}
              className="text-brand-red-orange font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              {t("feature3.cta")} <ChevronRight size={20} />
            </Link>
          </div>
          <div className="flex-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-bold text-brand-coffee">
                    {t("feature3.email.from")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t("feature3.email.to")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 font-bold text-lg">
                  {t("feature3.email.subject")}
                </p>
                <p className="text-gray-500 text-sm">
                  {t("feature3.email.body")}
                </p>
                <div className="bg-gray-50 p-4 rounded text-center">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                    {t("feature3.email.idLabel")}
                  </p>
                  <p className="text-xl font-mono text-brand-coffee">
                    #9823-AB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
