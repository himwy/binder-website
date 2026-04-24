import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "nav-primary" | "text-link";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
};

const base =
  "inline-flex items-center justify-center font-bold tracking-[-0.005em] transition-colors duration-150 active:translate-y-px disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "h-[54px] px-6 rounded-btn bg-white text-ink border-[1.5px] border-ink hover:bg-[#f8f8fa] text-[14px]",
  "nav-primary":
    "h-[44px] px-4 rounded-btn-sm bg-white text-ink border-[1.5px] border-ink hover:bg-[#f8f8fa] text-[12.5px]",
  "text-link":
    "h-[44px] px-1 text-ink border-b-[1.5px] border-border hover:border-ink rounded-none text-[14px] font-semibold",
};

export function Button({ variant = "primary", as, href, className, children, ...rest }: Props) {
  const cls = clsx(base, variants[variant], className);
  if (as === "a" || href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
