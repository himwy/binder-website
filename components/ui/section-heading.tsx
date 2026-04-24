import { Eyebrow } from "./eyebrow";

type Props = { index: string; kicker: string; title: string; id?: string };

export function SectionHeading({ index, kicker, title, id }: Props) {
  return (
    <div className="mb-12" id={id}>
      <Eyebrow className="mb-4 tnum">
        {index} / {kicker}
      </Eyebrow>
      <h2 className="text-[clamp(24px,3.2vw,44px)] leading-[1.0] tracking-[-0.035em] font-extrabold text-ink max-w-[24ch]">
        {title}
      </h2>
    </div>
  );
}
