import type { Metadata } from "next";
import { site } from "@/config/site";
import { CtaBlock, Figure, H2, Lead, PageHero, Section } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Barkyard Ankara nasıl çalışıyor, eğitmenimiz Emre Sönmez kimdir ve hangi ilkelerle köpeklerle çalışıyoruz. Köpek Koleji'nden devralınan otuz yıllık bir çalışma anlayışı ve eğitmenimiz Emre Sönmez.",
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
    text: "Her köpek için doğru yer değiliz. Böyle bir durumda bunu ilk görüşmede söyler, mümkünse doğru yere yönlendiririz.",
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

const results = [
  ["Eyez", "2007", "Türkiye’nin ilk BH sertifikalı Dobermanı"],
  ["Frodo di Perlanera", "2011", "BH, IPO 1"],
  ["Cassy Crystal di Perlanera", "2013", "HDK National Breeding Test – Macaristan"],
  ["Vando del Diamante Nero", "2014", "ZTP – İtalya"],
  ["Faith von Bagira", "2014", "SKS"],
  ["Arlett von Bagira", "2014", "SKS"],
  ["Faith von Bagira", "2016", "AKS, ZTP (TMC), BH"],
  ["Hodor von Bagira", "2016", "SKS, ZTP (TMC)"],
  ["Hodor von Bagira", "2017", "BH"],
  ["Pride of Russia Status", "2017", "BH, IPO 1 – Rusya"],
  ["Inka von Bagira", "2017", "BH"],
  ["Inka von Bagira", "2019", "BH"],
  ["Iron von Bagira", "2019", "SKS, BH"],
  ["Ike von Bagira", "2020", "BH, ZTP"],
];

const roles = [
  "İş Köpekleri Derneği",
  "Türkiye’nin ilk resmî FCI şecereli Dobermanları",
  "Türkiye Doberman Irk Derneği kurucu üyeliği ve yönetim kurulu üyeliği",
  "Türkiye Köpek Irkları Federasyonu: Yedek Yönetim Kurulu Üyeliği ve asil komisyon üyelikleri",
  "FCI Doberman, Schnauzer ve Rottweiler ırk hakemliği",
];

