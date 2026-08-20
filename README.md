# Bits&Gigs — Agency Website

React + Vite + TypeScript + Tailwind CSS v4, with Framer Motion animations.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` — Navbar, Hero, Services, TechStack, RecentWork, Process,
  Testimonials, Contact, Footer, Counter
- `src/data/content.ts` — all copy/content used across sections, edit here to
  change services, tech stack, portfolio items, process steps, testimonials
- `src/index.css` — Tailwind v4 theme tokens (colors, fonts) + custom
  animation keyframes (marquee, floating device mockups, pulse rings)

## Notes

- Fully responsive (mobile menu, stacked grids down to small screens).
- Respects `prefers-reduced-motion`.
- Portfolio thumbnails and the hero device stack are hand-built CSS/SVG
  mockups (no external images), so there are zero image assets to swap in —
  drop in real screenshots later by replacing the `*Thumb` components in
  `RecentWork.tsx` and the mock components in `Hero.tsx` with `<img>` tags.
