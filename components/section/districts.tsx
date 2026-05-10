"use client";
import type { Locale } from "@/i18n";
import { DISTRICTS_18 } from "@/lib/content";
import { useLocale } from "next-intl";

export function Districts() {
  const locale = useLocale() as Locale;
  const items = [...DISTRICTS_18, ...DISTRICTS_18];
  return (
    <section aria-label="Hong Kong districts" className="border-b border-hairline overflow-hidden">
      <div className="max-w-page mx-auto px-6 md:px-12 py-7 flex items-center gap-6 md:gap-10">
        <span className="shrink-0 text-[10px] md:text-[11px] font-extrabold tracking-[0.22em] uppercase text-muted">
          {locale === "zh" ? "18 區" : "18 Districts"}
        </span>
        <div
          className="relative flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="flex gap-10 md:gap-14 whitespace-nowrap animate-marquee will-change-transform">
            {items.map((d, i) => (
              <span
                key={`${d.en}-${i}`}
                className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-semibold text-ink/80 tracking-[-0.005em]"
              >
                <span
                  className="inline-block w-[5px] h-[5px] rounded-full bg-ink/60"
                  aria-hidden="true"
                />
                <span className={locale === "zh" ? "font-tc" : ""}>
                  {locale === "zh" ? d.zh : d.en}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
