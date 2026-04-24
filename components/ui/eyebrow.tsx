import { clsx } from "clsx";
import type { ReactNode } from "react";

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
        "text-muted text-[11px] font-extrabold tracking-[0.2em] uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
