import Image from "next/image";
import { hasImage } from "@/lib/media";

/**
 * Hero arka planı.
 * Fotoğraf görünür kalmalı — karartma yalnızca metnin okunmasına yetecek kadar.
 * Kontrast oranı WCAG AA'yı karşılayacak şekilde ayarlanmıştır.
 */
export default function HeroBackground({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 -z-10">
      {hasImage(src) ? (
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover object-center" />
      ) : (
        <div className="bk-placeholder h-full w-full" aria-hidden="true" />
      )}
      {/* Okunabilirlik katmanı: solda koyu, sağa doğru açılıyor */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/92 via-ink-900/75 to-ink-900/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
    </div>
  );
}
