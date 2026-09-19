import { useTranslations } from "next-intl";
import { Brand } from "./brand";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-hairline bg-surface-alt">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-6 py-10 text-[15px] text-muted md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex items-center gap-4">
          <Brand size={24} />
          <span>{t("copyright")}</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          <a
            href="https://nearmint.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            {t("maker")}
          </a>
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
