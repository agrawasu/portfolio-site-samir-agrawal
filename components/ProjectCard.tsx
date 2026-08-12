import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import type { Project } from "@/content";

interface ProjectCardProps {
  project: Project;
  /** `full` adds the long description and highlights; `summary` is the teaser. */
  variant?: "summary" | "full";
  /** Cards near the fold get priority loading. */
  priority?: boolean;
}

export function ProjectCard({
  project,
  variant = "summary",
  priority = false,
}: ProjectCardProps) {
  const { live, github } = project.links;

  return (
    <article className="card card-interactive group flex flex-col overflow-hidden bg-surface-sunken">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          /*
            No screenshot available. A typographic panel reads as deliberate,
            where a stretched placeholder would read as broken.
          */
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-[radial-gradient(60%_60%_at_50%_40%,rgba(249,124,124,0.12),transparent_70%)] p-8"
          >
            <span className="meta-label text-center">{project.category}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 xl:p-7">
        <p className="meta-label text-accent/90">{project.category}</p>

        <h3 className="h3 mt-2 text-white">{project.title}</h3>

        {project.award ? (
          <p className="mt-3 inline-flex self-start rounded-full border border-trinary/40 bg-trinary/10 px-3 py-1 text-xs text-trinary">
            {project.award}
          </p>
        ) : null}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
          {variant === "full" ? project.description : project.summary}
        </p>

        {variant === "full" && project.highlights?.length ? (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-relaxed text-white/65"
              >
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-5 border-t border-hairline pt-4">
          {/* Rendered only when a URL exists — an empty href is an invalid anchor. */}
          {live ? (
            <Link
              href={live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent"
            >
              <FiArrowUpRight aria-hidden="true" />
              Live site
              <span className="sr-only">— {project.title}</span>
            </Link>
          ) : null}

          {github ? (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent"
            >
              <FiGithub aria-hidden="true" />
              Source
              <span className="sr-only">— {project.title}</span>
            </Link>
          ) : null}

          {!live && !github ? (
            <p className="text-sm text-white/45">Private — available on request</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
