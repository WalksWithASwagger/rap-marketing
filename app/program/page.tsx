import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program | RAP Certification",
  description:
    "Four weeks. Four frameworks. Real scenarios, practical artifacts, and a credential you'll actually use.",
};

const weeks = [
  {
    week: "Week 1",
    title: "Foundations",
    theme: "Technical Grounding + The Accuracy Problem",
    color: "#4a6fa5",
    image: "01a-martin-forest-network.png",
    about:
      "Before you can govern AI, you need to understand it. Week 1 demystifies the technology — not at the level of writing code, but at the level of making decisions. You'll learn how AI systems actually work, why they sound confident when they're wrong, and what the global ethics frameworks say about it.",
    topics: [
      { title: "How AI systems actually work", desc: "Demystifying the technology for decision-makers" },
      { title: "The confidence-accuracy gap", desc: "Why AI sounds right when it's wrong" },
      { title: "Hallucinations and confabulation", desc: "When inaccuracy is annoying vs. dangerous" },
      { title: "Global ethics frameworks", desc: "UNESCO, OECD, NIST, IEEE — what they say and why it matters" },
    ],
    artifact: {
      title: "Personal AI Inventory",
      desc: "Document your AI systems and assess accuracy risks across your organization.",
    },
    quiz: "20-question assessment · 80% to pass",
    widget: "Risk Matrix Calculator + Hallucination Spotter",
  },
  {
    week: "Week 2",
    title: "Core Ethics",
    theme: "Bias, Privacy & Ownership",
    color: "#2d7d8a",
    image: "02a-cohort-spotlight.png",
    about:
      "The three pillars of AI ethics in practice. Not principles — applications. You'll learn to identify bias in algorithmic systems, navigate privacy frameworks, and understand who owns AI inputs and outputs. These aren't abstract concerns — they're the issues landing organizations in court.",
    topics: [
      { title: "Bias & Prediction", desc: "Identify algorithmic bias, understand fairness definitions and tradeoffs" },
      { title: "Privacy", desc: "Data collection, consent, the surveillance economy" },
      { title: "Copyright & Creative Work", desc: "Who owns AI inputs and outputs? The legal and ethical landscape" },
      { title: "Fairness Impossibility", desc: "Why you can't satisfy all fairness criteria simultaneously — and what to do" },
    ],
    artifact: {
      title: "Ethics Assessment",
      desc: "Apply bias, privacy, and copyright frameworks to a real system you work with.",
    },
    quiz: "25-question assessment · 80% to pass",
    widget: "Bias Type Identifier + Fairness Metric Simulator + Privacy Risk Classifier",
  },
  {
    week: "Week 3",
    title: "Societal Impact",
    theme: "Systems Thinking",
    color: "#3d6b5f",
    image: "06a-frameworks-integrated-venn.png",
    about:
      "AI doesn't exist in isolation. It lands in organizations, communities, and ecosystems. Week 3 teaches you to think in systems — to see downstream effects, ask deployment readiness questions, and account for labor and environmental impacts that rarely make it into AI announcements.",
    topics: [
      { title: "Deployment Ethics", desc: "When is AI ready to deploy? When should it never be used?" },
      { title: "Labor & Work", desc: "Displacement, augmentation, worker surveillance — the full picture" },
      { title: "Environmental Impact", desc: "The carbon cost of computation — from training to inference" },
      { title: "Stakeholder Impact Mapping", desc: "Who benefits? Who bears the risk? Who was consulted?" },
    ],
    artifact: {
      title: "Deployment Checklist",
      desc: "Evaluate deployment readiness for an AI system using a structured framework.",
    },
    quiz: "25-question assessment · 80% to pass",
    widget: "Deployment Readiness Checker + Labor Impact Spectrum + Carbon Calculator",
  },
  {
    week: "Week 4",
    title: "The Human Element",
    theme: "Human Values",
    color: "#d4a84b",
    image: "07a-alumni-growing-roots.png",
    about:
      "The hardest questions in AI aren't technical. They're human. Week 4 tackles synthetic media and trust, human-AI relationships, parasocial dynamics, vulnerable populations, and what it means to preserve creativity and agency in an AI-saturated world.",
    topics: [
      { title: "Authenticity", desc: "Deepfakes, synthetic media, trust erosion — detecting and responding" },
      { title: "Social Life", desc: "Human-AI relationships, parasocial dynamics, vulnerable populations" },
      { title: "The Human Spirit", desc: "Creativity, agency, meaning in an AI age" },
      { title: "Indigenous Knowledge & AI", desc: "Data sovereignty, OCAP principles, culturally safe AI" },
    ],
    artifact: {
      title: "Ethics Impact Assessment",
      desc: "Comprehensive framework application — your capstone document.",
    },
    quiz: "50-question final assessment · 80% to pass",
    widget: "Synthetic Media Evaluator + Parasocial Bond Assessment + AI Disclosure Generator",
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
          <Image
            src="/images/04a-curriculum-journey-arc.png"
            alt="RAP curriculum journey across 4 weeks"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 to-forest-900/90" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 w-full">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
                The Program
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl text-cream font-bold mb-3">
                Four weeks. Four frameworks. One practice.
              </h1>
              <p className="text-cream/80 text-lg max-w-2xl">
                Not academic theory. Not vendor sales pitches. Real scenarios, global
                frameworks, and artifacts you&apos;ll bring back to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-forest-800 border-b border-forest-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["4 weeks", "90-min live sessions weekly"],
            ["8–12 hrs", "Self-study per week"],
            ["25–30", "Participants per cohort"],
            ["80%", "Pass score on each quiz"],
          ].map(([stat, label]) => (
            <div key={stat}>
              <p className="text-gold font-serif text-2xl font-bold">{stat}</p>
              <p className="text-muted text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Week-by-week */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-24">
        {weeks.map((w, idx) => (
          <section key={w.week} className="scroll-mt-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Text side */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-2"
                  style={{ color: w.color }}
                >
                  {w.week}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-2">
                  {w.title}
                </h2>
                <p className="text-muted text-sm mb-6">{w.theme}</p>
                <p className="text-muted leading-relaxed mb-8">{w.about}</p>

                <div className="space-y-4 mb-8">
                  {w.topics.map((t) => (
                    <div key={t.title} className="flex gap-3">
                      <span className="text-accent font-bold mt-0.5 shrink-0">→</span>
                      <div>
                        <p className="text-cream font-medium text-sm">{t.title}</p>
                        <p className="text-muted text-sm">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Artifact */}
                <div
                  className="rounded-lg p-4 border"
                  style={{ borderColor: w.color + "40", backgroundColor: w.color + "10" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: w.color }}>
                    Week {idx + 1} Artifact
                  </p>
                  <p className="text-cream font-semibold mb-1">{w.artifact.title}</p>
                  <p className="text-muted text-sm">{w.artifact.desc}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <span className="text-gold">◆</span> {w.quiz}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-teal">◆</span> Interactive: {w.widget}
                  </span>
                </div>
              </div>

              {/* Image side */}
              <div className={`rounded-xl overflow-hidden border border-forest-600 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={`/images/${w.image}`}
                    alt={`${w.title} — week ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Capstone & Certificate */}
      <section className="bg-forest-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Capstone
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-6">
            End with a document you&apos;ll actually use.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg mb-12">
            The final capstone pulls together your four artifacts into a comprehensive
            Ethics Impact Assessment. Paired with your Personal Ethics Practice Assistant
            — a Custom GPT trained on your coursework — you leave with live tools, not
            just slides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              ["Personal AI Inventory", "Week 1"],
              ["Ethics Assessment", "Week 2"],
              ["Deployment Checklist", "Week 3"],
              ["Ethics Impact Assessment", "Week 4 Capstone"],
            ].map(([artifact, when]) => (
              <div key={artifact} className="bg-forest-800 rounded-lg p-4 border border-forest-600 text-left">
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">{when}</p>
                <p className="text-cream font-medium text-sm">{artifact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-6">
          Ready to build your practice?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/enroll"
            className="px-8 py-4 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
          >
            Enroll Now
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
