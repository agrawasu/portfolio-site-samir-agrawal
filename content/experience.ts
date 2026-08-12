import type { EducationItem, ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "siemens",
    company: "Siemens Digital Industries",
    position: "SaaS Governance Execution Intern",
    duration: "May 2025 – August 2025",
  },
  {
    id: "kog",
    company: "KoG (Teeworlds / DDNet)",
    position: "Moderator & Infrastructure Developer",
    duration: "2023 – Present",
    detail:
      "Build and maintain the tooling the moderation team runs on, and contribute to the community's support platform ahead of a wider infrastructure migration targeting 2027.",
  },
  {
    id: "real-estate",
    company: "Self-Employed",
    position: "Real-Estate Investor",
    duration: "August 2024 – Present",
  },
  {
    id: "uc-eep",
    company: "University of Cincinnati",
    position: "Information Technology EEP",
    duration: "May 2023 – August 2023",
  },
  {
    id: "uc-research",
    company: "University of Cincinnati",
    position: "Undergraduate Researcher",
    duration: "May 2022 – August 2022",
  },
  {
    id: "ssoe",
    company: "SSOE Group",
    position: "Student Intern",
    duration: "August 2021 – December 2021",
  },
];

export const education: EducationItem[] = [
  {
    id: "uc",
    institution: "University of Cincinnati",
    credential:
      "B.S. Information Technology — Data Technology and Game Development & Simulation tracks",
    duration: "2020 – 2026",
  },
  {
    id: "ibm",
    institution: "IBM · Coursera",
    credential: "IBM AI Engineering Professional Certificate",
    duration: "June 2024 – July 2024",
  },
];
