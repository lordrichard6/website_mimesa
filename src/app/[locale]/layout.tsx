import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
    title: "miMesa - The Operating System for Modern Restaurants",
    description: "Handle reservations, tables, and guests with elegance. The all-in-one platform for modern restaurants.",
    icons: { icon: "/icon.png" },
    metadataBase: new URL("https://mimesa.ch"),
    openGraph: {
        title: "miMesa - The Operating System for Modern Restaurants",
        description: "Handle reservations, tables, and guests with elegance.",
        url: "https://mimesa.ch",
        siteName: "miMesa",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
        type: "website",
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as "en" | "pt" | "de" | "fr")) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
