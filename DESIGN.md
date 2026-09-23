# Design

## The world

A bright Hong Kong card shop in the afternoon. Every image on the site is a
photograph of the same miniature world: a shophouse with a mint awning, a
cha chaan teng table, a tram-side handshake, a binder on a counter.

Two rules, both learned the hard way:

- **Scenes are never cut out.** Every render keeps its ground — pavement, floor,
  counter, wall — and is cropped like a photograph. A background-removed model
  floating on flat paper reads as AI collage and shows its clipped edges.
- **Green is a button, never a wall.** A full-bleed panel of the app's
  `#18b878` is painful to look at. Bright green survives as the dot on a kicker;
  buttons use `#0f8256` (4.83:1 against white, so 14px labels pass AA); the
  download band is the shop under a deep `#0a3c2c` wash.

Scenes live in `public/scenes` (Recraft V4.1 Pro, graded and cropped with
sharp). Inspect every generated image at full size for AI glitches before it
ships.

## Colour (`lib/tokens.ts`)

- `bg` #f7f4ef paper, the ground everywhere. `surface-alt` #fffdfa for raised
  paper (nav, footer, FAQ hover).
- `ink` #14171a headings and body. `muted` #6a6f72 secondary text — never
  smaller than 15px.
- `green` #0f8256 buttons. `green-bright` #17a86e decorative dots only.
  `green-deep` #0c5f3f green text. `green-dark` #0a3c2c the download band.
- `hairline` #e6e0d6 rules and borders.

## Type

Funnel Display (headings) + Funnel Sans (everything else), Noto Sans TC for
繁體中文, all via `next/font/google`. Body is 16–17px; nothing readable is under
15px. Hero `clamp(38px,6vw,68px)`, section headings `clamp(28px,3.6vw,46px)`.

## Structure

1. **Hero** — the street scene. Desktop fills the section with it and lays a
   paper wash across the left third for the copy; phones stack instead (copy on
   clean paper, scene full-bleed underneath), because washing a scene out
   behind phone text loses both.
2. **How it works** — the four real App Store screens in device bezels, in the
   reader's language (`public/screens/<screen>-<en|tc>.webp`, cropped from the
   1284×2778 marketing shots at left 135, top 724, 1014×2054).
3. **Features** — three scenes in 4:3 frames, `object-fit: cover`.
4. **FAQ** — `<details>` list, 18px questions.
5. **Download band** — the shop at deep green evening. Solid `green-dark`
   behind the image so it never flashes paper and so contrast is real, not
   guessed.

## Buttons

App Store and Google Play everywhere the waitlist button used to be
(`components/store-buttons.tsx`). The Android button falls back to a "coming
soon" pill if `ANDROID_LIVE` is switched off in `lib/store.ts`, so the site
never shows a dead store link — see README.

## Motion

Hero copy rises 18px once on load (`.rise`, transform and opacity only). Nothing
else moves. No scroll animation library, no parallax, no scroll-jacking; the
whole thing is off under `prefers-reduced-motion`, which
`tests/behavior/reduced-motion.spec.ts` checks.
