import type { FaqItem } from "@/content/services";

/**
 * Ana sayfa içeriği.
 * ⚠️ Doğrulanamayan hiçbir iddia eklemeyin (köpek sayısı, yıl, ödül vb.).
 */

export const trustPoints = [
  {
    title: "Yaklaşık otuz yıllık tesis geleneği",
    text: "Köpek Koleji'nde yıllarca sunulan hizmet, aynı tesiste ve aynı anlayışla Barkyard adıyla sürüyor.",
  },
  {
    title: "Bahçeli, açık alanlı tesis",
    text: "Köpeklerin gerçekten koşabildiği açık alan ve korunaklı kapalı bölümler.",
  },
  {
    title: "Sahibi süreçten çıkarılmaz",
    text: "Köpeğinizin öğrendiği sizinle birlikte tekrar edilir, evde uygulanacaklar yazılı verilir.",
  },
  {
    title: "Gösterecek her şeyimiz var",
    text: "Randevu alın, tesisi gezin, kalacağı yeri görün. Kapalı kapı yok.",
  },
];

export const facilityHighlights = [
  "Açık bahçe ve koşu alanı — köpeklerin gün içinde gerçekten hareket edebildiği alan",
  "Korunaklı kapalı bölüm — hava koşullarından bağımsız çalışma ve dinlenme",
  "Ayrılmış konaklama alanları; grup kullanımı köpeklerin uyumuna göre belirlenir",
  "Eğitim çalışmaları için ayrı, dikkat dağıtıcısı kontrol edilebilen alan",
  "Konaklama ve gündüz bakım süresince düzenli fotoğraf ve durum bilgisi",
];

export const howWeWork = [
  {
    title: "Tanışma ve değerlendirme",
    text: "Köpeğinizi ve ihtiyacınızı dinleriz. Doğru yer olmadığımız bir durum varsa bunu ilk görüşmede söyleriz — herkesin köpeği için doğru yer değiliz.",
  },
  {
    title: "Size özel program",
    text: "Hazır kalıplarla çalışmıyoruz. Süre, içerik ve çalışma biçimi köpeğin durumuna göre belirlenir ve neyin yapılacağı yazılı olarak iletilir.",
  },
  {
    title: "Süreç boyunca bilgi",
    text: "Ne yaptığımızı, nasıl ilerlediğini ve neyin işe yaramadığını düzenli olarak paylaşırız. Sormanızı beklemeyiz.",
  },
];

export const homeFaq: FaqItem[] = [
  {
    q: "Tesisi önceden gezebilir miyim?",
    a: "Evet, gezmenizi özellikle istiyoruz. Randevu alın, köpeğinizle birlikte gelin, kalacağı veya çalışacağı alanı yerinde görün. Köpeğinizi göremediğiniz bir yere bırakmayın — bu bizim için de geçerli bir kural.",
  },
  {
    q: "Köpeğimin aşıları eksik, kabul ediyor musunuz?",
    a: "Hayır. Aşı ve parazit uygulamalarının güncel olması, tesisteki tüm köpeklerin sağlığı için zorunlu. Aşı takvimi devam ediyorsa uygun tarihi birlikte planlarız.",
  },
  {
    q: "Barkyard yeni bir marka, neden size güveneyim?",
    a: "Haklı bir soru. Marka yeni, ancak hizmet yeni değil: Köpek Koleji çatısı altında yaklaşık otuz yıl sunulan hizmeti aynı tesiste, aynı anlayış ve sistemle sürdürüyoruz. Eğitmenimiz Emre Sönmez, bu anlayışı yaklaşık 15 yıl boyunca hocası Tarkan Özvardar'ın rehberliğinde öğrendi. Sizden güven istemiyoruz — gelin, tesisi görün, eğitmenle konuşun, köpeğinizle bir seans yapın. Kararınızı gördüklerinize göre verin.",
  },
  {
    q: "Köpek gezdirme hizmetiniz var mı?",
    a: "Şehir içinde eve gelip köpek alma şeklinde ayrı bir gezdirme hizmeti vermiyoruz. Köpeğinizin düzenli hareket ihtiyacı için gündüz bakım düzeni çoğu durumda daha verimli oluyor.",
  },
];
