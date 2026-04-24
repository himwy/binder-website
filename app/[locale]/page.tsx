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
    <main>
      <h1>
        {t("titleLine1")} {t("titleLine2")}
      </h1>
    </main>
  );
}
