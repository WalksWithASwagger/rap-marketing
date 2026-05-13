import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "RAP Instructors — Kris Krüg, Martin Lopatka, Sarah Downey";

export default async function Image() {
  return renderOgImage({
    title: "The practitioners.",
    subtitle:
      "Kris Krüg, Martin Lopatka, Sarah Downey — the team behind the Responsible AI Professional certification.",
    bgImage: "/images/03b-team-connected-minds.png",
    eyebrow: "Instructors",
  });
}
