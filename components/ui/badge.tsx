import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "new" | "neutral" | "paused" | "closed";

type Props = {
  variant: Variant;
  lang?: "en" | "zh";
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  new: "bg-ink text-white",
  neutral: "bg-neutral text-ink",
  paused: "bg-paused-bg text-paused-ink",
  closed: "bg-closed-bg text-closed-ink",
};

export function Badge({ variant, lang, children, className }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-badge px-[5px] py-[2px] text-[10px] font-extrabold uppercase tracking-[0.06em]",
        variants[variant],
        lang === "zh" && "font-tc",
        className,
      )}
    >
      {children}
    </span>
  );
}
