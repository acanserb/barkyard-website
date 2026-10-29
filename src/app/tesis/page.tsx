import { site, fullAddress } from "@/config/site";
import { Container, CtaBlock, Figure, Section, SectionHeading, Breadcrumbs } from "@/components/ui";
import { DirectionsLink, WhatsAppButton } from "@/components/actions";
import { ClockIcon, MapPinIcon } from "@/components/icons";
import MapBlock from "@/components/MapBlock";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { isReal } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Tesisimiz: Gölbaşı'nda Bahçeli Köpek Tesisi",
  description:
    "Barkyard Ankara'nın Gölbaşı Oğulbey'deki tesisi: açık bahçe, kapalı alan, konaklama alanları ve eğitim alanı. Tesisi görmek için randevu alın.",
  path: "/tesis/",
});

/**
 * TESİS GALERİSİ
 * "Tesisten kareler" yalnızca GERÇEK fotoğraflarla (lib/media.ts → availableImages) çizilir.
 * Stok görseller yalnızca aşağıdaki alan kartlarında, "Temsili görsel" etiketiyle kullanılır.
 */
const gallery = [
  { src: "/images/tesis/bahce-1.jpg", alt: "Açık bahçe ve koşu alanı" },
  { src: "/images/tesis/kapali-alan.jpg", alt: "Korunaklı kapalı alan" },
  { src: "/images/tesis/konaklama-1.jpg", alt: "Köpeklere ayrılmış konaklama alanı" },
  { src: "/images/tesis/egitim-alani.jpg", alt: "Eğitim alanı" },
  { src: "/images/tesis/dinlenme.jpg", alt: "Dinlenme bölümü" },
  { src: "/images/tesis/bahce-2.jpg", alt: "Bahçede oyun alanı" },
];

const areas = [
  {
    title: "Açık alan",
    alt: "Çimenlik bahçede vakit geçiren köpekler",
    text: "Köpeklerin gün içinde koşup oynayabildiği çimenlik bahçe. Gruplar köpeklerin boyuna, yaşına ve oyun tarzına göre ayrılır; gruba uyum sağlayamayan köpekler tek başına çıkarılır.",
    photo: "/images/tesis/bahce-1.jpg",
  },
  {
    title: "Kapalı alan",
    alt: "İç mekânda köpek kulübesi",
    text: "Yağmurlu, çok sıcak veya soğuk havalarda çalışma ve dinlenmenin sürdüğü korunaklı bölüm.",
    photo: "/images/tesis/kapali-alan.jpg",
  },
  {
    title: "Konaklama alanları",
    alt: "Yatağında uyuyan köpek",
    text: "Her köpeğin kendine ayrılmış bir alanı vardır. Ortak alan kullanımı köpeklerin birbirine uyumuna göre belirlenir.",
    photo: "/images/tesis/konaklama-1.jpg",
  },
  {
    title: "Eğitim alanı",
    alt: "Slalom direkleri arasında koşan köpek",
    text: "Dikkat dağıtıcıların kontrol edilebildiği ayrı bir çalışma alanı. Öğrenilen davranış, daha sonra kademeli olarak daha hareketli ortamlara taşınır.",
    photo: "/images/tesis/egitim-alani.jpg",
  },
  {
    title: "Dinlenme bölümleri",
    alt: "Minderli yatağında dinlenen köpek",
    text: "Oyun ve çalışmaların arasında köpeklerin sakinleştiği, gölgeli ve sessiz alanlar.",
    photo: "/images/tesis/dinlenme.jpg",
  },
];

