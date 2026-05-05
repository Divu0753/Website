import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://elevenxdesk.com"

const routes = [
  "",
  "/about",
  "/contact",
  "/quote",
  "/services",
  "/services/cloud-solutions",
  "/services/cybersecurity",
  "/services/managed-it",
  "/services/software-development",
  "/services/it-consulting",
  "/services/data-analytics",
  "/services/network-infrastructure",
  "/industries",
  "/industries/healthcare",
  "/industries/finance",
  "/industries/retail",
  "/industries/manufacturing",
  "/industries/education",
  "/industries/legal",
  "/privacy",
  "/terms",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") || route.startsWith("/industries") ? 0.8 : 0.7,
  }))
}
