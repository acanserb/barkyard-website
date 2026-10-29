import { site } from "@/config/site";
import { CtaBlock, Figure, PageHero, Section, SectionHeading } from "@/components/ui";
import { CheckIcon, PlusIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hakkımızda ve Eğitmenimiz Emre Sönmez",
  description:
    "Barkyard Ankara 2026'da kuruldu; tesisteki çalışma anlayışı Köpek Koleji'nden geliyor. Eğitmenimiz Emre Sönmez'in mesleki geçmişi, FCI hakemliği ve yarışma sonuçları.",
  path: "/hakkimizda/",
});

/*
 * ⚠️ Bu sayfadaki biyografi, görev ve yarışma bilgileri işletmeden alınmıştır.
 * Yeni bir iddia eklemeden önce belgeyle doğrulayın.
 */

const principles = [
  {
    title: "Korkuyla öğretmeyiz",
    text: "Ödül ve yönlendirme temelli çalışırız. Kullandığımız her aracı ve neden kullandığımızı size açıkça anlatırız.",
  },
  {
    title: "Sahibi sürecin içindedir",
    text: "Köpek burada öğrendiklerini evde sürdüremezse eğitim kalıcı olmaz. Bu yüzden aktarım seansları ve yazılı ev planı her programın parçasıdır.",
  },
  {
    title: "Yapamayacağımızı söyleriz",
    text: "Her köpek için doğru yer olmayabiliriz. Böyle bir durumda bunu ilk görüşmede söyler, mümkünse doğru yere yönlendiririz.",
  },
  {
    title: "Garanti değil, plan veririz",
    text: "Özellikle davranış sorunlarında kesin sonuç ve süre vaat etmeyiz. Gerçekçi bir beklenti ve takip edilebilir bir plan sunarız.",
  },
  {
    title: "Tesisimiz gezilebilir",
    text: "Köpeğinizin kalacağı, çalışacağı ve dinleneceği alanları randevuyla gezebilirsiniz.",
  },
  {
    title: "Sormadan bilgi veririz",
    text: "Konaklama ve programlar sırasında durum bilgisini siz sormadan paylaşırız.",
  },
];

const results: [dog: string, year: string, result: string][] = [
  ["Eyez", "2007", "Türkiye'nin ilk BH sertifikalı Doberman'ı"],
  ["Frodo di Perlanera", "2011", "BH, IPO 1"],
  ["Cassy Crystal di Perlanera", "2013", "HDK National Breeding Test (Macaristan)"],
  ["Vando del Diamante Nero", "2014", "ZTP (İtalya)"],
  ["Faith von Bagira", "2014", "SKS"],
  ["Arlett von Bagira", "2014", "SKS"],
  ["Faith von Bagira", "2016", "AKS, ZTP (TMC), BH"],
  ["Hodor von Bagira", "2016", "SKS, ZTP (TMC)"],
  ["Hodor von Bagira", "2017", "BH"],
  ["Pride of Russia Status", "2017", "BH, IPO 1 (Rusya)"],
  ["Inka von Bagira", "2017", "BH"],
  ["Inka von Bagira", "2019", "BH"],
  ["Iron von Bagira", "2019", "SKS, BH"],
  ["Ike von Bagira", "2020", "BH, ZTP"],
];

const roles = [
  "FCI Doberman, Schnauzer ve Rottweiler ırk hakemliği",
  "Türkiye Doberman Irk Derneği kurucu üyeliği ve yönetim kurulu üyeliği",
  "Türkiye Köpek Irkları Federasyonu yedek yönetim kurulu üyeliği ve asil komisyon üyelikleri",
  "İş Köpekleri Derneği",
  "Türkiye'nin ilk resmî FCI şecereli Doberman'ları",
];

