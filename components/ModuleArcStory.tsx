"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export interface ArcChapter {
  numeral: string;
  eyebrow: string;
  heading: string;
  subtheme: string;
  body: string;
  image: string; // /images/...
  imageAlt: string;
}

interface Props {
  chapters: ArcChapter[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

function ChapterImage({
  chapter,
  index,
  total,
  progress,
}: {
  chapter: ArcChapter;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const blur = meta[chapter.image]?.blurDataURL;
  // Crossfade window: each chapter owns 1/total of scroll progress.
  // Fade in over the first 15% of its slot; fade out over the last 15%.
  const slot = 1 / total;
  const start = index * slot;
  const end = (index + 1) * slot;
  const fadeIn = start + slot * 0.15;
  const fadeOut = end - slot * 0.15;

  const opacity = useTransform(
    progress,
    [start, fadeIn, fadeOut, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0],
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <Image
        src={chapter.image}
        alt={chapter.imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading={index === 0 ? "eager" : "lazy"}
        placeholder={blur ? "blur" : undefined}
        blurDataURL={blur}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-950/55" />
    </motion.div>
  );
}

export default function ModuleArcStory({ chapters }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-forest-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0">
        {/* Sticky image stack — left on desktop */}
        <div className="relative">
          <div className="lg:sticky lg:top-0 lg:h-screen h-[55vh] overflow-hidden">
            {reduced ? (
              <div className="absolute inset-0">
                <Image
                  src={chapters[0].image}
                  alt={chapters[0].imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder={
                    meta[chapters[0].image]?.blurDataURL ? "blur" : undefined
                  }
                  blurDataURL={meta[chapters[0].image]?.blurDataURL}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-950/55" />
              </div>
            ) : (
              chapters.map((c, i) => (
                <ChapterImage
                  key={c.numeral}
                  chapter={c}
                  index={i}
                  total={chapters.length}
                  progress={scrollYProgress}
                />
              ))
            )}
          </div>
        </div>

        {/* Scrolling chapters — right */}
        <div className="relative flex flex-col">
          {chapters.map((c) => (
            <motion.div
              key={c.numeral}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 py-24"
            >
              {/* Pinned massive decorative numeral (background ornament) */}
              <span
                aria-hidden="true"
                role="presentation"
                data-numeral={c.numeral}
                className="arc-numeral absolute right-0 lg:-right-6 top-12 lg:top-20 font-serif font-semibold leading-none pointer-events-none select-none"
                style={{ fontSize: "clamp(8rem, 12vw, 16rem)" }}
              />


              <div className="relative">
                <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
                  {c.eyebrow}
                </p>
                <h2
                  className="font-serif text-cream font-semibold leading-[1.08] mb-3"
                  style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
                >
                  {c.heading}
                </h2>
                <p className="text-cream/55 text-sm tracking-wide mb-6 italic">
                  {c.subtheme}
                </p>
                <p
                  className="text-cream/80 leading-relaxed max-w-xl"
                  style={{ fontSize: "clamp(1.05rem, 0.6vw + 0.95rem, 1.25rem)" }}
                >
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
