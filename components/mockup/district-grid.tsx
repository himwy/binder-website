import { DISTRICTS } from "@/lib/content";

export function DistrictGrid() {
  return (
    <div className="grid grid-cols-2 gap-[6px] px-[6px] pt-[20px]">
      {DISTRICTS.map((d, i) => (
        <div
          key={d}
          className={`rounded-[8px] border border-border px-[8px] py-[12px] text-[11px] font-bold tracking-[-0.01em] ${i === 2 ? "bg-ink text-white border-ink" : "bg-white text-ink"}`}
        >
          {d}
        </div>
      ))}
    </div>
  );
}
