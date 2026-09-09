/**
 * ============================================================
 *  GÖRSEL KAYIT DEFTERİ
 * ============================================================
 *  Sitede kullanılan her fotoğraf bu listede yer almalıdır.
 *
 *  YENİ FOTOĞRAF EKLEMEK İÇİN:
 *   1. Dosyayı /public/images/... altına koyun
 *   2. Yolunu aşağıdaki listeye ekleyin
 *  Listede olmayan yollar otomatik olarak placeholder gösterir.
 *  Böylece eksik fotoğraf siteyi bozmaz, sadece boş alan olarak görünür.
 * ============================================================
 */

export const availableImages: string[] = [
  "/images/marka/barkyard-logo.svg",
  "/images/marka/barkyard-mark.svg",
  "/images/marka/barkyard-logo-512.png",
  "/images/marka/og-barkyard.png",
  "/images/tesis/tesis-dis-gorunum.jpg",
  // TODO: Çekim yapıldıkça buraya ekleyin. Örnek:
  // "/images/tesis/bahce-1.jpg",
  // "/images/hizmetler/kopek-egitimi.jpg",
];

export function hasImage(src?: string | null): src is string {
  return !!src && availableImages.includes(src);
}
