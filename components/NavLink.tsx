"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  activeClassName?: string;
}

const NavLink = ({ className, activeClassName, href, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
      {...props}
    />
  );
};

NavLink.displayName = "NavLink";

export { NavLink };
