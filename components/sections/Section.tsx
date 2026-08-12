import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  /** Two-digit index rendered as an outlined numeral, e.g. "01". */
  index: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}

/**
 * Shared shell for every below-the-fold section: consistent rhythm, one
 * labelled landmark per section, and a heading that anchors cleanly.
 */
export function Section({
  id,
  index,
  title,
  description,
  action,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      /*
        Height is one viewport minus the sticky header, so that at minimum
        height the top and bottom snap points resolve to the same scroll
        position instead of stuttering between two points a header apart.
      */
      className="snap-section relative z-10 flex min-h-[calc(100svh_-_var(--header-height))] flex-col justify-center border-t border-white/10 py-24 xl:py-32"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[60ch]">
            <span
              aria-hidden="true"
              className="eyebrow-accent"
            >
              {index}
            </span>
            <h2 id={headingId} className="h2 mt-3">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-white/60">{description}</p>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>

        <div className="mt-14 xl:mt-20">{children}</div>
      </div>

      {/* Bottom snap point — see `.snap-end`. */}
      <span className="snap-end" aria-hidden="true" />
    </section>
  );
}
