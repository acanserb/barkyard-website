"use client";

import { site, fullAddress } from "@/config/site";
import { track } from "@/lib/track";
import { MapPinIcon, ArrowIcon } from "@/components/icons";

/**
 * Harita bloğu.
 *
 * Yalnızca resmî Google embed adresi (google.com/maps/embed?pb=...) kabul edilir.
 * site.mapsEmbedUrl boşken harita yerine tıklanabilir bir yol tarifi kartı gösterilir;
 * böylece Google'a sayfa yüklenirken hiçbir istek gitmez ve çerez oluşmaz.
 *
 * Not: Gömülü Google haritası eklenirse Google çerezleri devreye girebilir;
 * bu durumda KVKK/çerez metni güncellenmelidir.
 */
const isEmbeddable = site.mapsEmbedUrl.includes("google.com/maps/embed");

export default function MapBlock({ className = "", source }: { className?: string; source: string }) {
  if (isEmbeddable) {
    return (
      <iframe
        src={site.mapsEmbedUrl}
        title="Barkyard Ankara konumu, Google Haritalar"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full border-0 ${className}`}
      />
    );
  }

  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("directions_click", { cta_source: source })}
      className={`group relative flex flex-col justify-end gap-4 overflow-hidden bg-sage-200 p-7 text-ink-900 transition-colors hover:bg-sage-300 sm:p-10 ${className}`}
    >
      {/* Dekoratif harita dokusu */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-forest-800/10" preserveAspectRatio="none" viewBox="0 0 400 300">
        <path d="M0 210 C 80 180, 140 240, 220 200 S 340 150, 400 170" fill="none" stroke="currentColor" strokeWidth="10" />
        <path d="M120 0 C 140 80, 100 160, 160 300" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M300 0 C 280 90, 330 180, 290 300" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-paper-50">
        <MapPinIcon className="h-6 w-6" />
      </span>
      <span className="relative">
        <span className="block text-[15px] font-semibold text-forest-800">Konum</span>
        <span className="mt-1 block max-w-sm text-[17px] leading-relaxed">{fullAddress}</span>
      </span>
      <span className="relative inline-flex items-center gap-2 text-[16px] font-semibold text-forest-800">
        Google Haritalar&apos;da yol tarifi alın
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        <span className="sr-only"> (yeni sekmede açılır)</span>
      </span>
    </a>
  );
}
