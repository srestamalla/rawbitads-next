"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/advertisers", label: "Advertisers" },
  { href: "/publishers", label: "Publishers" },
  { href: "/formats", label: "Ad Formats" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/35">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Image src="/assets/logo.png" alt="Rawbitads" width={144} height={36} className="h-9 w-auto" style={{ width: "auto" }} />
        </Link>

        {/* Desktop nav */}
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

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 flex flex-col pt-6" aria-describedby={undefined}>
              <VisuallyHidden><SheetTitle>Navigation</SheetTitle></VisuallyHidden>
              <div className="mb-6 px-4">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image src="/assets/logo.png" alt="Rawbitads" width={144} height={36} className="h-9 w-auto" style={{ width: "auto" }} />
                </Link>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <NavLink
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted transition-colors px-4 py-3 rounded-lg text-base"
                    activeClassName="text-foreground font-medium bg-muted"
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pb-6">
                <Button asChild variant="outline" className="rounded-full h-11 w-full">
                  <a href="https://rawbitads.adsrv.org/login" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                    Log In
                  </a>
                </Button>
                <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 w-full shadow-soft">
                  <a href="https://rawbitads.adsrv.org/join" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                    Sign Up
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
