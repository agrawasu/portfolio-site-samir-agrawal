import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { PanelHeading } from "@/components/shell/PanelHeading";
import { certifications } from "@/content";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "AI and machine learning certifications held by Samir Agrawal, with verification links.",
};

export default function CertificationsPage() {
  return (
    <div className="animate-panel-in">
      <PanelHeading>Certifications</PanelHeading>

      <p className="mt-8 max-w-[68ch] text-[15px] leading-relaxed text-white/70">
        Every entry links to its verification page.
      </p>

      <ul className="mt-10 grid gap-5 lg:grid-cols-2">
        {certifications.map((certification, index) => (
          <li
            key={certification.id}
            className="card card-interactive flex flex-col bg-surface-sunken p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                aria-hidden="true"
                className="font-mono text-sm text-accent/70"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="meta-label text-right">
                {certification.issuer}
              </span>
            </div>

            <h2 className="h3 mt-4 text-white">{certification.title}</h2>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
              {certification.description}
            </p>

            <Link
              href={certification.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 self-start text-sm text-accent transition-colors hover:text-accent-hover"
            >
              <FiArrowUpRight aria-hidden="true" />
              Verify
              {/* Distinguishes otherwise identical link labels for screen readers. */}
              <span className="sr-only">{certification.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
