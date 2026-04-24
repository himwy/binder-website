import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { setRequestLocale } from "next-intl/server";

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 md:px-12 py-24">
        <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.035em] mb-8">
          Privacy
        </h1>
        <p className="text-muted">Placeholder — legal copy forthcoming before public launch.</p>
      </main>
      <Footer />
    </>
  );
}
