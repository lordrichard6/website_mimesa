
"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Layout, Users, Smartphone, Clock, TrendingUp } from "lucide-react";

export default function FeaturesPage() {
    const t = useTranslations("featuresPage");

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 text-center bg-brand-coffee text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        {t("heroTitle")} <span className="text-brand-orange">{t("heroHighlight")}</span>{t("heroSuffix")}
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {t("heroSubtitle")}
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <FeatureCard
                        icon={<Layout className="text-brand-orange" size={32} />}
                        title={t("card1Title")}
                        description={t("card1Desc")}
                    />
                    <FeatureCard
                        icon={<Calendar className="text-brand-orange" size={32} />}
                        title={t("card2Title")}
                        description={t("card2Desc")}
                    />
                    <FeatureCard
                        icon={<Users className="text-brand-orange" size={32} />}
                        title={t("card3Title")}
                        description={t("card3Desc")}
                    />
                    <FeatureCard
                        icon={<Smartphone className="text-brand-orange" size={32} />}
                        title={t("card4Title")}
                        description={t("card4Desc")}
                    />
                    <FeatureCard
                        icon={<Clock className="text-brand-orange" size={32} />}
                        title={t("card5Title")}
                        description={t("card5Desc")}
                    />
                    <FeatureCard
                        icon={<TrendingUp className="text-brand-orange" size={32} />}
                        title={t("card6Title")}
                        description={t("card6Desc")}
                    />
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                    <div className="text-center max-w-3xl">
                        <h2 className="text-3xl font-bold text-brand-coffee mb-4">{t("speedTitle")}</h2>
                        <p className="text-brand-grey">{t("speedDesc")}</p>
                    </div>

                    {/* Mock UI for Table Planner */}
                    <div className="w-full aspect-[16/9] bg-white rounded-xl shadow-xl border border-gray-200 flex items-center justify-center p-8">
                        <div className="text-gray-300 font-bold text-2xl flex flex-col items-center gap-4">
                            <Layout size={64} />
                            <span>{t("mockupLabel")}</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange transition-colors">
            <div className="mb-6 p-4 bg-orange-50 rounded-xl inline-block">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-brand-coffee mb-4">{title}</h3>
            <p className="text-brand-grey leading-relaxed">{description}</p>
        </div>
    );
}
