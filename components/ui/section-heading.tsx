import { Eyebrow } from "./eyebrow";

type Props = { index: string; kicker: string; title: string; lede?: string; id?: string };

export function SectionHeading({ index, kicker, title, lede, id }: Props) {
  return (
    <div className="mb-12 md:mb-14" id={id}>
      <Eyebrow className="tnum">
        {index} / {kicker}
      </Eyebrow>
      <h2 className="mt-3 max-w-[20ch] text-[clamp(28px,3.6vw,46px)] font-bold leading-[1.02] text-ink">
        {title}
      </h2>
      {lede ? <p className="mt-4 max-w-[58ch] text-[17px] text-muted">{lede}</p> : null}
    </div>
  );
}
