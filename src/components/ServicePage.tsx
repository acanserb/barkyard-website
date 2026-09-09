import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/config/site";
import type { Service } from "@/content/services";
import { services } from "@/content/services";
import {
  Container,
  CtaBlock,
  Eyebrow,
  Figure,
  H2,
  Lead,
  PhoneButton,
  Section,
  WhatsAppButton,
} from "@/components/ui";
import Faq, { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export function serviceMetadata(s: Service): Metadata {
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}/` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}/${s.slug}/`,
      type: "website",
    },
  };
}

export default function ServicePage({ service: s }: { service: Service }) {
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      {/* Başlık */}
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container className="py-14 sm:py-20">
          <nav aria-label="Sayfa yolu" className="mb-6 text-[13px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-700">{s.navLabel}</span>
          </nav>
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{s.title}</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">{s.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {s.primaryAction === "phone" ? (
              <>
                <PhoneButton
                  label={`Arayın: ${site.phoneDisplay}`}
                  source={`${s.slug}_hero`}
                  className="!bg-accent-400 !border-transparent hover:!bg-accent-500 hover:!text-ink-900"
                />
                <WhatsAppButton
                  context={s.whatsappContext}
                  label="WhatsApp'tan yazın"
                  source={`${s.slug}_hero`}
                  className="!bg-transparent !text-ink-900 border border-ink-900/20 hover:!bg-ink-900 hover:!text-cream-100"
                />
              </>
            ) : (
              <>
                <WhatsAppButton context={s.whatsappContext} source={`${s.slug}_hero`} />
                <PhoneButton source={`${s.slug}_hero`} />
              </>
            )}
          </div>
        </Container>
      </section>

      <Figure
        src={s.heroImage}
        alt={s.heroImageAlt}
        label={`${s.cardTitle} — geniş görsel`}
        sizes="100vw"
        priority
        className="h-[280px] w-full sm:h-[420px]"
      />

      {/* Kimler için */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Kimler için uygun</Eyebrow>
            <ul className="mt-5 space-y-3.5">
              {s.forWhom.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-ink-700">
                  <span className="mt-1.5 shrink-0 text-olive-600" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Bu program uygun değilse</Eyebrow>
            <ul className="mt-5 space-y-3.5">
              {s.notForWhom.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-ink-700">
                  <span className="mt-1.5 shrink-0 text-ink-500" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-500">
              Uygun olmadığımız durumu size söylemek, işimizin bir parçası. Yanlış programa
              yönlendirmek kimseye fayda sağlamaz.
            </p>
          </div>
        </div>
      </Section>

      {/* Program / gün akışı */}
      <Section tone="white">
        <Eyebrow>{s.programTitle}</Eyebrow>
        <H2>Ne yapıyoruz, tek tek</H2>
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {s.program.map((p, i) => (
            <div key={p.title} className="border-t-2 border-ink-900/12 pt-5">
              <span className="font-display text-[13px] font-semibold tracking-[0.16em] text-olive-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1.5 text-xl text-ink-900">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-700">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Süreç */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>{s.processTitle}</Eyebrow>
            <H2>Adım adım nasıl ilerliyor</H2>
            <Lead>
              Süreç boyunca ne olduğunu bilmeniz, bizim için köpeğin gelişimi kadar önemli.
            </Lead>
          </div>
          <ol className="space-y-6">
            {s.process.map((p, i) => (
              <li key={p.step} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/15 font-display text-[14px] font-semibold text-ink-900">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg text-ink-900">{p.step}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Koşullar + fiyat çerçevesi */}
      <Section tone="white">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Kabul koşulları</Eyebrow>
            <H2 className="!text-2xl">Gelmeden önce</H2>
            <ul className="mt-6 space-y-3">
              {s.conditions.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-cream-100 p-8">
            <Eyebrow>Ücretlendirme</Eyebrow>
            <H2 className="!text-2xl">Ücreti ne belirliyor</H2>
            <div className="mt-5 space-y-4">
              {s.pricingNote.map((p) => (
                <p key={p} className="text-[15px] leading-relaxed text-ink-700">{p}</p>
              ))}
            </div>
            <div className="mt-7">
              <WhatsAppButton
                context={s.whatsappContext}
                label="Fiyat bilgisi alın"
                source={`${s.slug}_pricing`}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SSS */}
      <Section tone="cream">
        <Eyebrow>Sık sorulanlar</Eyebrow>
        <H2>{s.navLabel} hakkında</H2>
        <Faq items={s.faq} className="mt-10" />
      </Section>

      {/* Diğer hizmetler */}
      <Section tone="white">
        <Eyebrow>Diğer hizmetler</Eyebrow>
        <H2 className="!text-2xl">Aradığınız bu değilse</H2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/${o.slug}/`}
              className="rounded-xl border border-ink-900/10 p-6 transition-colors hover:border-olive-600/40"
            >
              <h3 className="text-lg text-ink-900">{o.cardTitle}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-700">{o.cardSummary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBlock
        title={`${s.navLabel} için doğru yer miyiz?`}
        text="Köpeğinizi ve ihtiyacınızı yazın; uygun olup olmadığımızı dürüstçe söyleyelim."
        context={s.whatsappContext}
        source={`${s.slug}_closing`}
      />

      <JsonLd
        data={[
          serviceSchema(s.slug, s.cardTitle, s.metaDescription),
          faqSchema(s.faq),
          breadcrumbSchema([{ name: s.navLabel, path: `/${s.slug}/` }]),
        ]}
      />
    </>
  );
}
