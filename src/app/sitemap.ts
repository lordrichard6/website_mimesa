import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import fs from "fs";
import path from "path";

const BASE_URL = "https://mimesa.ch";
const locales = ["en", "de", "fr", "pt"] as const;

const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/solutions/fine-dining",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/solutions/casual-dining",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/solutions/cafe-bistro",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/solutions/bar-lounge",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/solutions/hotel-restaurant",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/solutions/catering",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/compare/mimesa-vs-thefork",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/compare/mimesa-vs-opentable",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/compare/mimesa-vs-resy",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages x locales
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: "2026-02-24",
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // Dynamic blog posts x locales — use real file mtime for lastModified
  const contentDir = path.join(process.cwd(), "content", "blog");
  for (const locale of locales) {
    const slugs = getAllSlugs(locale);
    for (const slug of slugs) {
      const filePath = path.join(contentDir, locale, `${slug}.mdx`);
      const mtime = fs.existsSync(filePath)
        ? fs.statSync(filePath).mtime
        : new Date("2026-02-24");
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: mtime,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return entries;
}
