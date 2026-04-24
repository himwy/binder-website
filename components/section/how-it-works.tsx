"use client";
import { BrowseFeed } from "@/components/mockup/browse-feed";
import { ChatOffer } from "@/components/mockup/chat-offer";
import { ListingDetail } from "@/components/mockup/listing-detail";
import { NewListing } from "@/components/mockup/new-listing";
import { PhoneFrame } from "@/components/phone-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n";
import { HOW_IT_WORKS_STEPS, type Step } from "@/lib/content";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";

const MOCKUPS = {
  onboarding: BrowseFeed, // stand-in
  "new-listing": NewListing,
  "chat-offer": ChatOffer,
  rating: ListingDetail, // stand-in
} as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const locale = useLocale() as Locale;
  const [activeScreen, setActiveScreen] = useState<keyof typeof MOCKUPS>("onboarding");

  return (
    <section id="how-it-works" className="max-w-page mx-auto px-6 md:px-12 py-20 md:py-32">
      <SectionHeading index={t("index")} kicker={t("kicker")} title={t("title")} />
      <div className="grid md:grid-cols-[1fr_480px] gap-10 md:gap-16">
        <div className="flex flex-col gap-12 md:gap-24">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <StepBlock
              key={step.num}
              step={step}
              locale={locale}
              onVisible={() => setActiveScreen(step.screen)}
            />
          ))}
        </div>
        <div className="hidden md:block sticky top-[120px] h-[600px]">
          <StepPhone screen={activeScreen} />
        </div>
      </div>
    </section>
  );
}

function StepBlock({
  step,
  locale,
  onVisible,
}: {
  step: Step;
  locale: Locale;
  onVisible: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  if (inView) onVisible();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="md:min-h-[60vh] flex flex-col justify-center"
    >
      <div className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-muted tnum mb-3">
        {step.num} · {step.title[locale].toUpperCase()}
      </div>
      <h3 className="text-[clamp(20px,2.2vw,28px)] font-bold tracking-[-0.02em] mb-4">
        {step.title[locale]}
      </h3>
      <p className="text-[14px] text-muted leading-[1.55] max-w-[44ch] font-medium mb-3">
        {step.body[locale]}
      </p>
      <p className="text-[12px] font-semibold text-ink uppercase tracking-[0.12em]">
        {step.why[locale]}
      </p>
      <div className="md:hidden mt-6 flex justify-center">
        <StepPhone screen={step.screen} />
      </div>
    </motion.div>
  );
}

function StepPhone({ screen }: { screen: keyof typeof MOCKUPS }) {
  const Mockup = MOCKUPS[screen];
  return (
    <motion.div
      key={screen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <PhoneFrame>
        <Mockup />
      </PhoneFrame>
    </motion.div>
  );
}
