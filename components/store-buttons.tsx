"use client";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n";
import { trackDownloadClick } from "@/lib/analytics";
import { ANDROID_LIVE, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store";
import { useLocale, useTranslations } from "next-intl";

type Place = "nav" | "hero" | "download" | "footer";

function AppleMark() {
  return (
    <svg width="17" height="19" viewBox="0 0 18 20" fill="currentColor" aria-hidden="true">
      <path d="M12.9 10.6c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2s1.3-.6 2.5-.6 1.5.6 2.6.6 1.7-1 2.4-1.9c.7-1.1 1-2.2 1-2.2s-1.9-.8-2-3.3zM11 4.3c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.4-1.1z" />
    </svg>
  );
}

function PlayMark({ mono = false }: { mono?: boolean }) {
  if (mono) {
    return (
      <svg
        width="17"
        height="19"
        viewBox="30 336.7 120.9 129.2"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
        <path d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
        <path d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
        <path d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="19" viewBox="30 336.7 120.9 129.2" aria-hidden="true">
      <path
        fill="#FFCE00"
        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
      />
      <path
        fill="#FF3A44"
        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
      />
      <path
        fill="#00D95F"
        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
      />
      <path
        fill="#00C3FF"
        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
      />
    </svg>
  );
}

/** Nav CTA: jumps to the download band rather than picking a store for you. */
export function NavDownloadLink() {
  const t = useTranslations("store");
  return (
    <a
      href="#get"
      className="inline-flex h-[42px] items-center justify-center gap-[10px] rounded-btn-sm bg-green px-4 text-[14px] font-semibold tracking-[-0.005em] text-white transition-colors duration-150 hover:bg-[#0c6a47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-deep focus-visible:outline-offset-2"
    >
      {t("navCta")}
    </a>
  );
}

/** The App Store button. Everywhere the waitlist button used to be. */
export function AppStoreButton({
  place,
  variant = "primary",
}: {
  place: Place;
  variant?: "primary" | "nav-primary" | "white";
}) {
  const t = useTranslations("store");
  const locale = useLocale() as Locale;
  return (
    <Button
      variant={variant}
      as="a"
      href={APP_STORE_URL}
      onClick={() => trackDownloadClick(place, locale, "ios")}
    >
      <AppleMark />
      {variant === "nav-primary" ? t("navCta") : t("ios")}
    </Button>
  );
}

/**
 * Android. Live since 2026-09-23; if ANDROID_LIVE is ever switched off the
 * button degrades to a "coming soon" note rather than a dead link.
 */
export function AndroidButton({
  place,
  tone = "light",
}: {
  place: Place;
  tone?: "light" | "dark";
}) {
  const t = useTranslations("store");
  const locale = useLocale() as Locale;
  if (ANDROID_LIVE) {
    return (
      <Button
        variant={tone === "dark" ? "white" : "store"}
        as="a"
        href={PLAY_STORE_URL}
        onClick={() => trackDownloadClick(place, locale, "android")}
        className={tone === "dark" ? "text-ink" : undefined}
      >
        <PlayMark />
        {t("android")}
      </Button>
    );
  }
  return (
    <span
      className={
        tone === "dark"
          ? "inline-flex h-[54px] items-center gap-[10px] rounded-btn border-[1.5px] border-white/40 px-6 text-[16px] font-semibold text-white/80"
          : "inline-flex h-[54px] items-center gap-[10px] rounded-btn border-[1.5px] border-border bg-white/70 px-6 text-[16px] font-semibold text-muted"
      }
    >
      <PlayMark mono />
      {t("androidSoon")}
    </span>
  );
}
