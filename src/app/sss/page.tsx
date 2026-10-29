import Link from "next/link";
import { CtaBlock, PageHero, Section } from "@/components/ui";
import { services } from "@/content/services";
import { homeFaq } from "@/content/home";
import Faq, { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { ArrowIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "Köpek eğitimi, köpek oteli, gündüz bakım ve rehabilitasyon hakkında sık sorulan sorular: aşı koşulları, konaklama düzeni, eğitim süresi ve tesis ziyareti.",
  path: "/sss/",
});

const allFaq = [...homeFaq, ...services.flatMap((s) => s.faq)];

export default function Page() {
  return (
    <>
      <PageHero
        crumb="Sık Sorulan Sorular"
        title="Sık sorulan sorular"
        lead="Aradığınız cevabı burada bulamazsanız WhatsApp'tan yazın; sorunuzu yanıtlayalım."
      >
        <nav aria-label="Soru grupları" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {[{ id: "genel", label: "Genel" }, ...services.map((s) => ({ id: s.slug, label: s.cardTitle }))].map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-[15px] font-semibold text-forest-800 hover:bg-forest-800 hover:text-paper-50"
                >
                  {g.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <Section tone="paper" id="genel" labelledBy="genel-baslik">
        <h2 id="genel-baslik" className="text-[1.75rem] sm:text-[2.25rem]">
          Genel
        </h2>
        <Faq items={homeFaq} className="mt-6 max-w-4xl" />
      </Section>

      {services.map((s, i) => (
        <Section key={s.slug} id={s.slug} tone={i % 2 === 0 ? "white" : "paper"} labelledBy={`${s.slug}-baslik`}>
          <div className="flex max-w-4xl flex-wrap items-baseline justify-between gap-3">
            <h2 id={`${s.slug}-baslik`} className="text-[1.75rem] sm:text-[2.25rem]">
              {s.cardTitle}
            </h2>
            <Link href={`/${s.slug}/`} className="inline-flex items-center gap-2 text-[16px] font-semibold text-forest-800 underline underline-offset-4">
              {s.cardTitle} sayfası
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <Faq items={s.faq} className="mt-6 max-w-4xl" />
        </Section>
      ))}

      <CtaBlock
        title="Cevabını bulamadınız mı?"
        text="Sorunuzu WhatsApp'tan yazın ya da çalışma saatlerinde bizi arayın."
        context="hizmetleriniz"
        source="sss_closing"
      />

      <JsonLd data={[faqSchema(allFaq), breadcrumbSchema([{ name: "Sık Sorulan Sorular", path: "/sss/" }])]} />
    </>
  );
}
