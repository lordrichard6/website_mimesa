"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Home, BookOpen, Layers } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  const t = useTranslations("notFound");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <main className="min-h-screen bg-white text-brand-coffee">
      <Navbar solid />
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[8rem] sm:text-[10rem] font-black leading-none mb-4 bg-gradient-to-br from-brand-orange to-brand-red-orange bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-coffee mb-4">
            {t("title")}
          </h2>
          <p className="text-brand-grey text-lg mb-10">{t("description")}</p>

          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px] mb-10"
          >
            <ArrowLeft size={18} /> {t("backHome")}
          </Link>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-brand-grey mb-4 font-medium">
              {t("helpfulLinks")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                <Home size={16} /> {t("linkHome")}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                <BookOpen size={16} /> {t("linkBlog")}
              </Link>
              <Link
                href={`/${locale}/solutions`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                <Layers size={16} /> {t("linkSolutions")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
