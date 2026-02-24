"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const localePath = (path: string) => `/${currentLocale}${path}`;

  return (
    <footer className="bg-brand-coffee text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={localePath("")} className="flex items-center mb-6 group">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo-icon.png"
                  alt="miMesa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-2xl font-bold tracking-tighter flex items-center -ml-1 pt-[2px]">
                <span className="text-brand-orange">i</span>
                <span className="text-yellow-400">Mesa</span>
              </div>
            </Link>
            <p className="text-white/60 mb-6">{t("tagline")}</p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/mimesa_ch/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <span className="text-lg" aria-hidden="true">
                &#127464;&#127469;
              </span>
              <span className="text-xs font-semibold text-white/80 tracking-wide">
                {t("swissMade")}
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-6 text-brand-orange">{t("product")}</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link
                  href={localePath("/features")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.features")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/pricing")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/blog")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/solutions")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.solutions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-brand-orange">{t("company")}</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link
                  href={localePath("/about")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/contact")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-6 text-brand-orange">{t("legal")}</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link
                  href={localePath("/privacy")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/terms")}
                  className="hover:text-white transition-colors"
                >
                  {t("links.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Data Protection Notice */}
        <div className="mb-8 p-5 bg-white/5 border border-white/10 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-2xl" aria-hidden="true">
                &#127464;&#127469;
              </span>
              <span className="text-sm font-semibold text-white/90">
                {t("dataNotice.label")}
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              {t("dataNotice.text")}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <p>
            {t("builtBy")}{" "}
            <a
              href="https://lopes2tech.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-amber-400 transition-colors font-medium"
            >
              Lopes2tech
            </a>{" "}
            {t("builtBySuffix")}
          </p>
        </div>
      </div>
    </footer>
  );
}
