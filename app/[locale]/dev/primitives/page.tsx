import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

export default function PrimitivesDemo() {
  return (
    <main className="p-12 space-y-8 max-w-page mx-auto">
      <Eyebrow>Hong Kong · Beta</Eyebrow>
      <SectionHeading index="01" kicker="HOW IT WORKS" title="Four steps, one handshake." />
      <div className="flex gap-3">
        <Button variant="primary">Join the waitlist</Button>
        <Button variant="nav-primary">Join the waitlist</Button>
        <Button variant="text-link">Watch the tour</Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Badge variant="new">NEW</Badge>
        <Badge variant="neutral">EN</Badge>
        <Badge variant="neutral">JP</Badge>
        <Badge variant="neutral" lang="zh">
          繁
        </Badge>
        <Badge variant="neutral" lang="zh">
          简
        </Badge>
        <Badge variant="neutral">PSA 10</Badge>
        <Badge variant="neutral">RAW</Badge>
        <Badge variant="paused">PAUSED</Badge>
        <Badge variant="closed">CLOSED</Badge>
      </div>
    </main>
  );
}
