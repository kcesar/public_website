import type { MetadataRoute } from "next";

const SITE_URL = "https://www.kcesar.org";

const routes = [
  "",
  "/about",
  "/about/history",
  "/contact-us",
  "/donate",
  "/join-us",
  "/join-us/basic-training-overview",
  "/join-us/training-materials",
  // Canonical path; /mapwork now 308s here, and a sitemap should list the
  // destination rather than the redirect.
  "/join-us/training-materials/mapwork",
  "/newsletter",
  "/truck",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
