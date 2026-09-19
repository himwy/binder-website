import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import type React from "react";

type Variant = "primary" | "ghost" | "nav-primary" | "white" | "outline-light" | "text-link";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const base =
  "inline-flex items-center justify-center gap-[10px] font-semibold tracking-[-0.005em] transition-colors duration-150 active:translate-y-px disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "h-[54px] px-6 rounded-btn bg-green text-white text-[16px] shadow-[0_10px_22px_rgba(12,95,63,0.22)] hover:bg-[#0c6a47] focus-visible:outline-green-deep",
  ghost:
    "h-[54px] px-6 rounded-btn bg-white/88 text-ink text-[16px] border-[1.5px] border-border hover:bg-white focus-visible:outline-ink",
  "nav-primary":
    "h-[42px] px-4 rounded-btn-sm bg-green text-white text-[14px] hover:bg-[#0c6a47] focus-visible:outline-green-deep",
  white:
    "h-[54px] px-6 rounded-btn bg-white text-green-dark text-[16px] hover:bg-[#f2f7f3] focus-visible:outline-white",
  "outline-light":
    "h-[54px] px-6 rounded-btn border-[1.5px] border-white/55 text-white text-[16px] hover:bg-white/10 focus-visible:outline-white",
  "text-link":
    "h-[44px] px-1 text-ink border-b-[1.5px] border-border hover:border-ink rounded-none text-[16px] font-semibold focus-visible:outline-ink",
};

export function Button({
  variant = "primary",
  as,
  href,
  className,
  onClick,
  children,
  ...rest
}: Props) {
  const cls = clsx(base, variants[variant], className);
  if (as === "a" || href) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={cls}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...rest}
    >
      {children}
    </button>
  );
}
