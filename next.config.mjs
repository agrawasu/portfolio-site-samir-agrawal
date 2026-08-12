/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF first, WebP as the fallback — both far smaller than the source PNGs.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
