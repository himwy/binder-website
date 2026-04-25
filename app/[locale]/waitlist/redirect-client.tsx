"use client";

import type { Locale } from "@/i18n";
import { trackWaitlistClick } from "@/lib/analytics";
import { useEffect } from "react";

export function RedirectClient({ url, locale }: { url: string; locale: Locale }) {
  useEffect(() => {
    trackWaitlistClick("waitlist", locale);
    window.location.replace(url);
  }, [url, locale]);
  return null;
}
