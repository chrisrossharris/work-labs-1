# WORK Launch Pad (Astro)

Minimal, high-end Astro SSG build with Tailwind, GSAP, Lenis, and Swup.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Motion Stack

- `Swup` handles route transitions via `src/lib/swup.ts`
- `Lenis` smooth scrolling is in `src/lib/lenis.ts`
- `GSAP` reveal + transitions are in `src/lib/motion/*`
- `RevealText` component marks text nodes for title/paragraph reveal variants

## GSAP Plugin Notes

- `Flip` is included and used when available.
- `SplitText` may require GSAP Club access depending on your setup.
- If `SplitText` is unavailable, reveal behavior falls back to performant opacity/translate animations.

## Required Routes

- `/`
- `/about`
- `/model`
- `/ventures`
- `/ventures/[slug]`
- `/contact`

## Key Interactions Included

- Title reveal: character-by-character
- Paragraph reveal: line-by-line (with SplitText)
- Swup page transitions (`leave` cleanup, `enter` reveal replay)
- Flip continuity: nav `About` -> About page title
- Flip continuity: venture card -> venture detail title
- Ventures page: vertical scaling cards + Flip-powered grid toggle
- Reduced-motion guardrails
# work-labs-1
