/**
 * Gerçek müşteri yorumları.
 * Boş kaldığı sürece ana sayfada yorum bölümü GÖSTERİLMEZ.
 * Uydurma yorum eklemeyin — Google'daki gerçek yorumları buraya taşıyın.
 */
export type Review = { name: string; dog?: string; service: string; text: string };

export const reviews: Review[] = [
  // TODO: Örnek yapı — gerçek yorum geldikçe doldurun
  // { name: "Ayşe K.", dog: "Zeytin", service: "Gündüz Bakım", text: "..." },
];
