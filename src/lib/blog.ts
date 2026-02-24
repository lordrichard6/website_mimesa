import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export function getAllPosts(locale: string): BlogPostMeta[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        author: data.author ?? "miMesa",
        tags: data.tags ?? [],
        readingTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(
  slug: string,
  locale: string
): BlogPost | null {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "miMesa",
    tags: data.tags ?? [],
    readingTime: stats.text,
    content,
  };
}

export function getAllSlugs(locale: string): string[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllTags(locale: string): string[] {
  const posts = getAllPosts(locale);
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
