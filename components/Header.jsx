import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Samir<span className="text-accent">.</span>{" "}
            {/* =================== CHANGE NAME HERE =================== */}
          </h1>
        </Link>

        {/* desktop nav & hire me */}
        <div className="hidden md:flex lg:flex xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              variant="outline"
              className="md:hidden bg-none border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Hire me
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="md:hidden lg:hidden xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
