import { Badge } from "../ui/badge";

type Row = {
  title: string;
  meta: string;
  lang: "EN" | "JP" | "繁";
  tags: Array<{ variant: "new" | "neutral" | "paused"; label: string }>;
  color: string;
};

const rows: Row[] = [
  {
    title: "Charizard ex · 151",
    meta: "@ryo_hk · Mong Kok",
    lang: "JP",
    color: "bg-gradient-to-br from-[#f8e6dc] to-[#f1c7b0]",
    tags: [
      { variant: "new", label: "NEW" },
      { variant: "neutral", label: "PSA 10" },
    ],
  },
  {
    title: "Pikachu VMAX",
    meta: "@coco.cards · Causeway Bay",
    lang: "EN",
    color: "bg-gradient-to-br from-[#fff3d6] to-[#f5d88a]",
    tags: [{ variant: "neutral", label: "RAW" }],
  },
  {
    title: "Mewtwo ex · S&V",
    meta: "@marcus_hk · Sha Tin",
    lang: "EN",
    color: "bg-gradient-to-br from-[#e8e4f3] to-[#c9c0e0]",
    tags: [{ variant: "paused", label: "PAUSED" }],
  },
];

export function BrowseFeed() {
  return (
    <>
      <div className="flex justify-between items-center pb-[14px] px-[6px] border-b border-hairline">
        <span className="text-[15px] font-extrabold tracking-[-0.015em]">Binder</span>
        <span className="w-[26px] h-[26px] rounded-full bg-ink text-white text-[10px] font-extrabold flex items-center justify-center">
          MH
        </span>
      </div>
      <div className="flex gap-[6px] px-[6px] py-[10px]">
        <span className="px-[11px] py-[5px] rounded-full bg-ink text-white text-[11px] font-bold">
          All
        </span>
        <span className="px-[11px] py-[5px] rounded-full border border-border text-muted text-[11px] font-bold">
          Nearby
        </span>
        <span className="px-[11px] py-[5px] rounded-full border border-border text-muted text-[11px] font-bold">
          JP
        </span>
      </div>
      {rows.map((r) => (
        <div key={r.title} className="flex gap-[10px] px-[6px] py-[12px] border-b border-hairline">
          <div
            className={`relative w-[54px] h-[76px] rounded-[7px] border border-border flex-shrink-0 ${r.color}`}
          >
            <span className="absolute top-[4px] left-[4px] text-[8px] font-extrabold bg-ink/90 text-white px-[4px] py-[2px] rounded-[3px]">
              {r.lang}
            </span>
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-[3px] pt-[4px]">
            <div className="text-[12.5px] font-bold tracking-[-0.015em]">{r.title}</div>
            <div className="text-[10.5px] text-muted font-medium">{r.meta}</div>
            <div className="flex gap-[4px] mt-[5px]">
              {r.tags.map((t) => (
                <Badge key={t.label} variant={t.variant}>
                  {t.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="mt-auto flex justify-around pt-[10px] pb-[14px] px-[6px] border-t border-hairline text-[9px] font-bold uppercase tracking-[0.1em] text-muted">
        <span className="text-ink">Browse</span>
        <span>Search</span>
        <span>Post</span>
        <span>Chats</span>
        <span>Me</span>
      </div>
    </>
  );
}
