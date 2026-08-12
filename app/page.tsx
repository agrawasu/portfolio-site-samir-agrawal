import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PiBrainBold, PiCodeBold, PiGameControllerBold } from "react-icons/pi";
import type { IconType } from "react-icons";

import { PanelHeading, PanelSubheading } from "@/components/shell/PanelHeading";
import { certifications, pillars, profile, type PillarId } from "@/content";

/** Icons live in the presentation layer so `content/` stays plain data. */
const PILLAR_ICONS: Record<PillarId, IconType> = {
  web: PiCodeBold,
  ai: PiBrainBold,
  infra: PiGameControllerBold,
};

/** The certificate track, plus the two most substantial courses under it. */
const FEATURED_CERTIFICATIONS = certifications.slice(0, 3);

export default function AboutPage() {
  return (
    <div className="animate-panel-in">
      <PanelHeading>About Me</PanelHeading>

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/70">
        <p>{profile.intro}</p>
        <p>
          My work splits across three areas that reinforce each other: shipping
          typed, production web applications; applied machine learning through
          the IBM AI Engineering track; and building the tooling that keeps a
          live game community running day to day.
        </p>
      </div>

      <section aria-labelledby="doing" className="mt-14">
        <PanelSubheading>
          <span id="doing">What I Do</span>
        </PanelSubheading>

        <ul className="mt-7 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id];

            return (
              <li
                key={pillar.id}
                className="card card-interactive flex gap-5 bg-surface-sunken p-6"
              >
                <span className="icon-tile h-12 w-12">
                  <Icon aria-hidden="true" className="text-xl" />
                </span>

                <div className="min-w-0">
                  <h3 className="h3 text-white">{pillar.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {pillar.blurb}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {pillar.technologies.slice(0, 4).map((technology) => (
                      <li key={technology} className="chip">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="certs" className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <PanelSubheading>
            <span id="certs">Certifications</span>
          </PanelSubheading>

          <Link
            href="/certifications"
            className="shrink-0 text-sm text-white/60 underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            View all
          </Link>
        </div>

        <ul className="mt-7 grid gap-5 md:grid-cols-2">
          {FEATURED_CERTIFICATIONS.map((certification) => (
            <li
              key={certification.id}
              className="card card-interactive flex flex-col bg-surface-sunken p-6"
            >
              <p className="meta-label">{certification.issuer}</p>
              <h3 className="h3 mt-2 text-white">{certification.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {certification.description}
              </p>

              <Link
                href={certification.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 self-start text-sm text-accent transition-colors hover:text-accent-hover"
              >
                <FiArrowUpRight aria-hidden="true" />
                Verify
                <span className="sr-only">{certification.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
