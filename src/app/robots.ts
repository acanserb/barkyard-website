import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * /kvkk/ sayfası robots.txt ile ENGELLENMEZ: sayfa "noindex" etiketi taşır ve
 * arama motorunun bu etiketi görebilmesi için taranabilir olması gerekir.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
