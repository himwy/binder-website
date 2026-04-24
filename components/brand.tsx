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
        src="/icons/binder-icon-dark.svg"
        alt=""
        width={size}
        height={size}
        className="rounded-[6px]"
      />
      <span className="text-[16px] font-bold tracking-[-0.015em] text-ink">Binder</span>
    </Link>
  );
}
