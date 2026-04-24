export const colors = {
  bg: "#ffffff",
  surfaceAlt: "#fafafa",
  ink: "#0a0a0c",
  muted: "#6d6d76",
  soft: "#b5b5bb",
  hairline: "#ececef",
  border: "#e3e3e8",
  neutral: "#f1f1f4",
  pausedBg: "#fff3d6",
  pausedInk: "#8a5a00",
  closedBg: "#f1f1f4",
  closedInk: "#6b6b72",
} as const;

export const radii = {
  button: "12px",
  buttonSm: "10px",
  card: "16px",
  phoneOuter: "34px",
  phoneInner: "28px",
  badge: "3px",
} as const;

export const type = {
  hero: {
    size: "clamp(34px, 6vw, 72px)",
    lineHeight: "0.96",
    letterSpacing: "-0.04em",
    weight: "800",
  },
  section: {
    size: "clamp(24px, 3.2vw, 44px)",
    lineHeight: "1.0",
    letterSpacing: "-0.035em",
    weight: "800",
  },
  title: { size: "20px", lineHeight: "1.15", letterSpacing: "-0.02em", weight: "700" },
  subtitle: { size: "16px", lineHeight: "1.4", letterSpacing: "-0.01em", weight: "600" },
  body: { size: "14px", lineHeight: "1.55", weight: "500" },
  bodySm: { size: "13px", lineHeight: "1.5", weight: "500" },
  eyebrow: { size: "11px", lineHeight: "1.2", letterSpacing: "0.2em", weight: "800" },
} as const;
