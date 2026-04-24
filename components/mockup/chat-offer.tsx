export function ChatOffer() {
  return (
    <>
      <div className="flex gap-[6px] items-center pb-[10px] px-[6px] border-b border-hairline">
        <div className="w-[22px] h-[22px] rounded-full bg-ink text-white text-[9px] font-extrabold flex items-center justify-center">
          RY
        </div>
        <div>
          <div className="text-[11px] font-bold">@ryo_hk</div>
          <div className="text-[9px] text-muted">Charizard ex for Pikachu V</div>
        </div>
      </div>
      <div className="bg-neutral text-ink text-[10px] px-[8px] py-[6px] rounded-[10px] max-w-[80%] mx-[4px] mt-[8px]">
        Interested! Have a Pikachu VMAX, can do 2k cash
      </div>
      <div className="mx-[6px] mt-[10px] border border-border rounded-[10px] p-[8px]">
        <div className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-muted mb-[6px]">
          Counter-offer from @ryo_hk
        </div>
        <div className="flex items-center gap-[6px] pb-[8px] border-b border-hairline">
          <div className="w-[22px] h-[32px] bg-neutral border border-border rounded-[3px]" />
          <span className="text-[8px] font-bold text-muted">for</span>
          <div className="w-[22px] h-[32px] bg-neutral border border-border rounded-[3px]" />
          <span className="text-[8px] font-bold text-muted tnum">+ HK$ 2,000</span>
        </div>
        <div className="mt-[6px] py-[6px] bg-ink text-white text-[9px] font-bold text-center rounded-[6px]">
          Accept
        </div>
        <div className="mt-[4px] py-[6px] bg-white text-ink border-[1.5px] border-ink text-[9px] font-bold text-center rounded-[6px]">
          Counter
        </div>
      </div>
    </>
  );
}
