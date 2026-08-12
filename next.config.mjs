/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF first, WebP as the fallback — both far smaller than the source PNGs.
    formats: ["image/avif", "image/webp"],
  },
  /*
    A production build writes into the same directory `next dev` is actively
    serving from, which corrupts a running dev server ("Cannot find module
    './948.js'"). Setting NEXT_DIST_DIR lets verification builds go somewhere
    else entirely:

      NEXT_DIST_DIR=.next-verify npm run build
  */
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
