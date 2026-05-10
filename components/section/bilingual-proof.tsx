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
          className="text-[clamp(24px,3vw,40px)] font-extrabold tracking-[-0.03em] text-center mb-4 max-w-[24ch] mx-auto"
        >
          {t("title")}
        </motion.h2>
        <p className="text-[13px] text-muted text-center mb-14 font-medium tracking-[-0.005em]">
          <span className="font-semibold text-ink">EN</span>
          <span className="mx-2 text-soft" aria-hidden="true">
            ·
          </span>
          <span className="font-semibold text-ink font-tc">繁體中文</span>
        </p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 justify-items-center">
          <LangPhone code="EN" label="English" />
          <LangPhone code="繁" label="繁體中文" />
        </div>
      </div>
    </section>
  );
}

function LangPhone({ code, label }: { code: string; label: string }) {
  const isZh = code === "繁";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center gap-4"
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className={`absolute -top-3 -right-3 z-10 inline-flex items-center justify-center min-w-[40px] h-[28px] px-2 rounded-badge bg-ink text-white text-[11px] font-extrabold tracking-[0.12em] ${
            isZh ? "font-tc" : ""
          }`}
        >
          {code}
        </span>
        <PhoneFrame>
          <BrowseFeed />
        </PhoneFrame>
      </div>
      <span
        className={`text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted ${
          isZh ? "font-tc" : ""
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}
