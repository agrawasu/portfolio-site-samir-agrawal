import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { certifications } from "@/content";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "AI and machine learning certifications held by Samir Agrawal, with verification links.",
};

export default function CertificationsPage() {
  return (
    <div className="py-16 xl:py-24">
      <div className="container mx-auto">
        <header className="max-w-[65ch]">
          <span
            aria-hidden="true"
            className="eyebrow-accent"
          >
            CERTIFICATIONS
          </span>
          <h1 className="h1 mt-4">Verified coursework</h1>
          <p className="mt-6 text-white/60">
            Every entry links to its verification page.
          </p>
        </header>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <li
              key={certification.id}
              className="group flex flex-col bg-primary p-8 transition-colors hover:bg-secondary xl:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span
                  aria-hidden="true"
                  className="text-3xl font-extrabold text-transparent text-outline transition-all duration-500 group-hover:text-outline-hover"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow">
                  {certification.issuer}
                </span>
              </div>

              <h2 className="h3 mt-6 text-white transition-colors group-hover:text-accent">
                {certification.title}
              </h2>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
                {certification.description}
              </p>

              <Link
                href={certification.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 self-start text-sm text-white/80 transition-colors hover:text-accent"
              >
                <FiArrowUpRight aria-hidden="true" />
                Verify
                {/* Distinguishes the eight identical link labels for screen readers. */}
                <span className="sr-only">{certification.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
