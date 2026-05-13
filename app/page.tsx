import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import PricingToggle from "@/components/PricingToggle";

const modules = [
  {
    week: "Week 1",
    title: "Foundations",
    theme: "Technical Grounding + The Accuracy Problem",
    color: "#4a6fa5",
    borderColor: "border-l-[#4a6fa5]",
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
    color: "#175E7C",
    borderColor: "border-l-[#175E7C]",
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
    color: "#68B091",
    borderColor: "border-l-[#68B091]",
    points: [
      "When is AI ready to deploy?",
      "Labor displacement & augmentation",
      "Environmental cost of computation",
      "Stakeholder impact mapping",
    ],
    artifact: "Deployment Checklist",
  },
  {
    week: "Week 4",
    title: "The Human Element",
    theme: "Human Values",
    color: "#D35C37",
    borderColor: "border-l-[#D35C37]",
    points: [
      "Deepfakes, synthetic media, trust erosion",
      "Human-AI relationships & parasocial dynamics",
      "Creativity, agency, meaning",
      "Indigenous knowledge & data sovereignty",
    ],
    artifact: "Ethics Impact Assessment",
  },
];

const differentiators = [
  ["Duration", "6–10 weeks", "4 weeks (focused intensity)"],
  ["Assessment", "Single exam or attendance-based", "Ongoing quizzes + practical artifacts"],
  ["Content", "Academic theory or narrow technical focus", "Full spectrum: technical to human"],
  ["Community", "Individual learning", "Cohort-based with alumni network"],
  ["Frameworks", "Single perspective", "Multi-framework: UNESCO, OECD, NIST, IEEE"],
  ["Scope", "Regional / jurisdiction-specific", "Globally applicable"],
  ["Post-program", "Certificate, maybe slides", "Custom GPT trained on your work"],
];

