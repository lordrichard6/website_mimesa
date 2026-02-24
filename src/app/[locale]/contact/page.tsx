import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
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
  const t = await getTranslations({ locale, namespace: "meta.contact" });
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <main className="min-h-screen bg-white text-brand-coffee">
      <Navbar solid />

      <section className="pt-40 pb-20 px-6 bg-brand-coffee text-white reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-white/80">{t("heroSubtitle")}</p>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  );
}
