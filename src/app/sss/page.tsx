import type { Metadata } from "next";
import Link from "next/link";
import { Container, CtaBlock, Eyebrow, Section } from "@/components/ui";
import { services } from "@/content/services";
import { homeFaq } from "@/content/home";
import Faq, { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Barkyard Ankara hakkında sık sorulan sorular: aşı koşulları, fiyatlandırma, konaklama düzeni, eğitim süreci ve tesis ziyareti.",
  alternates: { canonical: "/sss/" },
};

const allFaq = [...homeFaq, ...services.flatMap((s) => s.faq)];

export default function Page() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container className="py-14 sm:py-20">
          <Eyebrow>Sık sorulan sorular</Eyebrow>
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Yazmadan önce cevabını bulun
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
            Aradığınız cevap burada yoksa WhatsApp&apos;tan yazın — sorunuz bu listeye de eklenir.
          </p>
        </Container>
      </section>

      <Section tone="cream">
        <h2 className="text-2xl">Genel</h2>
        <Faq items={homeFaq} className="mt-6" />
      </Section>

      {services.map((s, i) => (
        <Section key={s.slug} tone={i % 2 === 0 ? "white" : "cream"}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl">{s.cardTitle}</h2>
            <Link href={`/${s.slug}/`} className="text-[14px] font-semibold text-olive-600 hover:underline">
              {s.navLabel} sayfası →
            </Link>
          </div>
          <Faq items={s.faq} className="mt-6" />
        </Section>
      ))}

      <CtaBlock
        title="Cevabını bulamadınız mı?"
        text="Sorunuzu yazın, kısa sürede dönelim."
        context="bir sorum var"
        source="sss_closing"
      />

      <JsonLd data={[faqSchema(allFaq), breadcrumbSchema([{ name: "Sık Sorulan Sorular", path: "/sss/" }])]} />
    </>
  );
}
