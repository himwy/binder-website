// Passthrough root layout: app/[locale]/layout.tsx renders <html>. This file
// exists so app/not-found.tsx can catch unmatched URLs globally — with
// `output: "export"` it becomes the 404.html that static hosts serve.
// globals.css must be imported here (not in not-found.tsx): Next only
// collects CSS from layouts, so the 404 page would otherwise ship unstyled.
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
