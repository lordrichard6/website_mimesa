"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import {
  Star,
  Layout,
  TrendingUp,
  Clock,
  Heart,
  Users,
  Coffee,
  Sun,
  Moon,
  ClipboardList,
  MapPin,
  Calendar,
  Truck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://mimesa.ch";

type SolutionKey =
  | "fine-dining"
  | "casual-dining"
  | "cafe-bistro"
  | "bar-lounge"
  | "hotel-restaurant"
  | "catering";

const slugToNamespace: Record<SolutionKey, string> = {
  "fine-dining": "fineDining",
  "casual-dining": "casualDining",
  "cafe-bistro": "cafeBistro",
  "bar-lounge": "barLounge",
  "hotel-restaurant": "hotelRestaurant",
  catering: "catering",
};

const iconMap: Record<string, React.ReactNode> = {
  star: <Star className="text-brand-orange" size={28} />,
  layout: <Layout className="text-brand-orange" size={28} />,
  trending: <TrendingUp className="text-brand-orange" size={28} />,
  clock: <Clock className="text-brand-orange" size={28} />,
  heart: <Heart className="text-brand-orange" size={28} />,
  users: <Users className="text-brand-orange" size={28} />,
  coffee: <Coffee className="text-brand-orange" size={28} />,
  sun: <Sun className="text-brand-orange" size={28} />,
  moon: <Moon className="text-brand-orange" size={28} />,
  clipboard: <ClipboardList className="text-brand-orange" size={28} />,
  map: <MapPin className="text-brand-orange" size={28} />,
  calendar: <Calendar className="text-brand-orange" size={28} />,
  truck: <Truck className="text-brand-orange" size={28} />,
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-brand-coffee pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-brand-grey flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-brand-grey leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function SolutionsHero({
  solutionKey,
}: {
  solutionKey: SolutionKey;
}) {
  const ns = slugToNamespace[solutionKey];
  const t = useTranslations(`solutions.${ns}`);
  const shared = useTranslations("solutionPage");
  const locale = useLocale();

  const features = [0, 1, 2].map((i) => ({
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
  }));

  const spotlights = [0, 1, 2].map((i) => ({
    title: t(`spotlights.${i}.title`),
    description: t(`spotlights.${i}.description`),
    icon: t(`spotlights.${i}.icon`),
  }));

  const faqs = [0, 1, 2].map((i) => ({
    question: t(`faqs.${i}.question`),
    answer: t(`faqs.${i}.answer`),
  }));

  const crmFeatures = [0, 1, 2, 3, 4, 5].map((i) => ({
    title: shared(`crmFeatures.${i}.title`),
    description: shared(`crmFeatures.${i}.description`),
  }));

  const steps = [0, 1, 2].map((i) => ({
    title: shared(`steps.${i}.title`),
    description: shared(`steps.${i}.description`),
  }));

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("heroTitle"),
    description: t("heroSubtitle"),
    provider: {
      "@type": "Organization",
      name: "miMesa",
      url: BASE_URL,
    },
    serviceType: "Restaurant Reservation Software",
    areaServed: "CH",
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${BASE_URL}/${locale}` },
          {
            name: shared("heroBadge"),
            url: `${BASE_URL}/${locale}/solutions`,
          },
          {
            name: t("heroTitle"),
            url: `${BASE_URL}/${locale}/solutions/${solutionKey}`,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 px-6 bg-brand-coffee text-white overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/20 text-brand-orange text-sm font-semibold rounded-full mb-6">
            {shared("heroBadge")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            {t("heroSubtitle")}
          </p>
          <a
            href="https://app.mimesa.ch/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]"
          >
            {shared("steps.0.title")} <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* CRM Capabilities Grid */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-brand-orange text-sm font-semibold rounded-full mb-4">
              {shared("crmBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-coffee">
              {shared("crmTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange transition-colors reveal"
              >
                <h3 className="text-xl font-bold text-brand-coffee mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlights */}
      <section className="py-24 px-6 bg-gray-50 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlights.map((spotlight, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal"
              >
                <div className="mb-6 p-4 bg-orange-50 rounded-xl inline-block">
                  {iconMap[spotlight.icon] || (
                    <Star className="text-brand-orange" size={28} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-brand-coffee mb-3">
                  {spotlight.title}
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  {spotlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl bg-brand-coffee text-white reveal"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-brand-orange">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50 reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-coffee text-center mb-16">
            {shared("howItWorksTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center reveal">
                <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-coffee mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-coffee text-center mb-12">
            {shared("faqTitle")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
