"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Brand } from "./brand";
import { LanguageToggle } from "./language-toggle";
import { NavCTA } from "./nav-cta";

export function Nav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onHash = () => setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", onHash);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", onHash);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-[10px] border-b border-hairline">
      <div className="max-w-page mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Brand />
          <nav
            aria-label="Primary"
            className="hidden md:flex gap-7 text-[13px] font-medium text-muted"
          >
            <a href="#how-it-works" className="hover:text-ink transition-colors">
              {t("howItWorks")}
            </a>
            <a href="#features" className="hover:text-ink transition-colors">
              {t("features")}
            </a>
            <a href="#faq" className="hover:text-ink transition-colors">
              {t("faq")}
            </a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <NavCTA />
        </div>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 cursor-pointer"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="text-ink">
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 6h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-hairline ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 py-6 flex flex-col gap-1 bg-white">
          <a
            href="#how-it-works"
            className="py-3 text-[15px] font-semibold text-ink border-b border-hairline"
          >
            {t("howItWorks")}
          </a>
          <a
            href="#features"
            className="py-3 text-[15px] font-semibold text-ink border-b border-hairline"
          >
            {t("features")}
          </a>
          <a
            href="#faq"
            className="py-3 text-[15px] font-semibold text-ink border-b border-hairline"
          >
            {t("faq")}
          </a>
          <div className="flex items-center justify-between pt-5">
            <LanguageToggle />
            <NavCTA />
          </div>
        </div>
      </div>
    </header>
  );
}
