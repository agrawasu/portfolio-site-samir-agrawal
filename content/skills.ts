import type { SkillGroup } from "./types";

/**
 * Grouped by role in a stack rather than by icon availability, and tagged with
 * the pillars each skill supports so the resume page can filter by domain.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "TypeScript", pillars: ["web"] },
      { name: "JavaScript", pillars: ["web"] },
      { name: "Python", pillars: ["ai", "infra"] },
      { name: "C#", pillars: ["web"] },
      { name: "Java", pillars: ["web"] },
      { name: "SQL", pillars: ["web", "infra"] },
      { name: "HTML", pillars: ["web"] },
      { name: "CSS", pillars: ["web"] },
    ],
  },
  {
    id: "frontend",
    label: "Front-end",
    skills: [
      { name: "React", pillars: ["web"] },
      { name: "Next.js", pillars: ["web"] },
      { name: "Tailwind CSS", pillars: ["web"] },
      { name: "Vite", pillars: ["web"] },
      { name: "React Router", pillars: ["web"] },
      { name: "Framer Motion", pillars: ["web"] },
      { name: "Tauri", pillars: ["web"] },
      { name: "Three.js", pillars: ["web"] },
      { name: "React Three Fiber", pillars: ["web"] },
      { name: "WebGL", pillars: ["web"] },
    ],
  },
  {
    id: "backend",
    label: "Back-end & data",
    skills: [
      { name: "ASP.NET Core", pillars: ["web"] },
      { name: "SignalR", pillars: ["web"] },
      { name: "Node.js", pillars: ["web"] },
      { name: "Express", pillars: ["web"] },
      { name: "Django", pillars: ["ai", "web"] },
      { name: "PostgreSQL", pillars: ["web", "infra"] },
      { name: "SQL Server", pillars: ["web"] },
      { name: "Drizzle ORM", pillars: ["web"] },
      { name: "OAuth 2.0", pillars: ["web", "infra"] },
      { name: "Server-Sent Events", pillars: ["web"] },
    ],
  },
  {
    id: "ml",
    label: "Machine learning",
    skills: [
      { name: "PyTorch", pillars: ["ai"] },
      { name: "TensorFlow", pillars: ["ai"] },
      { name: "Keras", pillars: ["ai"] },
      { name: "Scikit-Learn", pillars: ["ai"] },
      { name: "OpenCV", pillars: ["ai"] },
      { name: "YOLO", pillars: ["ai"] },
      { name: "Pandas", pillars: ["ai"] },
      { name: "NumPy", pillars: ["ai"] },
      { name: "Matplotlib", pillars: ["ai"] },
      { name: "Pillow", pillars: ["ai"] },
    ],
  },
  {
    id: "platform",
    label: "Platform & tooling",
    skills: [
      { name: "Docker", pillars: ["infra", "web"] },
      { name: "Git", pillars: ["web", "infra"] },
      { name: "MinIO", pillars: ["infra"] },
      { name: "Discord API", pillars: ["infra"] },
      { name: "Power BI", pillars: ["ai"] },
    ],
  },
];
