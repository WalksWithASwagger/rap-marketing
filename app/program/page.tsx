import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ModuleArcStory, { type ArcChapter } from "@/components/ModuleArcStory";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import imageMeta from "@/lib/image-meta.json";
import { ENROLL_URL, modules } from "@/data/modules";

const meta = imageMeta as Record<string, { blurDataURL?: string }>;

export const metadata: Metadata = {
  title: "Program | RAP Certification",
  description:
    "Four weeks. Four arguments. One certification. The RAP curriculum is a sticky-scroll arc through Foundations, Core Ethics, Societal Impact, and The Human Element.",
};

const chapters: ArcChapter[] = modules.map((m) => ({
  numeral: m.numeral,
  eyebrow: m.number,
  heading: m.title,
  subtheme: m.subtheme,
  body: m.argument,
  image: m.carouselImage,
  imageAlt: `${m.title} module visual`,
}));

const artifacts = [
  {
    label: "Module 01",
    title: "Personal AI Inventory",
    desc: "Every AI system touching your work, with accuracy risks named.",
  },
  {
    label: "Module 02",
    title: "Ethics Assessment",
    desc: "Bias, privacy, and ownership audited against a real system.",
  },
  {
    label: "Module 03",
    title: "Deployment Readiness Report",
    desc: "Go/no-go decision with stakeholders, labor, and carbon math.",
  },
  {
    label: "Module 04",
    title: "Capstone Governance Document",
    desc: "A governance doc for one AI system, ready to act on.",
  },
  {
    label: "Certification",
    title: "RAP Certificate",
    desc: "Issued on capstone approval. Verifiable. Yours.",
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        image="/images/04a-curriculum-journey-arc.png"
        imageAlt="The RAP curriculum journey across four weeks"
        eyebrow="The program"
        headline="Four weeks. Four arguments. One certification."
        sub="A sticky-scroll walk through the four modules of the Responsible AI Professional certification — what each one argues, what you build, and what you'll be asked to defend."
        cta={{ label: "Enroll →", href: ENROLL_URL, external: true }}
        ctaSecondary={{ label: "See the cohorts", href: "/cohorts" }}
        height="70"
      />

      {/* 2 — Pedagogical frame */}
      <section className="bg-forest-950 py-28 sm:py-36">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-6">
              The frame
            </p>
            <p
              className="font-serif text-cream font-semibold leading-[1.25]"
              style={{ fontSize: "clamp(1.5rem, 1.6vw + 1rem, 2.25rem)" }}
            >
              RAP doesn&apos;t teach you what to think about AI. It teaches you what
              questions are worth asking — and gives you the frameworks to answer
              them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 — Module story arc (sticky-scroll, image crossfade per chapter) */}
      <ModuleArcStory chapters={chapters} />

      {/* 4 — Artifacts strip */}
      <section className="relative bg-forest-950 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Image
            src="/images/mkt-program-overview.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            loading="lazy"
            placeholder={meta["/images/mkt-program-overview.png"]?.blurDataURL ? "blur" : undefined}
            blurDataURL={meta["/images/mkt-program-overview.png"]?.blurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="max-w-3xl mb-14">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              What you leave with
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
            >
              Five artifacts. One credential.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {artifacts.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 60}>
                <article className="h-full rounded-2xl border border-forest-700/60 bg-forest-900/70 backdrop-blur-sm p-5 sm:p-6">
                  <p className="text-cyan text-[10px] font-semibold uppercase tracking-[0.28em] mb-3">
                    {a.label}
                  </p>
                  <h3 className="font-serif text-cream text-lg sm:text-xl leading-tight mb-3">
                    {a.title}
                  </h3>
                  <p className="text-cream/70 text-sm leading-snug">{a.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Module deep-dive CTAs */}
      <section className="bg-forest-950 py-28 border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="max-w-3xl mb-14">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              Go deeper
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
            >
              One page per module.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m, i) => {
              const blur = meta[m.carouselImage]?.blurDataURL;
              return (
                <ScrollReveal key={m.slug} delay={i * 80}>
                  <Link
                    href={m.href}
                    className="group relative block aspect-[16/10] rounded-2xl overflow-hidden border border-forest-700/60 bg-forest-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
                  >
                    <Image
                      src={m.carouselImage}
                      alt={`${m.title} module`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      placeholder={blur ? "blur" : undefined}
                      blurDataURL={blur}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/95 via-forest-950/50 to-forest-950/5" />
                    <div className="relative h-full flex flex-col justify-between p-7 sm:p-9">
                      <div>
                        <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-3">
                          {m.number}
                        </p>
                        <h3
                          className="font-serif text-cream font-semibold leading-[1.05] mb-2"
                          style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)" }}
                        >
                          {m.title}
                        </h3>
                        <p className="text-cream/60 text-sm italic">{m.subtheme}</p>
                      </div>
                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <dl className="grid grid-cols-3 gap-x-6 gap-y-1 text-cream/85">
                          <div>
                            <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-1">
                              Widgets
                            </dt>
                            <dd className="font-serif text-xl text-cyan">{m.widgetCount}</dd>
                          </div>
                          <div>
                            <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-1">
                              Artifact
                            </dt>
                            <dd className="font-serif text-sm leading-tight">{m.artifact}</dd>
                          </div>
                          <div>
                            <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-1">
                              Quiz
                            </dt>
                            <dd className="font-serif text-xl text-cyan">{m.quiz}</dd>
                          </div>
                        </dl>
                        <span className="text-sm text-cream/80 group-hover:text-cyan transition-colors inline-flex items-center gap-2 border-b border-cream/30 group-hover:border-cyan pb-1">
                          Module detail
                          <span aria-hidden>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <MagneticButton href={ENROLL_URL} external variant="primary">
              Enroll in the next cohort →
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
