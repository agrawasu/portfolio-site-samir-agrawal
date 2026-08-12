# Samir Agrawal — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind

Live: https://samir-agrawal-portfolio.netlify.app/

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Architecture

### Content layer

All site content lives in [`content/`](content/) as typed modules — no data
literals inside components. Pages import from `@/content`.

```
content/
  types.ts          shared shapes
  pillars.ts        the domains the site is organised around
  profile.ts        name, role, contact, résumé link
  projects.ts       every project; `featured` drives the home-page grid
  experience.ts     work history + education
  skills.ts         grouped and tagged by pillar
  certifications.ts
  index.ts          the barrel every page imports from
```

Editing content means editing one file, never a component. The home page and
the deep pages read from the same source, so they cannot drift apart.

The content layer stays plain serialisable data — no JSX. Icon mappings live in
the presentation layer (see `components/SocialLinks.tsx`), so a future assistant
corpus can consume `content/` directly.

### Home page: snapped sections over a live backdrop

The home page is a sequence of full-height sections that snap to one another
over a single persistent backdrop.

```
components/
  hero/Hero.tsx            server component — type, CTAs, live readout
  backdrop/Backdrop.tsx    client — the only client component on the route
  sections/Section.tsx     shared shell; every section snaps
```

**Backdrop.** One fixed layer behind the whole page. Each section owns a gradient
composition, all of them stay mounted, and only `opacity` changes — so moving
between sections is a compositor-only cross-fade with no React re-render and no
repaint of page content. An `IntersectionObserver` tracks every section's ratio
and picks the largest; state changes once per section crossing, not per frame.

Tracking ratios for *all* sections, rather than only the entries the observer
reports, matters: the callback reports deltas only, so picking a winner from
`entries` alone flickers between neighbours mid-scroll.

**Snapping** uses `scroll-snap-type: y proximity`, deliberately not `mandatory`.
Sections whose content exceeds the viewport must stay freely scrollable, and
proximity only snaps once scrolling comes to rest near a boundary. It is
disabled below `768px` and under `prefers-reduced-motion`.

`.snap-section` carries `scroll-margin-top: var(--header-height)` so snap points
land below the sticky header. `#hero` overrides that to `0` and is pulled up
under the header with a negative margin, so its backdrop runs full-bleed.

**No WebGL.** An earlier version rendered a low-poly desk in react-three-fiber.
It was cut: representational geometry gets measured against a reference it
cannot meet at that fidelity, and an abstract backdrop does more for less. The
entire Three.js stack is gone from the dependency tree.

### Typography

Two families, each doing what it is good at — Inter for prose and headings,
JetBrains Mono reserved for labels, chips and metadata via the `.eyebrow` and
`.chip` classes.

Note that `fontFamily` must be set inside `theme.extend`. Setting it at theme
root replaces Tailwind's entire font scale, which previously left body copy with
no `font-sans` to inherit and forced every paragraph into monospace.

### Gotcha: Tailwind content globs

`tailwind.config.js` must list `ts,tsx`. It originally scanned only `js,jsx`;
after the TypeScript migration Tailwind silently stopped seeing almost every
file and tree-shook most of the stylesheet — including all `@layer components`
classes — with no build error. If styles vanish, check the globs first.

## Extending it

**Ambient / real-time layer.** Partly seeded: the hero readout renders real
counts from `content/`, and is the natural place for a live or incrementing
value. If several such elements appear, add one subscribable clock rather than
letting each component spawn its own timer.

**Scoped assistant.** Not built. `content/` is already the corpus: a build step
can serialise the same exports into a retrieval index, and `app/api/` is free
for the endpoint. No page component would need to change.

**More backdrop states.** Adding a section means adding its id to
`BACKDROP_SECTIONS` and one CSS rule for its gradient. Nothing else.

## Known gaps

- **Mentor Matching has no screenshot.** Its card renders the typographic
  fallback until one lands in `public/assets/projects/`. Its `stack` lists only
  the three technologies I could confirm — front-end and data layer are missing.
- **Loch Suite (Tauri) is intentionally absent** from `projects.ts` pending its
  overhaul. Tauri stays listed in `skills.ts`. Add an entry once it settles.
- **Gamedev and Blender are deliberately excluded** as too niche. `PillarId` is
  a union type, so re-adding a pillar is a typed change the compiler will walk
  you through.
- `/contact` still uses `emailjs-com` (legacy, unmaintained) and is by far the
  heaviest route at 163 kB. Worth replacing with a route handler.
