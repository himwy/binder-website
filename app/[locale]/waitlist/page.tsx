import { type Locale, locales } from "@/i18n";
import { APP_STORE_URL } from "@/lib/store";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { RedirectClient } from "./redirect-client";

// The waitlist is over: Bindy is on the App Store. This URL is printed on old
// posts, so it stays alive and forwards to the store instead of 404ing.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "zh" ? "Bindy — 立即下載" : "Bindy — Get the app";
  return {
    title,
    robots: { index: false, follow: false },
    other: {
      refresh: `0; url=${APP_STORE_URL}`,
    },
  };
}

export default async function WaitlistRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === "zh";
  return (
    <main className="mx-auto min-h-[60vh] max-w-[560px] px-6 py-24 text-center">
      <h1 className="mb-4 text-[clamp(26px,3vw,34px)] font-bold">
        {isZh ? "Bindy 已經推出，正在前往 App Store…" : "Bindy is out — opening the App Store…"}
      </h1>
      <p className="text-muted">
        {isZh ? "如未自動跳轉，請" : "If you are not redirected automatically, "}
        <a className="underline" href={APP_STORE_URL} rel="noopener noreferrer">
          {isZh ? "點此下載" : "click here to download"}
        </a>
        .
      </p>
      <RedirectClient url={APP_STORE_URL} locale={locale as Locale} />
    </main>
  );
}
