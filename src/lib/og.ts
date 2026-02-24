const BASE_URL = "https://mimesa.ch";

export function ogImage(
  title: string,
  subtitle: string,
  type: "default" | "solution" | "blog" | "compare" = "default"
) {
  const params = new URLSearchParams({ title, subtitle, type });
  return {
    url: `${BASE_URL}/api/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: title,
  };
}
