import Image from "next/image";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import StickyScrollStory from "@/components/StickyScrollStory";
import ImageMosaic, { type MosaicTile } from "@/components/ImageMosaic";
import HorizontalScroller from "@/components/HorizontalScroller";
import ModuleStoryCard, { type Module } from "@/components/ModuleStoryCard";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import imageMeta from "@/lib/image-meta.json";
import { REGISTRATION_URL } from "@/lib/links";
import { cohorts as cohortsData } from "@/data/cohorts";

const ENROLL_URL = REGISTRATION_URL;

const meta = imageMeta as Record<string, { blurDataURL?: string }>;

const pillars: MosaicTile[] = [
  {
    src: "/images/06a-frameworks-integrated-venn.png",
    alt: "Integrated frameworks venn diagram",
    label: "Pillar 01",
    body: "You understand AI well enough to argue with it.",
  },
  {
    src: "/images/06b-frameworks-hub-spokes.png",
    alt: "Frameworks hub and spokes",
    label: "Pillar 02",
    body: "You can name the harms before they ship.",
  },
  {
    src: "/images/06c-frameworks-shield-quarters.png",
    alt: "Governance shield quartered",
    label: "Pillar 03",
    body: "You have the frameworks to govern what you can't predict.",
  },
];

const modules: Module[] = [
  {
    number: "Module 01",
    title: "Foundations",
    argument:
      "Technical grounding and the accuracy problem — how AI actually works, where it breaks, and why the confidence/accuracy gap matters.",
    widgets: 4,
    artifact: "Personal AI Inventory",
    quiz: "20Q",
    href: "/program/m1",
    image: "/images/carousel-week1.png",
  },
  {
    number: "Module 02",
    title: "Core Ethics",
    argument:
      "Bias, privacy, ownership. Identify algorithmic harm, work through consent and surveillance, navigate the tradeoffs in fairness.",
    widgets: 5,
    artifact: "Ethics Assessment",
    quiz: "25Q",
    href: "/program/m2",
    image: "/images/carousel-week2.png",
  },
  {
    number: "Module 03",
    title: "Societal Impact",
    argument:
      "Systems thinking for deployment. Stakeholder mapping, labour displacement, environmental cost, when a system is ready to ship.",
    widgets: 6,
    artifact: "Deployment Readiness Report",
    quiz: "25Q",
    href: "/program/m3",
    image: "/images/carousel-week3.png",
  },
  {
    number: "Module 04",
    title: "The Human Element",
    argument:
      "Trust, agency, Indigenous data sovereignty, parasocial dynamics. The questions that don't have clean answers — and a 50-question final.",
    widgets: 4,
    artifact: "Capstone",
    quiz: "50Q final",
    href: "/program/m4",
    image: "/images/carousel-week4.png",
  },
];

const proofCells = [
  { value: 20, suffix: "", label: "interactive widgets" },
  { value: 5, suffix: "", label: "artifact builders" },
  { value: 40, suffix: "", label: "discussion prompts" },
  { value: 26, suffix: "", label: "models in carbon calculator" },
  { value: 33, suffix: "", label: "documented failures" },
  { value: 80, suffix: "%", label: "pass threshold" },
];

const instructors = [
  {
    name: "Kris Krüg",
    role: "Program Lead",
    line: "NatGeo. Getty. TED. Indigenomics Institute. Twenty-five years in the room when technology meets the people it changes.",
    image: "/images/instructor-kk.png",
    objectPosition: "center 25%",
  },
  {
    name: "Martin Lopatka",
    role: "Curriculum",
    line: "PhD Forensic Statistics. Mozilla alumni. The person who can tell you exactly where the model is lying — and what to do about it.",
    image: "/images/01b-martin-aurora-glow.png",
    objectPosition: "center 30%",
  },
  {
    name: "Sarah Downey",
    role: "Guest Instructor",
    line: "Twenty years of nonprofit leadership. AI governance for mission-driven orgs. Stay curious. Stay connected. Stay human.",
    image: "/images/02c-sarah-twilight-wisdom.png",
    objectPosition: "center 30%",
  },
];

const cohorts = cohortsData.map((c) => ({
  label: c.label,
  dates: c.dates,
  format: c.format,
  capacity: c.capacity,
  tier: c.inPerson ? "Intensive rate" : c.id === "c1-may" ? "Founding rate" : "Standard rate",
}));

