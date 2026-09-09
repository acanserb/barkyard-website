import type { Metadata } from "next";
import { site } from "@/config/site";
import { Container, CtaBlock, Eyebrow, Figure, H2, Lead, Section } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Barkyard Ankara nasıl kuruldu, nasıl çalışıyoruz ve hangi ilkelerle köpeklerle çalışıyoruz. Yeni bir marka, 2009'dan gelen bir eğitmen deneyimi.",
  alternates: { canonical: "/hakkimizda/" },
};

const principles = [
  {
    title: "Köpeğe korku ile öğretmeyiz",
    text: "Ödül ve yönlendirme temelli çalışıyoruz. Kullandığımız her aracın ne olduğunu ve neden kullanıldığını size açıkça anlatırız. Anlatılmayan yöntem, güvenilmeyecek yöntemdir.",
  },
  {
    title: "Sahibi sürecin dışında bırakılmaz",
    text: "Köpek burada öğrendiğini evde sürdüremezse eğitim kalıcı olmaz. Bu yüzden aktarım seansları ve yazılı ev planı her programın parçası.",
  },
  {
    title: "Yapamayacağımızı söyleriz",
    text: "Her köpek için doğru yer değiliz. Uygun olmadığımız bir durumda bunu ilk görüşmede söyler, mümkünse doğru yere yönlendiririz.",
  },
  {
    title: "Garanti vermeyiz, plan veririz",
    text: "Özellikle davranış problemlerinde kesin sonuç ve süre vaat eden yaklaşımlara temkinli yaklaşın. Biz gerçekçi bir beklenti ve takip edilebilir bir plan veririz.",
  },
  {
    title: "Kapalı kapı yok",
    text: "Tesisin her yerini gezebilirsiniz. Köpeğinizin kalacağı, çalışacağı, uyuyacağı alanı görmeden karar vermenizi beklemiyoruz.",
  },
  {
    title: "Sormadan bilgi veririz",
    text: "Konaklama ve programlar sırasında durum bilgisini siz merak edip yazmadan paylaşırız.",
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container className="py-14 sm:py-20">
          <Eyebrow>Hakkımızda</Eyebrow>
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Yeni bir marka, {new Date().getFullYear() - site.trainerSinceYear} yıllık bir eğitmen
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
            Barkyard Ankara {site.foundedBrandYear} yılında kuruldu. Bunu saklamıyoruz — çünkü
            güveni marka yaşıyla değil, gösterdiklerimizle kurmayı tercih ediyoruz. Burada çalışan
            eğitmen {site.trainerSinceYear} yılından bu yana köpeklerle çalışıyor ve Barkyard, o
            deneyimin kendi tesisinde sürdüğü yer.
          </p>
        </Container>
      </section>

      {/* Eğitmen */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Figure
            src="/images/ekip/egitmen.jpg"
            alt="Barkyard Ankara kurucu eğitmeni"
            label="Kurucu eğitmen portresi — köpekle çalışırken"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/5] rounded-2xl"
          />
          <div>
            <Eyebrow>Kurucu eğitmen</Eyebrow>
            {/* TODO: Eğitmenin adı, geçmişi, sertifikaları ve yaklaşımı buraya yazılacak. */}
            <H2>TODO: Eğitmen adı</H2>
            <Lead>
              TODO: Eğitmenin kısa hikâyesi — bu işe nasıl başladığı, hangi köpeklerle çalıştığı,
              hangi eğitimlerden geçtiği. Abartısız, birinci ağızdan ve somut yazılmalı. Doğrulanamayan
              hiçbir iddia (ödül, rakam, unvan) eklenmemeli.
            </Lead>
            <ul className="mt-7 space-y-2.5 text-[15px] text-ink-700">
              <li>• {site.trainerSinceYear} yılından bu yana köpeklerle çalışıyor</li>
              <li>• TODO: Sertifika / eğitim bilgileri</li>
              <li>• TODO: Uzmanlaştığı alan (davranış, itaat, rehabilitasyon vb.)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* İlkeler */}
      <Section tone="white">
        <Eyebrow>Nasıl çalışıyoruz</Eyebrow>
        <H2>Altı ilke</H2>
        <Lead>
          Bunlar pazarlama cümlesi değil; her köpekte uyguladığımız çalışma kuralları. Uymadığımızı
          düşünürseniz söyleyin.
        </Lead>
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="border-t-2 border-ink-900/12 pt-5">
              <h3 className="text-xl text-ink-900">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-700">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Neden yeni bir marka */}
      <Section tone="olive">
        <div className="max-w-3xl">
          <Eyebrow light>Dürüst olmak gerekirse</Eyebrow>
          <H2 className="text-cream-50">Neden yeni bir markaya güvenesiniz?</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-cream-200/85">
            Güvenmenizi istemiyoruz. Kontrol etmenizi istiyoruz. Tesisi gezin, kalacağı alanı görün,
            eğitmenle konuşun, köpeğinizle bir seans yapın, sorularınızın nasıl cevaplandığına bakın.
            Köpeğinizi emanet etme kararı, bir web sitesine değil gördüklerinize dayanmalı — burada
            yazan her şeyin amacı sizi o ziyarete ikna etmek.
          </p>
        </div>
      </Section>

      <CtaBlock
        title="Tesisi görmek için randevu alın"
        text="Köpeğinizle birlikte gelin. Gezin, sorun, karar verin."
        context="tesis ziyareti ve randevu"
        source="hakkimizda_closing"
      />

      <JsonLd data={breadcrumbSchema([{ name: "Hakkımızda", path: "/hakkimizda/" }])} />
    </>
  );
}
