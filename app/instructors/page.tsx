import type { Metadata } from "next";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import InstructorPortrait from "@/components/InstructorPortrait";
import imageMeta from "@/lib/image-meta.json";
import { REGISTRATION_URL } from "@/lib/links";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export const metadata: Metadata = {
  title: "Instructors",
  description:
    "Kris Krüg, Martin Lopatka, Sarah Downey — the practitioners behind the Responsible AI Professional certification.",
  alternates: { canonical: "/instructors" },
  openGraph: {
    title: "RAP Instructors",
    description:
      "Kris Krüg, Martin Lopatka, Sarah Downey — the practitioners teaching RAP.",
    url: "/instructors",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAP Instructors",
    description:
      "Kris Krüg, Martin Lopatka, Sarah Downey — the practitioners teaching RAP.",
  },
};

const instructors = [
  {
    name: "Kris Krüg",
    role: "Program Lead",
    side: "left" as const,
    images: [
      "/images/instructor-kk.png",
      "/images/03b-team-connected-minds.png",
      "/images/10c-cta-path-forward.png",
    ],
    bio: [
      "National Geographic photographer, 18-year Getty Images contributor. TED speaker, SXSW Advisory Board veteran (11+ years). CTO of Indigenomics Institute.",
      "Founded Vancouver AI meetup (80→250+ attendees, 25+ Indigenous ceremony openings). Former CBC “Sandboxing AI” host. Co-authored BC Studies academic paper on grassroots AI. Vancouver Magazine Power 50 (2025).",
      "Built world’s first Drupal company, created Dead.net. Author: BitTorrent for Dummies, Killer Photos with Your iPhone.",
    ],
    badges: [
      "National Geographic",
      "Getty Images · 18 yrs",
      "TED Speaker",
      "Vancouver Magazine Power 50 (2025)",
      "CTO, Indigenomics Institute",
    ],
  },
  {
    name: "Martin Lopatka",
    role: "Curriculum Developer",
    side: "right" as const,
    images: [
      "/images/01a-martin-forest-network.png",
      "/images/01b-martin-aurora-glow.png",
      "/images/01c-martin-deep-forest.png",
    ],
    bio: [
      "PhD in Forensic Statistics, M.Sc. in AI. Mozilla alumni with production ML experience.",
      "Expertise in responsible AI assessment frameworks, model governance, regulatory alignment.",
      "BC + AI Founding Member #31. Voluntary curriculum advisor (no employer conflicts).",
    ],
    badges: [
      "PhD Forensic Statistics",
      "M.Sc. AI",
      "Mozilla Alumni",
      "Model Governance",
      "BC + AI Founding Member #31",
    ],
  },
  {
    name: "Sarah Downey",
    role: "Guest Instructor",
    side: "left" as const,
    images: [
      "/images/02a-sarah-human-connection.png",
      "/images/02b-sarah-warm-earth.png",
      "/images/02c-sarah-twilight-wisdom.png",
    ],
    bio: [
      "AI consultant and strategist based in Victoria with 20+ years in nonprofit and social impact leadership.",
      "Hosts facilitated conversations for nonprofit leaders on ethical AI governance. Course creator focused on helping mission-driven organizations adopt AI responsibly with her ethos: Stay Curious. Stay Connected. Stay Human.",
      "BC + AI Founding Member #138.",
    ],
    badges: [
      "20+ yrs Nonprofit Leadership",
      "AI Governance Facilitator",
      "Victoria, BC",
      "BC + AI Founding Member #138",
    ],
  },
];

export default function InstructorsPage() {
  const ctaBlur = meta["/images/03b-team-connected-minds.png"]?.blurDataURL;

  return (
    <>
      {/* Intro */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            The Team
          </p>
          <h1
            className="font-serif font-semibold text-cream leading-[0.95] tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)" }}
          >
            Practitioners. Not theorists.
          </h1>
          <p className="mt-8 text-cream/70 max-w-2xl text-lg leading-relaxed">
            RAP is built and taught by people who have shipped products, filed ethics
            frameworks, run communities, and navigated exactly the tensions this program
            addresses. No academic detachment. No vendor agenda.
          </p>
        </div>
      </section>

      {/* Instructors — magazine layout */}
      {instructors.map((inst) => (
        <InstructorPortrait
          key={inst.name}
          name={inst.name}
          role={inst.role}
          bio={inst.bio}
          images={inst.images}
          side={inst.side}
          badges={inst.badges}
        />
      ))}

      {/* Closing CTA — full-bleed */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/03b-team-connected-minds.png"
          alt="The instructor team — three perspectives, one program"
          fill
          sizes="100vw"
          loading="lazy"
          placeholder={ctaBlur ? "blur" : undefined}
          blurDataURL={ctaBlur}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/65 to-forest-950/30" />
        <div className="relative h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
            <h2
              className="font-serif font-semibold text-cream leading-[1.02] mb-10"
              style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 4rem)" }}
            >
              Learn from people doing the work.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton
                href={REGISTRATION_URL}
                external
                variant="primary"
              >
                Apply to learn from them →
              </MagneticButton>
              <MagneticButton href="/program" variant="secondary">
                See the curriculum
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