export default function Home() {
  return (
    <>
      {/* 1 — Cinematic hero */}
      <Hero
        image="/images/07a-alumni-growing-roots.png"
        imageAlt="A forest mycelial network at twilight — interconnected roots and bioluminescent points of light"
        eyebrow="Responsible AI Professional · Cohort 1"
        headline="Lead the room when AI walks in."
        sub="A 4-week certification for the people who have to answer for the AI decisions their organizations make."
        cta={{ label: "Enroll in Cohort 1 →", href: ENROLL_URL, external: true }}
        ctaSecondary={{ label: "See the program", href: "/program" }}
        trustStrip="Built by BC + AI Ecosystem Association · In partnership with TheUpgrade · 25–30 seats per cohort"
        height="full"
        generativeAccent
      />

      {/* 2 — The 30-seat promise (sticky scroll) */}
      <StickyScrollStory
        image="/images/05c-30seats-constellation.png"
        imageAlt="Thirty points of light forming a constellation"
        parallaxIntensity={0.15}
        chapters={[
          {
            eyebrow: "Why thirty",
            heading: "We cap every cohort at 30 seats.",
            body: (
              <>
                <p className="mb-5">
                  Not because we have to. Because at 31, you stop being a person and
                  start being a name on a screen.
                </p>
                <p className="text-cream/65">
                  Every cohort is small enough that the instructors learn your work,
                  your context, the actual decisions you have to walk into on Monday.
                </p>
              </>
            ),
          },
          {
            eyebrow: "What it buys you",
            heading: "Conversation, not consumption.",
            body: (
              <>
                <p className="mb-5">
                  Live cohort calls. Office hours. A discussion thread per module
                  where your peers — not a chatbot — push back on your thinking.
                </p>
                <p className="text-cream/65">
                  The certificate is the paper trail. The cohort is the actual
                  upgrade.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* 3 — Three pillars mosaic */}
      <section className="relative bg-forest-950 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Image
            src="/images/content-three-pillars.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            loading="lazy"
            placeholder={meta["/images/content-three-pillars.png"]?.blurDataURL ? "blur" : undefined}
            blurDataURL={meta["/images/content-three-pillars.png"]?.blurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="max-w-3xl mb-16">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              The shift
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
            >
              Three things change when you finish RAP.
            </h2>
          </ScrollReveal>

          <ImageMosaic tiles={pillars} />
        </div>
      </section>

      {/* 4 — Four-module horizontal scroll */}
      <Suspense fallback={null}>
        <HorizontalScroller
          count={modules.length}
          eyebrow="The arc"
          heading="Four modules. One practice."
        >
          {modules.map((m) => (
            <ModuleStoryCard key={m.number} module={m} />
          ))}
        </HorizontalScroller>
      </Suspense>

      {/* 5 — Instructor editorial blocks */}
      <section className="relative bg-forest-950">
        {instructors.map((inst, i) => (
          <article key={inst.name} className="relative h-[70vh] min-h-[480px]">
            <ParallaxImage
              src={inst.image}
              alt={`${inst.name}, ${inst.role}`}
              intensity={0.1}
              sizes="100vw"
              className="absolute inset-0 w-full h-full"
              objectPosition={inst.objectPosition}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-forest-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/20 to-transparent" />

            <div className="relative h-full max-w-6xl mx-auto px-6 sm:px-10 flex items-end pb-16 sm:pb-24">
              <ScrollReveal delay={i * 60} className="max-w-2xl">
                <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-4">
                  {inst.role}
                </p>
                <h3
                  className="font-serif text-cream font-semibold leading-[1.02] mb-5"
                  style={{ fontSize: "clamp(2.5rem, 4.5vw + 0.5rem, 5rem)" }}
                >
                  {inst.name}
                </h3>
                <p className="text-cream/80 text-base sm:text-lg leading-relaxed max-w-xl">
                  {inst.line}
                </p>
              </ScrollReveal>
            </div>
          </article>
        ))}
      </section>

      {/* 6 — Proof grid */}
      <section className="relative bg-forest-950 py-28 sm:py-36 border-t border-forest-800">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute -top-32 left-1/4 w-[40rem] h-[40rem] rounded-full bg-cyan/10 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[36rem] h-[36rem] rounded-full bg-cyan/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="max-w-2xl mb-16">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              What&apos;s actually in the course
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
            >
              The receipts.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-14 sm:gap-y-20">
            {proofCells.map((cell, i) => (
              <ScrollReveal key={cell.label} delay={i * 60}>
                <div>
                  <p
                    className="font-serif text-cyan font-semibold leading-none"
                    style={{ fontSize: "clamp(3rem, 5vw + 0.5rem, 5.5rem)" }}
                  >
                    <AnimatedCounter target={cell.value} suffix={cell.suffix} />
                  </p>
                  <p className="mt-4 text-cream/75 text-sm sm:text-base tracking-wide">
                    {cell.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — The dates */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/04b-curriculum-growing-seasons.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            loading="lazy"
            placeholder={meta["/images/04b-curriculum-growing-seasons.png"]?.blurDataURL ? "blur" : undefined}
            blurDataURL={meta["/images/04b-curriculum-growing-seasons.png"]?.blurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/60 to-forest-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="max-w-3xl mb-16">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-5">
              2026 cohorts
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
            >
              Three windows. Pick one.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cohorts.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 200} direction="right">
                <div className="h-full bg-forest-900/70 backdrop-blur-sm border border-forest-700 hover:border-cyan/60 transition-colors rounded-2xl p-7 sm:p-9 flex flex-col">
                  <p className="text-cyan text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
                    {c.label}
                  </p>
                  <p
                    className="font-serif text-cream font-semibold leading-[1.05] mb-6"
                    style={{ fontSize: "clamp(1.5rem, 1.6vw + 1rem, 2.25rem)" }}
                  >
                    {c.dates}
                  </p>
                  <dl className="space-y-3 text-sm text-cream/75 mb-8">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/50">
                        Format
                      </dt>
                      <dd className="mt-1">{c.format}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/50">
                        Capacity
                      </dt>
                      <dd className="mt-1">{c.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/50">
                        Pricing
                      </dt>
                      <dd className="mt-1">{c.tier}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-4 border-t border-forest-700/70">
                    <span className="text-cream/85 text-sm">View cohort →</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Closing CTA */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/07c-alumni-forest-canopy.png"
          alt="Forest canopy at dawn"
          fill
          sizes="100vw"
          loading="lazy"
          placeholder={meta["/images/07c-alumni-forest-canopy.png"]?.blurDataURL ? "blur" : undefined}
          blurDataURL={meta["/images/07c-alumni-forest-canopy.png"]?.blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/55 to-forest-950/20" />
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <h2
              className="font-serif text-cream font-semibold leading-[1.05] mb-8"
              style={{ fontSize: "clamp(2.25rem, 4vw + 0.5rem, 4.5rem)" }}
            >
              The first cohort starts May 22.
              <br />
              <span className="text-cyan">A few seats left.</span>
            </h2>
            <div className="flex justify-center">
              <MagneticButton href={ENROLL_URL} external variant="primary">
                Apply now →
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
