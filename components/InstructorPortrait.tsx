"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
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

/**
 * One crossfading portrait. Each instance owns exactly one `useTransform`
 * call, so the parent can render N of these from `images.map(...)` without
 * violating the rules-of-hooks (N is no longer hardcoded).
 *
 * Crossfade math: divide [0,1] scroll progress into `total` equal windows.
 * Image `i` fades in approaching `i/total`, holds through `(i+1)/total`,
 * fades out after — except the first holds from progress 0 and the last
 * holds to progress 1.
 */
function CrossfadeImage({
  src,
  alt,
  blurDataURL,
  index,
  total,
  progress,
}: {
  src: string;
  alt: string;
  blurDataURL?: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const w = 1 / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Monotonically non-decreasing input keyframes (duplicates at the edges
  // are allowed and pin the first/last image visible at the scroll bounds).
  const inputs: [number, number, number, number] = [
    isFirst ? 0 : (index - 0.4) * w,
    isFirst ? 0 : index * w,
    isLast ? 1 : (index + 1) * w,
    isLast ? 1 : (index + 1.4) * w,
  ];
  const outputs: [number, number, number, number] = [
    isFirst ? 1 : 0,
    1,
    1,
    isLast ? 1 : 0,
  ];

  const opacity = useTransform(progress, inputs, outputs);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading="lazy"
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL}
        className="object-cover"
      />
    </motion.div>
  );
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

  // Reduced motion: show only the first image, no crossfade.
  const shown = reduced ? images.slice(0, 1) : images;

  const imageCol = (
    <div className="relative w-full">
      <div className="lg:sticky lg:top-24 h-[60vh] lg:h-[78vh] rounded-2xl overflow-hidden bg-forest-900">
        {reduced ? (
          <div className="absolute inset-0">
            <Image
              src={shown[0]}
              alt={`${name} — portrait`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              placeholder={meta[shown[0]]?.blurDataURL ? "blur" : undefined}
              blurDataURL={meta[shown[0]]?.blurDataURL}
              className="object-cover"
            />
          </div>
        ) : (
          shown.map((src, i) => (
            <CrossfadeImage
              key={src}
              src={src}
              alt={i === 0 ? `${name} — portrait` : ""}
              blurDataURL={meta[src]?.blurDataURL}
              index={i}
              total={shown.length}
              progress={scrollYProgress}
            />
          ))
        )}
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
