import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
    const t = useTranslations("about");

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-40 pb-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-brand-coffee mb-8">
                    {t("heroTitle")} <span className="text-brand-orange italic">{t("heroHighlight")}</span>{t("heroSuffix")}
                </h1>
                <p className="text-xl text-brand-grey max-w-2xl mx-auto">{t("heroSubtitle")}</p>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] md:h-[500px] bg-brand-coffee rounded-2xl overflow-hidden flex items-center justify-center">
                        <div className="text-center p-8">
                            <div className="text-8xl mb-4">🍽️</div>
                            <div className="text-2xl font-bold tracking-tighter flex items-center justify-center">
                                <span className="text-brand-orange text-3xl">i</span>
                                <span className="text-yellow-400 text-3xl">Mesa</span>
                            </div>
                            <p className="text-white/40 text-sm mt-2">Switzerland 🇨🇭</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-brand-coffee mb-6">{t("storyTitle")}</h2>
                        <div className="space-y-4 text-brand-grey text-lg">
                            <p>{t("story1")}</p>
                            <p>{t("story2")}</p>
                            <p>{t("story3")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-brand-coffee text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t("valuesTitle")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-brand-orange">{t("value1Title")}</h3>
                            <p className="text-white/80">{t("value1Desc")}</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-brand-orange">{t("value2Title")}</h3>
                            <p className="text-white/80">{t("value2Desc")}</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-brand-orange">{t("value3Title")}</h3>
                            <p className="text-white/80">{t("value3Desc")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
