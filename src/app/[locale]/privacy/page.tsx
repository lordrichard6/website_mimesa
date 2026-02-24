import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  const t = await getTranslations({ locale, namespace: "meta.privacy" });
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

type Section = {
  heading: string;
  content: string;
  list?: string[];
  afterList?: string;
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy_page" });
  const sections = t.raw("sections") as Section[];

  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-coffee mb-2">
              {t("title")}
            </h1>
            <p className="text-sm text-brand-grey mb-12">
              {t("lastUpdated")}
            </p>

            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-brand-coffee mb-3">
                    {section.heading}
                  </h2>
                  {section.content.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-brand-grey leading-relaxed mb-3"
                      dangerouslySetInnerHTML={{
                        __html: para
                          .replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong class='text-brand-coffee'>$1</strong>"
                          )
                          .replace(
                            /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
                            '<a href="mailto:$1" class="text-brand-orange hover:underline">$1</a>'
                          ),
                      }}
                    />
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-1 text-brand-grey mb-3">
                      {section.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.afterList && (
                    <p className="text-brand-grey leading-relaxed">
                      {section.afterList}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
