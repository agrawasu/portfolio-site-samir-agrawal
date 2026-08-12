import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { socials } from "@/content";

/**
 * Icons live here rather than in `content/` — the content layer stays plain
 * serialisable data (a future assistant corpus shouldn't carry JSX), so the
 * mapping from id to glyph belongs in the presentation layer.
 */
const ICONS: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
};

interface SocialLinksProps {
  /** `bare` for inline icon rows, `bordered` for circular buttons. */
  variant?: "bare" | "bordered";
  className?: string;
}

export function SocialLinks({
  variant = "bare",
  className = "",
}: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = ICONS[social.id];

        return (
          <li key={social.id}>
            <Link
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className={
                variant === "bordered"
                  ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-canvas"
                  : "flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/5 hover:text-accent"
              }
            >
              {Icon ? (
                <Icon aria-hidden="true" className="text-lg" />
              ) : (
                <span aria-hidden="true">{social.label.charAt(0)}</span>
              )}
              {/* The icon carries no text, so the accessible name lives here. */}
              <span className="sr-only">{social.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
