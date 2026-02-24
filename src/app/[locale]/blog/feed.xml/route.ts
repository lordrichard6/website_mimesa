import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://mimesa.ch";

const SITE_META: Record<string, { title: string; description: string; language: string }> = {
  en: {
    title: "miMesa Blog — Restaurant Management Insights",
    description:
      "Tips, guides, and insights for restaurant owners on reservations, guest management, and growing your business.",
    language: "en-US",
  },
  de: {
    title: "miMesa Blog — Einblicke für Restaurantbetreiber",
    description:
      "Tipps, Anleitungen und Einblicke für Restaurantbetreiber zu Reservierungen, Gästemanagement und Wachstum.",
    language: "de-CH",
  },
  fr: {
    title: "miMesa Blog — Conseils pour les restaurateurs",
    description:
      "Conseils, guides et insights pour les restaurateurs sur les réservations, la gestion des clients et la croissance.",
    language: "fr-CH",
  },
  pt: {
    title: "miMesa Blog — Insights para Restaurantes",
    description:
      "Dicas, guias e insights para donos de restaurantes sobre reservas, gestão de clientes e crescimento do negócio.",
    language: "pt-PT",
  },
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const meta = SITE_META[locale] ?? SITE_META.en;
  const posts = getAllPosts(locale);
  const feedUrl = `${BASE_URL}/${locale}/blog/feed.xml`;
  const blogUrl = `${BASE_URL}/${locale}/blog`;

  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const postUrl = `${BASE_URL}/${locale}/blog/${post.slug}`;
      const tagsXml = post.tags
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join("\n        ");

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>hello@mimesa.ch (${escapeXml(post.author)})</author>
      ${tagsXml}
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(meta.title)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(meta.description)}</description>
    <language>${meta.language}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>miMesa / Next.js</generator>
    <image>
      <url>${BASE_URL}/icon.png</url>
      <title>${escapeXml(meta.title)}</title>
      <link>${blogUrl}</link>
    </image>${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