export default function Page() {
  const photos = gallery.filter((g) => isReal(g.src));

  return (
    <>
      {/* BAŞLIK: büyük tesis fotoğrafı */}
      <section className="px-2 pt-3 sm:px-4 sm:pt-4" aria-labelledby="sayfa-baslik">
        <div className="mx-auto grid max-w-[1240px] gap-2 sm:gap-3 lg:grid-cols-12">
          <div className="flex flex-col justify-center rounded-[2rem] bg-sage-100 px-6 py-10 sm:px-10 sm:py-14 lg:col-span-6 lg:px-12">
            <Breadcrumbs items={[{ name: "Tesisimiz" }]} />
            <h1 id="sayfa-baslik" className="max-w-[16ch] text-[2.375rem] sm:text-[3.25rem]">
              Köpeğinizi bırakacağınız yeri önce görün
            </h1>
            <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.65] text-ink-700">
              Bir fotoğraf, köpeğin o alanda nasıl hareket ettiğini göstermez. Randevu alın, mümkünse köpeğinizle
              birlikte gelin ve tesisi yerinde gezin.
            </p>
            <p className="mt-5 flex items-start gap-2 text-[16px] text-ink-700">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
              {fullAddress}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton context="tesis ziyareti ve randevu" label="Ziyaret randevusu alın" source="tesis_hero" />
              <DirectionsLink
                source="tesis_hero"
                icon
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-forest-800 px-6 text-[16px] font-semibold text-forest-800 hover:bg-forest-800 hover:text-paper-50"
              >
                Yol tarifi alın
              </DirectionsLink>
            </div>
          </div>
          <Figure
            src="/images/tesis/tesis-dis-gorunum.jpg"
            alt="Barkyard Ankara tesis binası ve önündeki çimenlik bahçe"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            imgClassName="object-cover object-[50%_30%]"
            className="bk-enter aspect-[4/3] w-full rounded-[2rem] sm:aspect-[16/10] lg:col-span-6 lg:aspect-auto lg:min-h-[560px]"
          />
        </div>
      </section>

      {/* GALERİ — yalnızca gerçek fotoğraflar varsa */}
      {photos.length > 0 && (
        <Section tone="paper" labelledBy="galeri-baslik">
          <SectionHeading id="galeri-baslik" title="Tesisten kareler" />
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {photos.map((g) => (
              <li key={g.src}>
                <Figure src={g.src} alt={g.alt} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-square w-full rounded-[var(--radius-card)]" />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* ALANLAR */}
      <Section tone="white" labelledBy="alan-baslik">
        <SectionHeading
          id="alan-baslik"
          eyebrow="Tesiste neler var?"
          title="Açık alan, kapalı alan ve konaklama"
          lead="Ziyaretinizde bu alanların hepsini görebilirsiniz."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.title} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper-50">
              <Figure src={a.photo} alt={a.alt} sizes="(min-width: 1024px) 33vw, 50vw" className="aspect-[16/10] w-full" />
              <div className="p-6">
                <h3 className="text-[1.375rem]">{a.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-ink-700">{a.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* GÜVENLİK */}
      <section className="on-dark bg-forest-800 py-16 text-paper-50 sm:py-24" aria-labelledby="guvenlik-baslik">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading id="guvenlik-baslik" title="Bir sorun olduğunda ne yapıyoruz?" light />
          <div className="space-y-4 text-[18px] leading-relaxed text-paper-50/90">
            <p>
              Konaklamadan önce köpeğinizin veterinerinin ve acil durumda ulaşılacak kişinin bilgisini alırız. Bir
              sorun olduğunda önce sizi ararız.
            </p>
            <p>
              Size ulaşılamayan acil durumlarda köpeğinizin sağlığı önceliklidir; köpeğiniz gecikmeden veterinere
              götürülür ve yapılan her işlem size ayrıntılı olarak bildirilir.
            </p>
          </div>
        </Container>
      </section>

      {/* KONUM VE ZİYARET */}
      <Section tone="paper" labelledBy="konum-baslik">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="konum-baslik"
              eyebrow="Konum"
              title="Gelip görün"
              lead="Ziyaretler randevuyla yapılır; böylece size zaman ayırabiliriz ve tesisteki köpeklerin düzeni bozulmaz. Köpeğinizi de getirin, ortamı önceden tanıması ilk konaklamayı kolaylaştırır."
            />
            <address className="mt-6 text-[17px] leading-relaxed not-italic text-ink-900">{fullAddress}</address>
            <p className="mt-3 flex items-center gap-2 text-[16px] text-ink-700">
              <ClockIcon className="h-5 w-5 shrink-0 text-forest-700" />
              {site.hours.map((h) => `${h.days} ${h.time}`).join(", ")}
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)]">
            <MapBlock className="aspect-[4/3]" source="tesis_map" />
          </div>
        </div>
      </Section>

      <CtaBlock
        title="Tesis ziyareti için randevu alın"
        text="Size uygun günü yazın; ziyaretiniz için zaman ayıralım."
        context="tesis ziyareti ve randevu"
        source="tesis_closing"
      />

      <JsonLd data={breadcrumbSchema([{ name: "Tesisimiz", path: "/tesis/" }])} />
    </>
  );
}
