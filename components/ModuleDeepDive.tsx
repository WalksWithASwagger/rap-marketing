import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";
import imageMeta from "@/lib/image-meta.json";
import { ENROLL_URL, ModuleData, adjacentModules } from "@/data/modules";

const meta = imageMeta as Record<string, { blurDataURL?: string }>;

interface Props {
  module: ModuleData;
}

export default function ModuleDeepDive({ module: m }: Props) {
  const { prev, next } = adjacentModules(m.slug);
  const widgetPreviewImage = m.contentImage;
  const conceptImage = m.carouselImage;
  const artifactImage = "/images/rap-credential.png";

  return (
    <>
      {/* 1 — Hero */}
      <Hero
        image={m.carouselImage}
        imageAlt={`${m.title} module hero`}
        eyebrow={m.number}
        headline={m.title}
        sub={m.subtheme}
        cta={{ label: "Enroll →", href: ENROLL_URL, external: true }}
        ctaSecondary={{ label: "All modules", href: "/program" }}
        height="70"
      />

      {/* 2 — The argument */}
      <section className="bg-forest-950 py-28 sm:py-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-6">
              The argument
            </p>
            <p
              className="font-serif text-cream font-semibold leading-[1.25]"
              style={{ fontSize: "clamp(1.5rem, 1.6vw + 1rem, 2.25rem)" }}
            >
              {m.argument}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 — Widget preview */}
      <section className="relative bg-forest-900/40 py-24 border-y border-forest-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              What you build with
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05] mb-10"
              style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)" }}
            >
              {m.widgetCount} interactive widgets
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative rounded-2xl overflow-hidden border border-forest-700/60 bg-forest-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={widgetPreviewImage}
                  alt={`${m.widgets[0]} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  loading="lazy"
                  placeholder={meta[widgetPreviewImage]?.blurDataURL ? "blur" : undefined}
                  blurDataURL={meta[widgetPreviewImage]?.blurDataURL}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-cream/70 text-xs uppercase tracking-[0.25em] mb-2">
                    Sample from the live course
                  </p>
                  <p className="font-serif text-cream text-xl sm:text-2xl">
                    {m.widgets[0]}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {m.widgets.map((w, i) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-xl border border-forest-700/60 bg-forest-900/60 px-4 py-3"
                >
                  <span className="text-cyan font-serif text-sm shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-cream/85 text-sm leading-snug">{w}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 — Concept explainer image (full bleed) */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={conceptImage}
          alt={`${m.title} concept`}
          fill
          sizes="100vw"
          loading="lazy"
          placeholder={meta[conceptImage]?.blurDataURL ? "blur" : undefined}
          blurDataURL={meta[conceptImage]?.blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl w-full mx-auto px-6 sm:px-10 pb-12 sm:pb-16">
            <ScrollReveal>
              <p className="text-cream/60 text-xs uppercase tracking-[0.28em] mb-3">
                {m.subtheme}
              </p>
              <p
                className="font-serif text-cream/95 max-w-2xl leading-tight"
                style={{ fontSize: "clamp(1.5rem, 1.6vw + 1rem, 2.25rem)" }}
              >
                {m.title}.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5 — Artifact preview */}
      <section className="bg-forest-950 py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-forest-700/60 bg-forest-900">
              <Image
                src={artifactImage}
                alt={`${m.artifact} artifact`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                placeholder={meta[artifactImage]?.blurDataURL ? "blur" : undefined}
                blurDataURL={meta[artifactImage]?.blurDataURL}
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              The artifact
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 3vw + 0.5rem, 3.25rem)" }}
            >
              {m.artifact}
            </h2>
            <p className="text-cream/80 leading-relaxed text-base sm:text-lg max-w-xl">
              {m.artifactDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6 — Quiz preview */}
      <section className="bg-forest-900/40 py-28 border-y border-forest-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              Quiz preview
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05] mb-3"
              style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)" }}
            >
              {m.quizCount} questions. 80% to pass.
            </h2>
            <p className="text-cream/65 mb-12 max-w-2xl">
              Three sample questions in the same style. The live course has more — and
              they&apos;re harder than they look.
            </p>
          </ScrollReveal>

          <ol className="space-y-8 list-none p-0">
            {m.quizSamples.map((q, i) => (
              <li
                key={i}
                className="rounded-2xl border border-forest-700/60 bg-forest-900/60 p-6 sm:p-8"
              >
                <ScrollReveal delay={i * 80}>
                  <p className="text-cyan/80 text-xs uppercase tracking-[0.28em] mb-3">
                    Question {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-cream font-serif text-lg sm:text-xl leading-snug mb-5">
                    {q.prompt}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {q.options.map((opt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 rounded-lg border border-forest-700/40 bg-forest-900/40 px-4 py-3 text-cream/80 text-sm leading-snug"
                      >
                        <span className="text-cyan font-mono text-xs mt-0.5">
                          {String.fromCharCode(97 + j)})
                        </span>
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7 — Footer nav */}
      <section className="bg-forest-950 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
            {prev ? (
              <Link
                href={prev.href}
                className="group flex flex-col text-left max-w-xs"
              >
                <span className="text-cream/55 text-xs uppercase tracking-[0.28em] mb-2">
                  ← Previous
                </span>
                <span className="font-serif text-cream group-hover:text-cyan transition-colors text-xl sm:text-2xl leading-tight">
                  {prev.number}: {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={next.href}
                className="group flex flex-col text-right max-w-xs"
              >
                <span className="text-cream/55 text-xs uppercase tracking-[0.28em] mb-2">
                  Next →
                </span>
                <span className="font-serif text-cream group-hover:text-cyan transition-colors text-xl sm:text-2xl leading-tight">
                  {next.number}: {next.title}
                </span>
              </Link>
            ) : (
              <Link
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col text-right max-w-xs"
              >
                <span className="text-cream/55 text-xs uppercase tracking-[0.28em] mb-2">
                  Next →
                </span>
                <span className="font-serif text-cream group-hover:text-cyan transition-colors text-xl sm:text-2xl leading-tight">
                  Enroll in the next cohort
                </span>
              </Link>
            )}
          </div>

          <div className="flex justify-center">
            <MagneticButton href={ENROLL_URL} external variant="primary">
              Enroll →
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
