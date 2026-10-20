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

/**
 * GEÇİCİ STOK FOTOĞRAFLAR (Unsplash, ücretsiz lisans).
 * Gerçek fotoğraf çekilince dosyayı /public/images/... altına koyun,
 * yolunu availableImages'a ekleyin ve buradaki satırı silin.
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=70`;

export const stockImages: Record<string, string> = {
  "/images/hizmetler/kopek-egitimi.jpg": u("1531531534025-0b78da954d21"),
  "/images/hizmetler/kopek-oteli.jpg": u("1561130627-94d7dd29776d"),
  "/images/hizmetler/gunduz-bakim.jpg": u("1703733574403-e2e42e3c5bda"),
  "/images/hizmetler/rehabilitasyon.jpg": u("1551779891-b83901e1f8b3"),
  "/images/tesis/bahce-1.jpg": u("1769442153249-8040f16a218e"),
  "/images/tesis/bahce-2.jpg": u("1703733572989-026dbaf7fc96"),
  "/images/tesis/konaklama-1.jpg": u("1598397678815-c5dc869035b8"),
  "/images/tesis/kapali-alan.jpg": u("1749703174207-257698ceb352"),
  "/images/tesis/egitim-alani.jpg": u("1546815708-410983510897"),
  "/images/tesis/dinlenme.jpg": u("1492748046438-4b6d9ebe0c11"),
  // /images/ekip/egitmen.jpg bilerek boş: eğitmenin gerçek portresi gerekir.
};

export function isStock(src?: string | null): boolean {
  return !!src && !availableImages.includes(src) && src in stockImages;
}

export function resolveImage(src?: string | null): string | null {
  if (!src) return null;
  if (availableImages.includes(src)) return src;
  return stockImages[src] ?? null;
}

export function hasImage(src?: string | null): src is string {
  return resolveImage(src) !== null;
}
