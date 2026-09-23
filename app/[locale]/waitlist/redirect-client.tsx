"use client";

import type { Locale } from "@/i18n";
import { trackDownloadClick } from "@/lib/analytics";
import { useEffect } from "react";

export function RedirectClient({ url, locale }: { url: string; locale: Locale }) {
  useEffect(() => {
    trackDownloadClick("footer", locale, "ios");
    window.location.replace(url);
  }, [url, locale]);
  return null;
}
