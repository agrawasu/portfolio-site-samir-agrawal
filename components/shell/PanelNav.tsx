"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Four items, matching the reference. Certifications is reachable from the
 * About and Resume panels rather than the bar — a fifth item made the pill wide
 * enough to collide with the panel heading it sits beside.
 */
const links = [
  { name: "About", path: "/", also: [] as string[] },
  { name: "Resume", path: "/resume", also: ["/certifications"] },
  { name: "Portfolio", path: "/projects", also: [] as string[] },
  { name: "Contact", path: "/contact", also: [] as string[] },
];

/**
 * Nav docked into the panel's top-right corner on desktop, and pinned to the
 * bottom of the viewport on mobile where a corner pill would be unreachable.
 *
 * These are real routes rather than client-side panel swapping, so every view
 * is linkable, refreshable and independently server-rendered.
 */
export function PanelNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-surface/95 backdrop-blur-md lg:absolute lg:inset-x-auto lg:bottom-auto lg:right-0 lg:top-0 lg:rounded-bl-shell lg:rounded-tr-shell lg:border-b lg:border-l lg:border-t-0 lg:bg-surface-raised/80"
    >
      <ul className="flex items-center justify-center gap-1 px-2 py-3 sm:gap-2 lg:px-7 lg:py-5">
        {links.map((link) => {
          const isActive =
            pathname === link.path || link.also.includes(pathname);

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors sm:text-sm lg:px-2 lg:py-1 ${
                  isActive
                    ? "text-accent"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
