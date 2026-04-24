import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://binderhk.com", lastModified: new Date(), priority: 1.0 },
    { url: "https://binderhk.com/zh", lastModified: new Date(), priority: 1.0 },
  ];
}
