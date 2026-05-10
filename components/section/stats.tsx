"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = Number.parseFloat(value);
  const isNumeric = Number.isFinite(numeric) && /^[\d.,]+$/.test(value.trim());
  const mv = useMotionValue(0);
  const display = useTransform(mv, (n) => Math.round(n).toString());
  useEffect(() => {
    if (!isNumeric || !inView) return;
    const controls = animate(mv, numeric, { duration: 1.1, ease: "easeOut" });
    return () => controls.stop();
  }, [isNumeric, inView, numeric, mv]);
  if (!isNumeric) return <span ref={ref}>{value}</span>;
  return <motion.span ref={ref}>{display}</motion.span>;
}

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
              <CountUp value={t(`${k}.num`)} />
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
