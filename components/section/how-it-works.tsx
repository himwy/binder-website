import { DeviceShot } from "@/components/device-shot";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n";
import { HOW_IT_WORKS_STEPS, screenSrc } from "@/lib/content";
import { useLocale, useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const locale = useLocale() as Locale;
  return (
    <section id="how-it-works" className="mx-auto max-w-page px-6 py-20 md:px-12 md:py-28">
      <SectionHeading index={t("index")} kicker={t("kicker")} title={t("title")} lede={t("lede")} />
      <ol className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <li key={step.num}>
            <DeviceShot src={screenSrc(step.screen, locale)} alt={step.alt[locale]} />
            <p className="mt-5 text-[14px] font-bold tabular-nums text-green-deep">{step.num}</p>
            <h3 className="mt-1 text-[20px] font-bold text-ink">{step.title[locale]}</h3>
            <p className="mt-2 text-[16px] text-muted">{step.body[locale]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
