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

function PlayMark() {
  return (
    <svg width="17" height="19" viewBox="0 0 18 20" fill="currentColor" aria-hidden="true">
      <path d="M2.3 1.2c-.3.3-.5.8-.5 1.4v14.8c0 .6.2 1.1.5 1.4l.1.1 8.3-8.3v-.2L2.4 1.1l-.1.1zM13.8 7.6l-2.6-1.5-2.3 2.3 2.3 2.3 2.7-1.5c.8-.4.8-1.2 0-1.6zM10.5 11.3 2.4 19.4c.3.3.7.3 1.2 0l7.7-4.4-.8-3.7z" />
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
        variant={tone === "dark" ? "outline-light" : "ghost"}
        as="a"
        href={PLAY_STORE_URL}
        onClick={() => trackDownloadClick(place, locale, "android")}
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
      <PlayMark />
      {t("androidSoon")}
    </span>
  );
}
