"use client";
import type { Route } from "next";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
  const enHref = (stripped === "/" ? "/" : stripped) as Route;
  const zhHref = `/zh${stripped === "/" ? "" : stripped}` as Route;
  return (
    <span className="text-[12px] font-bold text-muted tracking-[0.02em] tnum">
      <Link
        href={enHref}
        className={locale === "en" ? "text-ink font-extrabold" : ""}
        aria-label="English"
      >
        EN
      </Link>
      <span className="mx-[6px]">·</span>
      <Link
        href={zhHref}
        className={locale === "zh" ? "text-ink font-extrabold font-tc" : "font-tc"}
        aria-label="繁體中文"
      >
        繁
      </Link>
    </span>
  );
}