const mosaicImages = [
  { src: "/images/carousel-cover.png", alt: "RAP carousel cover", span: "col-span-2 row-span-2" },
  { src: "/images/06c-frameworks-shield-quarters.png", alt: "RAP frameworks shield" },
  { src: "/images/content-accuracy-gap.png", alt: "Accuracy gap" },
  { src: "/images/05a-30seats-forest-gathering.png", alt: "30 seats cohort" },
  { src: "/images/09b-gpt-growing-tree.png", alt: "Ethics practice growing" },
  { src: "/images/08c-practical-transformation.png", alt: "Practical transformation" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero — full viewport ── */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        <Image
          src="/images/10a-cta-bold-hero.png"
          alt="Lead with ethics in an AI-first world"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Left-heavy gradient — content lives in the darker zone */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-900/60 to-forest-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: text */}
            <div>
              <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Responsible AI Professional · BC + AI Ecosystem
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream font-bold leading-[1.05] mb-6 glow-text">
                Lead with<br />ethics.
              </h1>
              <p className="text-cream/75 text-xl mb-3 leading-relaxed">
                4 weeks. Real scenarios. Global frameworks.
              </p>
              <p className="text-cream/60 text-base mb-8 max-w-md leading-relaxed">
                A certification built for the people making decisions about AI —
                not the people building it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enroll"
                  className="px-7 py-3.5 bg-orange text-cream font-bold rounded-lg hover:bg-orange/85 transition-all shadow-lg hover:shadow-orange/30 text-base glow-box"
                >
                  Enroll Now →
                </Link>
                <Link
                  href="/program"
                  className="px-7 py-3.5 border border-cream/30 text-cream font-semibold rounded-lg hover:border-cream/60 hover:bg-cream/5 transition-all text-base"
                >
                  See the Curriculum
                </Link>
              </div>
            </div>

            {/* Right: RAP cert badge */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-72 h-72">
                <Image
                  src="/images/rap-cert.png"
                  alt="RAP Certification Badge"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-cream text-xs uppercase tracking-widest">scroll</span>
          <div className="w-px h-8 bg-cream/40" />
        </div>
      </section>

      {/* ── Animated stats strip ── */}
      <section className="bg-forest-800 border-y border-forest-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { target: 4, suffix: " weeks", label: "Focused intensity" },
            { target: 30, prefix: "25–", suffix: "", label: "Participants per cohort" },
            { target: 4, suffix: " artifacts", label: "Practical deliverables" },
            { target: 4, suffix: " frameworks", label: "UNESCO · OECD · NIST · IEEE" },
          ].map(({ target, suffix, prefix, label }) => (
            <div key={label}>
              <p className="text-gold font-serif text-3xl font-bold">
                <AnimatedCounter target={target} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-muted text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Image mosaic ── */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-8">
          <p className="text-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Visual Identity
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold">
            Built in the Pacific Northwest.
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">
            Organic tech meets bioluminescent clarity. This is the visual language of responsible AI.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[480px] sm:h-[560px]">
          {mosaicImages.map(({ src, alt, span }, i) => (
            <div
              key={src}
              className={`mosaic-tile relative overflow-hidden rounded-lg ${span ?? ""}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-forest-900/0 hover:bg-forest-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ── The Problem — full-bleed image ── */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden border border-forest-600">
            {/* Text */}
            <ScrollReveal className="p-8 sm:p-12 bg-forest-800 flex flex-col justify-center">
              <p className="text-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                The Problem
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold leading-tight mb-6">
                Most organizations are deploying AI<br />without asking the hard questions.
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                  Every organization is deploying AI. Most are doing it without governance
                  frameworks, ethics training, or the ability to ask the hard questions.
                </p>
                <p>
                  And when things go wrong — biased algorithms, high-stakes hallucinations,
                  eroded trust — they scramble to figure out what responsible AI even means.
                </p>
                <p className="text-cream font-serif text-xl italic font-semibold">
                  It&apos;s too late by then.
                </p>
                <p>
                  The organizations that lead won&apos;t have the fastest models. They&apos;ll have people
                  who know how to assess risks, apply frameworks, and navigate complexity
                  before deployment.
                </p>
              </div>
            </ScrollReveal>

            {/* Full-bleed image — no border/padding */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src="/images/content-accuracy-gap.png"
                alt="The accuracy gap in AI systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Modules ── */}
      <section className="bg-forest-800/40 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-12">
            <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What You&apos;ll Learn
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-4">
              Four weeks. Four frameworks. One practice.
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Not academic theory. Not vendor pitches. Real scenarios, global
              frameworks, and artifacts you&apos;ll bring back to work.
            </p>
          </ScrollReveal>

          {/* Journey arc — full bleed */}
          <ScrollReveal className="relative w-full mb-12 rounded-xl overflow-hidden" delay={100}>
            <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
              <Image
                src="/images/04a-curriculum-journey-arc.png"
                alt="Curriculum journey across 4 weeks"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/60 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m, i) => (
              <ScrollReveal key={m.week} delay={i * 80}>
                <div
                  className={`bg-forest-800 rounded-xl p-5 border-l-4 border border-forest-600 hover:border-forest-500 transition-colors h-full ${m.borderColor}`}
                  style={{ borderLeftColor: m.color }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: m.color }}>
                    {m.week}
                  </p>
                  <h3 className="font-serif text-cream text-xl font-bold mb-1">{m.title}</h3>
                  <p className="text-muted text-xs mb-4 leading-snug">{m.theme}</p>
                  <ul className="space-y-2 mb-5">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-muted text-sm">
                        <span style={{ color: m.color }} className="mt-0.5 shrink-0 font-bold">→</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-forest-600 pt-3 mt-auto">
                    <p className="text-xs text-muted">
                      <span className="text-gold">Artifact:</span> {m.artifact}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/program"
              className="inline-block px-6 py-3 border border-forest-500 text-growth font-semibold rounded-lg hover:border-growth transition-colors"
            >
              Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What you walk away with ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* RAP cert badge — large, centered */}
            <ScrollReveal className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <Image
                  src="/images/rap-credential.png"
                  alt="RAP Certification credential"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                What You&apos;ll Walk Away With
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-8">
                A practice, not just a credential.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "RAP Certification",
                    color: "#FFD700",
                    desc: "Globally applicable. Recognized by organizations building responsible AI governance.",
                  },
                  {
                    title: "Personal Ethics Practice Assistant",
                    color: "#00DDCC",
                    desc: "A Custom GPT trained on your coursework artifacts. Your ongoing practice partner after the program ends.",
                  },
                  {
                    title: "Four Practical Artifacts",
                    color: "#68B091",
                    desc: "AI Inventory, Ethics Assessment, Deployment Checklist, Impact Assessment — built from your real work.",
                  },
                  {
                    title: "Professional Network",
                    color: "#D35C37",
                    desc: "Alumni access to BC + AI: monthly office hours, 7 special interest groups, 850+ Discord members.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1 shrink-0 font-bold text-lg" style={{ color: item.color }}>→</span>
                    <div>
                      <p className="text-cream font-semibold mb-1">{item.title}</p>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Differentiator table ── */}
      <section className="bg-forest-800/40 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-10">
            <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Why RAP
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-4">
              We&apos;re not trying to be everything.<br />We&apos;re trying to be practical.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="overflow-x-auto rounded-xl border border-forest-600">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-forest-600 bg-forest-800">
                    <th className="text-left p-4 text-muted font-semibold">Dimension</th>
                    <th className="text-left p-4 text-muted font-semibold">Typical Course</th>
                    <th className="text-left p-4 font-semibold" style={{ color: "#00DDCC" }}>
                      RAP ✦
                    </th>
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
                      <td className="p-4 text-growth font-medium">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Instructors ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-12">
            <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Instructors
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold">
              Practitioners, not theorists.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "Kris Krüg",
                role: "Program Lead",
                img: "/images/instructor-kk.png",
                bio: "National Geographic photographer, TED speaker, CTO of Indigenomics Institute. Founded Vancouver AI meetup (250+ attendees).",
              },
              {
                name: "Martin Lopatka",
                role: "Curriculum Developer",
                img: "/images/01c-martin-deep-forest.png",
                bio: "PhD Forensic Statistics, M.Sc. AI. Mozilla alumni. Expert in responsible AI assessment and regulatory alignment.",
              },
              {
                name: "Sarah Downey",
                role: "Instructor",
                img: "/images/02c-sarah-twilight-wisdom.png",
                bio: "20+ years nonprofit leadership. AI governance facilitator for mission-driven organizations. Stay Curious. Stay Human.",
              },
            ].map((inst, i) => (
              <ScrollReveal key={inst.name} delay={i * 100}>
                <div className="group relative rounded-xl overflow-hidden border border-forest-600 hover:border-forest-400 transition-colors">
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={inst.img}
                      alt={inst.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">{inst.role}</p>
                    <p className="font-serif text-cream text-xl font-bold mb-2">{inst.name}</p>
                    <p className="text-cream/70 text-sm leading-relaxed">{inst.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/instructors"
              className="inline-block px-6 py-3 border border-forest-500 text-growth font-semibold rounded-lg hover:border-growth transition-colors"
            >
              Meet the Instructors →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Community — full viewport width ── */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/6", minHeight: 300 }}>
          <Image
            src="/images/07c-alumni-forest-canopy.png"
            alt="RAP alumni community"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-forest-900/75" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-bold mb-5 glow-text">
                This isn&apos;t a course.<br />It&apos;s an entry point.
              </h2>
              <p className="text-cream/75 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
                Alumni join BC + AI&apos;s professional community — office hours, special
                interest groups, 850+ Discord members, ongoing education.
              </p>
              <Link
                href="/cohorts"
                className="inline-block px-8 py-4 bg-orange text-cream font-bold rounded-lg hover:bg-orange/85 transition-colors text-lg glow-box"
              >
                View 2026 Cohorts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing teaser with interactive toggle ── */}
      <section className="py-16 sm:py-24 bg-forest-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Investment
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-4">
                Membership math makes this a no-brainer.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                BC + AI membership is $340/year. The member discount saves you $750 on RAP.
                Join first, save $410 net — plus you get ongoing community access,
                events, and office hours year-round.
              </p>
              <PricingToggle />
            </ScrollReveal>

            <ScrollReveal delay={120} className="relative rounded-2xl overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/05a-30seats-forest-gathering.png"
                  alt="30 seats — intimate cohort gathering"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-forest-900/60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-forest-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-forest-600">
                    <p className="text-cream font-semibold">25–30 seats per cohort.</p>
                    <p className="text-muted text-sm">Small enough to connect. Big enough for diverse perspectives.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/5", minHeight: 280 }}>
          <Image
            src="/images/10b-cta-dawn-breaking.png"
            alt="Dawn breaking — lead with ethics"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-forest-900/80" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <p className="text-growth text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Ready?
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-4 glow-text">
                Build a practice,<br />not just a credential.
              </h2>
              <p className="text-cream/70 text-lg mb-8">
                25–30 participants per cohort. Small enough to connect, big enough for
                diverse perspectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/enroll"
                  className="px-8 py-4 bg-orange text-cream font-bold text-lg rounded-lg hover:bg-orange/85 transition-colors glow-box"
                >
                  Enroll Now →
                </Link>
                <a
                  href="mailto:hello@bc-ai.ca"
                  className="px-8 py-4 border border-cream/30 text-cream font-semibold text-lg rounded-lg hover:border-cream/60 hover:bg-cream/5 transition-all"
                >
                  Ask a Question
                </a>
              </div>
              <p className="text-muted text-sm mt-6">
                Friday Office Hours: 12–1 PM PT · Free · Open to all
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
