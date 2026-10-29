import type { FaqItem } from "@/content/services";

/**
 * Ana sayfa içeriği.
 * ⚠️ Doğrulanamayan hiçbir iddia eklemeyin (köpek sayısı, ödül, puan, "en iyi" vb.).
 * Barkyard markası 2026'da kuruldu; Köpek Koleji geçmişi ayrı bir bilgi olarak anlatılır.
 */

export const whyPoints = [
  {
    title: "Köpeğe ve size özel değerlendirme",
    text: "Program hazır bir paketten seçilmez. Köpeğinizin yaşı, geçmişi ve yaşadığı ortam konuşulduktan sonra belirlenir.",
  },
  {
    title: "Sahibi sürecin içindedir",
    text: "Köpeğinizin öğrendiklerini sizinle birlikte tekrar ederiz. Evde uygulamanız gerekenleri yazılı olarak veririz.",
  },
  {
    title: "Tesisi randevuyla gezebilirsiniz",
    text: "Köpeğinizin kalacağı, oynayacağı ve çalışacağı alanları karar vermeden önce yerinde görürsünüz.",
  },
  {
    title: "Süreç boyunca düzenli bilgi",
    text: "Konaklama, gündüz bakım ve eğitim süresince fotoğraf ve durum bilgisini siz sormadan paylaşırız.",
  },
];

export const facilityHighlights = [
  "Açık bahçe ve koşu alanı",
  "Korunaklı kapalı bölüm",
  "Köpeklere ayrılmış konaklama alanları",
  "Dikkat dağıtıcıların kontrol edildiği eğitim alanı",
];

export const howWeWork = [
  {
    title: "Tanışma ve değerlendirme",
    text: "Köpeğinizi ve ihtiyacınızı dinleriz. Size uygun bir program sunamayacaksak bunu ilk görüşmede söyleriz.",
  },
  {
    title: "Köpeğe uygun program",
    text: "Süre, içerik ve çalışma biçimi köpeğin durumuna göre belirlenir. Ne yapılacağını size yazılı olarak iletiriz.",
  },
  {
    title: "Süreç ve takip",
    text: "Neyin iyi gittiğini, neyin üzerinde daha çok durulması gerektiğini düzenli olarak paylaşırız.",
  },
];

/** Ana sayfada gösterilen en önemli sorular. Tamamı /sss/ sayfasındadır. */
export const homeFaq: FaqItem[] = [
  {
    q: "Tesisi önceden gezebilir miyim?",
    a: "Evet, gezmenizi özellikle öneriyoruz. Randevu alın, mümkünse köpeğinizle birlikte gelin ve kalacağı ya da çalışacağı alanı yerinde görün.",
  },
  {
    q: "Aşıları eksik olan köpekleri kabul ediyor musunuz?",
    a: "Hayır. Aşı ve parazit uygulamalarının güncel olması tesisteki bütün köpeklerin sağlığı için zorunludur. Aşı takvimi devam ediyorsa uygun tarihi birlikte planlarız.",
  },
  {
    q: "Ücretler nasıl belirleniyor?",
    a: "Ücret; hizmete, süreye ve köpeğinizin ihtiyacına göre değişir. Köpeğinizin yaşını, ırkını ve ihtiyacınızı WhatsApp'tan yazarsanız size bilgi veririz.",
  },
  {
    q: "Barkyard yeni bir marka. Neden güveneyim?",
    a: "Barkyard markası 2026'da kuruldu. Aynı tesiste daha önce yaklaşık otuz yıl boyunca Köpek Koleji adıyla eğitim ve bakım hizmeti verildi; eğitmenimiz Emre Sönmez bu anlayışı yaklaşık 15 yıl boyunca hocası Tarkan Özvardar'ın yanında öğrendi. Yine de kararınızı bizim anlattıklarımıza göre değil, gördüklerinize göre vermenizi isteriz: Tesisi gezin, eğitmenle konuşun, sorularınızı sorun.",
  },
  {
    q: "Köpek gezdirme hizmetiniz var mı?",
    a: "Eve gelip köpek alma şeklinde ayrı bir gezdirme hizmetimiz yok. Köpeğinizin düzenli hareket ihtiyacı için gündüz bakım çoğu durumda daha uygun bir seçenek oluyor.",
  },
];
