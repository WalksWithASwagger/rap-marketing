import type { Metadata } from "next";
import ModuleDeepDive from "@/components/ModuleDeepDive";
import { moduleBySlug } from "@/data/modules";

const m = moduleBySlug("m2")!;

export const metadata: Metadata = {
  title: `${m.number}: ${m.title} | RAP`,
  description: m.argument,
};

export default function M2Page() {
  return <ModuleDeepDive module={m} />;
}
