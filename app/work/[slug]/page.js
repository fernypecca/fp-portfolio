import { site } from "@/lib/site";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { caseSlugs, getCase } from "@/lib/cases";

const siteUrl = site.url;

export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    return {};
  }

  const url = `${siteUrl}/work/${item.slug}`;

  return {
    title: item.seoTitle,
    description: item.seoDescription,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      type: "article",
      url,
      siteName: "Fernando Peccatiello",
      locale: "en_US",
      title: item.seoTitle,
      description: item.seoDescription,
      images: [
        {
          url: site.socialImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.seoTitle,
      description: item.seoDescription,
      images: [site.socialImage],
    },
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/work/${item.slug}#app`,
        name: item.name,
        url: item.url,
        description: item.seoDescription,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        isPartOf: { "@id": `${siteUrl}/#website` },
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/work/${item.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${siteUrl}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.name,
            item: `${siteUrl}/work/${item.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <CaseStudy data={item} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
