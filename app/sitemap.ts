import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moiras.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/quienes-somos", "/que-hacemos", "/como-trabajamos"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
