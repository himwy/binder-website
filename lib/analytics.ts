import type { Locale } from "@/i18n";
import { track } from "@vercel/analytics";

type Location = "nav" | "hero" | "download" | "footer";

type Store = "ios" | "android";

export function trackDownloadClick(location: Location, locale: Locale, store: Store) {
  track("download_click", { location, locale, store });
}
