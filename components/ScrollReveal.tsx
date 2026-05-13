"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import useReducedMotion from "@/lib/useReducedMotion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "right";
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: Props) {
  const reduced = useReducedMotion();

  const initial =
    direction === "right"
      ? { opacity: 0, x: -28 }
      : { opacity: 0, y: 28 };

  return (
    <motion.div
      initial={reduced ? false : initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
