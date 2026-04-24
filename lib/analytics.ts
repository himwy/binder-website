import type { Locale } from "@/i18n";
import { track } from "@vercel/analytics";

type Location = "nav" | "hero" | "waitlist";

export function trackWaitlistClick(location: Location, locale: Locale) {
  track("waitlist_click", { location, locale });
}
