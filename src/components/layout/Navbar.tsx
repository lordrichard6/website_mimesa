
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const LOCALES = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "pt", label: "PT", flag: "🇵🇹" },
    { code: "de", label: "DE", flag: "🇩🇪" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    const t = useTranslations("nav");
    const router = useRouter();
    const pathname = usePathname();

    // Determine current locale from the pathname (e.g. /en/features → "en")
    const currentLocale = pathname.split("/")[1] || "en";
    const currentLangMeta = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close lang dropdown on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const switchLocale = (newLocale: string) => {
        // Replace /currentLocale/ with /newLocale/ at the start of the path
        const segments = pathname.split("/");
        segments[1] = newLocale;
        const newPath = segments.join("/") || `/${newLocale}`;
        setLangOpen(false);
        router.push(newPath);
    };

    // Helper: build a locale-prefixed href
    const localePath = (path: string) => `/${currentLocale}${path}`;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-brand-coffee/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
                {/* Logo */}
                <Link href={localePath("")} className="flex items-center group">
                    <div className="relative h-10 w-10">
                        <Image src="/logo-icon.png" alt="miMesa Logo" fill className="object-contain" />
                    </div>
                    <div className="text-2xl font-bold tracking-tighter flex items-center -ml-1 pt-[1px]">
                        <span className="text-brand-orange">i</span>
                        <span className="text-yellow-400">Mesa</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <Link href={localePath("/features")} className="hover:text-brand-orange transition-colors">{t("features")}</Link>
                    <Link href={localePath("/pricing")} className="hover:text-brand-orange transition-colors">{t("pricing")}</Link>
                    <Link href={localePath("/about")} className="hover:text-brand-orange transition-colors">{t("about")}</Link>
                    <Link href={localePath("/contact")} className="hover:text-brand-orange transition-colors">{t("contact")}</Link>
                </div>

                {/* Auth Buttons + Language Switcher */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/10"
                            aria-label="Switch language"
                        >
                            <span>{currentLangMeta.flag}</span>
                            <span>{currentLangMeta.label}</span>
                            <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
                        </button>
                        {langOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-brand-coffee border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                                {LOCALES.map((loc) => (
                                    <button
                                        key={loc.code}
                                        onClick={() => switchLocale(loc.code)}
                                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors ${
                                            currentLocale === loc.code
                                                ? "text-brand-orange font-bold"
                                                : "text-white/80"
                                        }`}
                                    >
                                        <span>{loc.flag}</span>
                                        <span>{loc.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <a href="https://app.mimesa.ch/login" className="text-white hover:text-white/80 font-medium">
                        {t("login")}
                    </a>
                    <a
                        href="https://app.mimesa.ch/signup"
                        className="px-5 py-2.5 bg-brand-orange text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]"
                    >
                        {t("start")}
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white sm:mr-3"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-brand-coffee border-t border-white/10 md:hidden p-6 flex flex-col gap-6 shadow-2xl">
                    <Link href={localePath("/features")} className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>{t("features")}</Link>
                    <Link href={localePath("/pricing")} className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>{t("pricing")}</Link>
                    <Link href={localePath("/about")} className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>{t("about")}</Link>
                    <Link href={localePath("/contact")} className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>{t("contact")}</Link>
                    <hr className="border-white/10" />
                    {/* Language switcher row */}
                    <div className="flex items-center gap-3 flex-wrap">
                        {LOCALES.map((loc) => (
                            <button
                                key={loc.code}
                                onClick={() => { switchLocale(loc.code); setMobileMenuOpen(false); }}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                    currentLocale === loc.code
                                        ? "bg-brand-orange text-white"
                                        : "bg-white/10 text-white/80 hover:bg-white/20"
                                }`}
                            >
                                <span>{loc.flag}</span>
                                <span>{loc.label}</span>
                            </button>
                        ))}
                    </div>
                    <hr className="border-white/10" />
                    <a href="https://app.mimesa.ch/login" className="text-lg text-white hover:text-white/80" onClick={() => setMobileMenuOpen(false)}>{t("login")}</a>
                    <a
                        href="https://app.mimesa.ch/signup"
                        className="px-5 py-3 bg-brand-orange text-white font-bold rounded-lg text-center hover:bg-yellow-600 shadow-[0_4px_0_0_rgba(180,83,9,1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {t("start")}
                    </a>
                </div>
            )}
        </nav>
    );
}
