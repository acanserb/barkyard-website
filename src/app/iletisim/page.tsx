import type { Metadata } from "next";
import { site, fullAddress } from "@/config/site";
import { Container, PageHero, Section, WhatsAppButton } from "@/components/ui";
import { DirectionsTextLink, PhoneLink } from "@/components/ContactLinks";
import ContactForm from "@/components/ContactForm";
import MapBlock from "@/components/MapBlock";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "İletişim ve Ulaşım",
  description:
    "Barkyard Ankara iletişim bilgileri, adres, çalışma saatleri ve yol tarifi. WhatsApp, telefon veya form ile ulaşın.",
  alternates: { canonical: "/iletisim/" },
};

export default function Page() {
  return (
    <>
      <PageHero title="Bize ulaşın">
        <p className="mt-7 max-w-[52ch] text-[18px] leading-[1.65] text-ink-700 sm:text-[19px]">
          En hızlı yol WhatsApp. Köpeğinizi ve ihtiyacınızı kısaca yazın; size uygun olup
          olmadığımızı dürüstçe söyleyelim.
        </p>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Bilgiler */}
          <div>
            <div className="space-y-8">
              <div>
                <p className="font-display text-[20px] font-semibold text-ink-900">Telefon</p>
                <p className="mt-2 text-2xl">
                  <PhoneLink source="iletisim" className="hover:text-lawn-600" />
                </p>
              </div>

              <div>
                <p className="font-display text-[20px] font-semibold text-ink-900">WhatsApp</p>
                <div className="mt-3">
                  <WhatsAppButton context="hizmetleriniz" source="iletisim" />
                </div>
              </div>

              <div>
                <p className="font-display text-[20px] font-semibold text-ink-900">E-posta</p>
                <p className="mt-2 text-[16px]">
                  <a href={`mailto:${site.email}`} className="hover:text-lawn-600">
                    {site.email}
                  </a>
                </p>
              </div>

              <div>
                <p className="font-display text-[20px] font-semibold text-ink-900">Adres</p>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-700">{fullAddress}</p>
                <DirectionsTextLink className="mt-2 inline-block border-b-2 border-accent-400 text-[16px] font-semibold text-ink-900">
                  Yol tarifi alın
                </DirectionsTextLink>
              </div>

              <div>
                <p className="font-display text-[20px] font-semibold text-ink-900">Çalışma saatleri</p>
                <ul className="mt-2 space-y-1 text-[16px] text-ink-700">
                  {site.hours.map((h) => (
                    <li key={h.days}>
                      {h.days}: {h.time}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[15px] text-ink-500">
                  Tesis ziyaretleri randevuyla yapılır. Uygun günü önceden yazmanız yeterli.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border-2 border-ink-900/80 bg-white p-7 sm:p-9">
            <h2 className="text-2xl">Talep formu</h2>
            <p className="mt-2 mb-7 text-[15px] leading-relaxed text-ink-700">
              Dört alanı doldurun, gerisini biz soralım.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Harita */}
      <section className="bg-paper-50 pb-16 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-lg">
            <MapBlock className="min-h-[260px]" />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "İletişim", path: "/iletisim/" }])} />
    </>
  );
}
