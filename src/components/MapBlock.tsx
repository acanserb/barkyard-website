"use client";

import { site, fullAddress } from "@/config/site";
import { track } from "@/lib/track";

/**
 * Harita bloğu.
 *
 * Google, klasik "maps.google.com/...&output=embed" adreslerinin iframe içinde
 * gösterilmesini engelliyor. Bu yüzden yalnızca resmî embed adresi
 * (google.com/maps/embed?pb=...) kabul edilir.
 *
 * mapsEmbedUrl boş veya geçersizse harita yerine tıklanabilir bir
 * "yol tarifi" kartı gösterilir — boş çerçeve değil.
 *
 * Resmî embed adresini almak için:
 *   Google Haritalar > işletmeyi aç > Paylaş > Haritayı yerleştir >
 *   HTML kodunu kopyala > içindeki src="..." değerini site.ts'e yapıştır
 */
const isEmbeddable = site.mapsEmbedUrl.includes("google.com/maps/embed");

export default function MapBlock({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  if (isEmbeddable) {
    return (
      <iframe
        src={site.mapsEmbedUrl}
        title="Barkyard Ankara konumu"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full border-0 ${className}`}
      />
    );
  }

  const dark = tone === "dark";

  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("directions_click")}
      className={`group flex flex-col items-start justify-center gap-4 p-8 transition-colors sm:p-10 ${
        dark
          ? "bg-forest-900/50 text-paper-100 hover:bg-forest-900/70"
          : "bg-paper-200 text-ink-900 hover:bg-paper-300"
      } ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-lawn-600" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      <div>
        <p className={`text-[16px] font-semibold ${dark ? "text-accent-400" : "text-lawn-600"}`}>
          Konum
        </p>
        <p className={`mt-2 max-w-sm text-[17px] leading-relaxed ${dark ? "text-paper-200/90" : "text-ink-700"}`}>
          {fullAddress}
        </p>
      </div>
      <span className={`inline-flex items-center gap-2 border-b-2 border-accent-400 text-[16px] font-semibold ${dark ? "text-paper-100" : "text-ink-900"}`}>
        Google Haritalar&apos;da aç
      </span>
    </a>
  );
}
