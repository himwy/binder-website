import type { Locale } from "@/i18n";
import { track } from "@vercel/analytics";

type Location = "nav" | "hero" | "download" | "footer";

export function trackDownloadClick(location: Location, locale: Locale) {
  track("download_click", { location, locale, store: "ios" });
}
