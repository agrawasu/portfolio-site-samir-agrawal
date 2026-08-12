import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-white/5 bg-primary/70 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-semibold transition-colors hover:text-accent"
        >
          Samir<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Nav />
          <Button asChild variant="outline" size="sm" className="uppercase">
            <Link href="/contact">Hire me</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
