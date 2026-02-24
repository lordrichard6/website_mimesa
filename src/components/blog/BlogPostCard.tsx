"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all overflow-hidden"
    >
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
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
        <h3 className="text-lg font-bold text-brand-coffee group-hover:text-brand-orange transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-grey line-clamp-3 mb-4">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{formattedDate}</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Read more */}
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-red-orange group-hover:gap-2 transition-all">
          Read more <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
