import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";
import imageMeta from "@/lib/image-meta.json";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export const metadata: Metadata = {
  title: "Methodology | RAP Certification",
  description:
    "How RAP teaches — arguments over content, frameworks over heuristics, artifacts over abstractions, cohort over MOOC.",
};

const principles = [
  {
    title: "Argument over content",
    image: "/images/06a-frameworks-integrated-venn.png",
    body: "We don’t teach you facts about AI. We teach you the arguments that should change your behavior.",
  },
  {
    title: "Frameworks over heuristics",
    image: "/images/06b-frameworks-hub-spokes.png",
    body: "Heuristics break under pressure. Frameworks compose. UNESCO, OECD, NIST, IEEE, CARE, OCAP — you’ll know which one applies before you reach for a checklist.",
  },
  {
    title: "Artifacts over abstractions",
    image: "/images/06c-frameworks-shield-quarters.png",
    body: "Every module produces a PDF your organization can act on. Personal AI Inventory. Ethics Assessment. Deployment Readiness Report. Capstone Governance Doc.",
  },
  {
    title: "Cohort over MOOC",
    image: "/images/05c-30seats-constellation.png",
    body: "Asynchronous video is a research tool, not a learning tool. The cohort, the live sessions, and the seat cap are what change you.",
  },
];

const frameworks = [
  {
    name: "UNESCO",
    body: "Global ethical principles for AI, signed by 193 member states (2021).",
  },
  {
    name: "OECD",
    body: "Five principles + national policy framework guidance, broadly adopted.",
  },
  {
    name: "NIST AI RMF",
    body: "US risk management framework with measurable functions.",
  },
  {
    name: "IEEE",
    body: "Standards body view of AI ethics; focus on system-level engineering practice.",
  },
  {
    name: "GDPR",
    body: "EU general data protection regulation; the consent + portability baseline.",
  },
  {
    name: "CCPA",
    body: "California privacy law; the US-domestic GDPR analog.",
  },
  {
    name: "CARE",
    body: "Collective benefit, Authority to control, Responsibility, Ethics — Indigenous data sovereignty principles.",
  },
  {
    name: "OCAP",
    body: "Ownership, Control, Access, Possession — First Nations data governance framework.",
  },
];

export default function MethodologyPage() {
  const indigBlur = meta["/images/07a-alumni-growing-roots.png"]?.blurDataURL;

  return (
    <>
      {/* 1 — Hero */}
      <Hero
        image="/images/06a-frameworks-integrated-venn.png"
        imageAlt="Overlapping frameworks rendered as a Venn diagram of light"
        eyebrow="Methodology"
        headline="How we teach. Why it works."
        sub="Four pedagogical principles, eight governance frameworks, one Indigenous knowledge approach."
        height="70"
      />

      {/* 2 — Pedagogical principles */}
      <section className="relative py-24 sm:py-32 bg-forest-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="mb-16 max-w-2xl">
            <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Pedagogical Principles
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.5rem)" }}
            >
              Four commitments. Holding every module.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {principles.map((p, i) => {
              const blur = meta[p.image]?.blurDataURL;
              return (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <article className="flex flex-col h-full">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        placeholder={blur ? "blur" : undefined}
                        blurDataURL={blur}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                    </div>
                    <h3
                      className="font-serif text-cream font-semibold leading-[1.05] mb-4"
                      style={{ fontSize: "clamp(1.5rem, 2vw + 0.5rem, 2.25rem)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-cream/80 leading-relaxed">{p.body}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 — Governance frameworks */}
      <section className="relative py-24 sm:py-32 bg-forest-900/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="mb-16 max-w-2xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Governance Frameworks
            </p>
            <h2
              className="font-serif text-cream font-semibold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.5rem)" }}
            >
              Eight frameworks. One mental model.
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed">
              You leave RAP knowing which framework applies before you reach for a
              checklist. Global, national, sectoral, Indigenous — every cohort works
              through all eight.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {frameworks.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 60}>
                <div className="h-full p-6 rounded-2xl bg-forest-900/60 border border-forest-700 hover:border-cyan/60 transition-colors">
                  <p className="text-cyan text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                    Framework
                  </p>
                  <h3 className="font-serif text-cream font-semibold text-2xl mb-3">
                    {f.name}
                  </h3>
                  <p className="text-cream/75 text-sm leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Indigenous knowledge approach */}
      <section className="relative">
        <div className="relative min-h-[80vh]">
          <Image
            src="/images/07a-alumni-growing-roots.png"
            alt="Roots growing through forest soil — Indigenous knowledge as foundation"
            fill
            sizes="100vw"
            loading="lazy"
            placeholder={indigBlur ? "blur" : undefined}
            blurDataURL={indigBlur}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/85 to-forest-950/55" />
          <div className="relative py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-6 sm:px-10">
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                Indigenous Knowledge
              </p>
              <h2
                className="font-serif text-cream font-semibold leading-[1.02] mb-10"
                style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)" }}
              >
                Data sovereignty is not optional.
              </h2>

              <div className="space-y-6 text-cream/85 leading-relaxed text-lg">
                <p>
                  RAP is built and taught on the unceded, ancestral, and traditional
                  territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish),
                  and səlilwətaɬ (Tsleil-Waututh) Nations. The land is not a backdrop;
                  it is a relationship, and that relationship shapes how we teach
                  governance.
                </p>
                <p>
                  Module 2 (Privacy + Data Governance) and Module 4 (Indigenous
                  Knowledge) place CARE and OCAP alongside GDPR and CCPA — not as
                  optional add-ons, but as foundational. Collective benefit and
                  community authority are governance primitives, not afterthoughts to
                  a Western privacy regime.
                </p>
                <p>
                  AI systems built without Indigenous data sovereignty principles
                  inherit a centuries-long extractive pattern. The cohort works
                  through what it means to refuse that inheritance — in training
                  data, in model deployment, in organizational policy, and in the
                  artifacts you ship.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <MagneticButton href="/program/m4" variant="primary">
                  See Module 4 →
                </MagneticButton>
                <MagneticButton href="/program" variant="secondary">
                  Full curriculum
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
