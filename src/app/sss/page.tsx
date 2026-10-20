import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, PageHero, Section } from "@/components/ui";
import { services } from "@/content/services";
import { homeFaq } from "@/content/home";
import Faq, { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Barkyard Ankara hakkında sık sorulan sorular: aşı koşulları, konaklama düzeni, eğitim süreci ve tesis ziyareti.",
  alternates: { canonical: "/sss/" },
};

const allFaq = [...homeFaq, ...services.flatMap((s) => s.faq)];

export default function Page() {
  return (
    <>
      <PageHero title="Yazmadan önce cevabını bulun">
        <p className="mt-7 max-w-[52ch] text-[18px] leading-[1.65] text-ink-700 sm:text-[19px]">
          Aradığınız cevap burada yoksa WhatsApp&apos;tan yazın. Sorunuz bu listeye de eklenir.
        </p>
      </PageHero>

      <Section tone="paper">
        <h2 className="text-3xl sm:text-4xl">Genel</h2>
        <Faq items={homeFaq} className="mt-6" />
      </Section>

      {services.map((s, i) => (
        <Section key={s.slug} tone={i % 2 === 0 ? "white" : "paper"}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl">{s.cardTitle}</h2>
            <Link href={`/${s.slug}/`} className="border-b-2 border-accent-400 text-[16px] font-semibold text-ink-900">
              {s.navLabel} sayfası
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
