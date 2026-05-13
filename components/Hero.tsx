"use client";

import Image from "next/image";
import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";
import imageMeta from "@/lib/image-meta.json";
import useReducedMotion from "@/lib/useReducedMotion";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

const EASE = [0.16, 1, 0.3, 1] as const;

interface CTA {
  label: string;
  href: string;
  external?: boolean;
}

interface Props {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  headline: string;
  sub?: string;
  cta?: CTA;
  ctaSecondary?: CTA;
  trustStrip?: string;
  height?: "full" | "70" | "50";
  generativeAccent?: boolean;
  objectPosition?: string;
}

export default function Hero({
  image,
  imageAlt = "",
  eyebrow,
  headline,
  sub,
  cta,
  ctaSecondary,
  trustStrip,
  height = "full",
  generativeAccent = false,
  objectPosition = "center",
}: Props) {
  const reduced = useReducedMotion();
  const words = headline.split(" ");
  const blur = meta[image]?.blurDataURL;

  const heightCls =
    height === "full"
      ? "h-[85vh] md:h-screen min-h-[560px] max-h-[1100px]"
      : height === "50"
        ? "h-[50vh] min-h-[400px]"
        : "h-[70vh] min-h-[500px]";

  return (
    <section className={`relative overflow-hidden ${heightCls}`}>
      <motion.div
        initial={reduced ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder={blur ? "blur" : undefined}
          blurDataURL={blur}
          className="object-cover"
          style={{ objectPosition }}
        />
      </motion.div>

      {/* Gradient washes for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-950/55 to-forest-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />

      {generativeAccent && (
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay opacity-[0.04]"
        >
          <defs>
            <filter id="hero-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3">
                {!reduced && (
                  <animate
                    attributeName="baseFrequency"
                    dur="8s"
                    values="0.85;0.65;0.85"
                    repeatCount="indefinite"
                  />
                )}
              </feTurbulence>
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>
      )}

      <div className="relative h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl">
            {eyebrow && (
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5"
              >
                {eyebrow}
              </motion.p>
            )}

            <h1
              className="font-serif font-semibold text-cream leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 6vw + 0.5rem, 6rem)" }}
            >
              {words.map((w, i) => (
                <span
                  key={`${w}-${i}`}
                  className="inline-block overflow-hidden align-baseline"
                  style={{ marginRight: "0.28em" }}
                >
                  <motion.span
                    initial={reduced ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + i * 0.08,
                      ease: EASE,
                    }}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            {sub && (
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
                className="mt-7 text-cream/85 max-w-2xl leading-relaxed"
                style={{ fontSize: "clamp(1.05rem, 1.1vw + 0.85rem, 1.4rem)" }}
              >
                {sub}
              </motion.p>
            )}

            {(cta || ctaSecondary) && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
                className="mt-9 flex flex-wrap gap-4"
              >
                {cta && (
                  <MagneticButton href={cta.href} external={cta.external} variant="primary">
                    {cta.label}
                  </MagneticButton>
                )}
                {ctaSecondary && (
                  <MagneticButton
                    href={ctaSecondary.href}
                    external={ctaSecondary.external}
                    variant="secondary"
                  >
                    {ctaSecondary.label}
                  </MagneticButton>
                )}
              </motion.div>
            )}

            {trustStrip && (
              <motion.p
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
                className="mt-10 text-cream/55 text-xs tracking-wide"
              >
                {trustStrip}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
