"use client";

import { useEffect, useRef, useState } from "react";

export const BACKDROP_SECTIONS = [
  "hero",
  "range",
  "work",
  "about",
  "contact",
] as const;

export type BackdropSection = (typeof BACKDROP_SECTIONS)[number];

/**
 * A single persistent backdrop behind the whole page.
 *
 * Each section owns one gradient composition; only the active one is opaque,
 * and the rest cross-fade out. Because the layers are always mounted, moving
 * between sections is a long opacity transition rather than a re-render — the
 * transition is entirely the compositor's job.
 *
 * State changes a handful of times per visit (once per section crossing), not
 * per scroll frame, so this stays cheap despite being a client component.
 */
export function Backdrop() {
  const [active, setActive] = useState<BackdropSection>("hero");
  const ratios = useRef(new Map<string, number>());

  useEffect(() => {
    const elements = BACKDROP_SECTIONS.map((id) =>
      document.getElementById(id),
    ).filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Track every section's ratio, not just the ones that changed — the
        // callback only reports deltas, so picking a winner from `entries`
        // alone would flicker between neighbours mid-scroll.
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.intersectionRatio);
        }

        let winner: string | undefined;
        let best = 0;
        for (const [id, ratio] of ratios.current) {
          if (ratio > best) {
            best = ratio;
            winner = id;
          }
        }

        if (winner) setActive(winner as BackdropSection);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="backdrop" data-active={active} aria-hidden="true">
      <div className="backdrop-grid" />
      {BACKDROP_SECTIONS.map((id) => (
        <div key={id} className="backdrop-layer" data-for={id} />
      ))}
      <div className="backdrop-vignette" />
    </div>
  );
}
