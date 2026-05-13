"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, ReactNode } from "react";
import useReducedMotion from "@/lib/useReducedMotion";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const RADIUS = 80;
const PULL = 12;

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  ariaLabel,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < RADIUS + Math.max(rect.width, rect.height) / 2) {
      const f = Math.min(1, RADIUS / Math.max(dist, 1));
      x.set((dx / Math.max(dist, 1)) * PULL * f);
      y.set((dy / Math.max(dist, 1)) * PULL * f);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    variant === "primary"
      ? "bg-cyan text-forest-950 font-semibold border border-cyan hover:bg-cyan/90"
      : "bg-forest-900/40 text-cream font-medium border border-cream/30 hover:border-cyan hover:text-cyan";

  const linkClasses = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base tracking-wide transition-colors shadow-[0_0_40px_-10px_rgba(0,221,204,0.45)] hover:shadow-[0_0_60px_-8px_rgba(0,221,204,0.7)] ${base} ${className}`;

  const inner = (
    <motion.span
      style={reduced ? undefined : { x: springX, y: springY }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      ref={ref}
      aria-label={ariaLabel}
      className={linkClasses}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...linkProps}
    >
      {inner}
    </Link>
  );
}
