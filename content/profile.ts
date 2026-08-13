import type { SocialLink } from "./types";

export const profile = {
  name: "Samir Agrawal",
  /** Headline role. Deliberately broad — the pillars carry the specifics. */
  role: "Full-Stack Developer",
  /** Hero sub-headline. One sentence, no filler. */
  tagline:
    "I build production web applications, applied ML, and the infrastructure that keeps an online game community running.",
  /**
   * Hero body copy. Two sentences maximum — the pillars section does the
   * detailed work, this only has to earn a scroll.
   */
  intro:
    "Information Technology at the University of Cincinnati. I work across the stack — ASP.NET Core and typed React front to back, applied machine learning, and the tooling a live Teeworlds/DDNet community's moderation team runs on. My senior capstone, a mentor matching platform built on real-time matchmaking, won an award at the university's IT Expo.",
  location: "Saint Augustine, Florida",
  /*
    Domain address rather than the university one, which expires with the
    school account. Set this up as a free forward in Porkbun's email settings
    so it lands in the personal inbox.
  */
  email: "samir@sagrawal.dev",
  /*
    Direct-download form of the Drive link, so the button downloads the PDF
    rather than opening Drive's viewer. To update: take the file id out of the
    /file/d/<id>/view share URL and drop it in here.
  */
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1WAsFypAZmIQ_71qLEziUw_BWtMyVPLnc",
} as const;

export const socials: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/vidathegoat" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/agrawasu/",
  },
  { id: "x", label: "X", href: "https://x.com/sagrawal22" },
];
