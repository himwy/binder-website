import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const title = locale === "zh" ? "面對面，交換每一張卡。" : "Trade cards. Meet in person.";
  return new ImageResponse(
    <div
      style={{
        background: "#fff",
        color: "#0a0a0c",
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 0.96,
          maxWidth: 900,
        }}
      >
        {title}
      </div>
      <div style={{ position: "absolute", bottom: 80, left: 80, fontSize: 22, fontWeight: 700 }}>
        Binder — binderhk.com
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
