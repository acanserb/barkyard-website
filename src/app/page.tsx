import Link from "next/link";

import { site, fullAddress } from "@/config/site";
import { services } from "@/content/services";
import { homeFaq, howWeWork, whyPoints, facilityHighlights } from "@/content/home";
import { reviews } from "@/content/reviews";
import { Container, Figure, ButtonLink, MoreLabel, SectionHeading, CtaBlock } from "@/components/ui";
import { WhatsAppButton, DirectionsLink } from "@/components/actions";
import { CheckIcon, ClockIcon, MapPinIcon, ArrowIcon } from "@/components/icons";
import Faq from "@/components/Faq";
import { isReal } from "@/lib/media";

/**
 * ANA SAYFA
 * Bilgi mimarisi: Hero → Hizmetler → Neden Barkyard → Eğitmen → Tesis →
 * Süreç → (Yorumlar, yalnızca doğrulanmış yorum varsa) → SSS → Kapanış CTA.
 */

const serviceTints = ["bg-sage-100", "bg-sand-100", "bg-sand-100", "bg-sage-100"];

/** Tesis önizlemesindeki ek fotoğraflar (hero fotoğrafı dışında). Yalnızca GERÇEK tesis fotoğrafları çizilir; stok görsel burada kullanılmaz. */
const facilityPhotos = [
  { src: "/images/tesis/bahce-1.jpg", alt: "Tesisin açık bahçe ve koşu alanı" },
  { src: "/images/tesis/konaklama-1.jpg", alt: "Köpeklere ayrılmış konaklama alanı" },
  { src: "/images/tesis/egitim-alani.jpg", alt: "Eğitim çalışma alanı" },
];

