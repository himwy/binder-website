"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n";
import { FAQ_ITEMS } from "@/lib/content";
import { useLocale, useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;
  return (
    <section id="faq" className="relative mx-auto max-w-[760px] px-6 py-20 md:px-12 md:py-28">
      <img
        src="/bindy/bindy-sticker.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute right-6 top-16 hidden w-[124px] rotate-6 select-none md:block"
      />
      <SectionHeading index={t("index")} kicker={t("kicker")} title={t("title")} />
      <div className="divide-y divide-hairline border-y border-hairline">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.q.en}
            className="group -mx-2 rounded-[10px] px-2 py-5 transition-colors hover:bg-surface-alt"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="max-w-[90%] text-[18px] font-semibold tracking-[-0.01em]">
                {item.q[locale]}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="flex-none text-green-deep transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              >
                <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </summary>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.6] text-muted">
              {item.a[locale]}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
