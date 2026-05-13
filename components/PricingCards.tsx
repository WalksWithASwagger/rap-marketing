"use client";

import Link from "next/link";

export interface CohortLine {
  code: string;
  label: string;
  standard: number;
  member: number;
}

interface Props {
  cohorts: CohortLine[];
}

export default function PricingCards({ cohorts }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Card
        title="BC + AI Member"
        eyebrow="Member tuition"
        priceKey="member"
        cohorts={cohorts}
        emphasis
      />
      <Card
        title="Non-member"
        eyebrow="Standard tuition"
        priceKey="standard"
        cohorts={cohorts}
      />
    </div>
  );
}

interface CardProps {
  title: string;
  eyebrow: string;
  priceKey: "standard" | "member";
  cohorts: CohortLine[];
  emphasis?: boolean;
}

function Card({ title, eyebrow, priceKey, cohorts, emphasis }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 border flex flex-col h-full ${
        emphasis
          ? "border-cyan/50 bg-cyan/[0.04] shadow-[0_0_40px_-20px_rgba(0,221,204,0.6)]"
          : "border-forest-700 bg-forest-900/40"
      }`}
    >
      <p
        className={`text-xs uppercase tracking-[0.22em] mb-2 ${
          emphasis ? "text-cyan" : "text-muted"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="font-serif text-cream text-xl font-semibold mb-5">{title}</h2>

      <ul className="space-y-3 mb-6 flex-1">
        {cohorts.map((c) => {
          const price = c[priceKey];
          return (
            <li
              key={c.code}
              className="flex items-baseline justify-between gap-3 text-sm border-b border-forest-700/60 pb-3 last:border-0"
            >
              <span className="text-cream/85 leading-snug">{c.label}</span>
              <span
                className={`font-serif font-bold whitespace-nowrap ${
                  emphasis ? "text-cyan" : "text-gold"
                }`}
              >
                ${price.toLocaleString("en-CA")}
              </span>
            </li>
          );
        })}
      </ul>

      <p className="text-muted text-xs mb-4">All prices CAD.</p>

      <Link
        href="/enroll"
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
          emphasis
            ? "bg-cyan text-forest-950 hover:bg-cyan/90"
            : "border border-cream/30 text-cream hover:border-cyan hover:text-cyan"
        }`}
      >
        Enroll →
      </Link>
    </div>
  );
}
