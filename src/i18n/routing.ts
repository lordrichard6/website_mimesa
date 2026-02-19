import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "pt", "de", "fr"],
    defaultLocale: "en",
    localePrefix: "always",
});
