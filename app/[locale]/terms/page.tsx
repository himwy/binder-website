import { Footer } from "@/components/footer";
import { LegalArticle } from "@/components/legal-article";
import { Nav } from "@/components/nav";
import { getLegal } from "@/lib/legal";
import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Binder — Terms of Service",
  description:
    "The terms that govern your use of the Binder trading app, operated by Near Mint (Hong Kong).",
};

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <LegalArticle doc={getLegal("terms", locale)} />
      <Footer />
    </>
  );
}
