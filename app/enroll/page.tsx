import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enroll | RAP Certification",
  description: "Register for the Responsible AI Professional certification program.",
};

const steps = [
  {
    num: "01",
    title: "Choose your cohort",
    desc: "Cohort 3 (Aug–Sep 2026, online) registration opening soon. Cohort 2 (October 2026, in-person) planning underway.",
  },
  {
    num: "02",
    title: "Check your membership status",
    desc: "BC + AI members save $750. If you're not a member, the math on joining first is usually worth it — membership is $340/year, saves you $750.",
  },
  {
    num: "03",
    title: "Submit your registration",
    desc: "Fill out the form below. We'll confirm your spot and send onboarding details including pre-reading for Week 1.",
  },
  {
    num: "04",
    title: "Join your cohort",
    desc: "90-minute live sessions weekly via Zoom. Your cohort of 25–30 practitioners becomes part of your ongoing network.",
  },
];

export default function EnrollPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
          <Image
            src="/images/10a-cta-bold-hero.png"
            alt="Enroll — practical ethics"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/85 via-forest-900/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <div className="max-w-lg">
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                  Enroll
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl text-cream font-bold mb-4">
                  Ready to lead with ethics?
                </h1>
                <p className="text-cream/80 text-lg">
                  Register your interest for upcoming cohorts. We&apos;ll confirm your spot
                  and send everything you need to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-3xl text-cream font-bold">
            Four steps to your certification.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-forest-800 rounded-xl p-6 border border-forest-600">
              <p className="font-serif text-4xl font-bold text-gold/30 mb-3">{s.num}</p>
              <p className="text-cream font-semibold mb-2">{s.title}</p>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cohort status cards */}
      <section className="bg-forest-800/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl text-cream font-bold mb-8 text-center">
            2026 Cohort Availability
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Cohort 1 — May 2026",
                format: "Online Pilot",
                status: "Underway",
                statusColor: "text-accent border-accent/40 bg-accent/10",
                action: "Join the waitlist for Cohort 3",
                cta: false,
              },
              {
                name: "Cohort 3 — Aug–Sep 2026",
                format: "Online Refined",
                status: "Registration Opening",
                statusColor: "text-gold border-gold/40 bg-gold/10",
                action: "Register your interest below",
                cta: true,
              },
              {
                name: "Cohort 2 — October 2026",
                format: "In-Person Intensive",
                status: "Planning",
                statusColor: "text-blue border-blue/40 bg-blue/10",
                action: "Express interest via email",
                cta: false,
              },
            ].map((c) => (
              <div key={c.name} className="bg-forest-800 rounded-xl p-6 border border-forest-600">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${c.statusColor}`}>
                  {c.status}
                </span>
                <p className="text-cream font-semibold mb-1">{c.name}</p>
                <p className="text-gold text-sm mb-4">{c.format}</p>
                <p className="text-muted text-sm">{c.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Register Interest
          </p>
          <h2 className="font-serif text-3xl text-cream font-bold mb-4">
            Secure your spot.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Fill out the form below to register your interest. We&apos;ll confirm availability
            and send your enrollment details within 1–2 business days.
          </p>
        </div>

        {/* Link to the course enrollment form */}
        <div className="bg-forest-800 rounded-xl p-8 border border-forest-600 text-center">
          <p className="text-cream font-semibold text-lg mb-3">
            Enrollment Form
          </p>
          <p className="text-muted mb-6">
            Complete your registration through our enrollment portal.
          </p>
          <a
            href="/course/enroll/index.html"
            className="inline-block px-8 py-4 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors text-lg"
          >
            Complete Enrollment Form →
          </a>
          <p className="text-muted text-sm mt-4">
            Questions first?{" "}
            <a href="mailto:hello@bc-ai.ca" className="text-accent hover:text-cream transition-colors">
              hello@bc-ai.ca
            </a>
          </p>
        </div>
      </section>

      {/* Pricing reminder */}
      <section className="bg-forest-800/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Investment Reminder
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-cream font-bold mb-6">
                Check your membership before you register.
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                BC + AI membership is $340/year and saves you $750 on RAP. If you&apos;re
                not a member, joining first saves you{" "}
                <span className="text-gold font-semibold">$410 net</span> before the
                program even starts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
                >
                  Full Pricing Details
                </Link>
                <a
                  href="https://bc-ai.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-forest-500 text-muted font-semibold rounded hover:border-forest-400 hover:text-cream transition-colors"
                >
                  BC + AI Membership
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["$600", "Early Bird Member"],
                ["$750", "BC + AI Member"],
                ["$1,200", "Early Bird"],
                ["$1,500", "Standard"],
              ].map(([price, label]) => (
                <div key={label} className="bg-forest-800 rounded-lg p-4 border border-forest-600 text-center">
                  <p className="text-gold font-serif font-bold text-2xl">{price}</p>
                  <p className="text-muted text-xs mt-1">{label} CAD</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office hours */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-serif text-2xl text-cream font-bold mb-4">
          Not ready to commit? Come to office hours.
        </h2>
        <p className="text-muted max-w-lg mx-auto mb-8">
          Friday Office Hours, 12–1 PM PT. Free. Open to all. No sign-up required.
          Ask anything about the program, AI ethics, or the BC + AI community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@bc-ai.ca"
            className="px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
          >
            Email Us
          </a>
          <Link
            href="/faq"
            className="px-6 py-3 border border-forest-500 text-muted font-semibold rounded hover:border-forest-400 hover:text-cream transition-colors"
          >
            Read the FAQ
          </Link>
        </div>
      </section>
    </>
  );
}
