import type { Metadata } from "next";
import ModuleDeepDive from "@/components/ModuleDeepDive";
import { moduleBySlug } from "@/data/modules";

const m = moduleBySlug("m1")!;

export const metadata: Metadata = {
  title: `${m.number}: ${m.title} | RAP`,
  description: m.argument,
};

export default function M1Page() {
  return <ModuleDeepDive module={m} />;
}
