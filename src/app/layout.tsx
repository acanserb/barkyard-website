import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { GtmNoScript, GtmScript } from "@/components/Gtm";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Köpek Eğitimi ve Köpek Oteli Ankara | Barkyard Ankara",
    template: "%s | Barkyard Ankara",
  },
  description:
    "Ankara'da köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu. Tesisimizi görün, sorularınızı WhatsApp'tan sorun.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    url: site.url,
    title: "Köpek Eğitimi ve Köpek Oteli Ankara | Barkyard Ankara",
    description:
      "Ankara'da köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu.",
    images: [{ url: "/images/marka/og-barkyard.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Köpek Eğitimi ve Köpek Oteli Ankara | Barkyard Ankara",
    description: "Ankara'da köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu.",
    images: ["/images/marka/og-barkyard.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#26261f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <GtmScript />
      </head>
      <body>
        <GtmNoScript />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2 focus:text-cream-100"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <MobileCtaBar />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
