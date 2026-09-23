import { DeviceShot } from "@/components/device-shot";
import { AndroidButton, AppStoreButton } from "@/components/store-buttons";
import type { Locale } from "@/i18n";
import { screenSrc } from "@/lib/content";
import { useLocale, useTranslations } from "next-intl";

/**
 * The hero is a photograph of a place: the miniature card-shop street.
 * Desktop fills the section with it and lays a paper wash across the left.
 * Phones get the scene as a band under the copy instead — washing a scene out
 * behind phone text loses both — and pull a 1000px render rather than the
 * 2000px one, which is why this is a <picture> and not two <img>s.
 */
export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;
  return (
    <section className="relative isolate overflow-hidden">
      <picture className="absolute inset-x-0 bottom-0 -z-20 block h-[320px] md:inset-0 md:h-full">
        <source media="(min-width: 768px)" srcSet="/scenes/hero.webp" />
        <img
          src="/scenes/hero-sm.webp"
          alt={t("sceneAlt")}
          width={1000}
          height={571}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[64%_88%] md:object-[72%_center]"
        />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(100deg,rgba(247,244,239,0.97)_0%,rgba(247,244,239,0.9)_30%,rgba(247,244,239,0.45)_54%,rgba(247,244,239,0)_72%)] md:block"
      />
      <div className="mx-auto flex max-w-page items-center px-6 md:min-h-[640px] md:px-12">
        <div className="max-w-[560px] pb-[352px] pt-14 md:py-24">
          <p className="rise inline-flex items-center rounded-full border border-[rgba(12,95,63,0.16)] bg-white/90 px-[14px] py-[7px] text-[14px] font-semibold text-green-deep">
            {t("eyebrow")}
          </p>
          <h1 className="rise rise-2 mt-5 text-[clamp(38px,6vw,68px)] font-extrabold leading-[1.0] text-ink">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h1>
          <p className="rise rise-3 mt-5 max-w-[42ch] text-[clamp(17px,1.3vw,19px)] text-[#3d4448]">
            {t("lede")}
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
            <AppStoreButton place="hero" />
            <AndroidButton place="hero" />
          </div>
          <p className="rise rise-4 mt-4 text-[15px] text-[#4d5356]">{t("note")}</p>
        </div>
        <DeviceShot
          src={screenSrc("browse", locale)}
          alt={t("screenAlt")}
          priority
          className="absolute bottom-8 right-[clamp(24px,6vw,88px)] hidden w-[200px] lg:block"
        />
      </div>
    </section>
  );
}
