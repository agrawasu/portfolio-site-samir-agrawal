import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/content";
import { Section } from "./Section";

export function ContactCta() {
  return (
    <Section
      id="contact"
      index="04"
      title="Get in touch"
      description="Open to internships, co-ops and full-time roles — and always happy to talk about infrastructure, graphics or anything KoG-adjacent."
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <a
          href={`mailto:${profile.email}`}
          className="text-2xl font-semibold text-white underline-offset-8 transition-colors hover:text-accent hover:underline xl:text-4xl"
        >
          {profile.email}
        </a>

        <div className="flex flex-wrap items-center gap-6">
          <Button asChild variant="outline" size="lg" className="uppercase">
            <Link href="/contact">Send a message</Link>
          </Button>

          <SocialLinks variant="bordered" />
        </div>
      </div>
    </Section>
  );
}
