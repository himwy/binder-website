import { Footer } from "@/components/footer";
import { LegalArticle } from "@/components/legal-article";
import { Nav } from "@/components/nav";
import { getLegal } from "@/lib/legal";
import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Binder — Privacy Policy",
  description:
    "How Near Mint collects, uses, and protects your personal data in the Binder app (Hong Kong PDPO).",
};

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <LegalArticle doc={getLegal("privacy", locale)} />
      <Footer />
    </>
  );
}
