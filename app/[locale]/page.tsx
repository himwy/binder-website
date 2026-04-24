import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { type Locale, locales } from "@/i18n";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("hero");
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] max-w-page mx-auto px-6 md:px-12 py-20">
        <h1 className="text-[clamp(34px,6vw,72px)] leading-[0.96] tracking-[-0.04em] font-extrabold">
          {t("titleLine1")} {t("titleLine2")}
        </h1>
      </main>
      <Footer />
    </>
  );
}
