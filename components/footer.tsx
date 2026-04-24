import { useTranslations } from "next-intl";
import { Brand } from "./brand";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-page mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-muted">
        <div className="flex items-center gap-4">
          <Brand size={22} />
          <span>{t("copyright")}</span>
        </div>
        <nav aria-label="Footer" className="flex gap-5">
          <a
            href="https://instagram.com/binder_hk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            {t("instagram")} · @binder_hk
          </a>
          <a href="/terms" className="hover:text-ink">
            {t("terms")}
          </a>
          <a href="/privacy" className="hover:text-ink">
            {t("privacy")}
          </a>
        </nav>
      </div>
    </footer>
  );
}
