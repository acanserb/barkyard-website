import Link from "next/link";
import type { Metadata } from "next";

import { site, fullAddress } from "@/config/site";
import { services } from "@/content/services";
import { reviews } from "@/content/reviews";
import {
  Container,
  CtaBlock,
  Eyebrow,
  Figure,
  GhostButton,
  H2,
  Lead,
  Section,
  WhatsAppButton,
} from "@/components/ui";
import { DirectionsTextLink } from "@/components/ContactLinks";
import HeroBackground from "@/components/HeroBackground";
import Faq, { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { homeFaq, trustPoints, howWeWork, facilityHighlights } from "@/content/home";

export const metadata: Metadata = {
  title: "Köpek Eğitimi ve Köpek Oteli Ankara | Barkyard Ankara",
  description:
    "Ankara'da köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu. Bahçeli tesis, şeffaf süreç. Tesisi görün, WhatsApp'tan yazın.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <HeroBackground
          src="/images/tesis/tesis-dis-gorunum.jpg"
          alt="Barkyard Ankara tesisi ve bahçesi"
        />
        <Container className="py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-400">
              Ankara · {site.tagline}
            </p>
            <h1 className="text-4xl leading-[1.08] text-cream-50 sm:text-5xl lg:text-[3.5rem]">
              Köpeğiniz için eğitim, konaklama ve gündüz bakımı — tek bir tesiste
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-200/85">
              Ankara&apos;da bahçeli tesisimizde köpek eğitimi, otel, gündüz bakım ve davranış
              rehabilitasyonu. {site.trainerSinceYear} yılından bu yana köpeklerle çalışan bir
              eğitmenin kurduğu, her adımını size açıkça anlatan bir merkez.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton context="hizmetleriniz" source="hero" />
              <Link
                href="#hizmetler"
                className="inline-flex items-center justify-center rounded-full border border-cream-100/30 px-7 py-3.5 text-[15px] font-semibold text-cream-100 transition-colors hover:bg-cream-100 hover:text-ink-900"
              >
                Hizmetleri inceleyin
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 — GÜVEN ŞERİDİ */}
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container>
          <ul className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t) => (
              <li key={t.title}>
                <p className="font-display text-[17px] font-semibold text-ink-900">{t.title}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-700">{t.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3 — HİZMETLER */}
      <Section id="hizmetler" tone="cream">
        <Eyebrow>Hizmetler</Eyebrow>
        <H2>Köpeğinizin ihtiyacı hangisiyse</H2>
        <Lead>
          Dört ayrı hizmet, dört ayrı çalışma biçimi. Hangisinin size uygun olduğundan emin
          değilseniz yazın — uygun olmayanı da söyleriz.
        </Lead>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white transition-colors hover:border-olive-600/40"
            >
              <Figure
                src={s.heroImage}
                alt={s.heroImageAlt}
                label={`${s.cardTitle} — hizmet fotoğrafı`}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10] w-full"
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl text-ink-900">{s.cardTitle}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{s.cardSummary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-olive-600">
                  Ayrıntılar
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4 — TESİS */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <Eyebrow>Tesisimiz</Eyebrow>
            <H2>Köpeğinizi bırakacağınız yeri görmeden karar vermeyin</H2>
            <Lead>
              Bu, en çok önem verdiğimiz kural. Randevu alın, tesisi gezin, kalacağı alanı görün,
              soru sorun. Göstermekten çekindiğimiz hiçbir köşe yok.
            </Lead>
            <ul className="mt-7 space-y-3">
              {facilityHighlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-400" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <GhostButton href="/tesis/">Tesisi inceleyin</GhostButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Figure
              src="/images/tesis/tesis-dis-gorunum.jpg"
              alt="Barkyard Ankara tesisi dış görünüm"
              label="Tesis dış görünüm"
              sizes="(min-width: 1024px) 30vw, 50vw"
              className="col-span-2 aspect-[16/9] rounded-2xl"
            />
            <Figure src="/images/tesis/bahce-1.jpg" alt="Açık bahçe alanı" label="Açık bahçe / koşu alanı" className="aspect-square rounded-2xl" />
            <Figure src="/images/tesis/konaklama-1.jpg" alt="Konaklama bölmesi" label="Konaklama bölmesi" className="aspect-square rounded-2xl" />
          </div>
        </div>
      </Section>

      {/* 5 — NASIL ÇALIŞIYORUZ */}
      <Section tone="cream">
        <Eyebrow>Nasıl çalışıyoruz</Eyebrow>
        <H2>Üç adım, sürpriz yok</H2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {howWeWork.map((step, i) => (
            <div key={step.title} className="border-t-2 border-ink-900/12 pt-6">
              <span className="font-display text-[13px] font-semibold tracking-[0.16em] text-olive-600">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-xl text-ink-900">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6 — YORUMLAR (yalnızca gerçek yorum girildiğinde görünür) */}
      {reviews.length > 0 ? (
        <Section tone="white">
          <Eyebrow>Müşterilerimiz</Eyebrow>
          <H2>Bize köpeğini emanet edenler</H2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-ink-900/10 bg-cream-50 p-7">
                <blockquote className="text-[15px] leading-relaxed text-ink-700">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[14px] font-semibold text-ink-900">
                  {r.name}
                  {r.dog && <span className="font-normal text-ink-500"> · {r.dog}</span>}
                  <span className="block text-[12px] font-normal uppercase tracking-[0.12em] text-olive-600">
                    {r.service}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : (
        <Section tone="white">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <Eyebrow>Eğitmen</Eyebrow>
              <H2>Markamız yeni, deneyimimiz değil</H2>
              <Lead>
                Barkyard yeni kurulmuş bir merkez ve bunu saklamıyoruz. Ancak burada çalışan
                eğitmen {site.trainerSinceYear} yılından bu yana köpeklerle çalışıyor. Yeni bir
                markaya güvenmenizi istemiyoruz — gelin, tesisi gezin, eğitmenle konuşun,
                köpeğinizle bir seans yapın. Kararınızı ondan sonra verin.
              </Lead>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <GhostButton href="/hakkimizda/">Eğitmenimizi tanıyın</GhostButton>
              </div>
            </div>
            <Figure
              src="/images/ekip/egitmen.jpg"
              alt="Barkyard Ankara eğitmeni"
              label="Eğitmen portresi — köpekle çalışırken, doğal ışık"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] rounded-2xl"
            />
          </div>
        </Section>
      )}

      {/* 7 — KONUM */}
      <Section tone="olive">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow light>Konum ve ulaşım</Eyebrow>
            <H2 className="text-cream-50">Şehrin gürültüsünden uzakta, bilerek</H2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-cream-200/85">
              Köpeklerin gerçekten koşabileceği bir alan, şehir merkezinde mümkün değil. Tesisimiz
              bu yüzden geniş bahçeli bir yerleşkede. Yolu birkaç dakika uzun, karşılığı köpeğiniz
              için gün boyu açık alan.
            </p>
            <p className="mt-6 text-[15px] text-cream-200/70">{fullAddress}</p>
            <div className="mt-7">
              <DirectionsTextLink className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 text-[15px] font-semibold text-ink-900 transition-colors hover:bg-accent-500">
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
              <div className="bk-placeholder flex aspect-[4/3] items-center justify-center border border-dashed border-cream-100/30">
                <span className="px-6 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500">
                  Google Haritalar embed — site.ts içindeki mapsEmbedUrl doldurulunca görünür
                </span>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* 8 — SSS */}
      <Section tone="cream">
        <Eyebrow>Sık sorulanlar</Eyebrow>
        <H2>Yazmadan önce merak ettikleriniz</H2>
        <Faq items={homeFaq} className="mt-10" />
        <div className="mt-9">
          <GhostButton href="/sss/">Tüm soruları görün</GhostButton>
        </div>
      </Section>

      {/* 9 — KAPANIŞ */}
      <CtaBlock source="home_closing" />

      <JsonLd data={faqSchema(homeFaq)} />
    </>
  );
}
