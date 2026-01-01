import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://predeploy.ai";

  // Static pages
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    // Future pages - uncomment as they're created
    // { url: "/what-is-fde", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/fde-jobs", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/solutions-engineer-jobs", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/implementation-engineer-jobs", priority: 0.9, changeFrequency: "weekly" as const },
    // { url: "/fde-salaries", priority: 0.8, changeFrequency: "monthly" as const },
    // { url: "/companies-hiring-fdes", priority: 0.8, changeFrequency: "weekly" as const },
    // { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    // { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
