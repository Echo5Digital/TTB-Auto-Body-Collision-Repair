import type { MetadataRoute } from "next";
import { SITE_URL, services } from "@/lib/business";

const STATIC_ROUTES: string[] = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/faq",
  "/contact",
  "/estimate",
  "/service-area",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const routes = [...STATIC_ROUTES, ...serviceRoutes];

  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
