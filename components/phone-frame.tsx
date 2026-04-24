import { clsx } from "clsx";
import type { ReactNode } from "react";

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "relative w-[280px] h-[570px] rounded-phone-outer border border-border bg-gradient-to-br from-[#fafafa] to-white p-[10px]",
        className,
      )}
    >
      <div className="relative w-full h-full overflow-hidden rounded-phone-inner border border-border bg-white">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 h-[26px] w-[90px] rounded-[14px] bg-ink z-10" />
        <div className="flex flex-col h-full pt-[48px] px-[14px] pb-[12px]">{children}</div>
      </div>
    </div>
  );
}
