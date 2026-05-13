"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";

type Meta = Record<string, { blurDataURL?: string; width?: number; height?: number }>;
const meta = imageMeta as Meta;

interface Props {
  src: string;
  alt: string;
  intensity?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

export default function ParallaxImage({
  src,
  alt,
  intensity = 0.1,
  sizes = "100vw",
  className = "",
  priority = false,
  objectPosition,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pct = intensity * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${pct}%`, `${pct}%`]);

  const blur = meta[src]?.blurDataURL;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={reduced ? undefined : { y }}
        className="absolute inset-[-15%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          placeholder={blur ? "blur" : undefined}
          blurDataURL={blur}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </motion.div>
    </div>
  );
}
