import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { ogImage } from "@/lib/og";

const locales = ["en", "pt", "de", "fr"] as const;
const BASE_URL = "https://mimesa.ch";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllSlugs(locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return { title: "Post not found" };

  // Build hreflang alternates — slug exists in all 4 locales
  const altLanguages: Record<string, string> = { "x-default": `${BASE_URL}/en/blog/${slug}` };
  for (const loc of locales) {
    altLanguages[loc] = `${BASE_URL}/${loc}/blog/${slug}`;
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: altLanguages,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [ogImage(post.title, post.description, "blog")],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage(post.title, post.description, "blog").url],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return (
      <>
        <Navbar solid />
        <main className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-bold text-brand-coffee">
            Post not found
          </h1>
        </main>
        <Footer />
      </>
    );
  }

  const html = await markdownToHtml(post.content);

  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "miMesa",
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/${locale}/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/${locale}/blog/${slug}` },
    ],
  };

  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm text-brand-grey hover:text-brand-orange transition-colors mb-8"
            >
              <ArrowLeft size={16} /> {t("backToBlog")}
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-coffee mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-brand-grey mb-10 pb-8 border-b border-gray-200">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Content */}
            <div
              className="prose-content [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-coffee [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-brand-coffee [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-brand-grey [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2 [&_li]:text-brand-grey [&_a]:text-brand-orange [&_a]:hover:underline [&_strong]:text-brand-coffee [&_blockquote]:border-l-4 [&_blockquote]:border-brand-orange/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-brand-grey/80 [&_blockquote]:my-6 [&_pre]:bg-brand-coffee [&_pre]:text-white/80 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6 [&_code]:text-sm [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-brand-red-orange [&_pre_code]:bg-transparent [&_pre_code]:p-0"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
