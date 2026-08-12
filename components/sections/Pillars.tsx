import { pillars } from "@/content";
import { Section } from "./Section";

/**
 * The site's organising claim: range across four domains. This sits directly
 * under the hero because it is the thing the page most needs to establish.
 */
export function Pillars() {
  return (
    <Section
      id="range"
      index="01"
      title="Range"
      description="The areas I work across, and the technologies I reach for in each."
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <li
            key={pillar.id}
            className="surface surface-interactive group p-8 xl:p-10"
          >
            <h3 className="h3 text-white transition-colors group-hover:text-accent">
              {pillar.label}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {pillar.blurb}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {pillar.technologies.map((technology) => (
                <li key={technology} className="chip">
                  {technology}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
