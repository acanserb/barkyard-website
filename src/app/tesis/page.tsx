import type { Metadata } from "next";
import { site, fullAddress } from "@/config/site";
import { Container, CtaBlock, Eyebrow, Figure, H2, Lead, Section } from "@/components/ui";
import { DirectionsTextLink } from "@/components/ContactLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tesisimiz",
  description:
    "Barkyard Ankara tesisi: açık bahçe ve koşu alanı, korunaklı kapalı bölüm, konaklama alanları ve eğitim sahası. Ziyaret için randevu alın.",
  alternates: { canonical: "/tesis/" },
};

/**
 * TESİS GALERİSİ
 * Fotoğraf çekildikçe /public/images/tesis/ altına koyup
 * src/lib/media.ts içindeki listeye ekleyin. Eklenmeyen görseller
 * placeholder olarak kalır, site bozulmaz.
 */
const gallery = [
  { src: "/images/tesis/tesis-dis-gorunum.jpg", alt: "Tesis dış görünüm ve bahçe", label: "Tesis dış görünüm", span: "sm:col-span-2 sm:row-span-2 aspect-[4/3]" },
  { src: "/images/tesis/bahce-1.jpg", alt: "Açık koşu alanı", label: "Açık koşu alanı", span: "aspect-square" },
  { src: "/images/tesis/kapali-alan.jpg", alt: "Korunaklı kapalı alan", label: "Kapalı alan", span: "aspect-square" },
  { src: "/images/tesis/konaklama-1.jpg", alt: "Konaklama bölmesi", label: "Konaklama bölmesi", span: "aspect-square" },
  { src: "/images/tesis/egitim-alani.jpg", alt: "Eğitim çalışma alanı", label: "Eğitim alanı", span: "aspect-square" },
  { src: "/images/tesis/dinlenme.jpg", alt: "Dinlenme alanı", label: "Dinlenme alanı", span: "aspect-square" },
  { src: "/images/tesis/bahce-2.jpg", alt: "Bahçede oyun alanı", label: "Bahçe / oyun alanı", span: "sm:col-span-2 aspect-[16/9]" },
];

const areas = [
  {
    title: "Açık bahçe ve koşu alanı",
    text: "Köpeklerin gün içinde gerçekten koşabildiği çimli alan. Gruplar bedene, yaşa ve oyun tarzına göre ayrılır; uyum sağlamayan köpekler bireysel çıkarılır.",
  },
  {
    title: "Korunaklı kapalı bölüm",
    text: "Yağmur, aşırı sıcak ve soğukta çalışmanın ve dinlenmenin devam ettiği alan. Havanın programı durdurmasına izin vermiyoruz.",
  },
  {
    title: "Konaklama alanları",
    text: "Her köpeğin kendisine ayrılmış alanı vardır. Ortak alan kullanımı köpeklerin birbirine uyumuna göre belirlenir, varsayılan olarak değil.",
  },
  {
    title: "Eğitim sahası",
    text: "Dikkat dağıtıcıların kontrol edilebildiği ayrı çalışma alanı. Öğrenilen davranış, kademeli olarak daha uyarıcı ortamlara taşınır.",
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container className="py-14 sm:py-20">
          <Eyebrow>Tesisimiz</Eyebrow>
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Köpeğinizi bırakacağınız yeri görmeden karar vermeyin
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
            Bu sayfadaki fotoğraflar tesisin kendisine ait. Yine de yerinde görmenizi öneriyoruz —
            fotoğraf, bir köpeğin o alanda nasıl hareket ettiğini göstermez. Randevu alın,
            köpeğinizle birlikte gelin.
          </p>
          <p className="mt-6 text-[15px] text-ink-500">{fullAddress}</p>
        </Container>
      </section>

      {/* Galeri */}
      <Section tone="cream">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {gallery.map((g) => (
            <Figure
              key={g.label}
              src={g.src}
              alt={g.alt}
              label={g.label}
              sizes="(min-width: 640px) 33vw, 100vw"
              className={`rounded-2xl ${g.span}`}
            />
          ))}
        </div>
        <p className="mt-5 text-[13px] text-ink-500">
          Fotoğraflar Barkyard Ankara tesisine aittir. Stok görsel kullanılmamıştır.
        </p>
      </Section>

      {/* Alanlar */}
      <Section tone="white">
        <Eyebrow>Alanlar</Eyebrow>
        <H2>Tesiste ne var</H2>
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {areas.map((a) => (
            <div key={a.title} className="border-t-2 border-ink-900/12 pt-5">
              <h3 className="text-xl text-ink-900">{a.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-700">{a.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Güvenlik */}
      <Section tone="olive">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow light>Güvenlik</Eyebrow>
            <H2 className="text-cream-50">Bir sorun olduğunda ne oluyor</H2>
          </div>
          <div className="space-y-4 text-[16px] leading-relaxed text-cream-200/85">
            <p>
              Konaklama öncesinde köpeğinizin kayıtlı veterineri ve acil durumda ulaşılacak kişi
              bilgisi alınır. Bir sorun olduğunda önce siz aranırsınız.
            </p>
            <p>
              Size ulaşılamayan acil durumlarda köpeğinizin sağlığı önceliklidir ve gecikmeden
              veterinere götürülür. Yapılan her işlem sonrasında ayrıntısıyla bildirilir.
            </p>
            <p className="text-cream-200/60">
              {/* TODO: Anlaşmalı veteriner adı ve mesafesi netleşince buraya yazılacak. */}
              TODO: Anlaşmalı veteriner ve tesise uzaklığı burada belirtilecek.
            </p>
          </div>
        </div>
      </Section>

      {/* Ziyaret */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Ziyaret</Eyebrow>
            <H2>Gelip görün</H2>
            <Lead>
              Ziyaret için randevu alıyoruz — böylece size ayrılmış zaman oluyor ve tesisteki
              köpeklerin düzeni bozulmuyor. Köpeğinizi de getirin; ortamı önceden tanıması ilk
              konaklamayı kolaylaştırır.
            </Lead>
            <p className="mt-6 text-[15px] text-ink-700">
              {site.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
            </p>
            <div className="mt-8">
              <DirectionsTextLink className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-[15px] font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-cream-100">
                Yol tarifi alın
              </DirectionsTextLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            {site.mapsEmbedUrl ? (
              <iframe
                src={site.mapsEmbedUrl}
                title="Barkyard Ankara konumu"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
            ) : (
              <div className="bk-placeholder flex aspect-[4/3] items-center justify-center border border-dashed border-ink-500/25">
                <span className="px-6 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500">
                  Google Haritalar embed
                </span>
              </div>
            )}
          </div>
        </div>
      </Section>

      <CtaBlock
        title="Tesis ziyareti için randevu alın"
        text="Uygun günü yazın, size zaman ayıralım."
        context="tesis ziyareti ve randevu"
        source="tesis_closing"
      />

      <JsonLd data={breadcrumbSchema([{ name: "Tesisimiz", path: "/tesis/" }])} />
    </>
  );
}
