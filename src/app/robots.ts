import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Block internal Next.js paths and the OG image generator (not content)
            disallow: ["/_next/", "/api/og"],
        },
        sitemap: "https://mimesa.ch/sitemap.xml",
    };
}
