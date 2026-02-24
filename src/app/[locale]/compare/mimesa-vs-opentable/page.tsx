import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CTABanner from "@/components/sections/CTABanner";
import { ogImage } from "@/lib/og";

const locales = ["en", "pt", "de", "fr"] as const;
const BASE_URL = "https://mimesa.ch";
const PATH = "/compare/mimesa-vs-opentable";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.compare.opentable" });
  const altLanguages: Record<string, string> = { "x-default": `${BASE_URL}/en${PATH}` };
  for (const loc of locales) altLanguages[loc] = `${BASE_URL}/${loc}${PATH}`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${BASE_URL}/${locale}${PATH}`, languages: altLanguages },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [ogImage(t("title"), t("description"), "compare")],
    },
  };
}

export default async function MimesaVsOpenTablePage() {
  return (
    <main className="min-h-screen bg-white text-brand-coffee">
      <Navbar solid />
      <ComparisonTable competitorKey="opentable" />
      <CTABanner />
      <Footer />
    </main>
  );
}
