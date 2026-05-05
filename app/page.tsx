import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    week: "Week 1",
    title: "Foundations",
    theme: "Technical Grounding + The Accuracy Problem",
    color: "#4a6fa5",
    points: [
      "How AI systems actually work",
      "The confidence-accuracy gap",
      "Hallucinations: annoying vs. dangerous",
      "Global frameworks: UNESCO, OECD, NIST, IEEE",
    ],
    artifact: "Personal AI Inventory",
  },
  {
    week: "Week 2",
    title: "Core Ethics",
    theme: "Bias, Privacy & Ownership",
    color: "#2d7d8a",
    points: [
      "Identify algorithmic bias",
      "Data collection, consent, surveillance",
      "Who owns AI inputs and outputs?",
      "Fairness definitions & tradeoffs",
    ],
    artifact: "Ethics Assessment",
  },
  {
    week: "Week 3",
    title: "Societal Impact",
    theme: "Systems Thinking",
    color: "#3d6b5f",
    points: [
      "When is AI ready to deploy?",
      "Labor displacement & augmentation",
      "Environmental cost of computation",
      "Deployment ethics in practice",
    ],
    artifact: "Deployment Checklist",
  },
  {
    week: "Week 4",
    title: "The Human Element",
    theme: "Human Values",
    color: "#d4a84b",
    points: [
      "Deepfakes, synthetic media, trust erosion",
      "Human-AI relationships & parasocial dynamics",
      "Creativity, agency, meaning",
      "Vulnerable populations",
    ],
    artifact: "Ethics Impact Assessment",
  },
];

