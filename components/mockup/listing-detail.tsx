export function ListingDetail() {
  return (
    <>
      <div className="flex justify-between items-center pb-[14px] px-[6px] border-b border-hairline">
        <span className="text-[15px] font-extrabold">←</span>
        <span className="w-[26px] h-[26px] rounded-full bg-ink text-white text-[10px] font-extrabold flex items-center justify-center">
          MH
        </span>
      </div>
      <div className="mx-[4px] my-[10px] h-[110px] rounded-[8px] bg-neutral border border-border flex items-center justify-center text-soft text-[10px] font-bold uppercase tracking-[0.1em]">
        Charizard ex
      </div>
      <div className="px-[6px] text-[9px] font-extrabold uppercase tracking-[0.14em] text-muted">
        JP · PSA 10 · NEW
      </div>
      <div className="px-[6px] pt-[4px] text-[13px] font-bold tracking-[-0.01em]">
        Charizard ex — SIR
      </div>
      <div className="px-[6px] pt-[4px] pb-[10px] border-b border-hairline text-[11px] font-extrabold tnum">
        HK$ 4,200 · ref. market
      </div>
      <div className="px-[6px] pt-[10px] text-[9px] font-extrabold uppercase tracking-[0.14em] text-muted">
        They want
      </div>
      <div className="px-[6px] pt-[4px] pb-[8px] text-[11px] font-bold">Pikachu VMAX Rainbow</div>
      <div className="flex gap-[6px] items-center px-[6px] py-[10px] border-t border-b border-hairline">
        <div className="w-[22px] h-[22px] rounded-full bg-ink text-white text-[9px] font-extrabold flex items-center justify-center">
          RY
        </div>
        <div>
          <div className="text-[11px] font-bold">@ryo_hk</div>
          <div className="text-[9px] text-muted">★ 4.9 · 23 trades</div>
        </div>
      </div>
      <div className="mt-auto mx-[6px] mb-[10px] border-[1.5px] border-ink rounded-[10px] py-[10px] text-center text-[11px] font-bold">
        Offer as wanted
      </div>
    </>
  );
}
