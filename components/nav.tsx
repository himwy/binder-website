import { getWaitlistUrl } from "@/lib/waitlist-url";
import { useTranslations } from "next-intl";
import { Brand } from "./brand";
import { LanguageToggle } from "./language-toggle";
import { Button } from "./ui/button";

export function Nav() {
  const t = useTranslations("nav");
  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-[10px] border-b border-hairline">
      <div className="max-w-page mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Brand />
          <nav
            aria-label="Primary"
            className="hidden md:flex gap-7 text-[13px] font-medium text-muted"
          >
            <a href="#how-it-works" className="hover:text-ink">
              {t("howItWorks")}
            </a>
            <a href="#features" className="hover:text-ink">
              {t("features")}
            </a>
            <a href="#faq" className="hover:text-ink">
              {t("faq")}
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Button variant="nav-primary" as="a" href={getWaitlistUrl()}>
            {t("cta")}
          </Button>
        </div>
      </div>
    </header>
  );
}
