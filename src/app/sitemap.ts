import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    ...services.map((s) => ({ path: `/${s.slug}/`, priority: 0.9, changeFrequency: "monthly" as const })),
    { path: "/tesis/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hakkimizda/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/sss/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/iletisim/", priority: 0.7, changeFrequency: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
