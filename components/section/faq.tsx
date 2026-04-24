"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n";
import { FAQ_ITEMS } from "@/lib/content";
import { useLocale, useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;
  return (
    <section id="faq" className="max-w-[720px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <SectionHeading index={t("index")} kicker={t("kicker")} title={t("title")} />
      <div className="divide-y divide-hairline border-y border-hairline">
        {FAQ_ITEMS.map((item) => (
          <details key={item.q.en} className="group py-5">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="text-[16px] font-bold tracking-[-0.01em] max-w-[90%]">
                {item.q[locale]}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="text-muted transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              >
                <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </summary>
            <p className="text-[14px] text-muted leading-[1.6] mt-3 font-medium max-w-[60ch]">
              {item.a[locale]}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
