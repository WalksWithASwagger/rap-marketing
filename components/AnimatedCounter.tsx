"use client";

import { useInView } from "motion/react";
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

// Simple, reliable count-up via requestAnimationFrame.
// No motion-value subscription — the motion/react version was silently
// failing in production (counters stayed at 0).
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
  const [display, setDisplay] = useState(reduced ? target : 0);

  useEffect(() => {
    if (reduced) {
      setDisplay(target);
      return;
    }
    if (!inView) return;
    let raf = 0;
    const start =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setDisplay(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduced, duration]);

  // Cyan glow tied to count progress. Pure CSS calc on display.
  const progress = Math.max(0, Math.min(1, display / Math.max(target, 1)));
  const glowAlpha = 0.7 * Math.sin(progress * Math.PI);
  const textShadow =
    glow && !reduced && glowAlpha > 0.02
      ? `0 0 ${10 + glowAlpha * 30}px rgba(0, 221, 204, ${glowAlpha.toFixed(3)})`
      : undefined;

  return (
    <span ref={ref} className={className} style={textShadow ? { textShadow } : undefined}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
