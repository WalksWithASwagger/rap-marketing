import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "RAP 2026 Cohorts";

export default async function Image() {
  return renderOgImage({
    title: "Three cohorts in 2026.",
    subtitle:
      "May online pilot. September refined online. October in-person intensive. Same program — pick what fits.",
    bgImage: "/images/05a-30seats-forest-gathering.png",
    eyebrow: "Cohorts",
  });
}
