import type { Metadata } from "next";

import { ProjectCard } from "@/components/ProjectCard";
import { PanelHeading } from "@/components/shell/PanelHeading";
import { pillars, projects } from "@/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Web applications, machine learning and community infrastructure built by Samir Agrawal.",
};

export default function PortfolioPage() {
  const counts = pillars.map((pillar) => ({
    ...pillar,
    count: projects.filter((project) => project.pillars.includes(pillar.id))
      .length,
  }));

  return (
    <div className="animate-panel-in">
      <PanelHeading>Portfolio</PanelHeading>

      <p className="mt-8 max-w-[68ch] text-[15px] leading-relaxed text-white/70">
        Shipped work and side projects across the areas I spend my time in. Each
        entry lists what it actually runs on.
      </p>

      <ul className="mt-7 flex flex-wrap gap-2">
        {counts.map((pillar) => (
          <li key={pillar.id} className="chip">
            {pillar.label}
            <span className="ml-2 text-accent">{pillar.count}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
  );
}