const gallery = [
  { src: "/images/ekip/emre-yarisma.jpg", alt: "Emre Sönmez ve Doberman'ı bir yarışmada hakem önünde yürürken" },
  { src: "/images/ekip/emre-sov-ringi.jpg", alt: "Bir Doberman'ın şov ringinde duruş sergilediği an" },
  { src: "/images/ekip/emre-sov-054.jpg", alt: "Emre Sönmez, Doberman'ıyla bir şov ringinde" },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumb="Hakkımızda"
        title="Yeni bir marka, köklü bir çalışma anlayışı"
        lead={
          <>
            Barkyard Ankara {site.foundedBrandYear} yılında kuruldu. Aynı tesiste daha önce yaklaşık otuz yıl
            boyunca Köpek Koleji adıyla eğitim ve bakım hizmeti verildi. Bugün bu anlayışı, eğitmenimiz{" "}
            {site.trainerName} ile Barkyard adı altında sürdürüyoruz.
          </>
        }
      />

      {/* EĞİTMEN */}
      <Section tone="paper" labelledBy="egitmen-baslik">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <Figure
            src="/images/ekip/emre-yuruyus.jpg"
            alt="Eğitmen Emre Sönmez, Doberman'ıyla bir yarışma alanında yürürken"
            sizes="(min-width: 1024px) 38vw, 100vw"
            imgClassName="object-cover object-top"
            className="bk-arch mx-auto aspect-[3/4] w-full max-w-[440px]"
          />
          <div>
            <p className="mb-3 text-[15px] font-semibold text-clay-600">Eğitmenimiz</p>
            <h2 id="egitmen-baslik" className="text-[2rem] sm:text-[2.75rem]">
              {site.trainerName}
            </h2>
            <div className="mt-6 max-w-[62ch] space-y-4 text-[18px] leading-[1.7] text-ink-700">
              <p>
                Köpeklerle çalışmaya 2005 yılında, henüz bir köpek sahibiyken başladı. Aynı dönemde tanıştığı
                Tarkan Özvardar&apos;ın yanında yaklaşık 15 yıl boyunca kendi Doberman&apos;larıyla eğitim
                çalışmaları yaptı.
              </p>
              <p>
                Doberman&apos;larıyla Avrupa&apos;da yaklaşık 19 ülkede şov ve karakter sınavlarına katıldı. Bugün FCI
                Doberman, Schnauzer ve Rottweiler ırk hakemi olarak görev yapıyor.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[var(--radius-card)] bg-white p-6">
                <h3 className="text-[1.25rem]">Mesleki görevler ve üyelikler</h3>
                <ul className="mt-4 space-y-3 text-[16px] leading-relaxed text-ink-700">
                  {roles.map((r) => (
                    <li key={r} className="flex gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-forest-700" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-card)] bg-white p-6">
                <h3 className="text-[1.25rem]">Eğitim</h3>
                <ul className="mt-4 space-y-3 text-[16px] leading-relaxed text-ink-700">
                  <li>TED Ankara Koleji (1989–2000)</li>
                  <li>Başkent Üniversitesi, Finansal Yönetim (2001–2006)</li>
                  <li>Yurt içi ve yurt dışından eğitmenlerin köpek eğitimi ve davranışı seminerleri</li>
                </ul>
              </div>
            </div>

            {/* Genişletilebilir ayrıntılı kariyer */}
            <details className="group mt-6 rounded-[var(--radius-card)] border border-ink-900/10 bg-white">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-[18px] font-semibold [&::-webkit-details-marker]:hidden">
                Emre Sönmez&apos;in kendi anlatımıyla
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest-800 transition-transform group-open:rotate-45">
                  <PlusIcon className="h-5 w-5" />
                </span>
              </summary>
              <div className="max-w-[64ch] space-y-4 px-6 pb-6 text-[17px] leading-[1.7] text-ink-700">
                <p>
                  Köpeklerle olan yolculuğum, 2005 yılında henüz yalnızca bir köpek sahibi olduğum ve bu alanda hiç
                  deneyimim olmadığı bir dönemde başladı. Bu yolculukta hocam ve dostum Tarkan Özvardar ile tanışmam
                  hayatımda önemli bir dönüm noktası oldu.
                </p>
                <p>
                  Zamanla dostluğumuz güçlü bir hoca-öğrenci ilişkisine dönüştü. Yaklaşık 15 yıl boyunca onlarca
                  Doberman&apos;ımla onunla eğitim çalışmaları yaptım ve bilgi birikiminden yararlandım. Bugün
                  köpeklerle yürüttüğüm çalışmaların temelinde bu birikim var.
                </p>
                <p>
                  Tarkan Özvardar&apos;ın yaklaşık otuz yıl boyunca Köpek Koleji adıyla sunduğu hizmetleri, aynı
                  tesiste ve aynı anlayışla bugün Barkyard adı altında sürdürüyoruz. Ondan öğrendiklerimi geleceğe
                  taşımayı önemli bir sorumluluk olarak görüyorum.
                </p>
                <p>
                  On altı yıl boyunca Doberman&apos;larımla Avrupa&apos;nın yaklaşık 19 ülkesinde düzenlenen onlarca
                  köpek şovuna ve karakter sınavına katıldım. 2013 yılında KIF tescilli Doberman&apos;ımla dünya
                  şampiyonu olmak, kariyerimin en önemli başarılarından biri.
                </p>
                <p>
                  Doberman&apos;ın özünde bir iş köpeği olduğunu bildiğim için şov yıllarında da eğitim çalışmalarını
                  bırakmadım ve köpeklerimle çeşitli eğitim sınavlarına katıldım. Köpek eğitimi ve davranışı
                  alanında kendimi geliştirmek için yerli ve yabancı eğitmenlerin onlarca seminerine ve atölyesine
                  katıldım.
                </p>
              </div>
            </details>
          </div>
        </div>
      </Section>

      {/* YARIŞMALAR */}
      <Section tone="white" labelledBy="yarisma-baslik">
        <SectionHeading
          id="yarisma-baslik"
          title="Yarışma ve eğitim sınavı sonuçları"
          lead="Emre Sönmez'in köpekleriyle girdiği eğitim (BH, IPO) ve ırk/karakter (ZTP, SKS, AKS) sınavlarından seçilmiş sonuçlar."
        />

        {/* Masaüstü: tablo */}
        <div className="mt-10 hidden overflow-hidden rounded-[var(--radius-card)] border border-ink-900/10 md:block">
          <table className="w-full text-left text-[16px]">
            <caption className="sr-only">Yıllara göre köpek, yıl ve sınav sonucu</caption>
            <thead className="bg-sage-100 text-ink-900">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-semibold">Köpek</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Yıl</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Sonuç</th>
              </tr>
            </thead>
            <tbody className="text-ink-700">
              {results.map(([dog, year, result], i) => (
                <tr key={`${dog}-${year}-${i}`} className="border-t border-ink-900/10 even:bg-paper-50">
                  <th scope="row" className="px-5 py-3 font-semibold text-ink-900">{dog}</th>
                  <td className="px-5 py-3 tabular-nums">{year}</td>
                  <td className="px-5 py-3">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobil: kart listesi (yatay kaydırma yok) */}
        <ul className="mt-8 divide-y divide-ink-900/10 overflow-hidden rounded-[var(--radius-card)] border border-ink-900/10 md:hidden">
          {results.map(([dog, year, result], i) => (
            <li key={`${dog}-${year}-${i}`} className="px-4 py-3.5">
              <p className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-ink-900">{dog}</span>
                <span className="shrink-0 text-[15px] tabular-nums text-ink-500">{year}</span>
              </p>
              <p className="mt-0.5 text-[16px] text-ink-700">{result}</p>
            </li>
          ))}
        </ul>

        {/* Fotoğraf galerisi */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {gallery.map((g) => (
            <li key={g.src}>
              <Figure src={g.src} alt={g.alt} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[3/2] w-full rounded-[var(--radius-card)]" />
            </li>
          ))}
        </ul>
      </Section>

      {/* EĞİTİM YAKLAŞIMI */}
      <Section tone="paper" labelledBy="ilke-baslik">
        <SectionHeading
          id="ilke-baslik"
          title="Eğitim yaklaşımımız"
          lead="Her köpekte uyguladığımız çalışma kuralları. Bunlara uymadığımızı düşünürseniz lütfen bize söyleyin."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="border-t-2 border-forest-800 pt-5">
              <h3 className="text-[1.375rem]">{p.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-700">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        title="Tesisi görmek için randevu alın"
        text="Köpeğinizle birlikte gelin; tesisi gezin, eğitmenle tanışın ve sorularınızı sorun."
        context="tesis ziyareti ve randevu"
        source="hakkimizda_closing"
      />

      <JsonLd data={breadcrumbSchema([{ name: "Hakkımızda", path: "/hakkimizda/" }])} />
    </>
  );
}
