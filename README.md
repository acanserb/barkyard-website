# Barkyard Ankara — Web Sitesi

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4
Yengeç Growth tarafından geliştirilmiştir.

---

## Hızlı başlangıç

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
npm run start    # üretim sunucusu
```

---

## ⚠️ YAYINA ALMADAN ÖNCE — zorunlu adımlar

Aşağıdakiler tamamlanmadan site canlıya alınmamalıdır.

### Durum (9 Eylül 2026)

Girilmiş olanlar: WhatsApp/telefon `0 544 456 02 12`, açık adres (Oğulbey / Gölbaşı),
çalışma saatleri (her gün 09:30–18:30, GBP ile birebir), doğrulanmış koordinat
(39.683744, 32.803939), alan adı `barkyardankara.com`,
Instagram, logo (SVG + favicon + OG görseli).

Bekleyenler: resmî işletme unvanı, eğitmen bilgisi, hizmet detayları,
anlaşmalı veteriner, fotoğraf çekimi.

### 1. `src/config/site.ts` — tüm işletme bilgileri

Sitedeki telefon, WhatsApp, adres, saat ve alan adı bilgisi **yalnızca bu dosyadan** gelir.
Başka hiçbir dosyada iletişim bilgisi yazılı değildir.

| Alan | Ne girilecek |
|---|---|
| `url` | Gerçek alan adı. Canonical, sitemap ve OG etiketleri buradan üretilir |
| `phone` / `phoneDisplay` | Telefon numarası (uluslararası ve görünen format) |
| `whatsapp` | WhatsApp numarası, sadece rakam: `905XXXXXXXXX` |
| `email` | İletişim e-postası |
| `address` | Açık adres, ilçe, posta kodu |
| `geo` | Google Haritalar'dan alınan enlem/boylam |
| `mapsUrl` | Google Business Profile "yol tarifi" bağlantısı |
| `mapsEmbedUrl` | Şu an adres tabanlı anahtarsız embed kullanılıyor. Tarayıcıda boş görünürse Google Haritalar > Paylaş > Haritayı yerleştir bölümündeki `src` adresini buraya yapıştırın |
| `hours` / `hoursSchema` | Gerçek çalışma saatleri (ikisi de güncellenmeli) |
| `social.instagram` | Instagram hesabı |
| `legalName` | Resmî işletme unvanı |
| `gtmId` | Google Tag Manager kimliği (bkz. Ölçüm) |

### 2. Fotoğraflar

Gerçek fotoğraflar gelene kadar aşağıdaki alanlarda **geçici stok görseller** (Unsplash lisansı,
sitenin kendi sunucusunda) kullanılıyor. Bunlar ana sayfadaki tesis ön izlemesinde ve /tesis/ sayfasındaki "Tesisten kareler"
galerisinde kullanılmaz (oralarda yalnızca gerçek tesis fotoğrafı görünür).

```
/public/images/hizmetler/kopek-egitimi.jpg   stok
/public/images/hizmetler/kopek-oteli.jpg     stok
/public/images/hizmetler/gunduz-bakim.jpg    stok
/public/images/hizmetler/rehabilitasyon.jpg  stok
/public/images/tesis/bahce-1.jpg             stok  (açık alan)
/public/images/tesis/bahce-2.jpg             stok  (bahçede oyun)
/public/images/tesis/kapali-alan.jpg         stok  (kapalı alan)
/public/images/tesis/konaklama-1.jpg         stok  (konaklama)
/public/images/tesis/egitim-alani.jpg        stok  (eğitim alanı)
/public/images/tesis/dinlenme.jpg            stok  (dinlenme)
/public/images/tesis/tesis-dis-gorunum.jpg   gerçek
/public/images/ekip/emre-*.jpg               gerçek (5 adet)
```

**Gerçek fotoğraf çekildiğinde:** aynı dosya adıyla stok görselin üzerine yazın (en az 1600 px,
JPG) ve `src/lib/media.ts` içinde yolu `stockImages` listesinden `availableImages` listesine taşıyın.
Fotoğraf tesis galerisinde de görünmeye başlar.

Hiçbir listede olmayan bir görsel canlı sitede hiç çizilmez; `npm run dev` ile çalışırken kesik
çizgili "Fotoğraf eklenecek" kutusu olarak görünür.

### 3. Eksik bilgiler

`TODO` araması yapın. İşletmeden alınması gerekenler:

- `src/config/site.ts` — `legalName` (resmî unvan), `gtmId`, `mapsEmbedUrl`
- `src/app/kvkk/page.tsx` — veri sorumlusu unvanı, hukuki sebepler, saklama süreleri,
  kamera kaydı, aktarım, başvuru yöntemi (**taslaktır, hukuki onay gerekir**)
- `src/content/reviews.ts` — gerçek ve izinli müşteri yorumları (boşken bölüm gösterilmez)
- Anlaşmalı veteriner bilgisi (doğrulanınca `src/app/tesis/page.tsx` güvenlik bölümüne)

### 4. Favicon ve OG görseli

- `src/app/favicon.ico` ✓ logodan üretildi
- `public/images/marka/og-barkyard.png` ✓ 1200×630 OG görseli üretildi

---

## Tasarım sistemi

- Renk ve tipografi token'ları: `src/app/globals.css` (`@theme`). Kontrast oranları dosyanın başında.
- Yazı tipleri: Bricolage Grotesque (başlık) ve Figtree (gövde), `public/fonts/` altından
  kendi sunucumuzdan yüklenir; Google Fonts'a istek yapılmaz. Türkçe karakterler `latin-ext` dosyasındadır.
- Ortak bileşenler: `src/components/ui.tsx` (sunucu), `src/components/actions.tsx` (WhatsApp/telefon/yol tarifi, istemci).

## Yapı

```
src/
  config/site.ts          → tüm işletme bilgileri (tek kaynak)
  content/
    services.ts           → 4 hizmet sayfasının tüm içeriği
    home.ts               → ana sayfa metinleri
    reviews.ts            → gerçek müşteri yorumları
  lib/
    media.ts              → mevcut fotoğraf kayıt defteri
    track.ts              → dönüşüm olayları
    schema.ts             → yapısal veri (LocalBusiness, Service, Breadcrumb)
  components/             → paylaşılan arayüz parçaları
  app/                    → sayfalar
