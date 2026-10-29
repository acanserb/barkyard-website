import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/config/site";
import type { Service } from "@/content/services";
import { services } from "@/content/services";
import {
  Container,
  CtaBlock,
  Figure,
  H2,
  Lead,
  PhoneButton,
  Section,
  TextLink,
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
      <section className="relative overflow-hidden bg-sky-100">
        <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Sayfa yolu" className="mb-7 text-[15px] text-ink-500">
              <Link href="/" className="underline decoration-ink-900/30 underline-offset-4 hover:text-ink-900">Ana sayfa</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-ink-700">{s.navLabel}</span>
            </nav>
            <h1 className="text-[2.6rem] leading-[0.98] sm:text-6xl xl:text-7xl">{s.title}</h1>
            <p className="mt-7 max-w-[54ch] text-[18px] leading-[1.65] text-ink-700 sm:text-[19px]">{s.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {s.primaryAction === "phone" ? (
                <>
                  <PhoneButton
                    label={`Arayın: ${site.phoneDisplay}`}
                    source={`${s.slug}_hero`}
                    className="!border-transparent !bg-accent-400 hover:!bg-accent-300 hover:!text-ink-900"
                  />
                  <WhatsAppButton
                    context={s.whatsappContext}
                    label="WhatsApp'tan yazın"
                    source={`${s.slug}_hero`}
                    className="!border-2 !border-ink-900/80 !bg-transparent !text-ink-900 hover:!bg-ink-900 hover:!text-paper-50"
                  />
                </>
              ) : (
                <>
                  <WhatsAppButton context={s.whatsappContext} source={`${s.slug}_hero`} />
                  <PhoneButton source={`${s.slug}_hero`} />
                </>
              )}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="bk-arch absolute -right-4 -top-4 h-full w-full border-2 border-lawn-600/50 sm:-right-5 sm:-top-5"
            />
            <Figure
              src={s.heroImage}
              alt={s.heroImageAlt}
              label={`${s.cardTitle}, ana fotoğraf`}
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
              className="bk-arch aspect-[4/5] w-full"
            />
          </div>
        </Container>
      </section>

      {/* Kimler için */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Bu hizmet kimler için</h2>
            <ul className="mt-7 space-y-4">
              {s.forWhom.map((item) => (
                <li key={item} className="flex gap-3.5 text-[17px] leading-relaxed text-ink-700">
                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-lawn-600" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                    <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border-2 border-ink-900/80 bg-white p-7 sm:p-9">
            <h2 className="text-3xl sm:text-4xl">Bu hizmet kimler için değil</h2>
            <ul className="mt-7 space-y-4">
              {s.notForWhom.map((item) => (
                <li key={item} className="flex gap-3.5 text-[17px] leading-relaxed text-ink-700">
                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-brick-500" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[16px] leading-relaxed text-ink-500">
              Doğru yer olmadığımızda bunu açıkça söylemek işimizin bir parçası. Yanlış programa
              yönlendirmek kimseye fayda sağlamaz.
            </p>
          </div>
        </div>
      </Section>

      {/* Program / gün akışı */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <H2>{s.programTitle}</H2>
          <Lead className="!mt-0">Ne yaptığımızı tek tek yazıyoruz, bilmediğiniz bir kalem kalmasın.</Lead>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {s.program.map((p) => (
            <div key={p.title} className="border-t-2 border-ink-900/80 pt-5">
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-700">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Süreç: gerçek bir sıra */}
      <Section tone="sky">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <H2>{s.processTitle}</H2>
            <Lead>Süreç boyunca ne olduğunu bilmeniz, bizim için köpeğin gelişimi kadar önemli.</Lead>
          </div>
          <ol className="divide-y-2 divide-ink-900/80 border-y-2 border-ink-900/80">
            {s.process.map((p, i) => (
              <li key={p.step} className="grid gap-4 py-7 sm:grid-cols-[72px_1fr]">
                <span className="font-display text-5xl font-extrabold leading-none text-forest-800/35" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-2xl">{p.step}</h3>
                  <p className="mt-2.5 max-w-[56ch] text-[17px] leading-relaxed text-ink-700">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Koşullar + iletişim */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Gelmeden önce</h2>
            <ul className="mt-7 space-y-3.5">
              {s.conditions.map((c) => (
                <li key={c} className="flex gap-3.5 text-[17px] leading-relaxed text-ink-700">
                  <span aria-hidden="true" className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-lawn-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="on-dark rounded-lg bg-forest-800 p-8 text-paper-100 sm:p-10">
            <h2 className="text-3xl text-paper-50 sm:text-4xl">Yer ve tarih için yazın</h2>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-paper-200/90">
              Köpeğinizin yaşını, ırkını ve ihtiyacınızı yazmanız yeterli. Size doğru yer olup olmadığımızı
              ve en yakın tarihi aynı gün söyleriz.
            </p>
            <div className="mt-7">
              <WhatsAppButton
                context={s.whatsappContext}
                label="WhatsApp'tan yazın"
                source={`${s.slug}_info`}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SSS */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <H2>{s.navLabel} hakkında sık sorulanlar</H2>
          <Faq items={s.faq} />
        </div>
      </Section>

      {/* Diğer hizmetler */}
      <Section tone="paper">
        <h2 className="text-3xl sm:text-4xl">Aradığınız bu değilse</h2>
        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/${o.slug}/`} className="group border-t-2 border-ink-900/80 pt-5">
              <h3 className="text-2xl">{o.cardTitle}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{o.cardSummary}</p>
              <span className="mt-4 inline-block">
                <TextLink>Ayrıntılar</TextLink>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBlock
        title={`${s.navLabel} için doğru yer miyiz?`}
        text="Köpeğinizi ve ihtiyacınızı yazın; size doğru yer olup olmadığımızı dürüstçe söyleyelim."
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
