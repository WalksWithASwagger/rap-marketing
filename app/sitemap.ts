import type { MetadataRoute } from "next";

const SITE_URL = "https://rap.bc-ai.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/program", changeFrequency: "monthly", priority: 0.9 },
    { path: "/program/m1", changeFrequency: "monthly", priority: 0.7 },
    { path: "/program/m2", changeFrequency: "monthly", priority: 0.7 },
    { path: "/program/m3", changeFrequency: "monthly", priority: 0.7 },
    { path: "/program/m4", changeFrequency: "monthly", priority: 0.7 },
    { path: "/methodology", changeFrequency: "monthly", priority: 0.8 },
    { path: "/instructors", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cohorts", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/enroll", changeFrequency: "weekly", priority: 0.95 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
