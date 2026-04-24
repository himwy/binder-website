"use client";
import { DistrictGrid } from "@/components/mockup/district-grid";
import { ListingDetail } from "@/components/mockup/listing-detail";
import { NewListing } from "@/components/mockup/new-listing";
import { PhoneFrame } from "@/components/phone-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const blocks = [
  { key: "pairs", Mock: NewListing },
  { key: "pricing", Mock: ListingDetail },
  { key: "district", Mock: DistrictGrid },
] as const;

export function Features() {
  const t = useTranslations("features");
  return (
    <section id="features" className="max-w-page mx-auto px-6 md:px-12 py-20 md:py-32">
      <SectionHeading index={t("index")} kicker={t("kicker")} title={t("title")} />
      <div className="flex flex-col gap-20 md:gap-28">
        {blocks.map(({ key, Mock }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              i % 2 === 1
                ? "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1 md:[&>*:last-child]:row-start-1"
                : ""
            }`}
          >
            <div>
              <h3 className="text-[clamp(22px,2.6vw,32px)] font-extrabold tracking-[-0.025em] mb-4">
                {t(`${key}.title`)}
              </h3>
              <p className="text-[14.5px] text-muted leading-[1.6] max-w-[46ch] font-medium">
                {t(`${key}.body`)}
              </p>
            </div>
            <div className="flex justify-center">
              <PhoneFrame>
                <Mock />
              </PhoneFrame>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
