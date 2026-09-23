import { AndroidButton, AppStoreButton } from "@/components/store-buttons";
import { useTranslations } from "next-intl";

/**
 * The download band. Deliberately NOT a slab of brand green: it is the same
 * shop as the hero under a deep green wash, so the page ends on evening light
 * instead of shouting.
 */
export function Download() {
  const t = useTranslations("download");
  return (
    <section id="get" className="mx-auto max-w-page px-6 pb-20 md:px-12 md:pb-28">
      <div className="relative isolate overflow-hidden rounded-[20px] bg-green-dark px-7 py-14 md:px-14 md:py-20">
        <picture className="absolute inset-0 -z-20 block h-full w-full">
          <source media="(min-width: 768px)" srcSet="/scenes/download.webp" />
          <img
            src="/scenes/download-sm.webp"
            alt={t("sceneAlt")}
            width={1000}
            height={551}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-[center_62%]"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(10,60,44,0.95)_0%,rgba(10,60,44,0.88)_46%,rgba(10,60,44,0.58)_100%)]"
        />
        <h2 className="max-w-[16ch] text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.02] text-white">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-[42ch] text-[17px] text-[rgba(242,247,243,0.88)]">{t("body")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <AppStoreButton place="download" variant="white" />
          <AndroidButton place="download" tone="dark" />
        </div>
      </div>
    </section>
  );
}
