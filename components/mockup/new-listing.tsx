export function NewListing() {
  return (
    <>
      <div className="flex justify-between items-center pb-[10px] px-[6px] border-b border-hairline text-[11px] font-bold">
        <span className="text-muted">Cancel</span>
        <span>New listing</span>
        <span>Post</span>
      </div>
      <Section label="I HAVE">
        <Slot lang="JP" title="Charizard ex — SIR" meta="JP · PSA 10 · HK$ 4,200" />
      </Section>
      <Section label="I WANT">
        <Slot lang="EN" title="Pikachu VMAX Rainbow" meta="EN · RAW · HK$ 1,800" />
      </Section>
      <div className="px-[6px] py-[6px] bg-neutral rounded-[8px] mx-[6px] mt-[6px] text-[10px]">
        <div className="font-bold">HK$ 2,400 cash</div>
        <div className="text-muted text-[9px]">Balancing difference</div>
      </div>
      <div className="mt-auto mx-[6px] mb-[10px] px-[10px] py-[8px] text-[10px] text-muted">
        Meet in: Sha Tin
      </div>
    </>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="pt-[10px]">
      <div className="px-[6px] text-[9px] font-extrabold uppercase tracking-[0.14em] text-muted">
        {label}
      </div>
      {children}
    </div>
  );
}

function Slot({ lang, title, meta }: { lang: string; title: string; meta: string }) {
  return (
    <div className="flex gap-[10px] px-[6px] py-[8px]">
      <div className="relative w-[46px] h-[64px] rounded-[6px] border border-border bg-neutral flex-shrink-0">
        <span className="absolute top-[3px] left-[3px] text-[7px] font-extrabold bg-ink/90 text-white px-[3px] rounded-[2px]">
          {lang}
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-[11px] font-bold tracking-[-0.01em]">{title}</div>
        <div className="text-[9px] text-muted tnum">{meta}</div>
      </div>
    </div>
  );
}
