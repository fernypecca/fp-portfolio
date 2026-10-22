import { site } from "@/lib/site";
import { cases } from "@/lib/cases";

const siteUrl = site.url;

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cases.map((item) => ({
      url: `${siteUrl}/work/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
