import { type Locale, locales } from "@/i18n";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const notoTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-noto-tc",
  display: "swap",
});

export const metadata: Metadata = { title: "Binder" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  const htmlLang = locale === "zh" ? "zh-Hant" : "en";
  return (
    <html lang={htmlLang} className={`${jakarta.variable} ${notoTc.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
