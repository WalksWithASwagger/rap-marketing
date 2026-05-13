import type { Metadata } from "next";
import ModuleDeepDive from "@/components/ModuleDeepDive";
import { moduleBySlug } from "@/data/modules";

const m = moduleBySlug("m3")!;

export const metadata: Metadata = {
  title: `${m.number}: ${m.title}`,
  description: m.argument,
  alternates: { canonical: m.href },
  openGraph: {
    title: `${m.number}: ${m.title}`,
    description: m.argument,
    url: m.href,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${m.number}: ${m.title}`,
    description: m.argument,
  },
};

export default function M3Page() {
  return <ModuleDeepDive module={m} />;
}