const differentiators = [
  ["Duration", "6–10 weeks", "4 weeks (focused intensity)"],
  ["Assessment", "Single exam or attendance-based", "Ongoing quizzes + practical exercises"],
  ["Content", "Academic theory or narrow technical focus", "Full spectrum: technical to human"],
  ["Community", "Individual learning", "Cohort-based with alumni network"],
  ["Frameworks", "Single perspective", "Multi-framework: UNESCO, OECD, NIST, IEEE"],
  ["Scope", "Regional / jurisdiction-specific", "Globally applicable"],
  ["Post-program", "Certificate, maybe slides", "Custom GPT trained on your work"],
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/7", maxHeight: 600 }}>
          <Image
            src="/images/10a-cta-bold-hero.png"
            alt="Not Theory. Practical Ethics."
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <div className="max-w-xl">
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                  RAP Certification
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-bold leading-tight mb-4">
                  Lead with ethics<br />in an AI-first world.
                </h1>
                <p className="text-cream/80 text-lg mb-8 leading-relaxed">
                  4 weeks. Real scenarios. Global frameworks.<br />
                  A credential you&apos;ll actually use.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/enroll"
                    className="px-6 py-3 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href="/program"
                    className="px-6 py-3 border border-cream/40 text-cream font-semibold rounded hover:border-cream/80 transition-colors"
                  >
                    See the Curriculum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-forest-800 border-y border-forest-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["4 Weeks", "Focused intensity"],
            ["25–30", "Cohort size"],
            ["4 Artifacts", "You'll actually use"],
            ["Multi-framework", "UNESCO · OECD · NIST · IEEE"],
          ].map(([stat, label]) => (
            <div key={stat}>
              <p className="text-gold font-serif text-2xl font-bold">{stat}</p>
              <p className="text-muted text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold leading-tight mb-6">
              Most organizations are deploying AI without asking the hard questions.
            </h2>
            <div className="space-y-4 text-muted text-base leading-relaxed">
              <p>
                Every organization is deploying AI. Most are doing it without governance
                frameworks, without ethics training, without asking the hard questions.
              </p>
              <p>
                And when things go wrong — when the algorithm is biased, when the system
                hallucinates in a high-stakes decision, when trust erodes — they scramble
                to figure out what responsible AI even means.
              </p>
              <p className="text-cream font-semibold text-lg italic">
                It&apos;s too late by then.
              </p>
              <p>
                The organizations that will lead aren&apos;t the ones with the fastest models.
                They&apos;re the ones with people who know how to assess risks, apply frameworks,
                and navigate the complexity before deployment.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-forest-600">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/08a-practical-theory-vs-practice.png"
                alt="Practical over theory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Modules ── */}
      <section className="bg-forest-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              What You&apos;ll Learn
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-4">
              Four weeks. Four frameworks. One practice.
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Not academic theory. Not vendor sales pitches. Real scenarios, global
              frameworks, and artifacts you&apos;ll bring back to work.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-forest-600 mb-12">
            <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
              <Image
                src="/images/04a-curriculum-journey-arc.png"
                alt="Curriculum journey across 4 weeks"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => (
              <div
                key={m.week}
                className="bg-forest-800 rounded-xl p-5 border border-forest-600 hover:border-forest-500 transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: m.color }}>
                  {m.week}
                </p>
                <h3 className="font-serif text-cream text-lg font-bold mb-1">{m.title}</h3>
                <p className="text-muted text-xs mb-4">{m.theme}</p>
                <ul className="space-y-2 mb-5">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-muted text-sm">
                      <span className="text-accent mt-0.5 shrink-0">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-forest-600 pt-3">
                  <p className="text-xs text-muted">
                    <span className="text-gold">Artifact:</span> {m.artifact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/program"
              className="inline-block px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
            >
              Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What you walk away with ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden border border-forest-600">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/09a-gpt-living-seed.png"
                alt="Ethics Practice Assistant"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              What You&apos;ll Walk Away With
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-6">
              A practice, not just a credential.
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "RAP Certification",
                  desc: "Completion of all assessments, exercises, and capstone. Globally applicable.",
                },
                {
                  title: "Personal Ethics Practice Assistant",
                  desc: "A Custom GPT trained on your coursework artifacts. Your ongoing practice partner.",
                },
                {
                  title: "Four Practical Artifacts",
                  desc: "AI Inventory, Ethics Assessment, Deployment Checklist, Impact Assessment — built from your real work.",
                },
                {
                  title: "Professional Network",
                  desc: "Alumni access to BC + AI: monthly office hours, special interest groups, ongoing education.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-gold mt-0.5 shrink-0 font-bold">→</span>
                  <div>
                    <p className="text-cream font-semibold mb-1">{item.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Differentiator table ── */}
      <section className="bg-forest-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Why RAP
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-4">
              We&apos;re not trying to be everything.<br />We&apos;re trying to be practical.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-forest-600">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-forest-600">
                  <th className="text-left p-4 text-muted font-semibold">Dimension</th>
                  <th className="text-left p-4 text-muted font-semibold">Typical Course</th>
                  <th className="text-left p-4 text-gold font-semibold">RAP</th>
                </tr>
              </thead>
              <tbody>
                {differentiators.map(([dim, them, us], i) => (
                  <tr
                    key={dim}
                    className={`border-b border-forest-700 ${
                      i % 2 === 0 ? "bg-forest-800" : "bg-forest-800/50"
                    }`}
                  >
                    <td className="p-4 text-cream font-medium">{dim}</td>
                    <td className="p-4 text-muted">{them}</td>
                    <td className="p-4 text-accent font-medium">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Instructors strip ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Instructors
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold">
            Practitioners, not theorists.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-1 rounded-xl overflow-hidden border border-forest-600">
            <div className="relative w-full" style={{ minHeight: 280, position: "relative" }}>
              <Image
                src="/images/03a-team-triangle.png"
                alt="RAP Instructor Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "Kris Krüg",
                role: "Program Lead",
                bio: "National Geographic photographer, TED speaker, CTO of Indigenomics Institute. Founded Vancouver AI meetup (250+ attendees). Vancouver Magazine Power 50 (2025).",
              },
              {
                name: "Martin Lopatka",
                role: "Curriculum Developer",
                bio: "PhD Forensic Statistics, M.Sc. AI. Mozilla alumni. Expertise in responsible AI assessment frameworks and regulatory alignment.",
              },
              {
                name: "Sarah Downey",
                role: "Instructor",
                bio: "AI consultant, 20+ years nonprofit leadership. Facilitates ethical AI governance for mission-driven organizations. Stay Curious. Stay Connected. Stay Human.",
              },
            ].map((inst) => (
              <div
                key={inst.name}
                className="bg-forest-800 rounded-xl p-5 border border-forest-600"
              >
                <p className="text-cream font-serif font-bold text-lg mb-1">{inst.name}</p>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                  {inst.role}
                </p>
                <p className="text-muted text-sm leading-relaxed">{inst.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/instructors"
            className="inline-block px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
          >
            Meet the Instructors →
          </Link>
        </div>
      </section>

      {/* ── Community section ── */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
          <Image
            src="/images/07a-alumni-growing-roots.png"
            alt="Alumni growing roots — RAP community"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-forest-900/70" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-bold mb-4">
                This isn&apos;t a course. It&apos;s an entry point.
              </h2>
              <p className="text-cream/80 text-lg mb-6">
                Alumni join BC + AI&apos;s professional community — monthly office hours, special
                interest groups, 850+ Discord members, ongoing education.
              </p>
              <Link
                href="/cohorts"
                className="inline-block px-6 py-3 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
              >
                View 2026 Cohorts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cohort cards ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            2026 Cohorts
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold">
            Three opportunities this year.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              name: "Cohort 1",
              when: "May 2026",
              format: "Online Pilot",
              status: "Underway",
              statusColor: "text-accent",
              why: "Shape future cohorts. Smaller group. Direct instructor access.",
            },
            {
              name: "Cohort 3",
              when: "Aug–Sep 2026",
              format: "Online Refined",
              status: "Registration Opening",
              statusColor: "text-gold",
              why: "Refined based on Cohort 1 learnings. Online format, global participants.",
            },
            {
              name: "Cohort 2",
              when: "October 2026",
              format: "In-Person Intensive",
              status: "Planning",
              statusColor: "text-blue",
              why: "Flagship event during BC + AI Festival Week. Immersive format.",
            },
          ].map((c) => (
            <div
              key={c.name}
              className="bg-forest-800 rounded-xl p-6 border border-forest-600 hover:border-forest-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-cream font-serif font-bold text-xl">{c.name}</p>
                  <p className="text-muted text-sm">{c.when}</p>
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${c.statusColor}`}>
                  {c.status}
                </span>
              </div>
              <p className="text-gold text-sm font-semibold mb-3">{c.format}</p>
              <p className="text-muted text-sm leading-relaxed">{c.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing teaser ── */}
      <section className="bg-forest-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Investment
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-6">
                Membership math makes this a no-brainer.
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                BC + AI membership is $340/year. The member discount saves you $750 on RAP.
                Net benefit:{" "}
                <span className="text-gold font-semibold">$410 CAD</span> — plus ongoing
                community access, events, and office hours.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  ["$600", "Early Bird Member"],
                  ["$750", "BC + AI Member"],
                  ["$1,200", "Early Bird"],
                  ["$1,500", "Standard"],
                ].map(([price, label]) => (
                  <div key={label} className="bg-forest-800 rounded-lg p-4 border border-forest-600">
                    <p className="text-gold font-serif font-bold text-2xl">{price}</p>
                    <p className="text-muted text-sm">{label} <span className="text-muted/60">CAD</span></p>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="inline-block px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
              >
                Full Pricing Details →
              </Link>
            </div>

            <div className="rounded-xl overflow-hidden border border-forest-600">
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/05a-30seats-forest-gathering.png"
                  alt="30 seats — forest gathering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Ready?
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-6">
            Build a practice,<br />not just a credential.
          </h2>
          <p className="text-muted text-lg mb-8">
            25–30 participants per cohort. Small enough to connect, big enough for
            diverse perspectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/enroll"
              className="px-8 py-4 bg-gold text-forest-950 font-semibold text-lg rounded hover:bg-yellow-400 transition-colors"
            >
              Enroll Now
            </Link>
            <a
              href="mailto:hello@bc-ai.ca"
              className="px-8 py-4 border border-forest-500 text-cream font-semibold text-lg rounded hover:border-cream/60 transition-colors"
            >
              Ask a Question
            </a>
          </div>
          <p className="text-muted text-sm mt-6">
            Friday Office Hours: 12–1 PM PT · Free · Open to all
          </p>
        </div>
      </section>
    </>
  );
}
