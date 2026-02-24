import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ValuePropositions from "@/components/sections/ValuePropositions";
import CTABanner from "@/components/sections/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import PricingPreview from "@/components/sections/PricingPreview";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import DevicesSection from "@/components/sections/DevicesSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
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
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [ogImage(t("title"), t("description"))],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <main className="min-h-screen bg-white text-brand-coffee overflow-x-hidden">
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Value Propositions (replaces fake trust bar) */}
      <ValuePropositions />

      {/* 3. Pricing Preview */}
      <PricingPreview />

      {/* 4. Feature Highlights */}
      <FeatureHighlights />

      {/* 5. CTA Banner (replaces fake testimonial) */}
      <CTABanner />

      {/* 6. Devices */}
      <DevicesSection />

      {/* 7. Feature Grid */}
      <FeatureGrid />

      <Footer />
    </main>
  );
}
