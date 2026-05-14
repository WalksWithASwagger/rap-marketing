import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Twelve answers to the questions people ask before they enroll in the RAP certification — time commitment, prerequisites, refunds, what makes the program different.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "RAP FAQ",
    description:
      "Twelve answers before you enroll — time, prerequisites, refunds, format.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAP FAQ",
    description:
      "Twelve answers before you enroll — time, prerequisites, refunds, format.",
  },
};

const faqs: FaqItem[] = [
  {
    q: "How do I register?",
    a: "Registration runs through Luma at lu.ma/ai-ethics. Pick your cohort, reserve a seat — BC + AI members select the member tier for the discount; non-members select Standard. Confirmed enrollees get a welcome email with Zoom link and pre-reading within 48 hours.",
  },
  {
    q: "Who is this for?",
    a: "Operators, founders, and team leads who have to make AI calls and want to do it well. Not for ML researchers — there's no math you need to know.",
  },
  {
    q: "Do I need a technical background?",
    a: "No. We assume you've used ChatGPT. That's the floor.",
  },
  {
    q: "How much time per week?",
    a: "3–4 hours. Live Zoom is 90 minutes; the rest is async widgets and artifact work. Total over 4 weeks: 12–16 hours.",
  },
  {
    q: "What if I miss a session?",
    a: "Recordings within 24 hours. Office hours every Friday for catch-up. The async work is self-paced.",
  },
  {
    q: "Is the certification recognized?",
    a: "It's issued by BC + AI Ecosystem Association in partnership with TheUpgrade. We're building recognition; we're not pretending we have ISO. The credential is verifiable — every certificate has a unique ID at rap-course-delta.vercel.app/verify.",
  },
  {
    q: "What's the difference between cohorts?",
    a: "Cohort 1 (May) and Cohort 3 (Sept) are online 4-week cohorts — same content, refined pacing in C3 based on C1 learnings. Cohort 2 (October) is an in-person weekend intensive during BC+AI Festival Week. Same certification, different format.",
  },
  {
    q: "What if I fail the quiz?",
    a: "80% to pass. You get two retakes per quiz. The point isn't to gatekeep — it's to make sure you actually internalized the material.",
  },
  {
    q: "What's in the artifact builders?",
    a: "Five PDFs you can ship to your organization the day after the course: Personal AI Inventory (M1), Ethics Assessment (M2), Deployment Readiness Report (M3), Capstone Governance Document (M4), and the RAP Certificate itself.",
  },
  {
    q: "Is there a refund policy?",
    a: "Full refund within 7 days of cohort start. After Week 1, partial refund pro-rated. After Week 2, no refund — but you keep async access. (Final policy under review — contact us if it matters to your decision.)",
  },
  {
    q: "Can my company pay?",
    a: "Yes. We invoice. Mention it at enrollment and we'll route accordingly.",
  },
  {
    q: "Do I keep access after the cohort?",
    a: "Yes. The full course library — widgets, artifacts, concept pages, discussion prompts — stays accessible indefinitely. New material added between cohorts is included.",
  },
  {
    q: "Why “Responsible” instead of “Ethical”?",
    a: "Because ethics is what you believe. Responsibility is what you do.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        image="/images/09a-gpt-living-seed.png"
        imageAlt=""
        eyebrow="FAQ"
        headline="Things people ask before they enroll."
        height="50"
      />

      <section className="bg-forest-950 py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <FaqAccordion items={faqs} />
          </ScrollReveal>

          <div className="mt-16 text-center">
            <p className="text-cream/75 mb-6">
              Still have a question? Friday office hours, 12–1 PM PT — free, open to all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href="/enroll" variant="primary">
                Enroll now →
              </MagneticButton>
              <MagneticButton
                href="mailto:hello@bc-ai-ecosystem.com"
                variant="secondary"
              >
                Email the team
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
