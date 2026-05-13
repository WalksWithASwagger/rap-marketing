import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";
import CohortCard from "@/components/CohortCard";
import { cohorts, cohortById } from "@/data/cohorts";
import imageMeta from "@/lib/image-meta.json";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export const metadata: Metadata = {
  title: "Cohorts",
  description:
    "Three RAP certification cohorts in 2026 — online pilot in May, refined online in Sep, in-person intensive in October.",
  alternates: { canonical: "/cohorts" },
  openGraph: {
    title: "RAP 2026 Cohorts",
    description:
      "May online pilot. September refined online. October in-person intensive.",
    url: "/cohorts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAP 2026 Cohorts",
    description:
      "May online pilot. September refined online. October in-person intensive.",
  },
};

const ENROLL_URL = "https://rap-course-delta.vercel.app/enroll/";

export default function CohortsPage() {
  const festival = cohortById("c2-oct");
  const weekBlur = meta["/images/mkt-trust-card.png"]?.blurDataURL;
  const festivalBlur = meta["/images/05b-30seats-campfire-circle.png"]?.blurDataURL;

  return (
    <>
      {/* 1 — Hero */}
      <Hero
        image="/images/05a-30seats-forest-gathering.png"
        imageAlt="Thirty seats gathered in a forest clearing"
        eyebrow="2026 Cohorts"
        headline="Three cohorts. Three formats. Thirty seats each."
        sub="Small enough that instructors learn your work. Large enough to disagree productively."
        cta={{ label: "Apply now →", href: ENROLL_URL, external: true }}
        ctaSecondary={{ label: "See pricing", href: "/pricing" }}
        height="70"
      />

      {/* 2 — Three-up timeline */}
      <section className="relative py-24 sm:py-32 bg-forest-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="mb-16 max-w-2xl">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              The Calendar
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.5rem)" }}
            >
              Pick a window. Hold it.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cohorts.map((c, i) => (
              <CohortCard key={c.id} cohort={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 — What a week looks like */}
      <section className="relative py-24 sm:py-32 bg-forest-900/40">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Format
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05] mb-10"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.25rem)" }}
            >
              What a week looks like.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative aspect-[16/7] rounded-2xl overflow-hidden my-10">
              <Image
                src="/images/mkt-trust-card.png"
                alt="A week in the cohort — live calls, async widgets, office hours"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                loading="lazy"
                placeholder={weekBlur ? "blur" : undefined}
                blurDataURL={weekBlur}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-cream/85 leading-relaxed text-lg">
              90-minute live Zoom each week. Async widgets and artifacts between
              sessions. Office hours every Friday. Total commitment: 12–16 hours
              over 4 weeks.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                ["Live Zoom", "90 minutes weekly, one cohort, no recordings as a primary path."],
                ["Async work", "Widgets and artifacts between sessions — paced, not crushing."],
                ["Office hours", "Every Friday, optional, instructor-led."],
                ["Total time", "12–16 hours over 4 weeks. Designed for working professionals."],
              ].map(([dt, dd]) => (
                <div key={dt} className="border-l-2 border-cyan/60 pl-5">
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-cyan mb-2">
                    {dt}
                  </dt>
                  <dd className="text-cream/80 leading-relaxed">{dd}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 — Festival Week callout (Cohort 2) */}
      {festival && (
        <section className="relative overflow-hidden">
          <div className="relative h-[80vh] min-h-[520px]">
            <Image
              src="/images/05b-30seats-campfire-circle.png"
              alt="Twenty seats around a campfire — BC+AI Festival Week"
              fill
              sizes="100vw"
              loading="lazy"
              placeholder={festivalBlur ? "blur" : undefined}
              blurDataURL={festivalBlur}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/20" />
            <div className="relative h-full flex items-center">
              <div className="max-w-3xl px-6 sm:px-10 mx-auto sm:ml-10 sm:mr-auto">
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                  Festival Week · Cohort 2
                </p>
                <h2
                  className="font-serif font-semibold text-cream leading-[1.02] mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)" }}
                >
                  In-person, October 23–25.
                </h2>
                <p className="text-cream/85 text-lg leading-relaxed mb-10 max-w-xl">
                  Cohort 2 runs in-person during BC+AI Festival Week, Oct 23–25.
                  Three days. Twenty seats. Everything else stays out of the way.
                </p>
                <MagneticButton href={festival.href} external variant="primary">
                  Apply for the in-person intensive →
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
