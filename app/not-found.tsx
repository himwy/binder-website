import type { Metadata } from "next";
import { Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const notoTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-noto-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Binder — 404",
  robots: { index: false },
  icons: { icon: "/favicon.ico?v=2", apple: "/icons/apple-touch-icon.png?v=2" },
};

// Rendered outside the [locale] segment (no request locale), so it is
// bilingual by design rather than translated.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${jakarta.variable} ${notoTc.variable}`}>
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
            <span className="text-[16px] font-bold tracking-[-0.015em] text-ink">Binder</span>
          </a>
          <img
            src="/bindy/bindy-sad.webp"
            alt="Bindy the shiba sadly hugging an empty binder"
            className="h-[170px] md:h-[210px] w-auto mb-8"
          />
          <h1 className="text-[clamp(64px,12vw,150px)] font-extrabold tracking-[-0.05em] leading-none">
            404
          </h1>
          <p className="mt-6 text-[16px] text-muted font-medium">
            Bindy checked every pocket — this page isn&rsquo;t in the binder.
          </p>
          <p lang="zh-Hant" className="mt-2 text-[14.5px] text-muted font-medium font-tc">
            Bindy 揭勻成本卡簿，都搵唔到呢一頁。
          </p>
          <a
            href="/"
            className="mt-10 inline-flex items-center justify-center h-[54px] px-6 rounded-btn bg-white text-ink border-[1.5px] border-ink hover:bg-[#f8f8fa] text-[14px] font-bold tracking-[-0.005em] transition-colors duration-150"
          >
            Back to home · <span lang="zh-Hant" className="font-tc ml-1">返回首頁</span>
          </a>
        </main>
      </body>
    </html>
  );
}
