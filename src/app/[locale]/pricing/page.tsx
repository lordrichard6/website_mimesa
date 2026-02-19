
"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

export default function PricingPage() {
    const t = useTranslations("pricingPage");

    const freeFeatures = t.raw("free.features") as string[];
    const starterFeatures = t.raw("starter.features") as string[];
    const proFeatures = t.raw("pro.features") as string[];
    const enterpriseFeatures = t.raw("enterprise.features") as string[];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-40 pb-24 px-6 text-center bg-brand-light-grey">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-coffee mb-6">{t("heroTitle")}</h1>
                <p className="text-xl text-brand-grey mb-12">{t("heroSubtitle")}</p>
            </section>

            <section className="pb-24 px-6 -mt-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Free */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col">
                        <div>
                            <h3 className="text-xl font-bold text-brand-coffee">{t("free.name")}</h3>
                            <p className="text-sm text-gray-400 mt-2">{t("free.tagline")}</p>
                            <div className="my-6">
                                <span className="text-4xl font-bold text-brand-coffee">{t("free.price")}</span>
                                <span className="text-gray-400 text-sm ml-1">{t("free.period")}</span>
                            </div>
                        </div>
                        <a
                            href="https://app.mimesa.ch/signup"
                            className="block w-full py-3 bg-gray-100 text-brand-coffee font-bold rounded-lg text-center hover:bg-gray-200 transition-colors"
                        >
                            {t("getStarted")}
                        </a>
                        <ul className="mt-8 space-y-4 flex-1">
                            {freeFeatures.map((feature: string, i: number) => (
                                <FeatureItem key={i} text={feature} />
                            ))}
                        </ul>
                    </div>

                    {/* Starter */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col">
                        <div>
                            <h3 className="text-xl font-bold text-brand-coffee">{t("starter.name")}</h3>
                            <p className="text-sm text-gray-400 mt-2">{t("starter.tagline")}</p>
                            <div className="my-6">
                                <span className="text-4xl font-bold text-brand-coffee">{t("starter.price")}</span>
                                <span className="text-gray-400 text-sm ml-1">{t("starter.period")}</span>
                            </div>
                        </div>
                        <a
                            href="https://app.mimesa.ch/signup"
                            className="block w-full py-3 bg-gray-100 text-brand-coffee font-bold rounded-lg text-center hover:bg-gray-200 transition-colors"
                        >
                            {t("startTrial")}
                        </a>
                        <ul className="mt-8 space-y-4 flex-1">
                            {starterFeatures.map((feature: string, i: number) => (
                                <FeatureItem key={i} text={feature} />
                            ))}
                        </ul>
                    </div>

                    {/* Pro (Highlighted) */}
                    <div className="bg-brand-coffee text-white rounded-2xl p-8 shadow-2xl border border-brand-coffee relative flex flex-col md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-brand-orange text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl text-white">
                            {t("popularBadge")}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{t("pro.name")}</h3>
                            <p className="text-sm text-white/60 mt-2">{t("pro.tagline")}</p>
                            <div className="my-6">
                                <span className="text-4xl font-bold">{t("pro.price")}</span>
                                <span className="text-white/60 text-sm ml-1">{t("pro.period")}</span>
                            </div>
                        </div>
                        <a
                            href="https://app.mimesa.ch/signup"
                            className="block w-full py-3 bg-brand-orange text-white font-bold rounded-lg text-center hover:bg-yellow-600 transition-colors shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]"
                        >
                            {t("startTrial")}
                        </a>
                        <ul className="mt-8 space-y-4 flex-1">
                            {proFeatures.map((feature: string, i: number) => (
                                <FeatureItem key={i} text={feature} inverted />
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col">
                        <div>
                            <h3 className="text-xl font-bold text-brand-coffee">{t("enterprise.name")}</h3>
                            <p className="text-sm text-gray-400 mt-2">{t("enterprise.tagline")}</p>
                            <div className="my-6">
                                <span className="text-3xl font-bold text-brand-coffee">{t("enterprise.price")}</span>
                                <span className="block text-gray-400 text-sm mt-1">{t("enterprise.period")}</span>
                            </div>
                        </div>
                        <a
                            href="https://app.mimesa.ch/signup"
                            className="block w-full py-3 bg-white border-2 border-brand-coffee text-brand-coffee font-bold rounded-lg text-center hover:bg-gray-50 transition-colors"
                        >
                            {t("contactSales")}
                        </a>
                        <ul className="mt-8 space-y-4 flex-1">
                            {enterpriseFeatures.map((feature: string, i: number) => (
                                <FeatureItem key={i} text={feature} />
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Comparison note */}
                <p className="text-center text-sm text-brand-grey mt-12 max-w-2xl mx-auto">
                    {t("comparison")}
                </p>
            </section>

            <Footer />
        </main>
    );
}

function FeatureItem({ text, inverted = false }: { text: string, inverted?: boolean }) {
    return (
        <li className={`flex items-center gap-3 text-sm ${inverted ? "text-white/80" : "text-gray-600"}`}>
            <Check size={18} className={inverted ? "text-brand-orange shrink-0" : "text-green-500 shrink-0"} />
            <span>{text}</span>
        </li>
    );
}
