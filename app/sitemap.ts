import type { MetadataRoute } from "next";
import { SITEMAP_ROUTES, toAbsoluteUrl } from "@/src/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedAt = new Date();

  return SITEMAP_ROUTES.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified: publishedAt,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
