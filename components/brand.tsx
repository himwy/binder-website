import type { Route } from "next";
import { useLocale } from "next-intl";
import Link from "next/link";

export function Brand({ size = 26 }: { size?: number }) {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale === "en" ? "" : locale}` as Route}
      className="inline-flex items-center gap-[10px]"
    >
      <img
        src="/icons/binder-mark-256.png"
        alt=""
        width={size}
        height={size}
        className="object-contain -ml-[3px]"
      />
      <span className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">Bindy</span>
    </Link>
  );
}
