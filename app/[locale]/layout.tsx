import { type Locale, locales } from "@/i18n";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel-sans",
  display: "swap",
});
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-funnel-display",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const title =
    locale === "zh"
      ? "Bindy — 香港寶可夢卡牌交換平台"
      : "Bindy — Hong Kong's Pokémon trading board";
  const description = t("lede");
  const url = `https://binderhk.com${locale === "en" ? "" : `/${locale}`}`;
  return {
    metadataBase: new URL("https://binderhk.com"),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://binderhk.com",
        "zh-Hant": "https://binderhk.com/zh",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Bindy",
      locale: locale === "zh" ? "zh_HK" : "en_HK",
      type: "website",
      images: [{ url: `/og/${locale}`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og/${locale}`] },
    icons: {
      icon: "/favicon.ico?v=3",
      apple: "/icons/apple-touch-icon.png?v=3",
    },
    robots: { index: true, follow: true },
  };
}

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
    <html lang={htmlLang} className={`${funnelSans.variable} ${funnelDisplay.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bindy",
              url: "https://binderhk.com",
              logo: "https://binderhk.com/icons/binder-icon-512.png",
              sameAs: ["https://instagram.com/binder_hk"],
            }),
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
