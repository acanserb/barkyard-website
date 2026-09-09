import type { Metadata } from "next";
import { site, fullAddress } from "@/config/site";
import { Container, Eyebrow, Section, WhatsAppButton } from "@/components/ui";
import { DirectionsTextLink, PhoneLink } from "@/components/ContactLinks";
import ContactForm from "@/components/ContactForm";
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
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container className="py-14 sm:py-20">
          <Eyebrow>İletişim</Eyebrow>
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">Bize ulaşın</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
            En hızlı yol WhatsApp. Köpeğinizi ve ihtiyacınızı kısaca yazın; size uygun olup
            olmadığımızı dürüstçe söyleyelim.
          </p>
        </Container>
      </section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Bilgiler */}
          <div>
            <div className="space-y-8">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-olive-600">Telefon</p>
                <p className="mt-2 text-2xl">
                  <PhoneLink source="iletisim" className="hover:text-olive-600" />
                </p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-olive-600">WhatsApp</p>
                <div className="mt-3">
                  <WhatsAppButton context="hizmetleriniz" source="iletisim" />
                </div>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-olive-600">E-posta</p>
                <p className="mt-2 text-[16px]">
                  <a href={`mailto:${site.email}`} className="hover:text-olive-600">
                    {site.email}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-olive-600">Adres</p>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-700">{fullAddress}</p>
                <DirectionsTextLink className="mt-2 inline-block text-[15px] font-semibold text-olive-600 hover:underline">
                  Yol tarifi alın →
                </DirectionsTextLink>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-olive-600">Çalışma saatleri</p>
                <ul className="mt-2 space-y-1 text-[16px] text-ink-700">
                  {site.hours.map((h) => (
                    <li key={h.days}>
                      {h.days}: {h.time}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[14px] text-ink-500">
                  Tesis ziyaretleri randevuyla yapılır. Uygun günü önceden yazmanız yeterli.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-ink-900/10 bg-white p-7 sm:p-9">
            <h2 className="text-2xl">Talep formu</h2>
            <p className="mt-2 mb-7 text-[15px] leading-relaxed text-ink-700">
              Dört alanı doldurun, gerisini biz soralım.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Harita */}
      <section className="bg-cream-100">
        {site.mapsEmbedUrl ? (
          <iframe
            src={site.mapsEmbedUrl}
            title="Barkyard Ankara konumu"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border-0 sm:h-[460px]"
          />
        ) : (
          <div className="bk-placeholder flex h-[380px] items-center justify-center sm:h-[460px]">
            <span className="px-6 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500">
              Google Haritalar embed — site.ts içindeki mapsEmbedUrl doldurulunca görünür
            </span>
          </div>
        )}
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "İletişim", path: "/iletisim/" }])} />
    </>
  );
}
