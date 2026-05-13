import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Module 04: The Human Element";

export default async function Image() {
  return renderOgImage({
    title: "Module 04 — The Human Element",
    subtitle:
      "Working with AI, not against it. Personal practice, team norms, governance you can actually run.",
    bgImage: "/images/02a-sarah-human-connection.png",
    eyebrow: "Week 4 of 4",
  });
}
