"use client";

import Image from "next/image";
import { motion } from "motion/react";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export interface MosaicTile {
  src: string;
  alt: string;
  label: string;
  body: string;
}

interface Props {
  tiles: MosaicTile[];
}

export default function ImageMosaic({ tiles }: Props) {
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      {tiles.map((t, i) => {
        const blur = meta[t.src]?.blurDataURL;
        return (
          <motion.figure
            key={t.src}
            initial={reduced ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-forest-900"
          >
            <Image
              src={t.src}
              alt={t.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              placeholder={blur ? "blur" : undefined}
              blurDataURL={blur}
              className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-transparent" />
            <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/60 transition-colors duration-500" />

            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-block text-cyan text-[11px] font-semibold uppercase tracking-[0.28em] mb-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                {t.label}
              </span>
              <p
                className="font-serif text-cream font-semibold leading-tight"
                style={{ fontSize: "clamp(1.15rem, 1.2vw + 0.8rem, 1.55rem)" }}
              >
                {t.body}
              </p>
            </figcaption>
          </motion.figure>
        );
      })}
    </div>
  );
}
