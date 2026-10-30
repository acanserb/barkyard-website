import type { Metadata, Viewport } from "next";
import "./globals.css";

import { site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/seo";
import { GoogleAdsScript, GtmNoScript, GtmScript } from "@/components/Gtm";

const defaultTitle = "Ankara Köpek Eğitimi, Köpek Oteli ve Gündüz Bakım | Barkyard Ankara";
const defaultDescription =
  "Gölbaşı'ndaki tesisimizde köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu. Tesisi randevuyla gezin, WhatsApp'tan bilgi alın.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    // Sayfa başlıkları marka adını içermez; marka burada bir kez eklenir.
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  // favicon.ico, app/ klasöründen Next.js tarafından otomatik eklenir
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    url: `${site.url}/`,
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f2",
  width: "device-width",
  initialScale: 1,
};

const fonts = ["figtree-latin", "figtree-latin-ext", "bricolage-latin", "bricolage-latin-ext"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {fonts.map((f) => (
          <link key={f} rel="preload" href={`/fonts/${f}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <GtmScript />
        <GoogleAdsScript />
      </head>
      <body>
        <GtmNoScript />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-3 focus:text-paper-50"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
