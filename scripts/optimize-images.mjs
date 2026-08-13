/**
 * Pre-optimises source images into WebP and AVIF.
 *
 * On a static host there is no image optimizer, so `next/image` runs with
 * `unoptimized: true` and ships whatever file it is pointed at. Doing the work
 * here means the site does not depend on any host's optimizer, and the raw
 * PNGs never reach a browser.
 *
 * Run with: npm run images
 *
 * Masters live in assets-src/, deliberately outside public/ — anything under
 * public/ is copied verbatim into the export, so keeping 6 MB of source PNGs
 * there would deploy them even though nothing references them.
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCES = [
  { dir: "assets-src/projects", out: "public/assets/projects", width: 1200 },
  {
    dir: "assets-src",
    out: "public/assets",
    width: 600,
    only: ["portfolioimg.png"],
  },
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function run() {
  let before = 0;
  let after = 0;

  for (const source of SOURCES) {
    if (!existsSync(source.dir)) continue;
    await mkdir(source.out, { recursive: true });

    const entries = await readdir(source.dir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (!/\.(png|jpe?g)$/i.test(entry.name)) continue;
      if (source.only && !source.only.includes(entry.name)) continue;

      const input = path.join(source.dir, entry.name);
      const base = entry.name.replace(/\.(png|jpe?g)$/i, "");
      const original = (await stat(input)).size;
      before += original;

      // `withoutEnlargement` keeps small sources from being upscaled.
      const pipeline = sharp(input).resize({
        width: source.width,
        withoutEnlargement: true,
      });

      /*
        WebP only. AVIF would shave roughly another 30%, but `next/image` with
        `unoptimized` renders a plain <img> and cannot negotiate formats, so
        every AVIF emitted would ship to the host and never be requested. WebP
        alone covers ~97% of browsers and these files are already small.
      */
      const webpPath = path.join(source.out, `${base}.webp`);
      await pipeline.webp({ quality: 82, effort: 5 }).toFile(webpPath);

      const webpSize = (await stat(webpPath)).size;
      after += webpSize;

      console.log(
        `  ${entry.name.padEnd(26)} ${kb(original).padStart(9)} -> ${kb(
          webpSize,
        ).padStart(8)}`,
      );
    }
  }

  const saved = before - after;
  console.log(
    `\n  total ${kb(before)} -> ${kb(after)} (saved ${kb(saved)}, ${Math.round(
      (saved / before) * 100,
    )}%)`,
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
