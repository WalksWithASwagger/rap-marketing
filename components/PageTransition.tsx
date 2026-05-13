"use client";

import { AnimatePresence, motion, type Transition } from "motion/react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 16 };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  const exit = { opacity: 0 };

  const transition: Transition = {
    duration: reduce ? 0 : 0.4,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
