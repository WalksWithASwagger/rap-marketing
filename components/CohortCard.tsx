"use client";

import Image from "next/image";
import { motion } from "motion/react";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";
import MagneticButton from "./MagneticButton";
import CountReveal from "./CountReveal";
import type { Cohort } from "@/data/cohorts";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  cohort: Cohort;
  index?: number;
}

function formatDateBig(start: string): { day: string; month: string } {
  const d = new Date(start + "T00:00:00");
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase();
  return { day, month };
}

export default function CohortCard({ cohort, index = 0 }: Props) {
  const reduced = useReducedMotion();
  const blur = meta[cohort.image]?.blurDataURL;
  const { day, month } = formatDateBig(cohort.startDate);
  const seatsPct = Math.max(
    0,
    Math.min(100, (cohort.seatsRemaining / cohort.capacityMax) * 100),
  );

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
      className="group flex flex-col bg-forest-900/70 border border-forest-700 hover:border-cyan/60 rounded-2xl overflow-hidden transition-colors h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cohort.image}
          alt={`${cohort.label} — ${cohort.format}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          placeholder={blur ? "blur" : undefined}
          blurDataURL={blur}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent" />
        <div className="absolute top-5 left-5">
          <p className="text-cyan text-[10px] font-semibold uppercase tracking-[0.3em]">
            {cohort.label}
          </p>
        </div>
        {cohort.inPerson && (
          <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gold/90 text-forest-950 text-[10px] font-bold uppercase tracking-[0.2em]">
            In Person
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col p-7 sm:p-8">
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="font-serif text-cream font-semibold leading-none"
            style={{ fontSize: "clamp(3rem, 5vw + 0.5rem, 5.5rem)" }}
          >
            <CountReveal value={day} durationMs={1200} />
          </span>
          <span className="text-cyan font-semibold tracking-[0.2em] text-sm self-end mb-2">
            {month}
          </span>
        </div>

        <p className="text-cream/80 text-sm leading-relaxed mb-6">
          {cohort.dates}
        </p>

        <dl className="space-y-3 text-sm mb-6">
          <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/70">Format</dt>
          <dd className="-mt-2 text-cream/85">{cohort.format}</dd>

          <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/70">Capacity</dt>
          <dd className="-mt-2 text-cream/85">
            <span>{cohort.capacity}</span>
            <span
              className="mt-2 block h-1 rounded-full bg-forest-700 overflow-hidden"
              aria-hidden="true"
            >
              <motion.span
                initial={reduced ? { width: `${seatsPct}%` } : { width: 0 }}
                whileInView={{ width: `${seatsPct}%` }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.12, ease: EASE }}
                className="block h-full bg-cyan shadow-[0_0_12px_rgba(0,221,204,0.7)]"
              />
            </span>
          </dd>

          <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/70">Pricing</dt>
          <dd className="-mt-2 text-cream/85">
            <span className="text-cream font-semibold">
              ${cohort.priceStandard.toLocaleString()}
            </span>
            <span className="text-cream/75"> CAD · Member ${cohort.priceMember}</span>
          </dd>
        </dl>

        <p className="text-cream/65 text-sm leading-relaxed mb-7 flex-1">
          {cohort.description}
        </p>

        <div className="mt-auto">
          <MagneticButton href={cohort.href} external variant="primary">
            Apply for {cohort.label} →
          </MagneticButton>
        </div>
      </div>
    </motion.article>
  );
}
