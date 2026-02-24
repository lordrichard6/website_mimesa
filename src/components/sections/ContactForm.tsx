"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await sendContactEmail({
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      email: data.get("email") as string,
      restaurant: data.get("restaurant") as string,
      message: data.get("message") as string,
    });

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-20 px-6 reveal">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-brand-coffee mb-6">
            {t("talkTitle")}
          </h2>
          <p className="text-brand-grey mb-12">{t("talkSubtitle")}</p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-coffee">
                  {t("emailLabel")}
                </h3>
                <p className="text-brand-grey">paulo@mimesa.ch</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-coffee">
                  {t("officeLabel")}
                </h3>
                <p className="text-brand-grey">Switzerland</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-coffee mb-2">
                {t("successTitle")}
              </h3>
              <p className="text-brand-grey">{t("successMessage")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("firstNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder={t("firstNamePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("lastNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder={t("lastNamePlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("emailFieldLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="restaurant"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("restaurantLabel")}
                </label>
                <input
                  type="text"
                  id="restaurant"
                  name="restaurant"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  placeholder={t("restaurantPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-brand-coffee text-white font-bold rounded-lg hover:bg-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t("sendingButton")}
                  </>
                ) : (
                  t("sendButton")
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
