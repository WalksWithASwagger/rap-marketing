import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instructors | RAP Certification",
  description: "Meet the team behind the Responsible AI Professional certification program.",
};

const instructors = [
  {
    name: "Kris Krüg",
    role: "Program Lead",
    image: "03a-team-triangle.png",
    bio: [
      "National Geographic photographer and 18-year Getty Images contributor who bridges creative and technical worlds. TED speaker. SXSW Interactive Advisory Board veteran (11+ years). CTO of Indigenomics Institute.",
      "Founded Vancouver AI meetup, growing it from 80 people to 250+ monthly attendees with 25+ consecutive Indigenous ceremony openings. Former CBC 'Sandboxing AI' host. Co-authored BC Studies academic paper on grassroots AI communities. Named to Vancouver Magazine Power 50 (2025).",
      "Built world's first Drupal company (Bryght) and created Dead.net for Grateful Dead. Author of BitTorrent for Dummies and Killer Photos with Your iPhone.",
      "Believes technology isn't neutral and neither is he.",
    ],
    highlights: [
      "National Geographic + Getty Images",
      "TED Speaker",
      "Vancouver Magazine Power 50 (2025)",
      "CTO, Indigenomics Institute",
      "Founded Vancouver AI Meetup",
      "CBC 'Sandboxing AI' Host",
    ],
  },
  {
    name: "Martin Lopatka",
    role: "Curriculum Developer",
    image: "06a-frameworks-integrated-venn.png",
    bio: [
      "PhD in Forensic Statistics, M.Sc. in AI. Mozilla alumni with production ML systems experience.",
      "Deep expertise in responsible AI assessment frameworks, model governance, and regulatory alignment. Brings real-world experience deploying and auditing AI systems at scale.",
      "Voluntary contribution to curriculum design — no employer conflicts. BC + AI Founding Member #31.",
    ],
    highlights: [
      "PhD Forensic Statistics",
      "M.Sc. Artificial Intelligence",
      "Mozilla Alumni",
      "Production ML Systems",
      "Model Governance Expert",
      "BC + AI Founding Member #31",
    ],
  },
  {
    name: "Sarah Downey",
    role: "Instructor",
    image: "09a-gpt-living-seed.png",
    bio: [
      "AI consultant and strategist based in Victoria with 20+ years in nonprofit and social impact leadership.",
      "Hosts facilitated conversations for nonprofit leaders on ethical AI governance. Course creator focused on helping mission-driven organizations adopt AI responsibly.",
      "Her ethos: Stay Curious. Stay Connected. Stay Human. Brings nonprofit sector expertise, facilitation skills, and a values-centered approach to every session.",
      "BC + AI Founding Member #138.",
    ],
    highlights: [
      "20+ Years Nonprofit Leadership",
      "AI Governance Facilitator",
      "Values-Centered Approach",
      "Victoria, BC",
      "BC + AI Founding Member #138",
      "Stay Curious. Stay Connected. Stay Human.",
    ],
  },
];

export default function InstructorsPage() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
          The Team
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-6">
          Practitioners, not theorists.
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          RAP is built and taught by people who have shipped products, filed ethics
          frameworks, run communities, and navigated exactly the tensions this program
          addresses. No academic detachment. No vendor agenda.
        </p>
      </section>

      {/* Team art tile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="rounded-xl overflow-hidden border border-forest-600">
          <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
            <Image
              src="/images/03a-team-triangle.png"
              alt="RAP Instructor Team"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="text-cream font-serif text-xl sm:text-2xl font-bold">
                Three perspectives. One program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual instructor sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 space-y-24">
        {instructors.map((inst, idx) => (
          <section key={inst.name}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "" : ""}`}>
              {/* Image */}
              <div className={`rounded-xl overflow-hidden border border-forest-600 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={`/images/${inst.image}`}
                    alt={inst.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-forest-900/90 to-transparent">
                    <p className="text-cream font-serif font-bold text-2xl">{inst.name}</p>
                    <p className="text-gold text-sm font-semibold uppercase tracking-wider">{inst.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                  {inst.role}
                </p>
                <h2 className="font-serif text-3xl text-cream font-bold mb-6">{inst.name}</h2>

                <div className="space-y-4 text-muted leading-relaxed mb-8">
                  {inst.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {inst.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 bg-forest-700 border border-forest-600 rounded-full text-xs text-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Future instructors */}
      <section className="bg-forest-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl text-cream font-bold mb-4">
            Growing the instructor pipeline.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            RAP is actively building toward adding Indigenous data governance experts,
            medical ethics practitioners, and additional AI governance specialists.
            Cohort 2 (October 2026) will expand the instructor roster.
          </p>
          <div className="inline-flex items-center gap-2 text-muted text-sm">
            <span>Interested in teaching?</span>
            <a href="mailto:hello@bc-ai.ca" className="text-accent hover:text-cream transition-colors">
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-cream font-bold mb-6">
          Learn from people doing the work.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/enroll"
            className="px-8 py-4 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
          >
            Enroll Now
          </Link>
          <Link
            href="/program"
            className="px-8 py-4 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
          >
            See the Curriculum
          </Link>
        </div>
      </section>
    </>
  );
}
