import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/config/site";
import type { Service } from "@/content/services";
import { services } from "@/content/services";
import { Breadcrumbs, Container, CtaBlock, Figure, MoreLabel, Section, SectionHeading } from "@/components/ui";
import { PhoneButton, WhatsAppButton, TrackView } from "@/components/actions";
import { CheckIcon, InfoIcon, ClockIcon, MapPinIcon, ArrowIcon } from "@/components/icons";
import Faq, { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { hasImage } from "@/lib/media";

export function serviceMetadata(s: Service): Metadata {
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}/` });
}

export default function ServicePage({ service: s }: { service: Service }) {
  const others = services.filter((x) => x.slug !== s.slug);
  const phoneFirst = s.primaryAction === "phone";
  const photo = hasImage(s.heroImage);

  return (
    <>
      <TrackView event="service_page_view" params={{ service: s.slug }} />

      {/* BAŞLIK */}
      <section className="bg-sage-100" aria-labelledby="sayfa-baslik">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <Breadcrumbs items={[{ name: s.cardTitle }]} />
            <h1 id="sayfa-baslik" className="max-w-[18ch] text-[2.375rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              {s.title}
            </h1>
            <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.65] text-ink-700 sm:text-[19px]">{s.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {phoneFirst ? (
                <>
                  <PhoneButton variant="primary" label={`Arayın: ${site.phoneDisplay}`} source={`${s.slug}_hero`} />
                  <WhatsAppButton context={s.whatsappContext} label="WhatsApp'tan yazın" source={`${s.slug}_hero`} variant="secondary" />
                </>
              ) : (
                <>
                  <WhatsAppButton context={s.whatsappContext} source={`${s.slug}_hero`} />
                  <PhoneButton source={`${s.slug}_hero`} />
                </>
              )}
            </div>
            {phoneFirst && (
              <p className="mt-5 flex max-w-[52ch] items-start gap-2.5 text-[16px] text-ink-700">
                <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
                Bu hizmette ilk adım kısa bir telefon görüşmesidir. Çalışma saatlerimiz: {site.hours[0].days}{" "}
                {site.hours[0].time}.
              </p>
            )}
          </div>
          {photo ? (
            <Figure
              src={s.heroImage}
              alt={s.heroImageAlt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              className="bk-arch mx-auto aspect-[4/5] w-full max-w-[460px] lg:max-w-none"
            />
          ) : (
            // Görsel yoksa: kısa bilgi kartı
            <aside aria-label="Kısa bilgi" className="rounded-[var(--radius-card-lg)] bg-white p-6 sm:p-8">
              <dl className="space-y-5 text-[16px]">
                <div className="flex gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
                  <div>
                    <dt className="text-ink-500">Yer</dt>
                    <dd className="font-semibold">Barkyard tesisi, Oğulbey / Gölbaşı</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
                  <div>
                    <dt className="text-ink-500">Çalışma saatleri</dt>
                    <dd className="font-semibold">
                      {site.hours[0].days} {site.hours[0].time}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
                  <div>
                    <dt className="text-ink-500">İlk adım</dt>
                    <dd className="font-semibold">{phoneFirst ? "Kısa bir telefon görüşmesi" : "WhatsApp'tan ön görüşme"}</dd>
                  </div>
                </div>
              </dl>
              <Link
                href="/tesis/"
                className="mt-6 inline-flex items-center gap-2 border-t border-ink-900/10 pt-5 text-[16px] font-semibold text-forest-800 underline-offset-4 hover:underline"
              >
                Tesisi randevuyla gezin
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </aside>
          )}
        </Container>
      </section>

      {/* KİMLER İÇİN */}
      <Section tone="paper" labelledBy="uygun-baslik">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[var(--radius-card-lg)] bg-white p-6 sm:p-9">
            <h2 id="uygun-baslik" className="text-[1.75rem] sm:text-[2.125rem]">
              Bu hizmet kimler için uygun?
            </h2>
            <ul className="mt-6 space-y-4">
              {s.forWhom.map((item) => (
                <li key={item} className="flex gap-3.5 text-[17px] leading-relaxed text-ink-700">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card-lg)] bg-sand-100 p-6 sm:p-9">
            <h2 className="text-[1.75rem] sm:text-[2.125rem]">Hangi durumlarda uygun olmayabilir?</h2>
            <ul className="mt-6 space-y-4">
              {s.notForWhom.map((item) => (
                <li key={item} className="flex gap-3.5 text-[17px] leading-relaxed text-ink-700">
                  <InfoIcon className="mt-1 h-5 w-5 shrink-0 text-clay-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-700">
              Size uygun bir program sunamayacaksak bunu ilk görüşmede söyler, mümkünse doğru yere yönlendiririz.
            </p>
          </div>
        </div>
      </Section>

      {/* PROGRAM / GÜNLÜK RUTİN */}
      <Section tone="white" labelledBy="program-baslik">
        <SectionHeading id="program-baslik" title={s.programTitle} lead={s.programLead} />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {s.program.map((p) => (
            <li key={p.title} className="border-t-2 border-forest-800 pt-5">
              <h3 className="text-[1.375rem]">{p.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-700">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ÖRNEK GÜNLÜK AKIŞ (zaman çizelgesi) */}
      {s.schedule && (
        <Section tone="sand" labelledBy="akis-baslik">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              id="akis-baslik"
              title="Örnek bir gün"
              lead="Saatler yaklaşık değerlerdir; köpeğin enerjisine, gruba ve havaya göre değişebilir."
            />
            <ol className="relative space-y-0">
              {s.schedule.map((item, i) => (
                <li key={item.time} className="relative grid grid-cols-[72px_1fr] gap-4 pb-7 last:pb-0">
                  {/* Dikey çizgi */}
                  {i < s.schedule!.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[35px] top-10 h-[calc(100%-2.5rem)] w-0.5 bg-forest-800/20" />
                  )}
                  <span className="flex h-10 items-center justify-center rounded-full bg-forest-800 text-[15px] font-semibold tabular-nums text-paper-50">
                    <span className="sr-only">Saat </span>
                    {item.time}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-[1.25rem]">{item.title}</h3>
                    <p className="mt-1 text-[16px] text-ink-700">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {/* HİZMETE ÖZEL VURGULAR */}
      <Section tone={s.schedule ? "paper" : "sage"} labelledBy="vurgu-baslik">
        <SectionHeading id="vurgu-baslik" title={s.highlightsTitle} />
        <ul className={`mt-10 grid gap-3 sm:gap-4 ${s.highlights.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {s.highlights.map((h) => (
            <li key={h.title} className="rounded-[var(--radius-card)] bg-white p-6 sm:p-8">
              <h3 className="text-[1.375rem]">{h.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-700">{h.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* SÜREÇ */}
      <section className="on-dark bg-forest-800 py-16 text-paper-50 sm:py-24" aria-labelledby="surec-baslik">
        <Container>
          <SectionHeading id="surec-baslik" title={s.processTitle} light />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <li key={p.step} className="rounded-[var(--radius-card)] bg-forest-700 p-6">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sun-300 font-display text-[18px] font-bold text-forest-900"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[1.375rem]">{p.step}</h3>
                <p className="mt-2.5 text-[16px] leading-relaxed text-paper-50/85">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* KOŞULLAR + İLETİŞİM */}
      <Section tone="paper" labelledBy="kosul-baslik">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-1 sm:p-2">
            <h2 id="kosul-baslik" className="text-[1.75rem] sm:text-[2.125rem]">
              Gelmeden önce
            </h2>
            <ul className="mt-6 space-y-3.5">
              {s.conditions.map((c) => (
                <li key={c} className="flex gap-3.5 text-[17px] leading-relaxed text-ink-700">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card-lg)] bg-sage-100 p-6 sm:p-9">
            <h2 className="text-[1.75rem] sm:text-[2.125rem]">{s.contactTitle}</h2>
            <p className="mt-4 max-w-[48ch] text-[17px] leading-relaxed text-ink-700">{s.contactText}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {phoneFirst ? (
                <PhoneButton variant="primary" label={`Arayın: ${site.phoneDisplay}`} source={`${s.slug}_info`} />
              ) : (
                <WhatsAppButton context={s.whatsappContext} label="WhatsApp'tan yazın" source={`${s.slug}_info`} />
              )}
            </div>
            <p className="mt-4 flex items-center gap-2 text-[15px] text-ink-700">
              <ClockIcon className="h-5 w-5 shrink-0 text-forest-700" />
              {site.hours[0].days} {site.hours[0].time}
            </p>
          </div>
        </div>
      </Section>

      {/* SSS */}
      <Section tone="white" labelledBy="sss-baslik">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading id="sss-baslik" title={`${s.cardTitle} hakkında sık sorulanlar`} />
            <Link href="/sss/" className="mt-6 inline-block text-[17px] font-semibold text-forest-800 underline underline-offset-4">
              Tüm sorular
            </Link>
          </div>
          <Faq items={s.faq} />
        </div>
      </Section>

      {/* DİĞER HİZMETLER */}
      <Section tone="paper" labelledBy="diger-baslik">
        <SectionHeading id="diger-baslik" title="Diğer hizmetlerimiz" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {others.map((o) => (
            <li key={o.slug} className="flex">
              <Link
                href={`/${o.slug}/`}
                className="group flex w-full flex-col rounded-[var(--radius-card)] bg-white p-6 transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <h3 className="text-[1.375rem]">{o.cardTitle}</h3>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-ink-700">{o.cardSummary}</p>
                <MoreLabel />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        title={phoneFirst ? "Durumu telefonda konuşalım" : `${s.cardTitle} için doğru yer miyiz?`}
        text={
          phoneFirst
            ? "Köpeğinizin davranışını kısaca anlatın. Değerlendirme için uygun bir zaman planlayalım."
            : "Köpeğinizi ve ihtiyacınızı yazın. Size uygun bir program olup olmadığını açıkça söyleyelim."
        }
        context={s.whatsappContext}
        source={`${s.slug}_closing`}
        primary={s.primaryAction}
      />

      <JsonLd
        data={[
          serviceSchema(s.slug, s.cardTitle, s.metaDescription),
          faqSchema(s.faq),
          breadcrumbSchema([{ name: s.cardTitle, path: `/${s.slug}/` }]),
        ]}
      />
    </>
  );
}
