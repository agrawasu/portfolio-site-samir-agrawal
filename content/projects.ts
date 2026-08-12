import type { Project } from "./types";

/**
 * Ordered most-representative first. `featured` projects surface on the home
 * page — keep that set to four, one per pillar where possible, so the teaser
 * demonstrates range rather than depth in a single area.
 */
export const projects: Project[] = [
  {
    id: "mentor-matching",
    title: "Mentor Matching Platform",
    category: "Full-stack web application · Senior capstone",
    pillars: ["web"],
    featured: true,
    award: "Award winner — University of Cincinnati IT Expo",
    summary:
      "A swipe-style matching platform that pairs mentors with mentees instead of dates, with the matching algorithm re-running in real time as profiles change.",
    description:
      "My senior capstone at the University of Cincinnati, and an award winner at the IT Expo. The interaction model borrows from apps like Tinder and Hinge, but the thing being matched is a mentoring relationship rather than a date. The matching algorithm runs in real time against the attributes a user selects when creating or updating their profile, so results reflect the current state of the profile rather than a nightly batch. The team did not pursue the project after graduation.",
    highlights: [
      "Matchmaking recomputed live over SignalR as profile attributes change",
      "Attribute-weighted matching rather than a simple tag intersection",
      "Recognised at the University of Cincinnati IT Expo",
    ],
    // TODO: no screenshot available yet — the card falls back to a typographic
    // panel until one is added to public/assets/projects/.
    stack: ["ASP.NET Core", "C#", "SignalR"],
    links: {},
  },
  {
    id: "kog-support-portal",
    title: "KoG Support Portal",
    category: "Full-stack web application",
    pillars: ["web", "infra"],
    featured: true,
    summary:
      "Support ticket platform for the KoG community, with OAuth against the community's own identity provider and live ticket updates over server-sent events.",
    description:
      "A support ticket management system built for the KoG gaming community. It authenticates against KoG's identity provider over OAuth 2.0, streams live ticket updates to clients using server-sent events, stores file attachments in MinIO, and enforces role-based access across user, moderator and admin tiers. Ticket creation, threaded replies, status tracking and administrative oversight are all handled in-app.",
    highlights: [
      "Server-sent events for live ticket state instead of client polling",
      "OAuth 2.0 against the community's existing identity provider — no separate account system",
      "Role-based access control across three permission tiers",
      "MinIO object storage for attachments, containerised with Docker",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "OAuth 2.0",
      "MinIO",
      "Server-Sent Events",
      "Docker",
    ],
    links: {},
    image: "/assets/projects/kogsupportportal.png",
    imageAlt: "KoG Support Portal ticket dashboard",
  },
  {
    id: "kog-hammer",
    title: "KoG Hammer",
    category: "Moderation tooling",
    pillars: ["infra"],
    featured: true,
    summary:
      "A Discord bot that collapses the KoG moderation team's punishment workflow into 24 structured commands, with a merit-based model and a consistent audit log.",
    description:
      "KoG Hammer is a moderation tool, in the form of a Discord bot, built for the moderators of the King of Gores (KoG) network. It streamlines the full process of applying a punishment to a user who breaks a rule, replacing a manual workflow and introducing a merit-based approach to the punishment system. Structured output logging keeps decisions consistent and auditable across the team. Twenty-four commands are in place, with ongoing work to harden it further.",
    highlights: [
      "24 commands covering the full moderation workflow",
      "Merit-based punishment model replacing ad-hoc decisions",
      "Structured audit logging for consistency across moderators",
    ],
    stack: ["Python", "Discord API", "PostgreSQL"],
    links: { github: "https://github.com/KoG-teeworlds/kog-hammer" },
    image: "/assets/projects/koghammer.png",
    imageAlt: "KoG Hammer Discord bot command output",
  },
  {
    id: "max-bid-calculator",
    title: "Recommended Max Bid Calculator",
    category: "Machine learning · API",
    pillars: ["ai", "web"],
    featured: true,
    summary:
      "A decision tree model that predicts a ceiling bid for foreclosure auctions, trained on a deliberately small dataset expanded through data augmentation.",
    description:
      "Built to automate the recommended maximum bid on foreclosure properties. Knowing where to cap out when bidding is difficult to work out by hand, so this pulls data from previous auctions and predicts future auction outcomes with a decision tree model. The available sample size was very small, so data augmentation was used to generate enough training points to get a usable model off the ground.",
    highlights: [
      "Data augmentation to work around a genuinely small sample size",
      "Django API serving predictions from the trained model",
      "Scraping and normalisation pipeline over historical auction records",
    ],
    stack: [
      "Python",
      "Django",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Requests",
      "SQL Server",
    ],
    links: { github: "https://github.com/agrawasu/foreclosureProperties" },
    image: "/assets/projects/foreclosuresfl.png",
    imageAlt: "Recommended max bid calculator interface",
  },
  {
    id: "portfolio",
    title: "This Site",
    category: "Web · real-time 3D",
    pillars: ["web"],
    featured: false,
    summary:
      "A Next.js portfolio with a hand-built low-poly WebGL hero that loads asynchronously, gates itself off on constrained devices, and stops rendering entirely once scrolled past.",
    description:
      "Built on Next.js and TypeScript, with a stylised low-poly developer desk rendered in WebGL at the top of the page. The 3D scene is code-split and loaded only after the page content has painted, skipped entirely when the device reports low memory, low core count, reduced-motion preference or a saving-data connection, and halted once it scrolls out of view. Lighting is baked, there is no post-processing pass, and dust motes animate on the GPU from a single draw call.",
    highlights: [
      "3D hero never blocks first paint — the headline is server-rendered HTML",
      "Capability and preference gating, with a designed static fallback",
      "Render loop stops on scroll-out and tab blur",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      live: "https://samir-agrawal-portfolio.netlify.app/",
      github: "https://github.com/agrawasu/portfolio-site-samir-agrawal",
    },
    image: "/assets/projects/portfolio.png",
    imageAlt: "Portfolio site home page",
  },
  {
    id: "text-translator",
    title: "Text File Translator",
    category: "Tooling · API integration",
    pillars: ["infra"],
    featured: false,
    summary:
      "Batch-translates in-game chat logs through the DeepL API, built to solve a real problem moderating a largely non-English player base.",
    description:
      "This came out of a need encountered while moderating for the DDraceNetwork KoG community. Server chat logs arrive as text files, and with the large majority of the player base being non-English speakers, reading them was a bottleneck. The program takes a log file, detects whatever languages appear inside it, and translates them through the DeepL API into a target language of the user's choice.",
    stack: ["Python", "DeepL API", "json", "os"],
    links: { github: "https://github.com/agrawasu/text-translator" },
    image: "/assets/projects/texttranslator.png",
    imageAlt: "Text file translator console output",
  },
  {
    id: "steganography-password-manager",
    title: "Steganographic Password Manager",
    category: "Security · encryption",
    pillars: ["web"],
    featured: false,
    summary:
      "Hides a Fernet-encrypted password inside the least significant bits of a PNG's pixel data, so the image itself is the credential.",
    description:
      "An experiment in what it takes to embed a password in the pixels of an image. The program uses least-significant-bit steganography, altering the last few bits of 8-bit pixel values to store data. The password is encrypted with the Fernet scheme before embedding, which means the same image cannot be reused to recover the credential without the key. The next step is supporting drag-and-drop of the image directly into a browser password field, rather than decrypting in code and pasting the output.",
    stack: ["Python", "Pillow", "NumPy", "cryptography", "os"],
    links: {
      github: "https://github.com/agrawasu/steganography-password-manager",
    },
    image: "/assets/projects/passwordmanager.png",
    imageAlt: "Steganography password manager interface",
  },
  {
    id: "house-pricing",
    title: "House Pricing Predictions",
    category: "Applied machine learning",
    pillars: ["ai"],
    featured: false,
    summary:
      "A two-hidden-layer regression network over a cleaned and normalised housing dataset, with custom prediction plotting.",
    description:
      "A dataset read into a Pandas dataframe, cleaned and normalised, then split into train and test sets. The model uses ten input neurons, two hidden layers and a single output, compiled with mean squared error loss and the Adam optimiser. A custom plotting function built on NumPy and Matplotlib charts predictions against actuals after training.",
    stack: [
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
    ],
    links: { github: "https://github.com/agrawasu/house-pricing-predictor" },
    image: "/assets/projects/housepricing.png",
    imageAlt: "House pricing prediction chart",
  },
  {
    id: "nyc-crash-reports",
    title: "NYC Crash Reports",
    category: "Data application",
    pillars: ["ai"],
    featured: false,
    summary:
      "An interactive Streamlit dashboard over New York City motor vehicle collision data, built around making the data legible rather than just available.",
    description:
      "A data web app displaying motor vehicle collision data in New York City. The emphasis is on presentation: dashboards have to be built so that a reader can actually consume and understand what they are looking at, which drove the choices around mapping, filtering and chart selection here.",
    stack: ["Python", "Pandas", "NumPy", "Streamlit", "PyDeck", "Plotly"],
    links: {
      live: "https://crash-report-nyc.streamlit.app/",
      github: "https://github.com/agrawasu/data-web-app-python",
    },
    image: "/assets/projects/crashtracker.png",
    imageAlt: "NYC crash reports dashboard map",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
