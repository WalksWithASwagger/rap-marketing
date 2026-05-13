"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import useReducedMotion from "@/lib/useReducedMotion";

interface Props {
  value: string;
  className?: string;
  durationMs?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

function DigitRoll({
  char,
  delay,
  duration,
}: {
  char: string;
  delay: number;
  duration: number;
}) {
  if (!/[0-9]/.test(char)) {
    return <span className="inline-block">{char}</span>;
  }

  const target = parseInt(char, 10);
  const stops = Array.from({ length: 20 + target + 1 }, (_, i) => i % 10);

  return (
    <span
      className="inline-block overflow-hidden align-baseline"
      style={{ height: "1em", lineHeight: 1 }}
      aria-hidden
    >
      <motion.span
        className="inline-flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: `-${stops.length - 1}em` }}
        transition={{ duration: duration / 1000, ease: EASE, delay: delay / 1000 }}
        style={{ lineHeight: 1 }}
      >
        {stops.map((d, i) => (
          <span key={i} className="inline-block" style={{ height: "1em", lineHeight: 1 }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function CountReveal({
  value,
  className = "",
  durationMs = 1200,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  if (reduced) {
    return (
      <span ref={ref} className={className} aria-label={value}>
        {value}
      </span>
    );
  }

  if (!inView) {
    return (
      <span ref={ref} className={className} aria-label={value}>
        <span className="opacity-0">{value}</span>
      </span>
    );
  }

  const chars = value.split("");

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span className="sr-only">{value}</span>
      <span aria-hidden className="inline-flex">
        {chars.map((c, i) => (
          <DigitRoll key={i} char={c} delay={i * 60} duration={durationMs} />
        ))}
      </span>
    </span>
  );
}
