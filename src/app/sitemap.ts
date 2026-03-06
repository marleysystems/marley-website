import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://marleysystems.co.uk";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/platform`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/why-marley`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
