import type { Pillar, PillarId } from "./types";

/**
 * The organising idea of the site: range across several domains, rather than a
 * single headline project. Order here is the order they render in.
 */
export const pillars: Pillar[] = [
  {
    id: "web",
    label: "Web & Full-Stack",
    blurb:
      "Production web applications end to end — typed front-ends, real-time back-ends, and the data layer underneath them.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "ASP.NET Core",
      "SignalR",
      "Node.js",
      "PostgreSQL",
      "Tauri",
    ],
  },
  {
    id: "ai",
    label: "AI Engineering",
    blurb:
      "Certified through IBM's AI Engineering track, with applied work in model training, computer vision and prediction pipelines.",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "infra",
    label: "Community & Game Infrastructure",
    blurb:
      "Moderator and tooling developer for KoG, a Teeworlds/DDNet community — building the systems its moderation team runs on, for a player base of 87,000+ awaiting a platform migration targeting 2027.",
    technologies: [
      "Python",
      "PostgreSQL",
      "Docker",
      "OAuth 2.0",
      "MinIO",
      "Discord API",
    ],
  },
];

export const pillarsById: Record<PillarId, Pillar> = Object.fromEntries(
  pillars.map((pillar) => [pillar.id, pillar]),
) as Record<PillarId, Pillar>;
