import { site } from "@/config/site";
import { services } from "@/content/services";

/** Google Haritalar / yerel arama için ana işletme yapısal verisi. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/marka/og-barkyard.png`,
    logo: `${site.url}/images/marka/barkyard-logo-512.png`,
    description:
      "Ankara'da köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu hizmeti veren köpek eğitim ve yaşam merkezi.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    // Tesis Oğulbey / Gölbaşı'nda; hizmet bölgesi gerçekçi tutulmuştur.
    areaServed: [
      { "@type": "City", name: "Ankara" },
      { "@type": "AdministrativeArea", name: "Gölbaşı" },
      { "@type": "AdministrativeArea", name: "İncek" },
      { "@type": "AdministrativeArea", name: "Çankaya" },
      { "@type": "AdministrativeArea", name: "Oran" },
      { "@type": "AdministrativeArea", name: "Çayyolu" },
    ],
    openingHoursSpecification: site.hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(site.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hizmetler",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.cardTitle,
          url: `${site.url}/${s.slug}/`,
          areaServed: { "@type": "City", name: "Ankara" },
          provider: { "@id": `${site.url}/#business` },
        },
      })),
    },
  };
}

export function serviceSchema(slug: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}/${slug}/`,
    serviceType: name,
    areaServed: { "@type": "City", name: "Ankara" },
    provider: { "@id": `${site.url}/#business` },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${site.url}/` },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${site.url}${t.path}`,
      })),
    ],
  };
}
