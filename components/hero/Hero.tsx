import Link from "next/link";
import { FiArrowDown, FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { pillars, profile, projects } from "@/content";

/**
 * Server component with no client JavaScript at all.
 *
 * The backdrop is pure CSS — a masked grid and two colour washes — and the
 * scroll recede is a progressive enhancement via `animation-timeline`, so the
 * hero costs nothing beyond the HTML and stylesheet it already needs.
 */
export function Hero() {
  // Real counts from the content layer rather than decorative numbers.
  const readout = pillars.map((pillar) => ({
    id: pillar.id,
    label: pillar.label,
    count: projects.filter((project) => project.pillars.includes(pillar.id))
      .length,
  }));

  return (
    <section
      id="hero"
      className="snap-section relative z-10 flex min-h-[100svh] flex-col"
    >
      <div className="container relative mx-auto flex flex-1 flex-col justify-center py-24">
        <p className="eyebrow-accent">{profile.role}</p>

        <h1 className="hero-title mt-6">
          Samir
          <br />
          Agrawal
        </h1>

        <p className="mt-8 max-w-[54ch] text-lg leading-relaxed text-white/70">
          {profile.tagline}
        </p>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="outline" className="uppercase">
            <Link href="#work">
              View work
              <FiArrowDown aria-hidden="true" className="ml-2 text-lg" />
            </Link>
          </Button>

          <a
            href={profile.resumeUrl}
            className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent"
          >
            Download résumé
            <FiDownload
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>

          <SocialLinks className="sm:ml-2" />
        </div>
      </div>

      {/* Technical readout. Real data, and the seam where a future live/ambient
          counter would slot in without disturbing the layout. */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto">
          <dl className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {readout.map((item) => (
              <div
                key={item.id}
                className="flex items-baseline gap-4 py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <dd className="font-mono text-2xl font-medium text-accent">
                  {String(item.count).padStart(2, "0")}
                </dd>
                <dt className="eyebrow leading-snug">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Bottom snap point — see `.snap-end`. */}
      <span className="snap-end" aria-hidden="true" />
    </section>
  );
}
