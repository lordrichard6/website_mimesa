import { redirect } from "next/navigation";

// The next-intl middleware handles locale detection and redirects,
// but this is a fallback in case the middleware is bypassed.
export default function RootPage() {
    redirect("/en");
}
