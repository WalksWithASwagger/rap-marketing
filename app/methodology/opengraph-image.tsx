import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "RAP Methodology";

export default async function Image() {
  return renderOgImage({
    title: "How RAP teaches.",
    subtitle:
      "Arguments over content. Frameworks over heuristics. Artifacts over abstractions. Cohort over MOOC.",
    bgImage: "/images/06b-frameworks-hub-spokes.png",
    eyebrow: "Methodology",
  });
}
