import { type Locale, locales } from "@/i18n";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const title =
    locale === "zh"
      ? "Binder — 香港寶可夢卡牌交換平台"
      : "Binder — Hong Kong's Pokémon trading board";
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
      siteName: "Binder",
      locale: locale === "zh" ? "zh_HK" : "en_HK",
      type: "website",
      images: [{ url: `/og/${locale}`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og/${locale}`] },
    icons: {
      icon: "/favicon.ico",
      apple: "/icons/apple-touch-icon.png",
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
    <html lang={htmlLang} className={`${jakarta.variable} ${notoTc.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Binder",
              url: "https://binderhk.com",
              logo: "https://binderhk.com/icons/binder-icon-dark.svg",
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
