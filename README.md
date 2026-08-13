# Samir Agrawal — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind · static export to GitHub Pages

Live: https://sagrawal.dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
npm run images   # regenerate optimised images from assets-src/
npm run lint
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
  projects.ts       every project; `featured` drives the About panel
  experience.ts     work history + education
  skills.ts         grouped and tagged by pillar
  certifications.ts
  index.ts          the barrel every page imports from
```

Editing content means editing one file, never a component. The content layer
stays plain serialisable data — no JSX. Icon mappings live in the presentation
layer (see `components/SocialLinks.tsx` and the pillar icons in `app/page.tsx`).

### Shell

The site is a persistent two-column shell defined once in `app/layout.tsx`:

```
components/
  shell/Sidebar.tsx       profile card — sticky on desktop
  shell/PanelNav.tsx      nav; corner-docked on desktop, bottom bar on mobile
  shell/PanelHeading.tsx  panel title with the accent rule
```

Nav items are **real routes, not client-side panel swaps**, so every view is
linkable, refreshable and independently prerendered. `PanelHeading` carries
right padding on desktop to reserve space for the nav pill docked in the panel's
top-right corner.

Certifications sits under Resume in the nav rather than as a fifth item — a
fifth made the pill wide enough to collide with the heading beside it.

### Images

Masters live in `assets-src/`, **deliberately outside `public/`**. Everything
under `public/` is copied verbatim into the export, so keeping source PNGs there
would deploy 6 MB of files nothing references.

`npm run images` converts them into `public/assets/**.webp` (6.4 MB → 428 KB).
WebP only: with `images.unoptimized` a plain `<img>` is rendered and cannot
negotiate formats, so any AVIF emitted would ship and never be requested.

**Never point an `<Image>` at a file in `assets-src/`** — reference the
generated `.webp` under `/assets/`.

### Deployment

`output: "export"` emits static files to `out/`, published to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `main`.

Two files in `public/` matter for Pages:

- **`.nojekyll`** — without it Pages runs Jekyll, which ignores directories
  starting with an underscore. Next puts everything in `/_next`, so the site
  would deploy and render completely unstyled.
- **`CNAME`** — holds `sagrawal.dev`. Deleting it unsets the custom domain.

`trailingSlash: true` emits each route as a directory with `index.html`, since
Pages does not rewrite extensionless URLs.

## Gotchas worth knowing

**Tailwind content globs must list `ts,tsx`.** They originally scanned only
`js,jsx`; after the TypeScript migration Tailwind silently stopped seeing almost
every file and tree-shook most of the stylesheet, including all
`@layer components` classes, with no build error. If styles vanish, check here
first.

**Opacity modifiers must sit on Tailwind's 5-step scale.** `bg-accent/12`
compiles to nothing at all — no warning, no error. Use `/10` or `/15`, or
bracket syntax for an arbitrary value.

**`fontFamily` must be set inside `theme.extend`.** At theme root it replaces
Tailwind's entire font scale, leaving body copy with no `font-sans` to inherit.

**`NEXT_DIST_DIR` relocates the export too.** It exists so verification builds
cannot corrupt a running dev server's `.next`, but with `output: "export"` it
also moves the exported site into that directory instead of `out/`. CI never
sets it. Don't run a production build into `.next` while `next dev` is serving
from it — that produces `Cannot find module './NNN.js'`, which is always stale
cache and never a code problem.

## Known gaps

- **Mentor Matching has no screenshot.** Its card renders a typographic fallback
  until one lands in `assets-src/projects/`. Its `stack` lists only the three
  technologies I could confirm — front-end and data layer are missing.
- **Loch Suite (Tauri) is intentionally absent** from `projects.ts` pending its
  overhaul. Tauri stays listed in `skills.ts`.
- **Gamedev and Blender are deliberately excluded** as too niche. `PillarId` is
  a union type, so re-adding a pillar is a typed change the compiler will walk
  you through.
- `/contact` uses `emailjs-com` (legacy, unmaintained) and is the heaviest route
  at 132 kB. A static host cannot replace it with a route handler, so it would
  need an external form endpoint.
- `next@14.2.5` has an open cache-poisoning advisory. It does not affect a
  static export at runtime, but the version is worth bumping.
