import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { ogImage } from "@/lib/og";

const locales = ["en", "pt", "de", "fr"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.solutions.index" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [ogImage(t("title"), t("description"), "solution")],
    },
  };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutions_index" });

  const types = [0, 1, 2, 3, 4, 5].map((i) => ({
    name: t(`types.${i}.name`),
    slug: t(`types.${i}.slug`),
    emoji: t(`types.${i}.emoji`),
    description: t(`types.${i}.description`),
  }));

  return (
    <main className="min-h-screen bg-white text-brand-coffee">
      <Navbar solid />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center bg-brand-coffee text-white reveal">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type) => (
            <Link
              key={type.slug}
              href={`/${locale}/solutions/${type.slug}`}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange hover:shadow-lg transition-all reveal"
            >
              <div className="text-5xl mb-6">{type.emoji}</div>
              <h2 className="text-2xl font-bold text-brand-coffee mb-3 group-hover:text-brand-orange transition-colors">
                {type.name}
              </h2>
              <p className="text-brand-grey leading-relaxed">
                {type.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
