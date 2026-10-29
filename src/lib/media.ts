/**
 * ============================================================
 *  GÖRSEL KAYIT DEFTERİ
 * ============================================================
 *  availableImages : işletmenin GERÇEK fotoğrafları.
 *  stockImages     : gerçek fotoğraf gelene kadar kullanılan GEÇİCİ stok
 *                    görseller (Unsplash lisansı, /public/images altında).
 *                    Tesis galerisinde ve ana sayfa tesis ön izlemesinde
 *                    kullanılmaz; oralarda yalnızca gerçek fotoğraf görünür.
 *
 *  GERÇEK FOTOĞRAF GELDİĞİNDE:
 *   1. Aynı dosya adıyla /public/images/... altındaki stok görselin üzerine yazın
 *   2. Yolu stockImages listesinden silip availableImages listesine taşıyın
 *      (fotoğraf tesis galerisinde de görünmeye başlar)
 *
 *  Hiçbir listede olmayan görsel çağrılırsa canlı sitede o alan gösterilmez;
 *  geliştirme ortamında "Fotoğraf eklenecek" kutusu çıkar.
 * ============================================================
 */

export const availableImages: string[] = [
  "/images/marka/barkyard-logo.svg",
  "/images/marka/barkyard-mark.svg",
  "/images/marka/barkyard-logo-512.png",
  "/images/marka/og-barkyard.png",
  "/images/tesis/tesis-dis-gorunum.jpg",
  "/images/ekip/emre-portre.jpg",
  "/images/ekip/emre-yuruyus.jpg",
  "/images/ekip/emre-yarisma.jpg",
  "/images/ekip/emre-sov-ringi.jpg",
  "/images/ekip/emre-sov-054.jpg",
];

/** Geçici stok görseller — kaynak: Unsplash (unsplash.com/license). */
export const stockImages: string[] = [
  "/images/hizmetler/kopek-egitimi.jpg", // photo-1531531534025-0b78da954d21
  "/images/hizmetler/kopek-oteli.jpg", // photo-1561130627-94d7dd29776d
  "/images/hizmetler/gunduz-bakim.jpg", // photo-1703733574403-e2e42e3c5bda
  "/images/hizmetler/rehabilitasyon.jpg", // photo-1551779891-b83901e1f8b3
  "/images/tesis/bahce-1.jpg", // photo-1769442153249-8040f16a218e
  "/images/tesis/bahce-2.jpg", // photo-1703733572989-026dbaf7fc96
  "/images/tesis/konaklama-1.jpg", // photo-1598397678815-c5dc869035b8
  "/images/tesis/kapali-alan.jpg", // photo-1749703174207-257698ceb352
  "/images/tesis/egitim-alani.jpg", // photo-1546815708-410983510897
  "/images/tesis/dinlenme.jpg", // photo-1492748046438-4b6d9ebe0c11
];

/** İşletmeye ait gerçek fotoğraf mı? (tesis galerisi gibi yerlerde yalnızca bunlar kullanılır) */
export function isReal(src?: string | null): src is string {
  return !!src && availableImages.includes(src);
}

export function isStock(src?: string | null): src is string {
  return !!src && !availableImages.includes(src) && stockImages.includes(src);
}

/** Gösterilebilir bir görsel var mı? (gerçek veya geçici stok) */
export function hasImage(src?: string | null): src is string {
  return isReal(src) || isStock(src);
}

export const isDev = process.env.NODE_ENV !== "production";
