import type { Metadata } from "next";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import PricingToggle from "@/components/PricingToggle";
import PricingCards from "@/components/PricingCards";
import ScrollReveal from "@/components/ScrollReveal";
import EnrollAsyncButton from "@/components/EnrollAsyncButton";
import imageMeta from "@/lib/image-meta.json";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "RAP tuition is $1,500 CAD per cohort — half off if you're a BC + AI member. Three cohorts, same content, pick what fits your calendar.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "RAP Pricing — $1,500 CAD, half off for members",
    description:
      "Three cohorts, same content. Online tuition $1,500 standard / $750 BC+AI member.",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAP Pricing — $1,500 CAD, half off for members",
    description:
      "Three cohorts, same content. Online tuition $1,500 standard / $750 BC+AI member.",
  },
};

const cohorts = [
  { code: "C1", label: "Cohort 1 — May 2026 (online)", standard: 1500, member: 750 },
  { code: "C3", label: "Cohort 3 — Sep 2026 (online)", standard: 1500, member: 750 },
  { code: "C2", label: "Cohort 2 — Oct 2026 (in-person)", standard: 2200, member: 900 },
];

export default function PricingPage() {
  const trustImg = "/images/mkt-trust-card.png";

  return (
    <>
      {/* 1. Hero — centered display headline, no image */}
      <section className="relative bg-forest-950 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-transparent to-forest-950" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-6">
            Investment
          </p>
          <h1
            className="font-serif font-semibold text-cream leading-[1.02] tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            $1,500. Half off if you&apos;re a BC&nbsp;+&nbsp;AI member.
          </h1>
          <p
            className="text-cream/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 1.3vw + 0.85rem, 1.45rem)" }}
          >
            Three cohorts. Same content. Pick what fits your calendar.
          </p>
        </div>
      </section>

      {/* 2. Toggle + two pricing columns */}
      <section className="bg-forest-950 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-start">
            <div>
              <ScrollReveal>
                <div className="bg-forest-900/60 border border-forest-700 rounded-2xl p-8 sm:p-10 mb-8">
                  <PricingToggle standard={1500} member={750} currencyLabel="CAD" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <PricingCards cohorts={cohorts} />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={160}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-forest-700 sticky top-24">
                <Image
                  src={trustImg}
                  alt="What you get with RAP — trust card"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-cover"
                  placeholder={meta[trustImg]?.blurDataURL ? "blur" : undefined}
                  blurDataURL={meta[trustImg]?.blurDataURL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2b. RAP Self-Study (Stripe checkout) */}
      <section className="bg-forest-950 border-t border-forest-700/60 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="bg-forest-900/60 border border-forest-700 rounded-2xl p-8 sm:p-10">
              <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-4">
                Or take it on your own time
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start lg:items-center">
                <div>
                  <h2 className="font-serif text-cream text-3xl sm:text-4xl font-semibold mb-4 leading-tight">
                    RAP Self-Study
                  </h2>
                  <p className="text-cream/80 leading-relaxed mb-3">
                    Same curriculum as the live cohort — four modules, twenty interactive widgets, five artifact builders, four quizzes, and a certificate of completion. Take it on your own schedule.
                  </p>
                  <p className="text-cream/60 text-sm">
                    BC + AI members: use code <span className="text-cyan font-mono">BCAI50</span> at checkout for 50% off ($449).
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <p className="font-serif text-cream text-4xl sm:text-5xl font-semibold">
                    $899 <span className="text-cream/60 text-base font-sans">CAD</span>
                  </p>
                  <EnrollAsyncButton
                    slug="async-self-paced"
                    label="Enroll — Self-Study →"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. BC + AI member callout */}
      <section className="bg-forest-900/40 border-y border-forest-700/60 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/bcai-colors.svg"
                alt="BC + AI Ecosystem"
                width={160}
                height={56}
                className="h-14 w-auto"
              />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream font-semibold mb-6 leading-tight">
              Not a member yet?
              <br />
              Join BC + AI for $340 and save $410 on RAP.
            </h2>
            <p className="text-cream/75 max-w-2xl mx-auto mb-10 leading-relaxed">
              BC + AI Ecosystem Association membership ($340/year) drops RAP from $1,500 to $750 — a net $410 in your pocket — and unlocks member pricing on every program after it, plus Vancouver AI Meetups, special interest groups, and Friday office hours.
            </p>
            <div className="flex justify-center">
              <MagneticButton
                href="https://bc-ai-ecosystem.com/"
                external
                variant="primary"
              >
                Join BC + AI →
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Refund + scholarship */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="h-full bg-forest-900/60 border border-forest-700 rounded-2xl p-7">
                <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-3">
                  Refund policy <span className="text-muted normal-case tracking-normal">(placeholder)</span>
                </p>
                <h3 className="font-serif text-cream text-2xl font-semibold mb-4">
                  Refund window
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  Full refund within 7 days of cohort start. After Week 1, pro-rated. After Week 2, no refund — but you keep RAP Self-Study access.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="h-full bg-forest-900/60 border border-forest-700 rounded-2xl p-7">
                <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-3">
                  Scholarships <span className="text-muted normal-case tracking-normal">(placeholder)</span>
                </p>
                <h3 className="font-serif text-cream text-2xl font-semibold mb-4">
                  Need-based seats
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  Limited need-based scholarships available — contact{" "}
                  <a
                    href="mailto:hello@bc-ai-ecosystem.com"
                    className="text-cyan hover:text-cream transition-colors underline underline-offset-4"
                  >
                    hello@bc-ai-ecosystem.com
                  </a>{" "}
                  to discuss.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
