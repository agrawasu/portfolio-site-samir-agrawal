import Link from "next/link";

import { featuredProjects } from "@/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "./Section";

export function FeaturedWork() {
  return (
    <Section
      id="work"
      index="02"
      title="Selected work"
      description="Chosen to show the spread rather than a single specialism."
      action={
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/70 underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          All projects →
        </Link>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </Section>
  );
}
