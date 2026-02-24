import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { getAllPosts } from "@/lib/blog";
import { ogImage } from "@/lib/og";

const locales = ["en", "pt", "de", "fr"] as const;
const BASE_URL = "https://mimesa.ch";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.blog" });
  const altLanguages: Record<string, string> = { "x-default": `${BASE_URL}/en/blog` };
  for (const loc of locales) altLanguages[loc] = `${BASE_URL}/${loc}/blog`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: altLanguages,
      types: {
        "application/rss+xml": `${BASE_URL}/${locale}/blog/feed.xml`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [ogImage(t("title"), t("description"), "blog")],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage(t("title"), t("description"), "blog").url],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts(locale);

  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-brand-coffee to-brand-coffee/90 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-white/60 text-lg">{t("subtitle")}</p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 px-6 bg-brand-light-grey">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-center text-brand-grey py-20">
                {t("noPosts")}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
