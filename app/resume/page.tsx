import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  education,
  experience,
  pillarsById,
  profile,
  skillGroups,
} from "@/content";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Experience, education and technical skills for Samir Agrawal, full-stack developer.",
};

/**
 * Server component. The previous version used client-side tabs, which hid two
 * thirds of the content from search engines and from anyone who wanted to print
 * or Ctrl-F the page. Everything is on the page now.
 */
export default function ResumePage() {
  return (
    <div className="py-16 xl:py-24">
      <div className="container mx-auto">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[60ch]">
            <span
              aria-hidden="true"
              className="eyebrow-accent"
            >
              RÉSUMÉ
            </span>
            <h1 className="h1 mt-4">{profile.name}</h1>
            <p className="mt-4 text-lg text-white/70">{profile.role}</p>
          </div>

          <Button asChild variant="outline" size="lg" className="uppercase">
            <a href={profile.resumeUrl}>Download PDF</a>
          </Button>
        </header>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="h2">
              Experience
            </h2>
            <ol className="mt-8 space-y-8">
              {experience.map((item) => (
                <li
                  key={item.id}
                  className="border-l-2 border-white/10 pl-6 transition-colors hover:border-accent"
                >
                  <p className="text-sm text-accent">{item.duration}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.position}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{item.company}</p>
                  {item.detail ? (
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {item.detail}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>

            <h2 id="education-heading" className="h2 mt-16">
              Education
            </h2>
            <ol className="mt-8 space-y-8">
              {education.map((item) => (
                <li
                  key={item.id}
                  className="border-l-2 border-white/10 pl-6 transition-colors hover:border-accent"
                >
                  <p className="text-sm text-accent">{item.duration}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.credential}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {item.institution}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="h2">
              Skills
            </h2>

            <div className="mt-8 space-y-10">
              {skillGroups.map((group) => (
                <div key={group.id}>
                  <h3 className="eyebrow">
                    {group.label}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        /* Skill names are visible text now, not tooltip-only. */
                        title={skill.pillars
                          .map((pillar) => pillarsById[pillar].label)
                          .join(" · ")}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-accent/50 hover:text-white"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
