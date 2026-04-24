"use client";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n";
import { trackWaitlistClick } from "@/lib/analytics";
import { getWaitlistUrl } from "@/lib/waitlist-url";
import { useLocale, useTranslations } from "next-intl";

export function NavCTA() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  return (
    <Button
      variant="nav-primary"
      as="a"
      href={getWaitlistUrl()}
      onClick={() => trackWaitlistClick("nav", locale)}
    >
      {t("cta")}
    </Button>
  );
}
