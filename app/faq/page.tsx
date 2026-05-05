import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | RAP Certification",
  description: "Common questions about the Responsible AI Professional certification program.",
};

const faqs = [
  {
    q: "Do I need technical AI experience?",
    a: "No. We'll explain how AI systems work, but this isn't a programming course. If you're making decisions about AI — budgeting, deploying, governing — you're qualified. The program is designed for leaders and practitioners, not engineers.",
  },
  {
    q: "Is this just for people in BC?",
    a: "No. The program is globally applicable. We use international frameworks (UNESCO, OECD, NIST, IEEE), diverse case studies, and participants can join from anywhere. The 'BC + AI' name reflects who built it, not who it's for.",
  },
  {
    q: "Can my team join together?",
    a: "Yes. Group registrations are welcome. We don't offer corporate discounts — everyone pays the same based on membership status — but teams often find shared cohort experience valuable for internal alignment. Contact hello@bc-ai.ca to discuss.",
  },
  {
    q: "What if I can't attend a live session?",
    a: "Sessions are recorded. You can watch async. But the cohort discussion is where a lot of learning happens — we strongly encourage live participation when possible. The cohort relationship is part of the value.",
  },
  {
    q: "Is this accredited / recognized?",
    a: "RAP is a professional certification, not academic credit. It's recognized within BC + AI's community and increasingly by organizations looking for responsible AI expertise. Think of it like a specialized professional development credential. We're exploring a micro-credential pathway with SFU SIAT for Cohort 2.",
  },
  {
    q: "What happens after certification?",
    a: "You join the RAP alumni network with access to BC + AI community: monthly office hours, 7 special interest groups, 850+ Discord members, ongoing education. Plus your Custom GPT trained on your coursework artifacts. This isn't a one-time course — it's an entry point.",
  },
  {
    q: "Can I pay in installments?",
    a: "Payment platform is being finalized (Stripe / Eventbrite / Luma). Payment options including installments will be clarified when registration opens for your cohort. Email hello@bc-ai.ca if this is a deciding factor.",
  },
  {
    q: "How much time does this take per week?",
    a: "4 weeks. Each week has a 90-minute live session plus approximately 8–12 hours of self-study: readings, completing the interactive widgets, building your artifact, and passing the quiz. It's designed to fit around a full-time work schedule.",
  },
  {
    q: "What's the pass mark for assessments?",
    a: "80% on each weekly quiz. There are four quizzes (20, 25, 25, and 50 questions) plus the practical artifacts. You also complete a final capstone assessment. The standard is meaningful — we want certified practitioners, not checked boxes.",
  },
  {
    q: "What's the Ethics Practice Assistant?",
    a: "A Custom GPT you build and train on your own coursework artifacts. It knows how you think, the frameworks you've applied, and the systems you've analyzed. After the program ends, it becomes your ongoing practice partner — a personalized tool that grows with your work.",
  },
  {
    q: "Who are the instructors?",
    a: "Kris Krüg (program lead — National Geographic photographer, TED speaker, CTO of Indigenomics Institute, founder of Vancouver AI Meetup), Martin Lopatka (curriculum developer — PhD Forensic Statistics, M.Sc. AI, Mozilla alumni), and Sarah Downey (instructor — 20+ years nonprofit leadership, ethical AI governance facilitator). All practitioners, not theorists.",
  },
  {
    q: "What makes this different from free online courses?",
    a: "Free courses give you content. RAP gives you a practice. The cohort experience, weekly live sessions, practical artifacts you build from your real work, the Ethics Practice Assistant, and the alumni network are not things you can get from a YouTube playlist. We're also deliberately small — 25–30 people — so you actually know your cohort.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Common Questions
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-6">
          FAQ
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          If your question isn&apos;t here, attend Friday Office Hours (12–1 PM PT, free,
          open to all) or email{" "}
          <a href="mailto:hello@bc-ai.ca" className="text-accent hover:text-cream transition-colors">
            hello@bc-ai.ca
          </a>
          .
        </p>
      </section>

      {/* Art tile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="rounded-xl overflow-hidden border border-forest-600">
          <div className="relative w-full" style={{ aspectRatio: "16/4" }}>
            <Image
              src="/images/09a-gpt-living-seed.png"
              alt="Questions answered"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-forest-900/65" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <p className="font-serif text-2xl sm:text-3xl text-cream font-bold">
                Not theory. Practical answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-forest-800 border border-forest-600 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-forest-700/50 transition-colors">
                <span className="text-cream font-medium pr-4">{faq.q}</span>
                <span className="text-gold shrink-0 text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-forest-700">
                <p className="text-muted leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-forest-800/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-cream font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            We run open office hours every Friday, 12–1 PM PT. Free, no sign-up
            required. Come ask anything about the program, AI ethics, or the BC + AI
            community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@bc-ai.ca"
              className="px-6 py-3 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://bc-ai.net"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-cream font-bold mb-6">
          Ready to get started?
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
            See the Program
          </Link>
        </div>
      </section>
    </>
  );
}
