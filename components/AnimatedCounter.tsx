"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
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
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(reduced ? target : 0);

  const textShadow = useTransform(mv, (v) => {
    if (!glow) return "none";
    const t = Math.max(0, Math.min(1, v / Math.max(target, 1)));
    const a = 0.7 * Math.sin(t * Math.PI);
    return `0 0 ${10 + a * 30}px rgba(0, 221, 204, ${a.toFixed(3)})`;
  });

  // Drive a tween on the motion value, render its current rounded integer.
  useEffect(() => {
    if (reduced) {
      mv.set(target);
      setDisplay(target);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, target, {
      duration: duration / 1000,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, mv, target, reduced, duration]);

  useEffect(() => {
    return mv.on("change", (v) => setDisplay(Math.round(v)));
  }, [mv]);

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
