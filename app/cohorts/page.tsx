import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cohorts | RAP Certification",
  description:
    "Three RAP certification cohorts in 2026 — online pilot in May, refined online in Aug-Sep, in-person intensive in October.",
};

export default function CohortsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
          <Image
            src="/images/05a-30seats-forest-gathering.png"
            alt="30 seats — cohort gathering"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/50 to-forest-900/95" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 w-full">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
                2026 Cohorts
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl text-cream font-bold mb-3">
                Three ways to join RAP this year.
              </h1>
              <p className="text-cream/80 text-lg max-w-2xl">
                25–30 seats per cohort. Small enough to connect. Big enough for diverse perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort 1 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
                Underway
              </span>
              <p className="text-muted text-sm">May 2026</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-2">
              Cohort 1
            </h2>
            <p className="text-gold font-semibold mb-6">Online Pilot</p>
            <div className="space-y-3 text-muted mb-8">
              {[
                ["Format", "4-week online program, 90-minute Zoom sessions weekly"],
                ["Capacity", "25–30 participants"],
                ["Announcement", "April Vancouver AI Meetup"],
                ["Status", "Underway — Cohort 1 is in progress"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-muted/60 shrink-0 w-28">{label}</span>
                  <span className="text-cream">{value}</span>
                </div>
              ))}
            </div>
            <div className="bg-forest-800 rounded-lg p-5 border border-forest-600 mb-6">
              <p className="text-cream font-semibold mb-3">Why Cohort 1?</p>
              <ul className="space-y-2">
                {[
                  "Shape future cohorts with direct feedback",
                  "Smaller, more intimate group experience",
                  "Direct access to all instructors",
                  "First RAP alumni cohort — founding member community",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-muted text-sm">
                    <span className="text-accent shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted text-sm">
              Cohort 1 is underway. Join the waitlist or{" "}
              <a href="mailto:hello@bc-ai.ca" className="text-accent hover:text-cream transition-colors">
                contact us
              </a>{" "}
              for next availability.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-forest-600">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/02a-sarah-human-connection.png"
                alt="Cohort 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-forest-700 max-w-6xl mx-auto" />

      {/* Cohort 3 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden border border-forest-600 lg:order-1 order-2">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/06a-frameworks-integrated-venn.png"
                alt="Cohort 3 — frameworks integrated"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:order-2 order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-semibold uppercase tracking-wider">
                Registration Opening
              </span>
              <p className="text-muted text-sm">Aug–Sep 2026</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-2">
              Cohort 3
            </h2>
            <p className="text-gold font-semibold mb-6">Online Refined</p>
            <div className="space-y-3 text-muted mb-8">
              {[
                ["Format", "4-week online program (refined based on Cohort 1 learnings)"],
                ["Capacity", "25–30 participants"],
                ["Registration", "Opens after Cohort 1 completes"],
                ["Status", "Enroll link coming soon"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-muted/60 shrink-0 w-28">{label}</span>
                  <span className="text-cream">{value}</span>
                </div>
              ))}
            </div>
            <div className="bg-forest-800 rounded-lg p-5 border border-forest-600 mb-6">
              <p className="text-cream font-semibold mb-3">Why Cohort 3?</p>
              <ul className="space-y-2">
                {[
                  "Curriculum refined from Cohort 1 feedback",
                  "Online format — join from anywhere in the world",
                  "Case studies from Cohort 1 participants integrated",
                  "August-September timing suits northern-hemisphere schedules",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-muted text-sm">
                    <span className="text-accent shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/enroll"
              className="inline-block px-6 py-3 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
            >
              Register Interest →
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-forest-700 max-w-6xl mx-auto" />

      {/* Cohort 2 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue/20 border border-blue/40 rounded-full text-blue text-xs font-semibold uppercase tracking-wider">
                Planning
              </span>
              <p className="text-muted text-sm">October 2026</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-2">
              Cohort 2
            </h2>
            <p className="text-gold font-semibold mb-6">In-Person Intensive — BC + AI Festival Week</p>
            <div className="space-y-3 text-muted mb-8">
              {[
                ["Format", "Weekend intensive during BC + AI Festival Week"],
                ["Location", "Vancouver (details TBD — SFU Harbour Centre or equivalent)"],
                ["Capacity", "25–30 participants"],
                ["Status", "Planning — details to follow"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-muted/60 shrink-0 w-28">{label}</span>
                  <span className="text-cream">{value}</span>
                </div>
              ))}
            </div>
            <div className="bg-forest-800 rounded-lg p-5 border border-forest-600 mb-6">
              <p className="text-cream font-semibold mb-3">Why Cohort 2?</p>
              <ul className="space-y-2">
                {[
                  "Flagship in-person experience — immersive format",
                  "Part of BC + AI Festival Week — broader event ecosystem",
                  "Travel-in participants from across Canada",
                  "Co-located networking with the BC AI community",
                  "Compressed weekend format for busy schedules",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-muted text-sm">
                    <span className="text-accent shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="mailto:hello@bc-ai.ca"
              className="inline-block px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
            >
              Express Interest
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-forest-600">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/08a-practical-theory-vs-practice.png"
                alt="In-person intensive — practical focus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AEFL / SFU potential */}
      <section className="bg-forest-800/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Academic Integration
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-cream font-bold mb-4">
            Exploring micro-credential partnerships.
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-6">
            We&apos;re in active conversations with SFU SIAT about a potential micro-credential
            track. Cohort 2 may offer an academic pathway for participants seeking formal
            institutional recognition alongside the RAP certification.
          </p>
          <p className="text-muted text-sm">Updates via bc-ai.ca and @vancouver_AI</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-cream font-bold mb-6">
          Which cohort is right for you?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/enroll"
            className="px-8 py-4 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
          >
            Register Interest
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
          >
            View Pricing
          </Link>
        </div>
        <p className="text-muted text-sm mt-6">
          Questions?{" "}
          <a href="mailto:hello@bc-ai.ca" className="text-accent hover:text-cream transition-colors">
            hello@bc-ai.ca
          </a>
          {" "}or Friday Office Hours: 12–1 PM PT
        </p>
      </section>
    </>
  );
}
