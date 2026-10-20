import Link from "next/link";
import Image from "next/image";
import { site, fullAddress } from "@/config/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui";
import { PhoneLink, DirectionsTextLink } from "@/components/ContactLinks";

const linkCls = "hover:text-accent-400";

export default function Footer() {
  return (
    <footer className="on-dark mx-3 mb-3 mt-6 rounded-[2.5rem] bg-forest-800 text-paper-200/80 sm:mx-6">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/marka/barkyard-mark.svg"
              alt=""
              width={42}
              height={45}
              className="mb-4 h-[42px] w-auto brightness-0 invert opacity-90"
            />
            <p className="font-display text-[26px] font-extrabold tracking-[0.06em] text-paper-50">BARKYARD</p>
            <p className="mt-1 text-[15px] font-semibold text-accent-400">Ankara, {site.tagline.replaceAll(" · ", " / ")}</p>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
              Ankara&apos;da köpek eğitimi, konaklama, gündüz bakım ve davranış rehabilitasyonu.
            </p>
          </div>

          <nav aria-label="Hizmetler">
            <p className="mb-4 font-display text-[18px] font-semibold text-paper-50">Hizmetler</p>
            <ul className="space-y-2.5 text-[15px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className={linkCls}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Kurumsal">
            <p className="mb-4 font-display text-[18px] font-semibold text-paper-50">Kurumsal</p>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link href="/hakkimizda/" className={linkCls}>Hakkımızda</Link></li>
              <li><Link href="/tesis/" className={linkCls}>Tesisimiz</Link></li>
              <li><Link href="/sss/" className={linkCls}>Sık Sorulan Sorular</Link></li>
              <li><Link href="/iletisim/" className={linkCls}>İletişim</Link></li>
              <li><Link href="/kvkk/" className={linkCls}>KVKK ve Gizlilik</Link></li>
            </ul>
          </nav>

          <div>
            <p className="mb-4 font-display text-[18px] font-semibold text-paper-50">İletişim</p>
            <ul className="space-y-2.5 text-[15px]">
              <li><PhoneLink source="footer" className={linkCls} /></li>
              <li><a href={`mailto:${site.email}`} className={linkCls}>{site.email}</a></li>
              <li><DirectionsTextLink className={linkCls}>{fullAddress}</DirectionsTextLink></li>
              {site.hours.map((h) => (
                <li key={h.days} className="text-paper-200/65">
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper-100/15 pt-6 text-[14px] text-paper-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          {!site.legalName.startsWith("TODO") && <p>{site.legalName}</p>}
        </div>
      </Container>
    </footer>
  );
}
