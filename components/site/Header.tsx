import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/35">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <img src="/assets/logo.png" alt="Rawbitads" className="h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/formats" className="hover:text-foreground transition-colors">
            Ad Formats
          </Link>
          <Link href="/monetization" className="hover:text-foreground transition-colors">
            Monetization
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
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
