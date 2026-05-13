"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

interface Chapter {
  eyebrow?: string;
  heading: string;
  body: ReactNode;
}

interface Props {
  image: string;
  imageAlt: string;
  chapters: Chapter[];
  parallaxIntensity?: number;
}

export default function StickyScrollStory({
  image,
  imageAlt,
  chapters,
  parallaxIntensity = 0.15,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pct = parallaxIntensity * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${pct}%`, `${pct}%`]);
  const blur = meta[image]?.blurDataURL;

  return (
    <section ref={ref} className="relative bg-forest-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0">
        {/* Sticky image — left on desktop */}
        <div className="relative">
          <div className="lg:sticky lg:top-0 lg:h-screen h-[60vh] overflow-hidden">
            <motion.div
              style={reduced ? undefined : { y }}
              className="absolute inset-[-15%]"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                placeholder={blur ? "blur" : undefined}
                blurDataURL={blur}
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-950/60" />
          </div>
        </div>

        {/* Scrolling chapters — right */}
        <div className="flex flex-col">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-screen flex flex-col justify-center px-6 sm:px-12 py-24"
            >
              {c.eyebrow && (
                <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
                  {c.eyebrow}
                </p>
              )}
              <h2
                className="font-serif text-cream font-semibold leading-[1.08] mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
              >
                {c.heading}
              </h2>
              <div
                className="text-cream/75 leading-relaxed max-w-xl"
                style={{ fontSize: "clamp(1.05rem, 0.6vw + 0.95rem, 1.25rem)" }}
              >
                {c.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
