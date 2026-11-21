/**
 * Gerçek müşteri yorumları.
 * Boş kaldığı sürece ana sayfada yorum bölümü GÖSTERİLMEZ.
 * Uydurma yorum eklemeyin — Google'daki gerçek yorumları buraya taşıyın.
 */
export type Review = { name: string; dog?: string; service?: string; text: string };

// Google İşletme Profili'ndeki 5 yıldızlı yorumlardan, metin değiştirilmeden alındı (Kasım 2026).
// İsimler ad + soyadın baş harfiyle kısaltıldı.
export const reviews: Review[] = [
  {
    name: "Begüm B.",
    text: "Yurtdışı seyahatlerimde köpeğimi güvenle bırakabildiğim tek yer teşekkür ederim kaliteli hizmet anlayışınız için.",
  },
  {
    name: "Sarp T.",
    text: "Köpeğimizi gönül rahatlığıyla bırakıyoruz ve çok memnunuz. Bizim için en önemlisi onun güvende ve iyi ellerde olduğunu bilmek. Her seferinde içimiz rahat bir şekilde ayrılıyoruz. Köpeğini güvenle bırakabileceği bir yer arayanlara tavsiye ederim.",
  },
  {
    name: "İrem A.",
    text: "En sevdiğim canlıyı gönül rahatlığıyla emanet ettiğim yer. Titizlik ve şefkatle ilgilendiğiniz için teşekkür ederim.",
  },
];
