# RAP Marketing Site

The public-facing marketing site for the **Responsible AI Professional (RAP)** certification — a 4-week cohort program from BC + AI Ecosystem Association and TheUpgrade.

**Production:** [https://rap.bc-ai.ca](https://rap.bc-ai.ca)

---

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript 5
- Motion (Framer Motion successor) for animation
- Lenis for smooth scroll
- Vercel Analytics + Speed Insights
- `next/og` for OG image generation
- Sharp + plaiceholder for image optimization

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build           # production build
npm run start           # serve production build
npm run optimize:images # regenerate optimized variants + blur placeholders for public/images
```

---

## Brand reference

Palette, fonts, motion principles, and the design spec live in
[`/Users/kk/.claude/plans/yeah-sure-we-can-dazzling-pebble.md`](../../.claude/plans/yeah-sure-we-can-dazzling-pebble.md).

Core tokens (see `app/globals.css`):

- `forest-950 #0d1f15` · `forest-900 #1E3A2B` · base canvas
- `cyan #00DDCC` · primary accent (bioluminescent)
- `orange #D35C37` · CTA / warm signal
- `cream #F7F4E9` · body text
- `gold #FFD700` · highlight
- Fonts: **Fraunces** (serif headings, opsz/SOFT/WONK axes) + **Inter** (UI)

Motion principles:

- All animation respects `prefers-reduced-motion: reduce` (see `lib/useReducedMotion.ts`)
- Hero word-stagger, parallax, magnetic buttons, page transitions all degrade to instant/opacity-only
- Lenis smooth-scroll disabled when reduced-motion is on

---

## Route map (12 routes)

| Path | Purpose |
| --- | --- |
| `/` | Hero, pillars mosaic, 4-module overview, instructor portraits, CTA |
| `/program` | Sticky-scroll arc through the 4 modules, artifact builders, capstone |
| `/program/m1` | Module 01 deep-dive — Foundations |
| `/program/m2` | Module 02 deep-dive — Core Ethics |
| `/program/m3` | Module 03 deep-dive — Societal Impact |
| `/program/m4` | Module 04 deep-dive — The Human Element |
| `/methodology` | The four teaching principles (arguments / frameworks / artifacts / cohort) |
| `/instructors` | Kris Krüg, Martin Lopatka, Sarah Downey — bios + manifesto |
| `/cohorts` | Three 2026 cohorts (May online · Sep online · Oct in-person), seats remaining |
| `/pricing` | $1,500 CAD tuition, BC+AI member half-off, refund + scholarship policies |
| `/faq` | Twelve answers — time, prereqs, refund, format |
| `/enroll` | Handoff page → redirects to course platform enrollment form |

Plus auto-generated at build:

- `/sitemap.xml` (`app/sitemap.ts`)
- `/robots.txt` (`app/robots.ts`)
- `/opengraph-image` and per-route `<route>/opengraph-image` (12 total)

---

## SEO + sharing

- Per-page `metadata` exports set title, description, canonical, OG, and Twitter card
- Root layout defines `metadataBase`, title template, and site-wide Twitter `summary_large_image`
- 12 OG images generated at build time via `app/<route>/opengraph-image.tsx` using `lib/og.tsx`

---

## Accessibility + performance

- `npm run build` produces 100% static pages
- WCAG 2.1 AA — axe-core scan across all 12 routes returns **0 violations** (`node scripts/run-axe.mjs`)
- Lighthouse mobile (Sprint 6 baseline): A11y 100, Best Practices 96, SEO 100, Performance 81–91
- Skip-link as first focusable element in `app/layout.tsx`
- Single `<h1>` per page; heading hierarchy enforced
- All decorative imagery uses `aria-hidden="true"` / `alt=""`
- `prefers-reduced-motion` honored across every animated component

---

## Deploy

The site is linked to the Vercel project `rap-marketing` (team `walkswithaswaggers-projects`).

```bash
vercel deploy --prod
```

Vercel auto-aliases the latest production deployment to `rap.bc-ai.ca`.

For preview deploys (any branch push):

```bash
vercel deploy
```

---

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve `.next` build |
| `npm run optimize:images` | Regenerate WebP/AVIF + blur placeholders for `public/images/` |
| `node scripts/run-axe.mjs` | Run axe-core across all 12 routes (requires running `npm run start` first) |

---

## Related

- **Async course:** [`rap-course-delta.vercel.app`](https://rap-course-delta.vercel.app) — the e-learning HTML/JS course where students do the work + verify certificates
- **BC + AI Ecosystem:** [`bc-ai-ecosystem.com`](https://bc-ai-ecosystem.com)
