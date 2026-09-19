import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n";
import { FEATURES } from "@/lib/content";
import { useLocale, useTranslations } from "next-intl";

/** Scenes sit in their frames as photographs — never cut out, never floating. */
export function Features() {
  const t = useTranslations("features");
  const locale = useLocale() as Locale;
  return (
    <section id="features" className="mx-auto max-w-page px-6 py-20 md:px-12 md:py-28">
      <SectionHeading index={t("index")} kicker={t("kicker")} title={t("title")} />
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <figure key={feature.key}>
            <div className="aspect-[4/3] overflow-hidden rounded-card bg-green-tint shadow-[0_16px_34px_rgba(20,23,26,0.10)]">
              <img
                src={feature.scene}
                alt={feature.alt[locale]}
                width={1100}
                height={825}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption>
              <h3 className="mt-5 text-[20px] font-bold text-ink">{feature.title[locale]}</h3>
              <p className="mt-2 text-[16px] text-muted">{feature.body[locale]}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
