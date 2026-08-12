import Link from "next/link";

import { education, experience, profile } from "@/content";
import { Section } from "./Section";

/** Home-page snapshot. The full breakdown lives on /resume. */
export function About() {
  const recentExperience = experience.slice(0, 4);

  return (
    <Section
      id="about"
      index="03"
      title="About"
      action={
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-sm text-white/70 underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Full résumé →
        </Link>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="text-lg leading-relaxed text-white/80">
            {profile.intro}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="eyebrow">
                Based in
              </dt>
              <dd className="mt-2 text-white/80">{profile.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-white/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="eyebrow">
            Recent
          </h3>
          <ul className="mt-6 space-y-3">
            {recentExperience.map((item) => (
              <li key={item.id} className="surface px-6 py-5">
                <p className="text-xs text-accent">{item.duration}</p>
                <p className="mt-1 font-semibold text-white">{item.position}</p>
                <p className="mt-1 text-sm text-white/60">{item.company}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 eyebrow">
            Education
          </h3>
          <ul className="mt-6 space-y-4">
            {education.map((item) => (
              <li key={item.id} className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm text-white/80">{item.credential}</p>
                <p className="mt-1 text-xs text-white/60">
                  {item.institution} · {item.duration}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
