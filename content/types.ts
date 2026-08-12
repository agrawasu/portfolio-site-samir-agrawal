/**
 * Shared content types.
 *
 * Everything the site renders comes from `content/` — pages never hold data
 * literals. This keeps the home-page teasers and the deep pages in sync, and
 * gives a future scoped assistant a single corpus to be grounded on.
 */

/** The domains the portfolio is organised around. */
export type PillarId = "web" | "ai" | "infra";

export interface Pillar {
  id: PillarId;
  /** Short label used in nav, chips and filters. */
  label: string;
  /** One-line statement of what this domain covers. */
  blurb: string;
  /** Representative technologies, ordered by relevance. */
  technologies: string[];
}

export interface ProjectLinks {
  /** Deployed URL. Omit entirely when there is nothing to link to. */
  live?: string;
  /** Public repository URL. Omit when the source is private. */
  github?: string;
}

export interface Project {
  /** Stable slug — used for routing, anchors and as a React key. */
  id: string;
  title: string;
  /** Short type-of-thing label, e.g. "Full-stack web application". */
  category: string;
  /** Domains this project demonstrates. First entry is the primary one. */
  pillars: PillarId[];
  /** One or two sentences. Used on cards and in the home-page teaser. */
  summary: string;
  /** Full write-up. Used on the projects page. */
  description: string;
  /** Notable engineering decisions worth calling out individually. */
  highlights?: string[];
  /** Recognition worth surfacing as a badge, e.g. a competition placement. */
  award?: string;
  stack: string[];
  links: ProjectLinks;
  /** Omit when there is no screenshot; the card falls back to a typographic panel. */
  image?: string;
  /** Required whenever `image` is set — the screenshot carries real information. */
  imageAlt?: string;
  /** Surfaced on the home page. Keep this to three or four projects. */
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  /** Optional detail shown on the resume page. */
  detail?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  duration: string;
}

export interface Skill {
  name: string;
  pillars: PillarId[];
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  /** Verification URL. */
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}
