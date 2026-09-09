/**
 * ============================================================
 *  BARKYARD ANKARA — MERKEZİ İŞLETME KONFİGÜRASYONU
 * ============================================================
 *  Sitedeki TÜM işletme bilgileri yalnızca bu dosyadan gelir.
 *  Başka hiçbir dosyada telefon, adres veya URL yazılı değildir.
 *
 *  ⚠️  "TODO" işaretli alanlar yayına almadan önce doldurulmalıdır.
 * ============================================================
 */

export const site = {
  // --- Marka ---
  name: "Barkyard Ankara",
  shortName: "Barkyard",
  tagline: "Play · Stay · Train",
  legalName: "TODO: Resmî işletme unvanı", // TODO — Barkyard tarafından iletilecek
  foundedBrandYear: 2026, // Barkyard markasının kuruluş yılı
  trainerSinceYear: 2009, // Kurucu eğitmenin sektördeki deneyim başlangıcı

  // --- Alan adı --- (canonical, sitemap ve OG etiketleri buradan üretilir)
  url: "https://www.barkyardankara.com",

  // --- İletişim ---
  phone: "+905444560212",
  phoneDisplay: "0 544 456 02 12",
  // WhatsApp numarası (başında + olmadan, sadece rakam)
  whatsapp: "905444560212",
  email: "info@barkyardankara.com", // TODO: e-posta kutusu açılınca doğrula

  // --- Konum ---
  address: {
    street: "Kırşehir Bala Kavşağı, Haymana Sapağı, Oğulbey Serpmeleri No:342",
    district: "Gölbaşı",
    city: "Ankara",
    postalCode: "06830",
    country: "TR",
  },
  // Google Haritalar'daki işletme pininden alınmıştır (doğrulandı)
  geo: { lat: 39.683744, lng: 32.803939 },
  // Google Business Profile kaydının kalıcı bağlantısı (CID)
  mapsUrl: "https://www.google.com/maps?cid=8041570790417170582",
  // Anahtarsız embed — doğrulanmış koordinat üzerinden, pin tam tesise düşer
  mapsEmbedUrl: "https://maps.google.com/maps?q=39.683744,32.803939&z=15&hl=tr&output=embed",

  // --- Çalışma saatleri ---
  // Google Business Profile ile birebir aynı olmalı — uyumsuzluk yerel sıralamayı düşürür
  hours: [{ days: "Her gün", time: "09:30 – 18:30" }],
  // Schema.org formatı
  hoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],

  // --- Sosyal ---
  social: {
    instagram: "https://www.instagram.com/barkyardankara/",
    facebook: "",
    youtube: "",
  },

  // --- Ölçüm ---
  // TODO: Google Tag Manager konteyner kimliği (GTM-XXXXXXX).
  // Boş bırakılırsa hiçbir script yüklenmez, site temiz çalışır.
  gtmId: "",
} as const;

/** Sayfa bazlı ön doldurulmuş WhatsApp mesajı üretir. */
export function whatsappLink(context: string): string {
  const text = encodeURIComponent(`Merhaba, ${context} hakkında bilgi almak istiyorum.`);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const telLink = `tel:${site.phone}`;

export const fullAddress = `${site.address.street}, ${site.address.district}/${site.address.city}`;
