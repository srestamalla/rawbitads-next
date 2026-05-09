"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className }: Props) {
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      {children}
    </motion.div>
  );
}
