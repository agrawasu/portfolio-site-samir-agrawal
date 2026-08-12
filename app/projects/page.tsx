import type { Metadata } from "next";

import { ProjectCard } from "@/components/ProjectCard";
import { pillars, projects } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web applications, machine learning, community infrastructure and 3D work by Samir Agrawal.",
};

/**
 * Server component — no client JavaScript at all on this route now. The
 * previous carousel pulled in Swiper and held the whole list in client state to
 * show one project at a time; a grid shows all of them and ships nothing.
 */
export default function ProjectsPage() {
  const countByPillar = pillars.map((pillar) => ({
    ...pillar,
    count: projects.filter((project) => project.pillars.includes(pillar.id))
      .length,
  }));

  return (
    <div className="py-16 xl:py-24">
      <div className="container mx-auto">
        <header className="max-w-[65ch]">
          <span
            aria-hidden="true"
            className="eyebrow-accent"
          >
            PROJECTS
          </span>
          <h1 className="h1 mt-4">Things I&rsquo;ve built</h1>
          <p className="mt-6 text-white/60">
            Shipped work and side projects across the areas I spend my time in.
            Each entry lists what it actually runs on.
          </p>
        </header>

        <ul className="mt-10 flex flex-wrap gap-3">
          {countByPillar.map((pillar) => (
            <li
              key={pillar.id}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70"
            >
              {pillar.label}
              <span className="ml-2 text-accent">{pillar.count}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="full"
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
