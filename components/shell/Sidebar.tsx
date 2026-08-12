import Image from "next/image";
import { FiMail, FiMapPin } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";

import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/content";

const details = [
  {
    id: "email",
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    id: "location",
    icon: FiMapPin,
    label: "Location",
    value: profile.location,
  },
  {
    id: "education",
    icon: PiGraduationCapBold,
    label: "Education",
    value: "University of Cincinnati",
  },
];

/**
 * The persistent profile card. Sticky on desktop, stacked above the panel on
 * smaller screens. Server component — nothing here needs interactivity.
 */
export function Sidebar() {
  return (
    <aside className="card w-full shrink-0 self-start p-6 shadow-card lg:sticky lg:top-6 lg:w-[var(--sidebar-width)] xl:p-8">
      <div className="flex flex-row items-center gap-5 lg:flex-col lg:gap-0">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] bg-surface-raised lg:h-[150px] lg:w-[150px]">
          <Image
            src="/assets/portfolioimg.png"
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="150px"
            priority
            className="object-cover object-top"
          />
        </div>

        <div className="text-left lg:mt-5 lg:text-center">
          <h1 className="text-xl font-semibold tracking-tight text-white xl:text-2xl">
            {profile.name}
          </h1>
          <p className="mt-2 inline-block rounded-lg bg-surface-raised px-3 py-1 text-xs text-white/65">
            {profile.role}
          </p>
        </div>
      </div>

      {/* Contact block is collapsed away on mobile, where the panel matters more. */}
      <div className="hidden lg:block">
        <hr className="my-7 border-hairline" />

        <ul className="space-y-5">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <li key={detail.id} className="flex items-center gap-4">
                <span className="icon-tile h-10 w-10">
                  <Icon aria-hidden="true" className="text-base" />
                </span>

                <div className="min-w-0">
                  <p className="meta-label">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="block truncate text-sm text-white/85 transition-colors hover:text-accent"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/85">{detail.value}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <hr className="my-7 border-hairline" />

        <SocialLinks className="justify-center" />
      </div>
    </aside>
  );
}
