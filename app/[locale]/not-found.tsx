import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import type { Route } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <>
      <Nav />
      <main className="max-w-page mx-auto px-6 md:px-12 py-24 md:py-28 text-center">
        <img
          src="/bindy/bindy-sad.webp"
          alt={t("mascotAlt")}
          className="mx-auto mb-8 h-[180px] md:h-[220px] w-auto"
        />
        <h1 className="text-[clamp(72px,14vw,180px)] font-extrabold tracking-[-0.05em] leading-none">
          {t("title")}
        </h1>
        <p className="mt-6 text-[16px] text-muted">{t("lede")}</p>
        <Link
          href={"/" as Route}
          className="mt-10 inline-flex items-center justify-center h-[54px] px-6 rounded-btn bg-white text-ink border-[1.5px] border-ink hover:bg-[#f8f8fa] text-[14px] font-bold tracking-[-0.005em] transition-colors duration-150 active:translate-y-px"
        >
          {t("cta")}
        </Link>
      </main>
      <Footer />
    </>
  );
}
