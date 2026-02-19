"use client";

import { useTranslations } from "next-intl";
import { Check, Clock, MapPin, ChevronRight, Tablet, Smartphone, Laptop } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.split("/")[1] || "en";
    const localePath = (path: string) => `/${currentLocale}${path}`;

    return (
        <main className="min-h-screen bg-white text-brand-coffee overflow-x-hidden">
            <Navbar />

            {/* 1. Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-brand-coffee text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            {t("hero.title")}{" "}
                            <span className="text-brand-orange">{t("hero.titleHighlight")}</span>{" "}
                            {t("hero.titleSuffix")}
                        </h1>
                        <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                            {t("hero.subtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://app.mimesa.ch/signup" className="px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]">
                                {t("hero.cta_primary")}
                            </a>
                            <a href="https://app.mimesa.ch/login" className="px-8 py-4 bg-white/10 text-white text-lg font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-center">
                                {t("hero.cta_secondary")}
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md p-2 md:p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-brand-coffee w-full aspect-[16/10] rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded flex items-center px-3 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="absolute top-16 left-4 w-32 bottom-4 bg-white/5 rounded"></div>
                                <div className="absolute top-16 left-40 right-4 bottom-4 grid grid-cols-3 gap-4 p-4">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors"></div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-coffee via-transparent to-transparent opacity-50"></div>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-brand-orange/20 blur-2xl rounded-full z-0"></div>
                    </div>
                </div>
            </section>

            {/* 2. Trust Bar */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{t("trustBar.label")}</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-black text-gray-400">Le Pavillon</span>
                        <span className="text-2xl font-black text-gray-400">Osteria Roma</span>
                        <span className="text-2xl font-black text-gray-400">Zum Löwen</span>
                        <span className="text-2xl font-black text-gray-400">La Brasserie</span>
                        <span className="text-2xl font-black text-gray-400">Casa Lisboa</span>
                    </div>
                </div>
            </section>

            {/* 3. Pricing */}
            <section className="py-24 px-6 bg-brand-light-grey relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-gradient-to-r from-brand-orange to-brand-red-orange p-[2px] rounded-full mb-6">
                            <div className="bg-white px-6 py-2 rounded-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red-orange">
                                {t("pricing.badge")}
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee mb-4">{t("pricing.title")}</h2>
                        <p className="text-xl text-brand-grey">{t("pricing.subtitle")}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Free */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:border-brand-orange transition-colors">
                            <h3 className="text-xl font-bold text-green-600 mb-1">{t("pricing.free.name")}</h3>
                            <p className="text-sm text-gray-400 mb-4">{t("pricing.free.tagline")}</p>
                            <p className="text-4xl font-bold mb-1">{t("pricing.free.price")}</p>
                            <p className="text-sm text-gray-400 mb-6">{t("pricing.free.period")}</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                {(t.raw("pricing.free.features") as string[]).map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check size={16} className="text-green-500 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="https://app.mimesa.ch/signup" className="block w-full py-3 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors text-center">{t("pricing.free.cta")}</a>
                        </div>

                        {/* Starter */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:border-brand-orange transition-colors">
                            <h3 className="text-xl font-bold text-brand-coffee mb-1">{t("pricing.starter.name")}</h3>
                            <p className="text-sm text-gray-400 mb-4">{t("pricing.starter.tagline")}</p>
                            <p className="text-4xl font-bold mb-1">{t("pricing.starter.price")}</p>
                            <p className="text-sm text-gray-400 mb-6">{t("pricing.starter.period")}</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                {(t.raw("pricing.starter.features") as string[]).map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check size={16} className="text-brand-coffee shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="https://app.mimesa.ch/signup" className="block w-full py-3 border-2 border-brand-coffee text-brand-coffee font-bold rounded-lg hover:bg-gray-50 transition-colors text-center">{t("pricing.starter.cta")}</a>
                        </div>

                        {/* Pro */}
                        <div className="bg-brand-coffee text-white p-8 rounded-2xl shadow-xl flex flex-col relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">{t("pricing.pro.badge")}</div>
                            <h3 className="text-xl font-bold text-brand-orange mb-1">{t("pricing.pro.name")}</h3>
                            <p className="text-sm text-white/50 mb-4">{t("pricing.pro.tagline")}</p>
                            <p className="text-4xl font-bold mb-1">{t("pricing.pro.price")}</p>
                            <p className="text-sm text-white/50 mb-6">{t("pricing.pro.period")}</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                {(t.raw("pricing.pro.features") as string[]).map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <Check size={16} className="text-brand-orange shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="https://app.mimesa.ch/signup" className="block w-full py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg text-center">{t("pricing.pro.cta")}</a>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:border-brand-orange transition-colors">
                            <h3 className="text-xl font-bold text-brand-grey mb-1">{t("pricing.enterprise.name")}</h3>
                            <p className="text-sm text-gray-400 mb-4">{t("pricing.enterprise.tagline")}</p>
                            <p className="text-2xl font-bold mb-2 pt-2">{t("pricing.enterprise.price")}</p>
                            <p className="text-sm text-gray-400 mb-6">{t("pricing.enterprise.period")}</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                {(t.raw("pricing.enterprise.features") as string[]).map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check size={16} className="text-brand-coffee shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href={localePath("/contact")} className="block w-full py-3 border-2 border-brand-grey text-brand-grey font-bold rounded-lg hover:bg-gray-50 transition-colors text-center">{t("pricing.enterprise.cta")}</a>
                        </div>
                    </div>
                    <p className="text-center text-sm text-brand-grey mt-10">{t("pricing.comparison")}</p>
                </div>
            </section>

            {/* 4. Feature 1 */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-brand-coffee mb-6">{t("feature1.title")}</h2>
                        <p className="text-xl text-brand-grey mb-8">{t("feature1.subtitle")}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg border border-red-100">
                            {t("feature1.badge")}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[300px]">
                                <span className="text-9xl text-gray-200 relative">
                                    🖥️
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-2 bg-red-500 rotate-45 rounded-full absolute"></div>
                                        <div className="w-full h-2 bg-red-500 -rotate-45 rounded-full absolute"></div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Testimonial */}
            <section className="py-20 bg-brand-coffee text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="w-20 h-20 bg-brand-orange rounded-full mx-auto mb-6 flex items-center justify-center text-4xl overflow-hidden border-4 border-white/20">👩‍🍳</div>
                    <h3 className="text-3xl font-bold mb-4">{t("testimonial.heading")}</h3>
                    <p className="text-xl text-white/70 italic">&ldquo;{t("testimonial.quote")}&rdquo;</p>
                    <p className="mt-6 font-bold text-brand-orange">- {t("testimonial.author")}</p>
                    <Link href={localePath("/contact")} className="inline-block mt-8 px-8 py-3 bg-brand-orange rounded-lg font-bold hover:bg-yellow-600 transition-colors">
                        {t("testimonial.cta")}
                    </Link>
                </div>
            </section>

            {/* 6. Feature 2 */}
            <section className="py-24 px-6 bg-brand-coffee relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-gray-800 rounded-xl overflow-hidden border border-white/10 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500 origin-bottom-right">
                            <div className="h-8 bg-gray-900 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="aspect-video bg-gray-800 p-4 grid grid-cols-4 gap-4">
                                <div className="col-span-1 bg-white/5 rounded h-full"></div>
                                <div className="col-span-3 bg-white/5 rounded h-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">{t("feature2.title")}</h2>
                        <p className="text-lg text-white/60 mb-8">{t("feature2.subtitle")}</p>
                        <ul className="space-y-6">
                            <FeatureRow title={t("feature2.rows.tables.title")} desc={t("feature2.rows.tables.desc")} icon={<MapPin className="text-brand-orange" />} />
                            <FeatureRow title={t("feature2.rows.guests.title")} desc={t("feature2.rows.guests.desc")} icon={<Check className="text-brand-orange" />} />
                            <FeatureRow title={t("feature2.rows.waitlist.title")} desc={t("feature2.rows.waitlist.desc")} icon={<Clock className="text-brand-orange" />} />
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. Feature 3 CRM */}
            <section className="py-24 px-6 bg-brand-light-grey">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">{t("feature3.label")}</span>
                        <h2 className="text-4xl font-bold text-brand-coffee mb-6">{t("feature3.title")}</h2>
                        <p className="text-xl text-brand-grey mb-8">{t("feature3.subtitle")}</p>
                        <Link href={localePath("/features")} className="text-brand-red-orange font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            {t("feature3.cta")} <ChevronRight size={20} />
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold">M</div>
                                <div>
                                    <p className="font-bold text-brand-coffee">{t("feature3.email.from")}</p>
                                    <p className="text-xs text-gray-400">{t("feature3.email.to")}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-600 font-bold text-lg">{t("feature3.email.subject")}</p>
                                <p className="text-gray-500 text-sm">{t("feature3.email.body")}</p>
                                <div className="bg-gray-50 p-4 rounded text-center">
                                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">{t("feature3.email.idLabel")}</p>
                                    <p className="text-xl font-mono text-brand-coffee">#9823-AB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Video */}
            <section className="py-24 bg-brand-coffee relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">{t("video.title")}</h2>
                    <div className="aspect-video bg-black rounded-2xl shadow-2xl flex items-center justify-center group cursor-pointer border border-white/10 hover:border-brand-orange transition-colors">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Devices */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center max-w-2xl mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee mb-6">{t("devices.title")}</h2>
                        <p className="text-xl text-brand-grey">{t("devices.subtitle")}</p>
                    </div>
                    <div className="flex justify-center items-end gap-8 md:gap-16">
                        <div className="text-center"><Smartphone size={64} className="mx-auto text-brand-grey mb-4" /><p className="font-bold text-brand-coffee">{t("devices.mobile")}</p></div>
                        <div className="text-center"><Tablet size={96} className="mx-auto text-brand-coffee mb-4" /><p className="font-bold text-brand-coffee">{t("devices.tablet")}</p></div>
                        <div className="text-center"><Laptop size={128} className="mx-auto text-brand-grey mb-4" /><p className="font-bold text-brand-coffee">{t("devices.desktop")}</p></div>
                    </div>
                </div>
            </section>

            {/* 10. Feature Grid */}
            <section className="py-24 px-6 bg-brand-light-grey">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-brand-coffee mb-16">{t("featureGrid.title")}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
                        {(t.raw("featureGrid.items") as string[]).map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-brand-coffee font-medium">
                                <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FeatureRow({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
    return (
        <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-lg mt-1 border border-white/5">{icon}</div>
            <div>
                <h3 className="text-xl font-bold text-brand-orange">{title}</h3>
                <p className="text-white/60">{desc}</p>
            </div>
        </div>
    );
}
