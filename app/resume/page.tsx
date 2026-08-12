import type { Metadata } from "next";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { PiBriefcaseBold, PiGraduationCapBold } from "react-icons/pi";

import { PanelHeading, PanelSubheading } from "@/components/shell/PanelHeading";
import { Button } from "@/components/ui/button";
import { education, experience, profile, skillGroups } from "@/content";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Experience, education and technical skills for Samir Agrawal, full-stack developer.",
};

interface TimelineEntry {
  id: string;
  title: string;
  meta: string;
  duration: string;
  detail?: string;
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative mt-7 space-y-7 border-l border-hairline pl-7">
      {entries.map((entry) => (
        <li key={entry.id} className="relative">
          {/* Node on the rail. -left offsets by half the dot plus the border. */}
          <span
            aria-hidden="true"
            className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-canvas"
          />
          <h3 className="text-base font-semibold text-white">{entry.title}</h3>
          <p className="mt-1 text-sm text-accent">{entry.duration}</p>
          <p className="mt-1 text-sm text-white/55">{entry.meta}</p>
          {entry.detail ? (
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {entry.detail}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default function ResumePage() {
  const experienceEntries: TimelineEntry[] = experience.map((item) => ({
    id: item.id,
    title: item.position,
    meta: item.company,
    duration: item.duration,
    detail: item.detail,
  }));

  const educationEntries: TimelineEntry[] = education.map((item) => ({
    id: item.id,
    title: item.credential,
    meta: item.institution,
    duration: item.duration,
  }));

  return (
    <div className="animate-panel-in">
      <PanelHeading>Résumé</PanelHeading>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button asChild size="lg">
          <a href={profile.resumeUrl}>
            Download PDF
            <FiDownload aria-hidden="true" className="ml-2" />
          </a>
        </Button>

        <Link
          href="/certifications"
          className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          View certifications →
        </Link>
      </div>

      <section aria-labelledby="experience" className="mt-14">
        <div className="flex items-center gap-4">
          <span className="icon-tile h-11 w-11">
            <PiBriefcaseBold aria-hidden="true" className="text-lg" />
          </span>
          <PanelSubheading>
            <span id="experience">Experience</span>
          </PanelSubheading>
        </div>
        <Timeline entries={experienceEntries} />
      </section>

      <section aria-labelledby="education" className="mt-14">
        <div className="flex items-center gap-4">
          <span className="icon-tile h-11 w-11">
            <PiGraduationCapBold aria-hidden="true" className="text-lg" />
          </span>
          <PanelSubheading>
            <span id="education">Education</span>
          </PanelSubheading>
        </div>
        <Timeline entries={educationEntries} />
      </section>

      <section aria-labelledby="skills" className="mt-14">
        <PanelSubheading>
          <span id="skills">Skills</span>
        </PanelSubheading>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="card bg-surface-sunken p-6"
            >
              <h3 className="meta-label">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="chip">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
