"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  name: string;
  role: string;
  bio: string[];
  images: string[];
  side: "left" | "right";
  badges?: string[];
}

export default function InstructorPortrait({
  name,
  role,
  bio,
  images,
  side,
  badges,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Crossfade across scroll progress. Hooks must be unconditional — fixed N=3.
  const op0 = useTransform(scrollYProgress, [0.0, 0.25, 0.4], [1, 1, 0]);
  const op1 = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.75], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.6, 0.75, 1.0], [0, 1, 1]);
  const opacities = [op0, op1, op2];

  const imageCol = (
    <div className="relative w-full">
      <div className="lg:sticky lg:top-24 h-[60vh] lg:h-[78vh] rounded-2xl overflow-hidden bg-forest-900">
        {(reduced ? images.slice(0, 1) : images).map((src, i) => {
          const blur = meta[src]?.blurDataURL;
          return (
            <motion.div
              key={src}
              style={reduced ? undefined : { opacity: opacities[i] }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={i === 0 ? `${name} — portrait` : ""}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                placeholder={blur ? "blur" : undefined}
                blurDataURL={blur}
                className="object-cover"
              />
            </motion.div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );

  const nameCol = (
    <div className="flex flex-col justify-between min-h-[60vh] lg:min-h-[78vh] py-6 lg:py-12">
      <div>
        <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-6">
          {role}
        </p>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className={`font-serif font-semibold text-cream leading-[0.95] tracking-tight ${
            side === "right" ? "text-right" : "text-left"
          }`}
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
        >
          {name}
        </motion.h2>
      </div>

      <div className={`mt-10 max-w-md ${side === "right" ? "lg:ml-auto" : ""}`}>
        <div className="space-y-5 text-cream/80 leading-relaxed text-base">
          {bio.map((para, i) => (
            <motion.p
              key={i}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {badges && badges.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full border border-forest-600 bg-forest-900/50 text-cream/65 text-[11px] tracking-wide"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-32"
      aria-label={`${name}, ${role}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {side === "left" ? (
          <>
            {imageCol}
            {nameCol}
          </>
        ) : (
          <>
            {nameCol}
            {imageCol}
          </>
        )}
      </div>
    </section>
  );
}
