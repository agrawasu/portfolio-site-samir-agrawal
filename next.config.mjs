/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Emit a fully static site into out/ — GitHub Pages serves files, not a server.
  output: "export",

  /*
    Static hosting has no image optimizer, so next/image serves whatever it is
    pointed at. The optimisation happens ahead of time instead:

      npm run images

    which writes WebP/AVIF derivatives into public/assets/**\/opt/. Never point
    an <Image> at a raw PNG in public/ — it would ship at full size.
  */
  images: {
    unoptimized: true,
  },

  /*
    Emit every route as a directory with index.html, so /resume resolves without
    relying on host-side extension rewriting, which Pages does not do.
  */
  trailingSlash: true,

  /*
    Keeps verification builds from corrupting a running dev server's .next.

    Note: with `output: "export"` this also relocates the exported site into
    distDir instead of out/. CI never sets it, so the deploy workflow's ./out
    path stays correct — but a local `NEXT_DIST_DIR=... npm run build` will not
    produce an out/ directory.
  */
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
