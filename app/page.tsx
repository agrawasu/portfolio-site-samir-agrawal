import { Backdrop } from "@/components/backdrop/Backdrop";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { ContactCta } from "@/components/sections/ContactCta";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Pillars } from "@/components/sections/Pillars";

/**
 * Sections snap to one another over a single persistent backdrop that
 * cross-fades between per-section states as you scroll.
 *
 * Everything here is server-rendered; the only client component on the route is
 * the Backdrop's intersection observer, which changes state once per section
 * crossing rather than per frame.
 */
export default function HomePage() {
  return (
    <>
      <Backdrop />
      <Hero />
      <Pillars />
      <FeaturedWork />
      <About />
      <ContactCta />
    </>
  );
}
