"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import useReducedMotion from "@/lib/useReducedMotion";

interface Props {
  redirectUrl: string;
  delayMs?: number;
}

const RADIUS = 36;
const STROKE = 4;
const CIRCUM = 2 * Math.PI * RADIUS;

export default function EnrollHandoff({ redirectUrl, delayMs = 2000 }: Props) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0); // 0..1
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) {
      // Skip auto-redirect entirely under reduced motion — user must click.
      return;
    }

    function step(t: number) {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / delayMs);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        router.push(redirectUrl);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [delayMs, redirectUrl, reduced, router]);

  const offset = CIRCUM * (1 - progress);

  return (
    <div className="bg-forest-900/80 backdrop-blur-sm border border-cyan/30 rounded-2xl p-8 sm:p-10 text-center max-w-lg w-full shadow-[0_0_80px_-20px_rgba(0,221,204,0.4)]">
      <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-4">
        Handoff
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-4 leading-tight">
        You&apos;re heading to Luma.
      </h1>
      <p className="text-cream/75 leading-relaxed mb-8">
        RAP registration runs through <span className="text-cream">lu.ma/ai-ethics</span> — pick your cohort, reserve a seat, and you&apos;re in.
      </p>

      {/* Manual link — always present, focusable from t=0 */}
      <a
        href={redirectUrl}
        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-forest-950 font-semibold rounded-full hover:bg-cyan/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
      >
        Continue to Luma →
      </a>

      {!reduced && (
        <div className="mt-8 flex flex-col items-center" aria-hidden>
          <svg
            width={(RADIUS + STROKE) * 2}
            height={(RADIUS + STROKE) * 2}
            className="-rotate-90"
          >
            <circle
              cx={RADIUS + STROKE}
              cy={RADIUS + STROKE}
              r={RADIUS}
              stroke="rgba(247, 244, 233, 0.15)"
              strokeWidth={STROKE}
              fill="none"
            />
            <motion.circle
              cx={RADIUS + STROKE}
              cy={RADIUS + STROKE}
              r={RADIUS}
              stroke="#00DDCC"
              strokeWidth={STROKE}
              fill="none"
              strokeDasharray={CIRCUM}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 6px rgba(0,221,204,0.7))",
              }}
            />
          </svg>
          <p className="mt-3 text-muted text-xs uppercase tracking-widest">
            Redirecting…
          </p>
        </div>
      )}

      {reduced && (
        <p className="mt-6 text-muted text-sm">
          Reduced-motion mode: auto-redirect disabled. Use the button above to continue.
        </p>
      )}
    </div>
  );
}
