// Bindy's daylight world: warm paper, the app's green used as a button (never a
// full-bleed panel), miniature card-shop scenes carrying the colour.
export const colors = {
  bg: "#f7f4ef",
  surfaceAlt: "#fffdfa",
  ink: "#14171a",
  muted: "#6a6f72",
  soft: "#9aa0a3",
  hairline: "#e6e0d6",
  border: "#ddd6c9",
  neutral: "#eeeae3",
  green: "#0f8256",
  greenBright: "#17a86e",
  greenDeep: "#0c5f3f",
  greenDark: "#0a3c2c",
  greenTint: "#eaf4ee",
  clay: "#c47a53",
  pausedBg: "#fff3d6",
  pausedInk: "#8a5a00",
  closedBg: "#eeeae3",
  closedInk: "#6b6b72",
} as const;

export const radii = {
  button: "12px",
  buttonSm: "10px",
  card: "16px",
  phoneOuter: "34px",
  phoneInner: "27px",
  badge: "3px",
} as const;

export const type = {
  hero: {
    size: "clamp(38px, 6vw, 68px)",
    lineHeight: "1.0",
    letterSpacing: "-0.035em",
    weight: "800",
  },
  section: {
    size: "clamp(28px, 3.6vw, 46px)",
    lineHeight: "1.02",
    letterSpacing: "-0.03em",
    weight: "700",
  },
  title: { size: "20px", lineHeight: "1.15", letterSpacing: "-0.02em", weight: "700" },
  subtitle: { size: "17px", lineHeight: "1.4", letterSpacing: "-0.01em", weight: "600" },
  body: { size: "16px", lineHeight: "1.6", weight: "400" },
  bodySm: { size: "15px", lineHeight: "1.55", weight: "400" },
  eyebrow: { size: "13px", lineHeight: "1.2", letterSpacing: "0.02em", weight: "600" },
} as const;
