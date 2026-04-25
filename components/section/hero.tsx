"use client";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Locale } from "@/i18n";
import { trackWaitlistClick } from "@/lib/analytics";
import { getWaitlistUrl } from "@/lib/waitlist-url";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;
  return (
    <section className="max-w-page mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-14 md:pb-20 grid md:grid-cols-[45fr_55fr] gap-10 md:gap-12 items-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="text-[clamp(34px,6vw,72px)] leading-[0.96] tracking-[-0.04em] font-extrabold text-ink mb-5">
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h1>
        <p className="text-[16px] text-muted leading-[1.55] max-w-[42ch] mb-8 font-medium">
          {t("lede")}
        </p>
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="primary"
            as="a"
            href={getWaitlistUrl()}
            onClick={() => trackWaitlistClick("hero", locale)}
          >
            {t("cta")} →
          </Button>
          <a
            href="#how-it-works"
            className="text-[14px] font-semibold text-ink border-b-[1.5px] border-border hover:border-ink pb-[6px]"
          >
            {t("secondary")}
          </a>
        </div>
      </motion.div>
      <div className="relative h-[420px] md:h-[560px] flex items-center justify-center">
        <img src="/mascot.png" alt="Binder mascot" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
