import { clsx } from "clsx";
import type { ReactNode } from "react";

/** Kicker label: a green dot and a readable 14px word. Never tiny grey caps. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-[9px] text-[14px] font-semibold tracking-[0.01em] text-green-deep",
        className,
      )}
    >
      <span aria-hidden="true" className="h-[9px] w-[9px] flex-none rounded-full bg-green-bright" />
      {children}
    </p>
  );
}
