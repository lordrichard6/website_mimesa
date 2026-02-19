
"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const t = useTranslations("contact");

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-40 pb-20 px-6 bg-brand-coffee text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("heroTitle")}</h1>
                    <p className="text-xl text-white/80">{t("heroSubtitle")}</p>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-coffee mb-6">{t("talkTitle")}</h2>
                        <p className="text-brand-grey mb-12">{t("talkSubtitle")}</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-coffee">{t("emailLabel")}</h3>
                                    <p className="text-brand-grey">hello@mimesa.ch</p>
                                    <p className="text-brand-grey">support@mimesa.ch</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-coffee">{t("officeLabel")}</h3>
                                    <p className="text-brand-grey">Switzerland</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-coffee">{t("phoneLabel")}</h3>
                                    <p className="text-brand-grey">+41 00 000 00 00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">{t("firstNameLabel")}</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">{t("lastNameLabel")}</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t("emailFieldLabel")}</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="john@restaurant.com" />
                            </div>

                            <div>
                                <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-2">{t("restaurantLabel")}</label>
                                <input type="text" id="restaurant" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Le Petit Bistro" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t("messageLabel")}</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder={t("messagePlaceholder")}></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-brand-coffee text-white font-bold rounded-lg hover:bg-black transition-colors">
                                {t("sendButton")}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
