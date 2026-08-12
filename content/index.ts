/**
 * Single entry point for all site content.
 *
 * Pages should import from `@/content` rather than reaching into individual
 * modules, so the shape of this barrel stays the contract. A future build step
 * can serialise the same exports into a retrieval corpus without any of the
 * page components needing to change.
 */
export * from "./types";
export * from "./pillars";
export * from "./profile";
export * from "./projects";
export * from "./experience";
export * from "./skills";
export * from "./certifications";
