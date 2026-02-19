import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "miMesa - The Operating System for Modern Restaurants",
  description: "Handle reservations, tables, and guests with elegance. The all-in-one platform for modern restaurants, designed to save time and increase revenue.",
  keywords: ["restaurant reservation system", "table management", "guest crm", "restaurant software", "booking system", "no commission"],
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL("https://mimesa.ch"),
  openGraph: {
    title: "miMesa - The Operating System for Modern Restaurants",
    description: "Handle reservations, tables, and guests with elegance. The all-in-one platform for modern restaurants.",
    url: "https://mimesa.ch",
    siteName: "miMesa",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

// The root layout wraps everything. The [locale] segment is the first path
// segment, so we receive it here as a param. This is the only place <html>
// and <body> are rendered, which avoids the hydration mismatch caused by
// nested <html> tags when [locale]/layout.tsx also rendered them.
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;
  const lang = locale ?? "en";

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
