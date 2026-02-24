import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const BASE_URL = "https://mimesa.ch";

const localeMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    en: {
        title: "miMesa — Commission-Free Restaurant Reservations | Switzerland",
        description:
            "miMesa is the all-in-one restaurant management platform. Handle reservations, tables, and guest CRM with no third-party commissions. Built for modern Swiss restaurants.",
        keywords: [
            "restaurant reservation system",
            "table management software",
            "guest CRM",
            "no commission booking",
            "restaurant software Switzerland",
            "online booking system",
        ],
    },
    de: {
        title: "miMesa — Reservierungssystem ohne Kommissionen | Schweiz",
        description:
            "miMesa ist die All-in-One-Plattform für modernes Restaurantmanagement. Reservierungen, Tischverwaltung und Gäste-CRM — ohne Drittanbieter-Kommissionen.",
        keywords: [
            "Reservierungssystem Restaurant",
            "Tischverwaltung",
            "Gäste CRM",
            "Restaurant Software Schweiz",
            "Online Buchungssystem",
            "ohne Kommission",
        ],
    },
    fr: {
        title: "miMesa — Réservations restaurant sans commission | Suisse",
        description:
            "miMesa est la plateforme tout-en-un pour la gestion des restaurants modernes. Gérez réservations, tables et CRM invités — sans commissions.",
        keywords: [
            "système de réservation restaurant",
            "gestion des tables",
            "CRM invités",
            "logiciel restaurant Suisse",
            "réservation en ligne",
            "sans commission",
        ],
    },
    pt: {
        title: "miMesa — Reservas de Restaurante sem Comissão | Suíça",
        description:
            "miMesa é a plataforma tudo-em-um para gestão de restaurantes modernos. Gerencie reservas, mesas e CRM de clientes — sem comissões de terceiros.",
        keywords: [
            "sistema de reservas restaurante",
            "gestão de mesas",
            "CRM clientes",
            "software restaurante Suíça",
            "sistema de reservas online",
            "sem comissão",
        ],
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const lm = localeMetadata[locale] ?? localeMetadata.en;

    return {
        title: {
            default: lm.title,
            template: "%s | miMesa",
        },
        description: lm.description,
        keywords: lm.keywords,
        authors: [{ name: "miMesa" }],
        creator: "miMesa",
        publisher: "miMesa",
        icons: { icon: "/icon.png" },
        metadataBase: new URL(BASE_URL),
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title: lm.title,
            description: lm.description,
            url: `${BASE_URL}/${locale}`,
            siteName: "miMesa",
            locale,
            images: [{ url: `${BASE_URL}/api/og?title=${encodeURIComponent(lm.title)}&subtitle=${encodeURIComponent(lm.description)}&type=default`, width: 1200, height: 630, alt: "miMesa — Restaurant Management Platform" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: lm.title,
            description: lm.description,
            images: [`${BASE_URL}/api/og?title=${encodeURIComponent(lm.title)}&subtitle=${encodeURIComponent(lm.description)}&type=default`],
        },
        alternates: {
            canonical: `${BASE_URL}/${locale}`,
            languages: {
                "x-default": `${BASE_URL}/en`,
                en: `${BASE_URL}/en`,
                de: `${BASE_URL}/de`,
                fr: `${BASE_URL}/fr`,
                pt: `${BASE_URL}/pt`,
            },
        },
    };
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${BASE_URL}/#organization`,
            name: "miMesa",
            url: BASE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/icon.png`,
            },
            sameAs: [],
        },
        {
            "@type": "SoftwareApplication",
            "@id": `${BASE_URL}/#software`,
            name: "miMesa",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CHF",
            },
            description:
                "Commission-free restaurant reservation and management platform for modern Swiss restaurants.",
        },
        {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            url: BASE_URL,
            name: "miMesa",
            publisher: { "@id": `${BASE_URL}/#organization` },
        },
    ],
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as "en" | "pt" | "de" | "fr")) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <ScrollRevealInit />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </NextIntlClientProvider>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
