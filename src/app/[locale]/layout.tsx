import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
