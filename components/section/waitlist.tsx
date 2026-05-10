"use client";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Locale } from "@/i18n";
import { trackWaitlistClick } from "@/lib/analytics";
import { getWaitlistUrl } from "@/lib/waitlist-url";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const PROOF_DISTRICTS_EN = ["Causeway Bay", "Mong Kok", "Sha Tin", "Tsim Sha Tsui", "Tai Po"];
const PROOF_DISTRICTS_ZH = ["銅鑼灣", "旺角", "沙田", "尖沙咀", "大埔"];

export function Waitlist() {
  const t = useTranslations("waitlist");
  const locale = useLocale() as Locale;
  const districts = locale === "zh" ? PROOF_DISTRICTS_ZH : PROOF_DISTRICTS_EN;
  return (
    <section className="py-28 md:py-36 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[640px] mx-auto px-6"
      >
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h2 className="text-[clamp(34px,5vw,56px)] font-extrabold tracking-[-0.035em] leading-[1.02] mb-6">
          {t("title")}
        </h2>
        <p className="text-[15px] text-muted leading-[1.55] mb-8 font-medium">{t("body")}</p>
        <ul
          aria-label="Hong Kong districts on the waitlist"
          className={`flex flex-wrap justify-center gap-2 mb-10 ${
            locale === "zh" ? "font-tc" : ""
          }`}
        >
          {districts.map((d) => (
            <li
              key={d}
              className="inline-flex items-center h-[26px] px-3 rounded-[6px] bg-neutral text-[11.5px] font-bold text-ink tracking-[-0.005em]"
            >
              {d}
            </li>
          ))}
          <li className="inline-flex items-center h-[26px] px-3 rounded-[6px] border border-border text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-muted">
            +13
          </li>
        </ul>
        <Button
          variant="primary"
          as="a"
          href={getWaitlistUrl()}
          onClick={() => trackWaitlistClick("waitlist", locale)}
        >
          {t("cta")} →
        </Button>
        <p className="text-[12.5px] text-muted mt-6 font-medium">{t("micro")}</p>
      </motion.div>
    </section>
  );
}
