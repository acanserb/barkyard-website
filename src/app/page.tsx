import Link from "next/link";

import { site, telLink, whatsappLink } from "@/config/site";
import { services } from "@/content/services";
import { homeFaq, howWeWork, facilityHighlights } from "@/content/home";
import { Figure } from "@/components/ui";
import { faqSchema } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";

/**
 * ANA SAYFA — yumuşak, pastel, kutu düzeni (bento).
 */

const card = "rounded-[2rem] p-7 sm:p-9";
const pill =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[16px] font-semibold transition-colors duration-150";
const pillDark = `${pill} bg-[#1e2a24] text-white hover:bg-[#2f5d46]`;
const pillLight = `${pill} bg-white text-[#1e2a24] hover:bg-[#1e2a24] hover:text-white`;

const tints = [
  { bg: "bg-[#dde8d3]", name: "sage" },
  { bg: "bg-[#fbefb5]", name: "butter" },
  { bg: "bg-[#d6e6f2]", name: "powder" },
  { bg: "bg-[#f7d9cb]", name: "blush" },
];

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-[1180px] px-3 pb-6 pt-6 sm:px-6">
        {/* AÇILIŞ: kutu düzeni */}
        <section className="grid gap-3 sm:gap-4 lg:grid-cols-12">
          <div className={`${card} bg-[#dde8d3] lg:col-span-7 lg:row-span-2 lg:p-12`}>
            <h1 className="max-w-[14ch] text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.035em]">
              Köpeğiniz için bahçeli bir ikinci ev.
            </h1>
            <p className="mt-6 max-w-[46ch] text-[20px] leading-[1.55] text-[#1e2a24]/85">
              Ankara Gölbaşı&apos;nda eğitim, otel, gündüz bakım ve davranış rehabilitasyonu. Her adımı
              size anlatırız.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink("hizmetleriniz")} target="_blank" rel="noopener noreferrer" className={pillDark}>
                WhatsApp&apos;tan yazın
              </a>
              <a href="#tesis" className={pillLight}>
                Tesisi görün
              </a>
            </div>
          </div>

          <Figure
            src="/images/tesis/tesis-dis-gorunum.jpg"
            alt="Barkyard Ankara tesisi ve bahçesi"
            label="Tesis dış görünüm"
            priority
            sizes="(min-width: 1024px) 40vw, 95vw"
            className="aspect-[4/5] w-full rounded-[2rem] sm:aspect-[16/11] lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[420px]"
          />

          <div className={`${card} bg-[#fbefb5] lg:col-span-4`}>
            <p className="text-[16px] font-medium text-[#1e2a24]/70">Çalışma saatleri</p>
            <p className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.02em]">
              {site.hours[0].days}, {site.hours[0].time}
            </p>
            <p className="mt-2 text-[16px] text-[#1e2a24]/75">Tesis ziyaretleri randevuyla.</p>
          </div>

          <div className={`${card} bg-[#d6e6f2] lg:col-span-4`}>
            <p className="text-[16px] font-medium text-[#1e2a24]/70">Eğitmen</p>
            <p className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.02em]">{site.trainerName}</p>
            <p className="mt-2 text-[16px] text-[#1e2a24]/75">FCI Doberman, Schnauzer ve Rottweiler ırk hakemi.</p>
          </div>

          <div className={`${card} bg-[#f7d9cb] lg:col-span-4`}>
            <p className="text-[16px] font-medium text-[#1e2a24]/70">Konum</p>
            <p className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.02em]">Gölbaşı, Ankara</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[16px] font-semibold underline underline-offset-4"
            >
              Yol tarifi alın
            </a>
          </div>
        </section>

        {/* HİZMETLER */}
        <section id="hizmetler" className="scroll-mt-28 pt-20 sm:pt-28">
          <h2 className="max-w-[18ch] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            Köpeğinizin ihtiyacı hangisiyse
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className={`${tints[i % 4].bg} group flex flex-col rounded-[2rem] p-3 transition-transform duration-200 hover:-translate-y-1`}
              >
                <Figure
                  src={s.heroImage}
                  alt={s.heroImageAlt}
                  label={`${s.cardTitle}, fotoğraf`}
                  sizes="(min-width: 640px) 45vw, 95vw"
                  className="aspect-[16/10] w-full rounded-[1.5rem]"
                />
                <div className="flex flex-1 flex-col px-4 pb-4 pt-6 sm:px-5">
                  <h3 className="text-[28px] font-bold leading-tight tracking-[-0.03em]">{s.cardTitle}</h3>
                  <p className="mt-3 flex-1 text-[17px] leading-[1.55] text-[#1e2a24]/80">{s.cardSummary}</p>
                  <span className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold group-hover:bg-[#1e2a24] group-hover:text-white">
                    Ayrıntılar
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TESİS */}
        <section id="tesis" className="scroll-mt-28 pt-20 sm:pt-28">
          <div className="rounded-[2.5rem] bg-[#1e2a24] p-7 text-white sm:p-12">
            <h2 className="max-w-[18ch] text-[clamp(2.2rem,5.5vw,4.6rem)] font-bold leading-[1] tracking-[-0.035em]">
              Köpeğinizi bırakacağınız yeri görmeden karar vermeyin.
            </h2>
            <p className="mt-6 max-w-[50ch] text-[19px] leading-[1.6] text-white/80">
              Randevu alın, köpeğinizle birlikte gelin, kalacağı alanı görün, soru sorun. Göstermekten
              çekindiğimiz hiçbir köşe yok.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Figure
                src="/images/tesis/tesis-dis-gorunum.jpg"
                alt="Barkyard Ankara tesisi dış görünüm"
                label="Tesis dış görünüm"
                sizes="(min-width: 768px) 45vw, 95vw"
                className="col-span-2 row-span-2 aspect-square w-full rounded-[1.75rem]"
              />
              <Figure
                src="/images/tesis/bahce-1.jpg"
                alt="Açık bahçe alanı"
                label="Açık bahçe"
                sizes="25vw"
                className="aspect-square w-full rounded-[1.75rem]"
              />
              <Figure
                src="/images/tesis/konaklama-1.jpg"
                alt="Konaklama bölmesi"
                label="Konaklama"
                sizes="25vw"
                className="aspect-square w-full rounded-[1.75rem]"
              />
              <Figure
                src="/images/tesis/egitim-alani.jpg"
                alt="Eğitim çalışma alanı"
                label="Eğitim alanı"
                sizes="45vw"
                className="col-span-2 aspect-[2/1] w-full rounded-[1.75rem]"
              />
            </div>

            <ul className="mt-10 grid gap-3 md:grid-cols-2">
              {facilityHighlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-2xl bg-white/8 px-5 py-4 text-[16px] leading-[1.5] text-white/90">
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#fbefb5]" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SÜREÇ */}
        <section id="surec" className="scroll-mt-28 pt-20 sm:pt-28">
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            Üç adım, sürpriz yok
          </h2>
          <ol className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
            {howWeWork.map((step, i) => (
              <li key={step.title} className={`${card} ${tints[(i + 1) % 4].bg}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[20px] font-bold" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-[24px] font-bold leading-tight tracking-[-0.025em]">{step.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.55] text-[#1e2a24]/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* EĞİTMEN */}
        <section className="pt-3 sm:pt-4">
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={`${card} bg-[#d6e6f2] lg:p-12`}>
              <h2 className="max-w-[16ch] text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
                Marka yeni, hizmet yeni değil
              </h2>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.6] text-[#1e2a24]/85">
                Yaklaşık otuz yıl Köpek Koleji çatısı altında sunulan hizmeti, aynı tesiste ve aynı
                anlayışla Barkyard adıyla sürdürüyoruz. Eğitmenimiz {site.trainerName}, Doberman&apos;larıyla
                Avrupa&apos;nın 19 ülkesinde yarıştı. Gelin, tesisi gezin, kendisiyle konuşun, köpeğinizle
                bir seans yapın. Kararı ondan sonra verin.
              </p>
              <div className="mt-8">
                <Link href="/hakkimizda/" className={pillDark}>
                  Eğitmenimizi tanıyın
                </Link>
              </div>
            </div>
            <Figure
              src="/images/ekip/emre-portre.jpg"
              alt="Eğitmen Emre Sönmez, Doberman'ıyla bir yarışmada"
              label="Eğitmen portresi"
              sizes="(min-width: 1024px) 40vw, 95vw"
              className="aspect-[4/5] w-full rounded-[2rem] lg:aspect-auto lg:min-h-[420px]"
            />
          </div>
        </section>

        {/* SSS */}
        <section id="sss" className="scroll-mt-28 pt-20 sm:pt-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="max-w-[14ch] text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.035em]">
              Yazmadan önce merak ettikleriniz
            </h2>
            <div className="space-y-3">
              {homeFaq.map((f) => (
                <details key={f.q} className="group rounded-[1.5rem] bg-white px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dde8d3] text-[22px] leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[60ch] text-[17px] leading-[1.6] text-[#1e2a24]/80">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* KAPANIŞ: örnek mesaj balonu */}
        <section className="pt-20 sm:pt-28">
          <div className="grid items-center gap-10 rounded-[2.5rem] bg-[#dde8d3] p-7 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="max-w-[14ch] text-[clamp(2.2rem,5.5vw,4.4rem)] font-bold leading-[1] tracking-[-0.035em]">
                Doğru yer miyiz? Yazın.
              </h2>
              <p className="mt-5 max-w-[46ch] text-[19px] leading-[1.55] text-[#1e2a24]/85">
                Doğru yer olup olmadığımızı dürüstçe söyleriz. Doğru yer olmadığımızı düşünürsek bunu da açıkça söyleriz.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("hizmetleriniz")} target="_blank" rel="noopener noreferrer" className={pillDark}>
                  WhatsApp&apos;tan yazın
                </a>
                <a href={telLink} className={pillLight}>
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="space-y-3" aria-hidden="true">
              <p className="text-[15px] font-medium text-[#1e2a24]/60">Örnek bir mesaj</p>
              <div className="ml-auto w-fit max-w-[90%] rounded-[1.5rem] rounded-br-md bg-white px-5 py-3.5 text-[17px] leading-[1.45]">
                Merhaba, 2 yaşında bir köpeğim var. Hafta sonu için otelinizde yer var mı?
              </div>
              <div className="w-fit max-w-[90%] rounded-[1.5rem] rounded-bl-md bg-[#1e2a24] px-5 py-3.5 text-[17px] leading-[1.45] text-white">
                Merhaba! Tarihleri ve köpeğinizin cinsini yazın, aynı gün size dönelim.
              </div>
            </div>
          </div>
        </section>
      </div>

      <JsonLd data={faqSchema(homeFaq)} />
    </>
  );
}
