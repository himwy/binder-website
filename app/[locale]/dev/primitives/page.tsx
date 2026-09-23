import { AndroidButton, AppStoreButton, NavDownloadLink } from "@/components/store-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

export default function PrimitivesDemo() {
  return (
    <main className="mx-auto max-w-page space-y-8 p-12">
      <Eyebrow>Hong Kong · Out now</Eyebrow>
      <SectionHeading
        index="01"
        kicker="HOW IT WORKS"
        title="Four steps, one handshake."
        lede="Real screens from the app, in the language you're reading."
      />
      <div className="flex flex-wrap items-center gap-3">
        <AppStoreButton place="hero" />
        <AndroidButton place="hero" />
        <NavDownloadLink />
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-card bg-green-dark p-6">
        <AppStoreButton place="download" variant="white" />
        <AndroidButton place="download" tone="dark" />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="ghost">Secondary</Button>
        <Button variant="text-link">Text link</Button>
      </div>
      <div className="flex flex-wrap gap-2">
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
