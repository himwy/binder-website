# Binder website

Pre-launch landing page for Binder — Hong Kong's Pokémon trading board.

Live: [binderhk.com](https://binderhk.com) (once deployed)

## Stack

- Next.js 15 (App Router, static export)
- TypeScript strict mode
- Tailwind CSS v3 + custom token system (`lib/tokens.ts`)
- next-intl (EN / 繁中)
- Framer Motion (scroll-triggered fades)
- `@splinetool/react-spline` (hero 3D phone — scene authoring pending)
- Plus Jakarta Sans + Noto Sans TC via `next/font/google`
- Biome (lint + format)
- Playwright + axe-core (visual regression, behavior, a11y)
- Lighthouse CI
- Vercel Analytics (single `waitlist_click` event)

## Prerequisites

- Node.js ≥ 20.11
- npm ≥ 10

## Setup

```bash
git clone https://github.com/himwy/binder-website.git
cd binder-website
npm install

# create .env.local
echo 'NEXT_PUBLIC_WAITLIST_URL=https://YOUR-GOOGLE-FORM-URL' > .env.local

npm run dev
```

Visit `http://localhost:3000/en` (English) or `http://localhost:3000/zh` (繁體中文).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build (static export to `out/`) |
| `npm run start` | Serve production build locally |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | `biome check .` |
| `npm run format` | `biome format --write .` |
| `npm run test:visual` | Playwright visual regression |
| `npm run test:behavior` | Playwright behavior tests |
| `npm run test:a11y` | Axe-core accessibility audit |
| `npm run test` | typecheck + lint + all Playwright |
| `npm run bake:screens` | Bake app screen PNGs for Spline textures (dev server must be running) |

## Design system

Full brand spec: [`../docs/superpowers/specs/2026-04-25-binder-website-design.md`](../docs/superpowers/specs/2026-04-25-binder-website-design.md)
Implementation plan: [`../docs/superpowers/plans/2026-04-25-binder-website-plan.md`](../docs/superpowers/plans/2026-04-25-binder-website-plan.md)

Core brand rules:
- Primary button is **outlined** (white fill, 1.5px ink border, ink text). Filled black is reserved for Apple sign-in + Accept-offer.
- No drop shadows. Borders and surface tints only.
- Hover states darken background, never opacity.
- Bilingual (EN + 繁) from day one. Every string flips.

## Spline scene authoring

The hero 3D phone scene isn't live yet. To enable it:

1. Author a scene in [Spline](https://app.spline.design/) per the spec §5
2. Export `.splinecode` files to `public/spline/hero.splinecode` and `public/spline/steps.splinecode`
3. Restore the dynamic Spline import in `components/spline-scene.tsx` (see git history for the full version)
4. Bake new screen textures: start dev server, then `npm run bake:screens`

Until then, `public/hero-fallback.png` is shown statically.

## Deployment

- Push to `main` → Vercel auto-deploys
- PR → Vercel preview deploy
- Custom domain: `binderhk.com`
- Add env var in Vercel: `NEXT_PUBLIC_WAITLIST_URL` = your Google Form URL

Because the static export emits `/en.html` and `/zh.html` (not `/index.html`), a Vercel rewrite routes `/` → `/en`:

```json
// vercel.json
{
  "rewrites": [
    { "source": "/", "destination": "/en" }
  ]
}
```

## License

Proprietary — © 2026 Binder Labs.
