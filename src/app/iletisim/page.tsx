import { site, fullAddress } from "@/config/site";
import { Container, PageHero, Section } from "@/components/ui";
import { DirectionsLink, PhoneLink, WhatsAppButton } from "@/components/actions";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import ContactForm from "@/components/ContactForm";
import MapBlock from "@/components/MapBlock";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "İletişim ve Yol Tarifi",
  description:
    "Barkyard Ankara iletişim bilgileri: telefon, WhatsApp, e-posta, Gölbaşı Oğulbey adresi ve çalışma saatleri. Tesis ziyareti için randevu alın.",
  path: "/iletisim/",
});

const rowCls = "flex gap-4 rounded-[var(--radius-card)] bg-white p-5 sm:p-6";
const iconCls = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest-800";

export default function Page() {
  return (
    <>
      <PageHero
        crumb="İletişim"
        title="Bize ulaşın"
        lead="Bize ulaşmanın en hızlı yolu WhatsApp. Köpeğinizi ve ihtiyacınızı kısaca yazın; size uygun bir program olup olmadığını açıkça söyleyelim."
      />

      <Section tone="paper" labelledBy="form-baslik">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Bilgiler */}
          <div>
            <h2 className="sr-only">İletişim bilgileri</h2>
            <ul className="space-y-3">
              <li className={rowCls}>
                <span className={iconCls}><WhatsAppIcon className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="mt-0.5 text-[16px] text-ink-700">Köpeğinizi ve ihtiyacınızı kısaca yazın.</p>
                  <WhatsAppButton source="iletisim" label="WhatsApp'tan yazın" className="mt-3" />
                </div>
              </li>
              <li className={rowCls}>
                <span className={iconCls}><PhoneIcon className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <PhoneLink source="iletisim" className="mt-0.5 inline-block text-[22px] font-semibold text-forest-800 underline-offset-4 hover:underline" />
                </div>
              </li>
              <li className={rowCls}>
                <span className={iconCls}><MailIcon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="font-semibold">E-posta</p>
                  <a href={`mailto:${site.email}`} className="mt-0.5 inline-block break-all text-[17px] text-forest-800 underline underline-offset-4">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className={rowCls}>
                <span className={iconCls}><MapPinIcon className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">Adres</p>
                  <address className="mt-0.5 text-[16px] leading-relaxed not-italic text-ink-700">{fullAddress}</address>
                  <DirectionsLink source="iletisim" className="mt-2 inline-block text-[16px] font-semibold text-forest-800 underline underline-offset-4">
                    Yol tarifi alın
                  </DirectionsLink>
                </div>
              </li>
              <li className={rowCls}>
                <span className={iconCls}><ClockIcon className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">Çalışma saatleri</p>
                  {site.hours.map((h) => (
                    <p key={h.days} className="mt-0.5 text-[16px] text-ink-700">
                      {h.days} {h.time}
                    </p>
                  ))}
                  <p className="mt-1 text-[15px] text-ink-500">Tesis ziyaretleri randevuyla yapılır.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-[var(--radius-card-lg)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-9">
            <h2 id="form-baslik" className="text-[1.75rem] sm:text-[2rem]">
              Bilgi talep formu
            </h2>
            <p className="mb-6 mt-2 text-[16px] leading-relaxed text-ink-700">
              Formu doldurun; bilgileriniz düzenli bir WhatsApp mesajına dönüşsün, siz de tek dokunuşla gönderin.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Harita */}
      <section className="bg-paper-50 pb-16 sm:pb-24" aria-label="Konum">
        <Container>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)]">
            <MapBlock className="min-h-[280px]" source="iletisim_map" />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "İletişim", path: "/iletisim/" }])} />
    </>
  );
}
