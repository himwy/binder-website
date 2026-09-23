# Bindy website

The download page for Bindy — Hong Kong's Pokémon trading board.

Live: [binderhk.com](https://binderhk.com) · iPhone and Android

## Stack

- Next.js 15 (App Router, static export to `out/`)
- TypeScript strict mode
- Tailwind CSS v3 + token system (`lib/tokens.ts`)
- next-intl (EN / 繁體中文)
- Funnel Display + Funnel Sans + Noto Sans TC via `next/font/google`
- Biome (lint + format)
- Playwright + axe-core (visual regression, behaviour, a11y)
- Lighthouse CI
- Vercel Analytics (single `download_click` event)

No animation library, no 3D runtime: the page is images, type and CSS.

## Prerequisites

- Node.js ≥ 20.11
- npm ≥ 10

## Setup

```bash
git clone https://github.com/himwy/binder-website.git
cd binder-website
npm install
npm run dev
```

Visit `http://localhost:3000/en` (English) or `http://localhost:3000/zh` (繁體中文).
No env vars are required.

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
| `npm run test:behavior` | Playwright behaviour tests |
| `npm run test:a11y` | Axe-core accessibility audit |
| `npm run test` | typecheck + lint + all Playwright |

## Stores

Both are live: [App Store](https://apps.apple.com/hk/app/id6794384936) and
[Google Play](https://play.google.com/store/apps/details?id=tech.nearmint.binder).

`ANDROID_LIVE` in [`lib/store.ts`](lib/store.ts) is the single switch for the
Play button. Set it to `false` — for a suspended listing or a staged rollout —
and every Android CTA degrades to "coming soon" instead of a dead link;
`tests/behavior/download-cta.spec.ts` asserts the live state, so flip it with
the constant.

The app's own store URLs and kill-switch live in
[`app/api/app-config/route.ts`](app/api/app-config/route.ts), which the mobile
app fetches — raising `minBuild` there forces an update.

## Design

See [DESIGN.md](DESIGN.md).

## Deployment

- Push to `main` → Vercel auto-deploys
- PR → Vercel preview deploy
- Custom domain: `binderhk.com`

The static export emits `/en.html` and `/zh.html`, so `vercel.json` redirects
`/` → `/en`.

## License

Proprietary — © 2026 Near Mint.