export default function Page() {
  return (
    <>
      <PageHero title={<>Yeni bir marka, otuz yıllık bir çalışma anlayışı</>}>
        <p className="mt-7 max-w-[56ch] text-[18px] leading-[1.65] text-ink-700 sm:text-[19px]">
          Barkyard Ankara {site.foundedBrandYear} yılında kuruldu. Ancak burada sunulan hizmet yeni
          değil: yaklaşık otuz yıl Köpek Koleji çatısı altında verilen eğitim ve bakım, aynı tesiste,
          aynı anlayış ve sistemle Barkyard adıyla sürüyor.
        </p>
      </PageHero>

      {/* Eğitmen */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Figure
            src="/images/ekip/emre-yuruyus.jpg"
            alt="Emre Sönmez, Doberman'ıyla bir yarışma sırasında"
            label="Eğitmen portresi"
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="bk-arch aspect-[2/3] w-full max-w-[460px]"
          />
          <div>
            <H2>{site.trainerName}</H2>
            <p className="mt-3 text-[18px] font-semibold text-lawn-600">
              Köpek eğitimi, Doberman ırkı, FCI hakemliği
            </p>
            <div className="mt-7 max-w-[62ch] space-y-5 text-[18px] leading-[1.7] text-ink-700">
              <p>
                Köpeklerle olan yolculuğum, 2005 yılında henüz yalnızca bir pet sahibi olduğum ve bu
                alanda hiçbir tecrübeye sahip olmadığım dönemde başladı. Bu yolculukta hocam ve dostum
                Tarkan Özvardar ile tanışmam hayatımda önemli bir dönüm noktası oldu.
              </p>
              <p>
                Zaman içinde gelişen dostluğumuz, güçlü bir hoca-öğrenci ilişkisine dönüştü. Yaklaşık
                15 yıl boyunca onlarca Doberman&apos;ımla birlikte onunla eğitim çalışmaları yaptım, engin
                bilgi ve tecrübesinden yararlandım. Bu süreçte edindiğim birikim, bugün köpeklerle
                yürüttüğüm çalışmaların temelini oluşturuyor.
              </p>
              <p>
                Tarkan Özvardar&apos;ın yaklaşık otuz yıl boyunca Köpek Koleji çatısı altında sunduğu
                hizmetleri, aynı tesiste, aynı anlayış ve sistemle bugün Barkyard markası altında
                sürdürüyoruz. Ondan öğrendiklerimi, mesleki mirasına duyduğum saygıyla geleceğe taşımayı
                önemli bir sorumluluk olarak görüyorum.
              </p>
              <p>
                Köpek eğitimi ve davranışları alanındaki bilgimi geliştirmek için yıllar içinde yerli ve
                yabancı eğitmenlerin düzenlediği onlarca seminere ve workshop&apos;a katıldım. Farklı eğitim
                yaklaşımlarını tanımayı ve yeni şeyler öğrenmeyi önemsiyorum.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Yarışma */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <H2>Uluslararası yarışma deneyimi</H2>
            <div className="mt-7 max-w-[62ch] space-y-5 text-[18px] leading-[1.7] text-ink-700">
              <p>
                On altı yıl boyunca Doberman&apos;larımla Avrupa&apos;nın yaklaşık 19 farklı ülkesinde
                düzenlenen onlarca dog show ve karakter sınavına katıldım, uluslararası platformda
                önemli dereceler aldım. 2013 yılında KIF tescilli Doberman&apos;ımla dünya şampiyonu
                olmak, kariyerimin en önemli başarılarından biri.
              </p>
              <p>
                Doberman&apos;ın özünde bir iş köpeği olduğunu bilerek, şov yıllarında da hocam Tarkan
                Özvardar&apos;ın rehberliğinde köpeklerimle çalışmayı sürdürdüm. Şov çalışmalarının
                yanında eğitim çalışmalarına devam ettim ve köpeklerimle çeşitli eğitim sınavlarına
                katıldım.
              </p>
              <p>
                Barkyard&apos;da da eğitim, konaklama ve rehabilitasyonu bir bütün olarak ele alıyoruz.
                Her köpeğin kendine özgü ihtiyaçlarını; bireysel farklılıklarını, davranış özelliklerini
                ve yaşam koşullarını dikkate alarak çalışıyoruz.
              </p>
            </div>
          </div>
          <Figure
            src="/images/ekip/emre-yarisma.jpg"
            alt="Emre Sönmez ve Doberman'ı bir yarışmada hakem önünde"
            label="Yarışma fotoğrafı"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[3/2] w-full rounded-lg"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Figure
            src="/images/ekip/emre-sov-ringi.jpg"
            alt="Doberman şov ringinde duruş sergilerken"
            label="Şov ringi"
            sizes="(min-width: 640px) 45vw, 100vw"
            className="aspect-[3/2] w-full rounded-lg"
          />
          <Figure
            src="/images/ekip/emre-sov-054.jpg"
            alt="Emre Sönmez Doberman'ıyla bir şov ringinde"
            label="Şov ringi"
            sizes="(min-width: 640px) 45vw, 100vw"
            className="aspect-[3/2] w-full rounded-lg"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-2xl text-ink-900">Mesleki görevlerim</h3>
            <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-ink-700">
              {roles.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                  {r}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-2xl text-ink-900">Eğitim</h3>
            <ul className="mt-5 space-y-2 text-[17px] text-ink-700">
              <li>1989–2000: TED Ankara Koleji</li>
              <li>2001–2006: Başkent Üniversitesi, Finansal Yönetim</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl text-ink-900">Yarışma ve eğitim sınavı sonuçları</h3>
            <div className="mt-5 overflow-hidden rounded-2xl bg-paper-100">
              <table className="w-full text-left text-[16px]">
                <thead className="bg-paper-200 text-ink-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Köpek</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Yıl</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Sonuç</th>
                  </tr>
                </thead>
                <tbody className="text-ink-700">
                  {results.map(([dog, year, result], i) => (
                    <tr key={`${dog}-${year}-${i}`} className="border-t border-ink-900/10">
                      <th scope="row" className="px-4 py-3 font-medium text-ink-900">{dog}</th>
                      <td className="px-4 py-3">{year}</td>
                      <td className="px-4 py-3">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* İlkeler */}
      <Section tone="paper">
        <H2>Altı ilke</H2>
        <Lead>
          Bunlar pazarlama cümlesi değil; her köpekte uyguladığımız çalışma kuralları. Uymadığımızı
          düşünürseniz söyleyin.
        </Lead>
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="border-t-2 border-ink-900/80 pt-5">
              <h3 className="text-2xl text-ink-900">{p.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-700">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Neden yeni bir marka */}
      <Section tone="forest">
        <div className="max-w-3xl">
          <H2 className="text-paper-50 sm:!text-6xl">Marka yeni. Peki neden güvenesiniz?</H2>
          <p className="mt-6 text-[19px] leading-relaxed text-paper-200/90">
            Güvenmenizi istemiyoruz, kontrol etmenizi istiyoruz. Tesisi gezin, kalacağı alanı görün,
            eğitmenle konuşun, köpeğinizle bir seans yapın, sorularınızın nasıl cevaplandığına bakın.
            Köpeğinizi emanet etme kararı bir web sitesine değil, gördüklerinize dayanmalı.
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