export default function Page() {
  const extraPhotos = facilityPhotos.filter((p) => isReal(p.src));

  return (
    <>
      {/* HERO */}
      <section className="px-2 pt-3 sm:px-4 sm:pt-4" aria-labelledby="hero-baslik">
        <div className="mx-auto grid max-w-[1240px] gap-2 sm:gap-3 lg:grid-cols-12">
          <div className="flex flex-col justify-center rounded-[2rem] bg-sage-100 px-6 py-10 sm:px-10 sm:py-14 lg:col-span-7 lg:px-14 lg:py-16">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-[14px] font-semibold text-forest-800">
              <MapPinIcon className="h-4 w-4" />
              Gölbaşı, Ankara
            </p>
            <h1 id="hero-baslik" className="max-w-[15ch] text-[2.5rem] leading-[1.04] sm:text-[3.5rem] lg:text-[4rem]">
              Ankara&apos;da köpek eğitimi, oteli ve gündüz bakım
            </h1>
            <p className="mt-6 max-w-[48ch] text-[18px] leading-[1.6] text-ink-700 sm:text-[19px]">
              Gölbaşı&apos;ndaki tesisimizde köpeğinizin ihtiyaçlarına uygun eğitim, konaklama ve gündüz bakım
              programları sunuyoruz. Gelin, tesisimizi yerinde görün.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton context="hizmetleriniz" source="hero" />
              <ButtonLink href="/tesis/" variant="secondary">
                Tesisimizi Keşfedin
              </ButtonLink>
            </div>
          </div>

          <Figure
            src="/images/tesis/tesis-dis-gorunum.jpg"
            alt="Barkyard Ankara tesis binası ve önündeki çimenlik bahçe"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            imgClassName="object-cover object-[50%_30%]"
            className="bk-enter aspect-[4/3] w-full rounded-[2rem] sm:aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-[520px]"
          />

          {/* Hızlı bilgi şeridi */}
          <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3 lg:col-span-12">
            <li className="flex items-start gap-4 rounded-[1.5rem] bg-white px-6 py-5">
              <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-forest-700" />
              <div>
                <p className="text-[15px] text-ink-500">Çalışma saatleri</p>
                <p className="text-[18px] font-semibold">
                  {site.hours[0].days} {site.hours[0].time}
                </p>
                <p className="text-[15px] text-ink-700">Tesis ziyareti randevuyla</p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-[1.5rem] bg-white px-6 py-5">
              <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-forest-700" />
              <div>
                <p className="text-[15px] text-ink-500">Konum</p>
                <p className="text-[18px] font-semibold">Oğulbey, Gölbaşı</p>
                <DirectionsLink source="home_infobar" className="text-[15px] font-semibold text-forest-800 underline underline-offset-4">
                  Yol tarifi alın
                </DirectionsLink>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-[1.5rem] bg-white px-6 py-5">
              <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-forest-700" />
              <div>
                <p className="text-[15px] text-ink-500">Eğitmen</p>
                <p className="text-[18px] font-semibold">{site.trainerName}</p>
                <p className="text-[15px] text-ink-700">FCI Doberman, Schnauzer ve Rottweiler ırk hakemi</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className="py-16 sm:py-24" aria-labelledby="hizmetler-baslik">
        <Container>
          <SectionHeading
            id="hizmetler-baslik"
            eyebrow="Hizmetlerimiz"
            title="Köpeğinizin ihtiyacına göre dört hizmet"
            lead="Hangisinin uygun olduğundan emin değilseniz yazın; köpeğinizi dinledikten sonra birlikte karar verelim."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {services.map((s, i) => (
              <li key={s.slug} className="flex">
                <Link
                  href={`/${s.slug}/`}
                  className={`${serviceTints[i % 4]} group flex w-full flex-col overflow-hidden rounded-[2rem] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]`}
                >
                  <Figure
                    src={s.heroImage}
                    alt={s.heroImageAlt}
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="aspect-[16/9] w-full"
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-[1.625rem] sm:text-[1.875rem]">{s.cardTitle}</h3>
                    <p className="mt-3 flex-1 text-[17px] leading-[1.6] text-ink-700">{s.cardSummary}</p>
                    <MoreLabel>{s.cardTitle} hakkında</MoreLabel>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* NEDEN BARKYARD */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="neden-baslik">
        <Container>
          <SectionHeading id="neden-baslik" eyebrow="Neden Barkyard?" title="Nasıl çalıştığımızı baştan söylüyoruz" />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p) => (
              <li key={p.title} className="border-t-2 border-forest-800 pt-5">
                <h3 className="text-[1.375rem]">{p.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-ink-700">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* EĞİTMEN */}
      <section className="px-2 py-3 sm:px-4" aria-labelledby="egitmen-baslik">
        <div className="mx-auto grid max-w-[1240px] gap-2 sm:gap-3 lg:grid-cols-[0.85fr_1.15fr]">
          <Figure
            src="/images/ekip/emre-portre.jpg"
            alt="Eğitmen Emre Sönmez, Doberman'ıyla yan yana yürürken"
            sizes="(min-width: 1024px) 40vw, 100vw"
            imgClassName="object-cover object-top"
            className="aspect-[4/5] w-full rounded-[2rem] sm:aspect-[16/12] lg:aspect-auto lg:min-h-[560px]"
          />
          <div className="flex flex-col justify-center rounded-[2rem] bg-sand-100 px-6 py-10 sm:px-10 lg:px-14">
            <p className="mb-3 text-[15px] font-semibold text-clay-600">Eğitmenimiz</p>
            <h2 id="egitmen-baslik" className="text-[2rem] sm:text-[2.75rem]">
              {site.trainerName}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[18px] leading-[1.65] text-ink-700">
              Köpeklerle çalışmaya 2005&apos;te başladı. Yaklaşık 15 yıl boyunca hocası Tarkan Özvardar&apos;ın
              yanında, kendi Doberman&apos;larıyla eğitim çalışmaları yaptı.
            </p>
            <ul className="mt-6 space-y-3 text-[17px] text-ink-700">
              {[
                "FCI Doberman, Schnauzer ve Rottweiler ırk hakemi",
                "Doberman'larıyla Avrupa'da yaklaşık 19 ülkede şov ve karakter sınavlarına katıldı",
                "Köpekleriyle BH, IPO 1 ve ZTP gibi eğitim ve ırk sınavlarına girdi",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/hakkimizda/" variant="primary">
                Eğitmenimizi tanıyın
                <ArrowIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* TESİS ÖN İZLEME */}
      <section className="py-16 sm:py-24" aria-labelledby="tesis-baslik">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              {extraPhotos.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {extraPhotos.map((p) => (
                    <Figure key={p.src} src={p.src} alt={p.alt} sizes="25vw" className="aspect-square w-full rounded-[1.5rem]" />
                  ))}
                </div>
              ) : (
                // Ek tesis fotoğrafları gelene kadar: konum ve ziyaret bilgisi (hero fotoğrafı tekrar edilmez)
                <div className="rounded-[2rem] bg-sand-100 p-6 sm:p-10">
                  <p className="text-[15px] font-semibold text-clay-600">Ziyaret bilgisi</p>
                  <address className="mt-3 text-[18px] leading-relaxed not-italic text-ink-900">{fullAddress}</address>
                  <p className="mt-4 flex items-center gap-2 text-[17px] text-ink-700">
                    <ClockIcon className="h-5 w-5 shrink-0 text-forest-700" />
                    {site.hours[0].days} {site.hours[0].time}, randevuyla
                  </p>
                  <DirectionsLink
                    source="home_tesis"
                    icon
                    className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-[16px] font-semibold text-forest-800 hover:bg-paper-100"
                  >
                    Google Haritalar&apos;da yol tarifi
                  </DirectionsLink>
                </div>
              )}
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                id="tesis-baslik"
                eyebrow="Tesisimiz"
                title="Köpeğinizi bırakacağınız yeri önce görün"
                lead="Randevu alın, mümkünse köpeğinizle birlikte gelin. Kalacağı, oynayacağı ve çalışacağı alanları yerinde gezin."
              />
              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {facilityHighlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 rounded-2xl bg-sage-100 px-4 py-3 text-[16px] font-medium">
                    <CheckIcon className="h-5 w-5 shrink-0 text-forest-700" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/tesis/" variant="primary">
                  Tesisimizi keşfedin
                </ButtonLink>
                <WhatsAppButton context="tesis ziyareti ve randevu" label="Ziyaret randevusu alın" source="home_tesis" variant="secondary" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SÜREÇ */}
      <section className="bg-forest-800 py-16 text-paper-50 on-dark sm:py-24" aria-labelledby="surec-baslik">
        <Container>
          <SectionHeading id="surec-baslik" eyebrow="Süreç" title="Üç adımda başlıyoruz" light />
          <ol className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
            {howWeWork.map((step, i) => (
              <li key={step.title} className="rounded-[1.5rem] bg-forest-700 p-6 sm:p-8">
                {/* Sıra numarası liste tarafından zaten okunur; görsel numara ekran okuyucudan gizli */}
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sun-300 font-display text-[20px] font-bold text-forest-900"
                >
                  {i + 1}
                </span>
                <h3 className="mt-6 text-[1.5rem]">{step.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-paper-50/85">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* MÜŞTERİ YORUMLARI — yalnızca doğrulanmış ve izinli yorum varsa yayında */}
      {reviews.length > 0 && (
        <section className="py-16 sm:py-24" aria-labelledby="yorum-baslik">
          <Container>
            <SectionHeading id="yorum-baslik" eyebrow="Müşterilerimiz" title="Köpek sahipleri ne diyor?" />
            <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <li key={r.name + r.text.slice(0, 12)} className="rounded-[1.5rem] bg-white p-6 sm:p-8">
                  <blockquote className="text-[17px] leading-[1.6] text-ink-700">“{r.text}”</blockquote>
                  <p className="mt-5 text-[15px] font-semibold text-ink-900">
                    {r.name}
                    {r.dog ? ` · ${r.dog}` : ""} <span className="font-normal text-ink-500">· {r.service}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* SSS */}
      <section id="sss" className="py-16 sm:py-24" aria-labelledby="sss-baslik">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading id="sss-baslik" eyebrow="Sık sorulan sorular" title="Yazmadan önce merak edilenler" />
              <Link
                href="/sss/"
                className="mt-6 inline-flex items-center gap-2 text-[17px] font-semibold text-forest-800 underline underline-offset-4"
              >
                Tüm soruları görün
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <Faq items={homeFaq} />
          </div>
        </Container>
      </section>

      <CtaBlock
        title="Köpeğiniz için doğru program hangisi?"
        text="Köpeğinizin yaşını, ırkını ve ihtiyacınızı kısaca yazın. Size uygun seçeneği birlikte belirleyelim; tesis ziyareti için de randevu verelim."
        source="home_closing"
      />
    </>
  );
}
