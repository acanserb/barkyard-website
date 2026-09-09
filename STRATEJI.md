# Barkyard Ankara — Web Sitesi Stratejisi (v1, Eylül 2026)

Hazırlayan: Yengeç Growth · Durum: Onay bekliyor · Kod yazımı başlamadı

---

## 0. Teşhis ve varsayımlar

**Tespit:** Barkyard'ın Google'da bulunabilir bir dijital ayak izi yok. "Barkyard Ankara köpek eğitim merkezi" aramasında marka hiçbir sonuçta çıkmıyor; ilk sayfayı Armut gibi aracı pazaryerleri ve Active Kennel, Petfendy, Akıllı Pati, Ankara Köpek Çiftliği gibi yerleşik rakipler tutuyor. 2009'dan beri faaliyet gösteren bir işletme için bu, 17 yıllık itibarın dijitalde sıfır olarak muhasebeleştirilmesi demektir.

**Bunun asıl anlamı:** Site bir "tanıtım" işi değil, bir **talep yakalama sistemi** kurma işidir. Ancak site tek başına yeterli olmayacak. Bu kategoride ilk temas noktası çoğunlukla Google Haritalar'dır — kullanıcı "köpek oteli Ankara" arar, harita paketinden 3 işletmeye bakar, yorumları okur ve arar. Yorumu ve GBP'si zayıf bir işletme, sitesi ne kadar iyi olursa olsun bu akışta elenir.

**Açık varsayımlarım (doğrulanmalı):**
1. Barkyard'ın aktif bir Google Business Profile'ı yok veya sahiplenilmemiş durumda. — DOĞRULANMALI
2. Mevcut bir alan adı ve site yok, sıfırdan kurulacak. — DOĞRULANMALI
3. Tesis, paylaşılan fotoğraftaki gibi şehir dışı/müstakil bahçeli bir yerleşke (Ankara çevresi). Bu, "geniş alan / doğal ortam" konumlandırması için güçlü bir varlık ama "ulaşım mesafesi" itirazı yaratır. — DOĞRULANMALI
4. Talep şu anda ağırlıkla tavsiye ve tekrar müşteriden geliyor. — DOĞRULANMALI
5. Fiyatlandırma kamuya açık paylaşılmıyor. — DOĞRULANMALI

Bu 5 maddeyi netleştirmeden teknik üretime geçmek, yanlış varsayım üzerine sayfa yazmak demektir.

---

## 1. Site haritası

**Birincil (ticari) sayfalar**
1. Ana Sayfa — `/`
2. Köpek Eğitimi — `/kopek-egitimi-ankara/`
3. Köpek Oteli / Pansiyon — `/kopek-oteli-ankara/`
4. Gündüz Bakım (Daycare) — `/kopek-gunduz-bakim-ankara/`
5. Köpek Rehabilitasyonu / Davranış Problemleri — `/kopek-rehabilitasyonu-ankara/`

