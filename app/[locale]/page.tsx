import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Download } from "@/components/section/download";
import { FAQ } from "@/components/section/faq";
import { Features } from "@/components/section/features";
import { Hero } from "@/components/section/hero";
import { HowItWorks } from "@/components/section/how-it-works";
import { type Locale, locales } from "@/i18n";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}
