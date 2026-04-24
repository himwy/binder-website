"use client";
import { BrowseFeed } from "@/components/mockup/browse-feed";
import { PhoneFrame } from "@/components/phone-frame";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function BilingualProof() {
  const t = useTranslations("bilingual");
  return (
    <section className="bg-surface-alt border-y border-hairline py-20 md:py-28">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(24px,3vw,40px)] font-extrabold tracking-[-0.03em] text-center mb-16 max-w-[24ch] mx-auto"
        >
          {t("title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 justify-items-center">
          <div className="flex flex-col items-center gap-4">
            <PhoneFrame>
              <BrowseFeed />
            </PhoneFrame>
            <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted">
              English
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <PhoneFrame>
              <BrowseFeed />
            </PhoneFrame>
            <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted font-tc">
              繁體中文
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
