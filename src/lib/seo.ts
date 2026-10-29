import type { Metadata } from "next";
import { site } from "@/config/site";

const OG_IMAGE = { url: "/images/marka/og-barkyard.png", width: 1200, height: 630, alt: "Barkyard Ankara logosu" };

/**
 * Sayfa metadata'sı: benzersiz title, description, canonical, Open Graph ve X/Twitter.
 *
 * `title` marka adını İÇERMEZ — layout.tsx'teki şablon " | Barkyard Ankara" ekler.
 * Böylece "Barkyard Ankara" başlıkta iki kez yazılmaz.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: site.name,
      url: `${site.url}${path}`,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export { OG_IMAGE };