**Güven ve destek sayfaları**
6. Hakkımızda — `/hakkimizda/` (2009'dan bugüne, ekip, eğitmen yaklaşımı)
7. Tesisimiz — `/tesis/` (fotoğraf ağırlıklı; en güçlü güven sayfası olacak)
8. Sık Sorulan Sorular — `/sss/`
9. İletişim ve Ulaşım — `/iletisim/`

**Destekleyici**
10. Blog / Rehber — `/rehber/` (SEO uzun kuyruk; 2. fazda)
11. KVKK Aydınlatma Metni, Gizlilik Politikası — yasal zorunluluk

**Köpek gezdirme kararı:** Ayrı landing page **açılmasın**. Gerekçe: (a) arama hacmi Ankara'da düşük ve niyeti çoğunlukla "iş arayan gezdirici" veya mahalle bazlı, (b) ticari değeri en düşük hizmet — düşük fiyat, yüksek operasyonel yük, düşük yaşam boyu değer, (c) tesis merkezli bir işletme için gezdirme, şehir içi lojistik gerektirir ve markanın "emanet edilen güvenli tesis" konumlandırmasını sulandırır. Gezdirme, gündüz bakım sayfasının içinde bir bölüm ve SSS maddesi olarak kalsın. Eğer gezdirme gerçekten gelirin anlamlı bir kısmıysa bunu bana söyleyin — karar değişir.

**Cins bazlı sayfa uyarısı:** "golden retriever eğitimi Ankara" tipi cins sayfaları cazip görünür ama ince içerik üretir ve rakip sitelerin çoğu bunu yaparak zayıflamıştır. 1. fazda yok.

---

## 2. Sayfaların amaçları

| Sayfa | Tek işi | Birincil aksiyon | Başarı ölçütü |
|---|---|---|---|
| Ana Sayfa | 5 saniyede ne/nerede/neden güven sorusunu kapatmak ve doğru hizmete yönlendirmek | WhatsApp | Hizmet sayfasına geçiş oranı + WhatsApp tıklaması |
| Köpek Eğitimi | Ticari olarak en değerli hizmet. Yöntem ve eğitmen yetkinliğini kanıtlamak | WhatsApp / arama | Form+WA dönüşüm oranı |
| Köpek Oteli | "Köpeğimi güvenle bırakabilir miyim?" itirazını çözmek | WhatsApp + tarih sorma | WA tıklaması |
| Gündüz Bakım | Tekrar eden gelir. Rutin, gün akışı, kapasiteyi göstermek | WhatsApp | Deneme günü talebi |
| Rehabilitasyon | Yüksek niyet, düşük hacim. Umutsuz sahibe "çözülebilir" demek | Telefon (bu segment aramayı tercih eder) | Arama tıklaması |
| Hakkımızda | 2009 tarihini ve ekibi somutlamak | Yumuşak CTA | Hizmet sayfasına geçiş |
| Tesisimiz | Satın alma kararının gerçekte verildiği sayfa. Görsel kanıt | WhatsApp | Sayfada kalma + WA |
| SSS | Fiyat, süre, aşı, teslim, ulaşım itirazlarını önden kırmak | WhatsApp | WA tıklaması |
| İletişim | Sürtünmeyi sıfırlamak: harita, yol tarifi, saatler | Tümü | Yol tarifi + arama |

---

## 3. Ana sayfa bölüm sıralaması

1. **Hero** — Tek cümlelik net konum: ne yapıyoruz + nerede. Alt satırda "2009'dan beri Ankara". Arka planda gerçek tesis fotoğrafı. İki buton: birincil WhatsApp, ikincil "Hizmetleri inceleyin". Mobilde ilk ekranda tam olarak bu kadar olmalı, fazlası değil.
2. **Güven şeridi** — 4 kısa kanıt: 2009'dan beri · X köpek · kapalı+açık alan · sertifikalı eğitmen. (Rakamlar doğrulanmadan yazılmayacak.)
3. **Hizmetler** — 4 kart: Eğitim, Otel, Gündüz Bakım, Rehabilitasyon. Her kart ilgili landing sayfasına.
4. **Tesis** — 4–6 gerçek fotoğraflı geniş görsel blok + "Tesisi görün" bağlantısı. Bu bölüm ana sayfanın en önemli parçası.
5. **Nasıl çalışıyoruz** — 3 adım: Tanışma/değerlendirme → Program → Süreç boyunca bilgilendirme. Belirsizliği kırar.
6. **Yorumlar** — Gerçek Google yorumları, isim ve köpek adıyla. Uydurma yorum yok.
7. **Konum ve ulaşım** — Harita, mesafe, otopark. Şehir dışı konum bir itirazdır; gizlemek yerine "geniş alan" avantajına çevirin.
8. **SSS özeti** — 5 soru, açılır. FAQ schema ile.
9. **Kapanış CTA** — WhatsApp + telefon, çalışma saatleriyle.

Mobilde 5. bölümden itibaren sabit alt WhatsApp çubuğu görünür olur.

---

## 4. SEO landing page yapısı

Her hizmet sayfası aynı iskeleti kullanır:

1. H1: hizmet + Ankara (doğal cümle içinde, anahtar kelime yığmadan)
2. Açılış paragrafı: kimin için, nerede, ne kadar sürüyor
3. Kimler için uygun / uygun değil (dürüstlük = güven)
4. Program içeriği veya gün akışı (madde madde, somut)
5. Süreç: başvuru → değerlendirme → program → teslim
6. Tesis ve koşullar (fotoğraf)
7. Fiyatlandırma çerçevesi — net rakam verilmiyorsa "neye göre değişir" açıklaması. Boş bırakmak WhatsApp'a itiyor gibi görünse de çoğu kullanıcıyı rakibe itiyor. **Fiyat bandı yayınlamanızı öneriyorum.**
8. Bu hizmete özel SSS (schema'lı)
9. CTA bloğu

**Niyet eşlemesi:**
- `köpek eğitimi ankara`, `köpek eğitim merkezi ankara`, `itaat eğitimi ankara` → Eğitim sayfası
- `köpek oteli ankara`, `köpek pansiyonu ankara`, `köpek konaklama ankara` → Otel sayfası (tek sayfa; "otel" ve "pansiyon" ayrı sayfa yapılmamalı, kanibalizasyon üretir — pansiyon H2 ve title'da geçer)
- `köpek gündüz bakım ankara`, `köpek kreşi ankara`, `daycare` → Gündüz bakım
- `köpek rehabilitasyonu ankara`, `saldırgan köpek eğitimi`, `köpek davranış uzmanı ankara` → Rehabilitasyon

**Kritik nokta:** Bu sorgularda organik ilk sayfadan önce Harita Paketi gelir. Site tek başına yetmez; **Google Business Profile optimizasyonu ve yorum toplama sistemi siteyle eşzamanlı yürümeli.** Site canlıya alınmadan GBP çalışması başlatılmalı — GBP'nin olgunlaşması daha uzun sürer.

---

## 5. Tasarım yönü

Logodan hareketle: koyu antrasit (#2B2B28 bandı), kirli beyaz/krem zemin (#F7F1EA bandı), logodaki sarı yalnızca CTA ve küçük vurgu için, zeytin/haki yeşil ikincil. Sıcak, sakin, doğal.

- Tipografi: başlıklarda temiz bir serif veya geniş harf aralıklı sans (logonun karakterine yakın), gövdede yüksek okunurluklu sans. İki font ailesi, fazlası yok.
- Bol beyaz alan, geniş fotoğraf blokları, yumuşak köşe yarıçapı, gölge kullanımı minimum.
- **Yasak liste:** pati ikonu serpiştirme, çizgi köpek illüstrasyonu, komik font, canlı mavi/turuncu, stok fotoğraf, gradient butonlar, kayan slider, scroll animasyon şovu.
- Fotoğraf, tasarımın kendisidir. Gerçek tesis, gerçek köpekler, gerçek eğitmenler. Stok fotoğraf kullanılırsa proje daha ilk günden değerini kaybeder.
- Mobil öncelikli: tasarım mobilde başlar, masaüstü ikinci.

---

## 6. Dönüşüm mimarisi

**Aksiyon hiyerarşisi:** WhatsApp (birincil) > Telefon (rehabilitasyon ve otel aciliyetinde eşdeğer) > Form (yalnızca mesai dışı yedek).

- WhatsApp bağlantıları sayfa bazlı ön-doldurulmuş mesajla açılır: *"Merhaba, köpek oteli hakkında bilgi almak istiyorum."* Bu, gelen talebi kaynağa göre sınıflandırmanızı sağlar — reklam ölçümünde en kritik ayrıntı.
- Mobilde 60px sabit alt çubuk: WhatsApp + Ara.
- Form 4 alandan uzun olmaz: ad, telefon, köpek (cins/yaş), ihtiyaç.
- Ölçüm katmanı (site kurulurken hazır, sonra bağlanır): GTM konteyneri, GA4, `whatsapp_click` / `phone_click` / `form_submit` / `directions_click` event'leri, GA4 key event tanımları, Google Ads dönüşüm eşlemesi, Meta Pixel + Conversions API için sunucu tarafı kanca noktası, Search Console + sitemap.
- Consent Mode v2 ve KVKK çerez bildirimi baştan kurulur.

**Uyarı:** WhatsApp tıklaması bir dönüşüm değil, bir dönüşüm *sinyalidir*. Gerçek ticari sonucu ölçmek için WhatsApp tarafında basit bir talep kayıt disiplini gerekir (gelen → teklif → satış). Bu kurulmazsa 3 ay sonra reklam bütçesini neyin döndürdüğünü bilemeyiz. Bu, sitenin değil operasyonun işi ve şimdiden konuşulmalı.

---

## 7. Teknoloji önerisi

**Öneri: Next.js (App Router) + statik üretim + Tailwind, Vercel üzerinde.**

Gerekçe: 9–11 sayfalık, içeriği seyrek değişen, hızın ve Core Web Vitals'ın doğrudan sıralama ve dönüşüm etkisi olduğu bir site. Statik çıktı en hızlısı, en ucuzu ve en güvenlisi. Next.js'in görsel optimizasyonu bu proje için belirleyici — site fotoğraf ağırlıklı olacak. Yengeç Growth'un mevcut proje yığınıyla da uyumlu, bakım maliyeti düşük.

- İçerik: MDX veya basit JSON/TS içerik dosyaları. **CMS önermiyorum** — bu ölçekte CMS gereksiz karmaşıklık ve ek maliyet. İçerik yılda birkaç kez değişecek.
- Görseller: next/image, AVIF/WebP, boyutlandırılmış ve sıkıştırılmış.
- Schema: LocalBusiness (+ tercihen `AnimalShelter` değil, `LocalBusiness`/`PetStore` yerine özel `LocalBusiness` + `serviceType`), Service, FAQPage, BreadcrumbList.
- sitemap.xml, robots.txt, canonical, Open Graph, tr-TR `lang`, 301 planı.
- Analitik ağırlığı GTM ile tek noktadan yönetilir; başka üçüncü parti script yok.

**Reddedilen alternatifler:** WordPress (hız, güvenlik ve bakım yükü; bu ölçekte gereksiz), Wix/Squarespace (teknik SEO ve ölçüm kontrolü sınırlı), headless CMS (aşırı mühendislik).

---

## 8. Barkyard'dan alınması gereken eksik içerik ve materyal

**Kritik — bunlar olmadan site yayına alınmaz**
1. Doğrulanmış işletme bilgileri: tam adres, koordinat, telefon, WhatsApp numarası, çalışma saatleri, kabul edilen ödeme yöntemleri.
2. Profesyonel fotoğraf çekimi: tesis dış/iç, bahçe ve koşu alanları, konaklama bölmeleri, eğitim alanı, ekip portreleri, gerçek köpekler. **Minimum 40–60 kullanılabilir kare.** Bütçe kaleminde ayrı satır. (Sıfır Yirmi İki bu çekimi yapabilir.)
3. Her hizmet için: süre, kapsam, kabul koşulları (aşı, yaş, cins kısıtı), günlük akış, kapasite.
4. Fiyat bandı kararı — yayınlanacak mı, yayınlanmayacak mı.
5. Eğitmen kadrosu: isim, deneyim yılı, sertifikalar, yöntem yaklaşımı (ödül temelli vb.).
6. Google Business Profile erişimi (veya sahiplenme süreci başlatılması).
7. Alan adı ve mevcut varsa hosting/DNS erişimi.
8. Marka varlıkları: logonun vektör hali (SVG/AI), varsa yazı tipi tercihi.
9. Doğrulanabilir işletme kanıtları: 2009 tarihini destekleyen belge/kayıt, varsa dernek/sertifika üyelikleri.

**Yüksek değerli — ilk 30 günde**
10. 8–12 gerçek müşteri yorumu ve Google'a yorum toplama izni/süreci.
11. 3 kısa vaka: problem → süreç → sonuç (rehabilitasyon sayfası için belirleyici).
12. Video: 60–90 saniyelik tesis turu. Bu kategoride dönüşüme en çok etki eden tek materyal.
13. En sık gelen 20 müşteri sorusu (SSS'yi buradan yazacağız, tahminden değil).
14. Veteriner/acil durum protokolü, sigorta ve güvenlik önlemleri metni.

**Yasal**
15. KVKK aydınlatma metni, gizlilik ve çerez politikası, form açık rıza metni, işletme unvanı ve vergi bilgileri.

---

## Sıradaki en yüksek kaldıraçlı adım

Kod değil: **Google Business Profile'ın sahiplenilmesi/optimize edilmesi ve yorum toplama sisteminin bu hafta başlatılması.** Sitenin sıralanması 3–6 ay alır; harita paketindeki görünürlük ve yorum sayısı ise haftalar içinde talep üretir ve site yayına girdiğinde ona hazır bir talep akışı devreder. Site inşası bununla paralel yürür, sonrasında değil.
