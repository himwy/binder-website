import { type Locale, locales } from "@/i18n";
import { getWaitlistUrl } from "@/lib/waitlist-url";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { RedirectClient } from "./redirect-client";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = getWaitlistUrl();
  const title = locale === "zh" ? "Binder — 加入候補名單" : "Binder — Join the waitlist";
  return {
    title,
    robots: { index: false, follow: false },
    other: {
      refresh: `0; url=${url}`,
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
  const url = getWaitlistUrl();
  const isZh = locale === "zh";
  return (
    <main className="min-h-[60vh] max-w-[560px] mx-auto px-6 py-24 text-center">
      <h1 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-[-0.03em] mb-4">
        {isZh ? "正在前往候補名單表格…" : "Redirecting to the waitlist form…"}
      </h1>
      <p className="text-muted">
        {isZh ? "如未自動跳轉，請" : "If you are not redirected automatically, "}
        <a className="underline" href={url} rel="noopener noreferrer">
          {isZh ? "點此繼續" : "click here to continue"}
        </a>
        .
      </p>
      <RedirectClient url={url} locale={locale as Locale} />
    </main>
  );
}
