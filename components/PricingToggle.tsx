"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import useReducedMotion from "@/lib/useReducedMotion";

const DIGIT_HEIGHT = 56; // px — must match line-height of digit column
const SPRING = { stiffness: 110, damping: 18, mass: 0.9 };

interface DigitSlotProps {
  value: number; // 0-9
  reduced: boolean;
}

function DigitSlot({ value, reduced }: DigitSlotProps) {
  const motionValue = useSpring(value, SPRING);
  const y = useTransform(motionValue, (v) => `-${v * DIGIT_HEIGHT}px`);

  useEffect(() => {
    if (reduced) motionValue.jump(value);
    else motionValue.set(value);
  }, [value, reduced, motionValue]);

  return (
    <span
      className="inline-block overflow-hidden align-baseline"
      style={{ height: DIGIT_HEIGHT, lineHeight: `${DIGIT_HEIGHT}px` }}
      aria-hidden
    >
      <motion.span
        style={{ y, display: "inline-block" }}
        className="font-serif font-bold"
      >
        {Array.from({ length: 10 }).map((_, n) => (
          <span
            key={n}
            className="block"
            style={{ height: DIGIT_HEIGHT, lineHeight: `${DIGIT_HEIGHT}px` }}
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface PriceDisplayProps {
  value: number;
  prefix?: string;
  suffix?: string;
  highlight?: boolean;
}

function PriceDisplay({ value, prefix = "$", suffix = "", highlight }: PriceDisplayProps) {
  const reduced = useReducedMotion();
  const formatted = value.toLocaleString("en-CA"); // adds commas
  const chars = formatted.split("");

  return (
    <span
      className={`inline-flex items-baseline ${highlight ? "text-cyan glow-text" : "text-gold"}`}
      style={{ fontSize: DIGIT_HEIGHT, lineHeight: `${DIGIT_HEIGHT}px` }}
      role="text"
      aria-label={`${prefix}${formatted}${suffix} CAD`}
    >
      <span className="font-serif font-bold mr-1" aria-hidden>{prefix}</span>
      {chars.map((c, i) =>
        /\d/.test(c) ? (
          <DigitSlot key={`d-${i}-${c}`} value={Number(c)} reduced={reduced} />
        ) : (
          <span key={`s-${i}`} className="font-serif font-bold" aria-hidden>
            {c}
          </span>
        ),
      )}
      {suffix && (
        <span className="font-serif font-bold ml-1" aria-hidden>
          {suffix}
        </span>
      )}
    </span>
  );
}

interface PricingToggleProps {
  /** Standard (non-member) price for the cohort shown in the card */
  standard?: number;
  /** Member price for the cohort shown in the card */
  member?: number;
  /** Currency suffix label rendered below price */
  currencyLabel?: string;
  /** Default state */
  defaultMember?: boolean;
}

export default function PricingToggle({
  standard = 1500,
  member = 750,
  currencyLabel = "CAD",
  defaultMember = true,
}: PricingToggleProps) {
  const [isMember, setIsMember] = useState(defaultMember);
  const reduced = useReducedMotion();
  const current = isMember ? member : standard;

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setIsMember(false)}
          className={`text-sm font-semibold transition-colors ${!isMember ? "text-cream" : "text-muted"}`}
          aria-pressed={!isMember}
        >
          Non-member
        </button>
        <button
          onClick={() => setIsMember((v) => !v)}
          className="relative w-14 h-7 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          style={{ backgroundColor: isMember ? "#00DDCC" : "#3a6644" }}
          aria-label="Toggle BC + AI membership pricing"
          role="switch"
          aria-checked={isMember}
        >
          <motion.span
            layout
            transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 600, damping: 30 }}
            className="absolute top-1 w-5 h-5 bg-cream rounded-full shadow"
            style={{ left: isMember ? "1.875rem" : "0.25rem" }}
          />
        </button>
        <button
          onClick={() => setIsMember(true)}
          className={`text-sm font-semibold transition-colors ${isMember ? "text-cream" : "text-muted"}`}
          aria-pressed={isMember}
        >
          BC + AI Member
        </button>
      </div>

      {/* Featured price headline */}
      <div className="mb-8">
        <p className="text-muted text-xs uppercase tracking-widest mb-2">
          {isMember ? "Member tuition" : "Standard tuition"}
        </p>
        <PriceDisplay value={current} prefix="$" highlight={isMember} />
        <p className="text-muted text-sm mt-2">{currencyLabel} · per cohort, all-in</p>
      </div>

      {isMember ? (
        <p className="text-muted text-sm leading-relaxed">
          Members save{" "}
          <span className="text-growth font-semibold">
            ${Math.max(0, standard - member).toLocaleString("en-CA")}
          </span>{" "}
          vs standard pricing. BC + AI membership is $50/year.
        </p>
      ) : (
        <p className="text-muted text-sm leading-relaxed">
          Not a member?{" "}
          <span className="text-growth font-semibold">It&apos;s $50/year</span> and covers half your tuition.
        </p>
      )}
    </div>
  );
}

export { PriceDisplay, DigitSlot };
