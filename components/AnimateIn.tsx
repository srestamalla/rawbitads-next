"use client";

import { motion } from "framer-motion";

type Variant = "up" | "fade" | "left" | "right";

const initial: Record<Variant, { opacity: number; x?: number; y?: number }> = {
  up:    { opacity: 0, y: 28 },
  fade:  { opacity: 0 },
  left:  { opacity: 0, x: -32 },
  right: { opacity: 0, x: 32 },
};

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  threshold?: number;
}

export function AnimateIn({ children, className, variant = "up", delay = 0, threshold = 0.1 }: Props) {
  return (
    <motion.div
      className={className}
      initial={initial[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
