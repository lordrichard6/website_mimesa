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
  metadataBase: new URL('https://mimesa.app'),
  openGraph: {
    title: "miMesa - The Operating System for Modern Restaurants",
    description: "Handle reservations, tables, and guests with elegance. The all-in-one platform for modern restaurants.",
    url: "https://mimesa.app",
    siteName: "miMesa",
    images: [
      {
        url: "/og-image.jpg", // We should probably create a placeholder or use the logo for now if no OG image exists
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
