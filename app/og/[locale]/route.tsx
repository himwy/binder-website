import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const title = isZh ? "換卡。面對面交收。" : "Trade cards. Meet in person.";
  const note = isZh
    ? "iPhone 同 Android 已上架 · 香港"
    : "Out now on iPhone and Android · Hong Kong";
  return new ImageResponse(
    <div
      style={{
        background: "#f7f4ef",
        color: "#14171a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 26,
          color: "#0c5f3f",
          fontWeight: 700,
        }}
      >
        <div style={{ width: 16, height: 16, borderRadius: 8, background: "#17a86e" }} />
        Bindy · binderhk.com
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.02,
          maxWidth: 940,
        }}
      >
        {title}
      </div>
      <div style={{ marginTop: 32, fontSize: 30, color: "#4d5356" }}>{note}</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
