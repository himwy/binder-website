import { Footer } from "@/components/footer";
import { LegalArticle } from "@/components/legal-article";
import { Nav } from "@/components/nav";
import { getLegal } from "@/lib/legal";
import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Bindy — Delete your account",
  description:
    "How to delete your Bindy account and data: the steps, what is erased, what is retained, and the 30-day window.",
};

export default async function DeleteAccount({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <LegalArticle doc={getLegal("delete-account", locale)} />
      <Footer />
    </>
  );
}
