"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useReducedMotion from "@/lib/useReducedMotion";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  glow?: boolean;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
  glow = true,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    stiffness: 60,
    damping: 18,
    mass: 0.5,
    duration: duration / 1000,
  });

  const [display, setDisplay] = useState(reduced ? target : 0);

  // Glow strength tracks the "velocity" toward target — pulse during the count.
  const glowAlpha = useTransform(spring, (v) => {
    if (!glow) return 0;
    const t = Math.max(0, Math.min(1, v / Math.max(target, 1)));
    // Peak around mid animation, taper to 0 at rest.
    return 0.7 * Math.sin(t * Math.PI);
  });
  const textShadow = useTransform(
    glowAlpha,
    (a) => `0 0 ${10 + a * 30}px rgba(0, 221, 204, ${a.toFixed(3)})`
  );

  useEffect(() => {
    if (reduced) {
      setDisplay(target);
      return;
    }
    if (inView) mv.set(target);
  }, [inView, mv, target, reduced]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  return (
    <motion.span
      ref={ref}
      style={glow && !reduced ? { textShadow } : undefined}
      className={className}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
