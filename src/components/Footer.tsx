import Link from "next/link";
import Image from "next/image";
import { site, fullAddress } from "@/config/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui";
import { PhoneLink, DirectionsTextLink } from "@/components/ContactLinks";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200/75">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/marka/barkyard-mark.svg"
              alt=""
              width={38}
              height={41}
              className="mb-4 h-[38px] w-auto brightness-0 invert opacity-90"
            />
            <p className="font-display text-[19px] font-semibold tracking-[0.14em] text-cream-100">BARKYARD</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400">
              Ankara · {site.tagline}
            </p>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed">
              Ankara&apos;da köpek eğitimi, konaklama, gündüz bakım ve davranış rehabilitasyonu.
            </p>
          </div>

          <nav aria-label="Hizmetler">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream-100">Hizmetler</p>
            <ul className="space-y-2.5 text-[14px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="hover:text-cream-100">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Kurumsal">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream-100">Kurumsal</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/hakkimizda/" className="hover:text-cream-100">Hakkımızda</Link></li>
              <li><Link href="/tesis/" className="hover:text-cream-100">Tesisimiz</Link></li>
              <li><Link href="/sss/" className="hover:text-cream-100">Sık Sorulan Sorular</Link></li>
              <li><Link href="/iletisim/" className="hover:text-cream-100">İletişim</Link></li>
              <li><Link href="/kvkk/" className="hover:text-cream-100">KVKK ve Gizlilik</Link></li>
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream-100">İletişim</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><PhoneLink source="footer" className="hover:text-cream-100" /></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-cream-100">{site.email}</a></li>
              <li><DirectionsTextLink className="hover:text-cream-100">{fullAddress}</DirectionsTextLink></li>
              {site.hours.map((h) => (
                <li key={h.days} className="text-cream-200/60">
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream-100/10 pt-6 text-[13px] text-cream-200/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          {!site.legalName.startsWith("TODO") && <p>{site.legalName}</p>}
        </div>
      </Container>
    </footer>
  );
}
