import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/advertisers", label: "Advertisers" },
  { href: "/publishers", label: "Publishers" },
  { href: "/formats", label: "Ad Formats" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/35">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <img src="/assets/logo.png" alt="Rawbitads" className="h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              className="relative text-muted-foreground hover:text-foreground transition-colors py-1"
              activeClassName="text-foreground font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-full after:bg-primary"
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="rounded-full px-5 h-10">
            <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer">
              Log In
            </a>
          </Button>
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 h-10 shadow-soft">
            <a href="https://rawbitads.adsrv.org/join" target="_blank" rel="noopener noreferrer">
              Sign Up
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
