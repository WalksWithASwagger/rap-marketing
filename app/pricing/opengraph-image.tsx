import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "RAP Pricing";

export default async function Image() {
  return renderOgImage({
    title: "$1,500 CAD. Half off for members.",
    subtitle:
      "Three cohorts, same content. Online tuition $1,500 standard / $750 BC+AI member. October intensive priced separately.",
    bgImage: "/images/05c-30seats-constellation.png",
    eyebrow: "Pricing",
  });
}
