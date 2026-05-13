export interface QuizQuestion {
  prompt: string;
  options: string[];
}

export interface ModuleData {
  slug: "m1" | "m2" | "m3" | "m4";
  number: string; // "Module 01"
  numeral: string; // "01"
  title: string;
  subtheme: string;
  argument: string;
  widgetCount: number;
  widgets: string[];
  artifact: string;
  artifactDesc: string;
  quiz: string;
  quizCount: number;
  href: string;
  carouselImage: string; // /images/...
  contentImage: string; // /images/...
  quizSamples: QuizQuestion[];
}

export const ENROLL_URL = "https://rap-course-delta.vercel.app/enroll/";

export const modules: ModuleData[] = [
  {
    slug: "m1",
    number: "Module 01",
    numeral: "01",
    title: "Foundations",
    subtheme: "Understanding AI and Its Limits",
    argument:
      "How LLMs actually work — tokenization, attention, next-token prediction — and why every confident-sounding output deserves verification. We map the four governance frameworks (UNESCO, OECD, NIST, IEEE) so you know which one will be cited at you in which meeting.",
    widgetCount: 4,
    widgets: [
      "Risk Matrix",
      "Hallucination Spotter",
      "Citation Verifier",
      "Prompt Lab",
    ],
    artifact: "Personal AI Inventory",
    artifactDesc:
      "A working document of every AI system touching your work — with accuracy risks, governance gaps, and a verification protocol your team can adopt on Monday.",
    quiz: "20Q",
    quizCount: 20,
    href: "/program/m1",
    carouselImage: "/images/carousel-week1.png",
    contentImage: "/images/content-accuracy-gap.png",
    quizSamples: [
      {
        prompt:
          "An LLM confidently fabricates a court citation. Which framework principle is most directly relevant to your response?",
        options: [
          "UNESCO transparency",
          "NIST traceability",
          "OECD accountability",
          "IEEE prioritization of human well-being",
        ],
      },
      {
        prompt:
          "Next-token prediction explains why an LLM can sound fluent and still be wrong. The most precise term for this failure mode is:",
        options: [
          "Bias amplification",
          "Confabulation",
          "Mode collapse",
          "Reward hacking",
        ],
      },
      {
        prompt:
          "Your CFO wants a single risk score for a customer-facing AI chatbot. The Risk Matrix asks you to combine which two axes?",
        options: [
          "Cost and latency",
          "Likelihood of failure and severity of impact",
          "Model size and training cost",
          "Vendor reputation and contract length",
        ],
      },
    ],
  },
  {
    slug: "m2",
    number: "Module 02",
    numeral: "02",
    title: "Core Ethics",
    subtheme: "Bias, Privacy & Ownership",
    argument:
      "Algorithmic bias has six entry points; you'll learn to name all of them. The Chouldechova-Kleinberg result proves you can't satisfy all fairness definitions simultaneously — so we teach you which trade-off you're making. Privacy frameworks (GDPR, CCPA, CARE, OCAP) don't agree on first principles; you'll learn where they diverge and which one governs your actual data.",
    widgetCount: 5,
    widgets: [
      "Bias Identifier",
      "Fairness Simulator",
      "Bias Audit Workbench",
      "Privacy Classifier",
      "Consent Flow Designer",
    ],
    artifact: "Ethics Assessment",
    artifactDesc:
      "A structured bias, privacy, and ownership audit applied to a real system in your organization — with named trade-offs and a defensible recommendation.",
    quiz: "25Q",
    quizCount: 25,
    href: "/program/m2",
    carouselImage: "/images/carousel-week2.png",
    contentImage: "/images/content-ethics-assistant.png",
    quizSamples: [
      {
        prompt:
          "Demographic parity, equal opportunity, predictive parity. Per Chouldechova-Kleinberg, how many can you satisfy simultaneously when base rates differ?",
        options: ["All three", "Any two", "Only one", "None"],
      },
      {
        prompt:
          "A training set under-represents a minority group. The bias most directly introduced is:",
        options: [
          "Measurement bias",
          "Sampling bias",
          "Aggregation bias",
          "Evaluation bias",
        ],
      },
      {
        prompt:
          "Which framework treats data about a community as a collective, not individual, asset?",
        options: ["GDPR", "CCPA", "OCAP", "HIPAA"],
      },
    ],
  },
  {
    slug: "m3",
    number: "Module 03",
    numeral: "03",
    title: "Societal Impact",
    subtheme: "Deployment, Labor & Environment",
    argument:
      "Most deployment failures are predictable. We work through 33 documented cases, build a deployment readiness checklist your team can actually use, and confront the carbon math: at scale, model choice is an environmental decision. Right-size or be ready to defend that you didn't.",
    widgetCount: 6,
    widgets: [
      "Deployment Checker",
      "Labor Spectrum",
      "Environmental Check",
      "Carbon Calculator (26-model dataset)",
      "Failure Catalog (33 cases)",
      "Stakeholder Mapper",
    ],
    artifact: "Deployment Readiness Report",
    artifactDesc:
      "A go/no-go report for a specific AI deployment — stakeholders mapped, labor effects named, carbon footprint quantified, and a list of failures you've explicitly designed against.",
    quiz: "25Q",
    quizCount: 25,
    href: "/program/m3",
    carouselImage: "/images/carousel-week3.png",
    contentImage: "/images/08a-practical-theory-vs-practice.png",
    quizSamples: [
      {
        prompt:
          "A team defaults to GPT-4 for sentiment classification on 50k weekly tickets. The Carbon Calculator suggests Llama 3 8B at 1/30 the kWh. What's the right-sized choice?",
        options: [
          "Stay on GPT-4 for accuracy",
          "Switch to Llama 3 8B if eval passes",
          "Move to GPT-3.5 as a compromise",
          "Add a cache layer",
        ],
      },
      {
        prompt:
          "Of 33 documented deployment failures in the Failure Catalog, the single most common root cause was:",
        options: [
          "Model accuracy below spec",
          "Inadequate stakeholder consultation",
          "Hardware constraints",
          "Regulatory non-compliance",
        ],
      },
      {
        prompt:
          "On the Labor Spectrum, a system that handles triage and escalates edge cases to a human reviewer sits closest to:",
        options: [
          "Displacement",
          "Augmentation",
          "Surveillance",
          "Full automation",
        ],
      },
    ],
  },
  {
    slug: "m4",
    number: "Module 04",
    numeral: "04",
    title: "The Human Element",
    subtheme: "Authenticity, Relationships & Meaning",
    argument:
      "The hard part isn't the technology. It's what happens to attention, trust, and meaning when machines can generate anything. We close with the capstone — a governance document scoped to one AI system in your work, that your organization can act on.",
    widgetCount: 4,
    widgets: [
      "Synthetic Media Eval",
      "AI Disclosure Generator",
      "Provenance Verifier",
      "Parasocial Self-Assessment",
    ],
    artifact: "Capstone Governance Document",
    artifactDesc:
      "A capstone governance document scoped to one AI system in your work — your final, defended deliverable, reviewed by your cohort and signed off by the instructors.",
    quiz: "50Q final",
    quizCount: 50,
    href: "/program/m4",
    carouselImage: "/images/carousel-week4.png",
    contentImage: "/images/content-human-element.png",
    quizSamples: [
      {
        prompt:
          "An AI companion app collects parasocial conversation data from teens. Which framework most directly governs the consent question?",
        options: ["GDPR", "CCPA", "OCAP", "CARE"],
      },
      {
        prompt:
          "C2PA, watermarking, and disclosure labels address different parts of the synthetic-media trust problem. Which one is most resistant to circumvention by a motivated bad actor?",
        options: [
          "Visible disclosure labels",
          "Invisible watermarks",
          "Cryptographic provenance (C2PA)",
          "Detection classifiers",
        ],
      },
      {
        prompt:
          "A user reports an emotional dependency on a chatbot. The first responsibility of the deploying organization is to:",
        options: [
          "Increase guardrails on the model",
          "Disclose the synthetic nature of the relationship and offer human support paths",
          "Limit usage time",
          "Refer the user to terms of service",
        ],
      },
    ],
  },
];

export function moduleBySlug(slug: string): ModuleData | undefined {
  return modules.find((m) => m.slug === slug);
}

export function adjacentModules(slug: string): {
  prev?: ModuleData;
  next?: ModuleData;
} {
  const i = modules.findIndex((m) => m.slug === slug);
  return {
    prev: i > 0 ? modules[i - 1] : undefined,
    next: i >= 0 && i < modules.length - 1 ? modules[i + 1] : undefined,
  };
}
