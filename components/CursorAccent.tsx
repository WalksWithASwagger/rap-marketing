"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function CursorAccent() {
  const reduce = useReducedMotion();
  const [hoverCapable, setHoverCapable] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 600, damping: 35, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 600, damping: 35, mass: 0.4 });

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHoverCapable(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setHoverCapable(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!hoverCapable || reduce) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [hoverCapable, reduce, x, y]);

  if (!hoverCapable || reduce) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: ringX, translateY: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-4 -mt-4 h-8 w-8 rounded-full border border-[#00DDCC]/60 mix-blend-screen"
      />
      <motion.div
        aria-hidden
        style={{ translateX: dotX, translateY: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-[#00DDCC] mix-blend-screen"
      />
    </>
  );
}
