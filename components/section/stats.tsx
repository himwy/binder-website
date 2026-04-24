"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("stats");
  const cells = ["districts", "bilingual", "launch"] as const;
  return (
    <section className="bg-surface-alt border-y border-hairline">
      <div className="max-w-page mx-auto px-6 md:px-12 py-14 grid md:grid-cols-3">
        {cells.map((k, i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`px-0 md:px-11 py-6 md:py-0 flex flex-col gap-3 ${
              i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""
            }`}
          >
            <div className="text-[clamp(40px,5vw,56px)] font-extrabold tracking-[-0.045em] leading-none tnum">
              {t(`${k}.num`)}
            </div>
            <div className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted">
              {t(`${k}.label`)}
            </div>
            <div className="text-[13.5px] text-muted leading-[1.5] font-medium max-w-[36ch]">
              {t(`${k}.sub`)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
