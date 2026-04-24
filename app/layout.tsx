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
  title: "Binder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${notoTc.variable}`}>
      <body>{children}</body>
    </html>
  );
}
