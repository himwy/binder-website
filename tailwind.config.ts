import type { Config } from "tailwindcss";
import { colors, radii } from "./lib/tokens";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: colors.bg,
        "surface-alt": colors.surfaceAlt,
        ink: colors.ink,
        muted: colors.muted,
        soft: colors.soft,
        hairline: colors.hairline,
        border: colors.border,
        neutral: colors.neutral,
        "paused-bg": colors.pausedBg,
        "paused-ink": colors.pausedInk,
        "closed-bg": colors.closedBg,
        "closed-ink": colors.closedInk,
      },
      borderRadius: {
        btn: radii.button,
        "btn-sm": radii.buttonSm,
        card: radii.card,
        "phone-outer": radii.phoneOuter,
        "phone-inner": radii.phoneInner,
        badge: radii.badge,
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        tc: ["var(--font-noto-tc)", "var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
