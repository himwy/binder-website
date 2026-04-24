import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import type { Route } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <>
      <Nav />
      <main className="max-w-page mx-auto px-6 md:px-12 py-32 text-center">
        <h1 className="text-[clamp(72px,14vw,180px)] font-extrabold tracking-[-0.05em] leading-none">
          {t("title")}
        </h1>
        <p className="mt-6 text-[16px] text-muted">{t("lede")}</p>
        <Link href={"/" as Route} className="mt-10 inline-block">
          <Button variant="primary">{t("cta")}</Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