```

**İçerik değişikliği için `app/` klasörüne dokunmaya gerek yok** — hizmet metinleri
`content/services.ts`, ana sayfa metinleri `content/home.ts` içindedir.

### Sayfalar

| URL | Amaç |
|---|---|
| `/` | Ana sayfa |
| `/kopek-egitimi-ankara/` | SEO landing — köpek eğitimi |
| `/kopek-oteli-ankara/` | SEO landing — otel ve pansiyon (tek sayfa, kanibalizasyon önlenir) |
| `/kopek-gunduz-bakim-ankara/` | SEO landing — gündüz bakım |
| `/kopek-rehabilitasyonu-ankara/` | SEO landing — davranış rehabilitasyonu |
| `/hakkimizda/` | Eğitmen ve çalışma ilkeleri |
| `/tesis/` | Tesis galerisi — satın alma kararının verildiği sayfa |
| `/sss/` | Tüm sık sorulan sorular |
| `/iletisim/` | İletişim, form, harita |
| `/kvkk/` | Yasal metin (`noindex`) |

Köpek gezdirme için ayrı sayfa **bilinçli olarak açılmamıştır**; arama hacmi ve ticari
değeri düşük olduğu için gündüz bakım sayfası içinde ve SSS'de ele alınır.

---

## Ölçüm ve dönüşüm

Site tek bir GTM konteyneri üzerinden ölçülür. Kodun içinde başka hiçbir izleme etiketi yoktur.

### Kurulum

1. GTM konteyneri açın, kimliği `src/config/site.ts` içindeki `gtmId` alanına yazın
   (boş bırakılırsa hiçbir script yüklenmez — sayfa hızı etkilenmez)
2. GTM içinde GA4 yapılandırma etiketini kurun
3. Aşağıdaki `dataLayer` olaylarını GA4 event'i olarak tanımlayın
4. GA4'te `whatsapp_click`, `phone_click` ve `lead_form_whatsapp_open` olaylarını **key event** işaretleyin
5. Google Ads dönüşümlerini bu key event'lere bağlayın
6. Meta Pixel'i aynı konteynerden ekleyin; CAPI için sunucu tarafı gerekir

### Gönderilen olaylar

| Olay | Ne zaman | Parametreler |
|---|---|---|
| `whatsapp_click` | WhatsApp bağlantısına tıklama | `cta_context`, `cta_source`, `page_path` |
| `phone_click` | Telefon bağlantısına tıklama | `cta_source`, `page_path` |
| `directions_click` | Yol tarifi / harita bağlantısı | `cta_source`, `page_path` |
| `lead_form_whatsapp_open` | Form doğrulandı ve WhatsApp açıldı | `form_service`, `page_path` |
| `service_page_view` | Hizmet sayfası görüntülendi (bir kez) | `service`, `page_path` |

`cta_source` hangi bölümün dönüştürdüğünü söyler: `hero`, `header`, `mobile_bar`,
`kopek-oteli-ankara_pricing`, `tesis_closing` vb.

### Consent Mode v2

Varsayılan olarak `denied` başlatılır. **Şu anda sitede hiçbir analitik/reklam çerezi yoktur**
(`gtmId` boş), bu yüzden çerez onay paneli bilinçli olarak eklenmedi. GTM/GA4 açılmadan önce
gerçek çerez kullanımına göre bir onay paneli eklenmeli, `gtag('consent','update',…)` ile
bağlanmalı ve `/kvkk/` sayfasındaki "Çerezler" bölümü güncellenmelidir.

### ⚠️ Ölçümün gerçek darboğazı

WhatsApp tıklaması bir dönüşüm değil, bir dönüşüm **sinyalidir**. Reklam bütçesinin
neyi döndürdüğünü bilmek için WhatsApp tarafında gelen → teklif → satış kaydının
tutulması gerekir. Bu, sitenin değil operasyonun sorumluluğudur ve kurulmazsa
3 ay sonra hangi kanalın müşteri getirdiği bilinemez.

---

## İletişim formu

Şu anda sunucu tarafı yoktur: form doğrulandıktan sonra derlenmiş mesaj WhatsApp'ta açılır.
Site form verisini hiçbir yere kaydetmez veya göndermez; formun altındaki açıklama ve KVKK
sayfası bu davranışa göre yazılmıştır. Bir API/CRM eklenirse bu metinler de güncellenmelidir.
Böylece tüm talep tek kanalda toplanır ve hiçbir talep e-posta kutusunda kaybolmaz.

E-posta veya CRM entegrasyonu istendiğinde `src/components/ContactForm.tsx` içindeki
`submit` fonksiyonunun içi bir API route çağrısıyla değiştirilir; formun geri kalanı aynı kalır.

---

## SEO

- Sayfa bazlı `title`, `description`, canonical ve Open Graph
- `LocalBusiness` yapısal verisi (adres, koordinat, saatler, hizmet kataloğu, hizmet bölgesi)
- Her hizmet sayfasında `Service` + `FAQPage` + `BreadcrumbList`
- `sitemap.xml` ve `robots.txt` otomatik üretilir (`src/app/sitemap.ts`, `src/app/robots.ts`)
- Tüm URL'ler sonu `/` ile biter (`trailingSlash: true`)
- Semantik HTML, tek `h1`, `lang="tr"`, klavye erişilebilirliği, `prefers-reduced-motion`

Yayına aldıktan sonra: Search Console'a mülkiyet ekleyin ve sitemap'i gönderin.

### ⚠️ Sitenin tek başına çözemeyeceği kısım

Hedef sorgularda organik sonuçlardan önce **Google Harita Paketi** gelir. Google Business
Profile sahiplenilmeden ve yorum toplanmadan bu site tek başına yeterli talep üretmez.
GBP çalışması siteyle **paralel** yürütülmeli, sonrasında değil.

---

## Deploy

Önerilen: **Vercel**. Repoyu bağlayın, ek yapılandırma gerekmez.

Statik hosting gerekiyorsa `next.config.ts` içine `output: "export"` ve
`images: { unoptimized: true }` eklenir — bunun bedeli görsel optimizasyonunun kaybıdır,
fotoğraf ağırlıklı bu sitede önerilmez.

Deploy sonrası kontrol listesi:

- [ ] `site.ts` içindeki tüm TODO alanları dolduruldu
- [ ] Alan adı ve SSL aktif
- [ ] Search Console mülkiyeti doğrulandı, sitemap gönderildi
- [ ] GTM kimliği girildi ve olaylar Tag Assistant ile test edildi
- [ ] WhatsApp bağlantıları gerçek numaraya gidiyor, ön mesaj doğru
- [ ] Mobilde sabit CTA çubuğu çalışıyor
- [ ] PageSpeed Insights mobil skoru kontrol edildi
- [ ] Google Business Profile açıldı ve siteye bağlandı
