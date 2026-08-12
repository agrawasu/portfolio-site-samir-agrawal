import type { ReactNode } from "react";

/**
 * Panel title with the accent rule beneath it.
 *
 * The right padding on desktop reserves room for the nav pill docked in the
 * panel's top-right corner, so a long title can never run underneath it.
 */
export function PanelHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`h1 heading lg:pr-[24rem] ${className}`}>{children}</h1>
  );
}

/** Secondary heading inside a panel, e.g. "What I Do". */
export function PanelSubheading({ children }: { children: ReactNode }) {
  return <h2 className="h2">{children}</h2>;
}
