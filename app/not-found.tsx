import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel-sans",
  display: "swap",
});
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-funnel-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bindy — 404",
  robots: { index: false },
  icons: { icon: "/favicon.ico?v=2", apple: "/icons/apple-touch-icon.png?v=2" },
};

// Rendered outside the [locale] segment (no request locale), so it is
// bilingual by design rather than translated.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${funnelSans.variable} ${funnelDisplay.variable}`}>
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">
          <a href="/" className="inline-flex items-center gap-[10px] mb-10">
            <img
              src="/icons/binder-mark-256.png"
              alt=""
              width={26}
              height={26}
              className="object-contain"
            />
            <span className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">
              Bindy
            </span>
          </a>
          <img
            src="/bindy/bindy-sad.webp"
            alt="Bindy the shiba sadly hugging an empty binder"
            className="h-[170px] md:h-[210px] w-auto mb-8"
          />
          <h1 className="text-[clamp(64px,12vw,150px)] font-extrabold tracking-[-0.05em] leading-none">
            404
          </h1>
          <p className="mt-6 text-[17px] text-muted">
            Bindy checked every pocket — this page isn&rsquo;t in the binder.
          </p>
          <p lang="zh-Hant" className="mt-2 text-[16px] text-muted font-tc">
            Bindy 揭勻成本卡簿，都搵唔到呢一頁。
          </p>
          <a
            href="/"
            className="mt-10 inline-flex h-[54px] items-center justify-center rounded-btn bg-green px-6 text-[16px] font-semibold text-white shadow-[0_10px_22px_rgba(12,95,63,0.22)] transition-colors duration-150 hover:bg-[#0c6a47]"
          >
            Back to home ·{" "}
            <span lang="zh-Hant" className="font-tc ml-1">
              返回首頁
            </span>
          </a>
        </main>
      </body>
    </html>
  );
}
