import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "zh"] as const;
export const defaultLocale = "en" as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = locales.includes(requested as Locale)
    ? (requested as Locale)
    : defaultLocale;

  if (!locales.includes(locale as Locale)) notFound();
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
