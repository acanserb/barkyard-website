import Link from "next/link";
import Image from "next/image";
import { site, fullAddress } from "@/config/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui";
import { PhoneLink, DirectionsLink } from "@/components/actions";

const linkCls = "inline-block py-1 underline-offset-4 hover:text-paper-50 hover:underline";

export default function Footer() {
  return (
    <footer className="on-dark mx-2 mb-2 mt-3 rounded-[2rem] bg-forest-900 text-paper-50/80 sm:mx-4 sm:mb-4">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <Image
              src="/images/marka/barkyard-mark.svg"
              alt=""
              width={44}
              height={47}
              className="mb-4 h-11 w-auto brightness-0 invert"
            />
            <p className="font-display text-[24px] font-bold tracking-[0.12em] text-paper-50">BARKYARD</p>
            <p className="mt-1 text-[14px] font-semibold tracking-[0.2em] text-sun-300">ANKARA · {site.tagline.toUpperCase()}</p>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
              Gölbaşı&apos;ndaki tesisimizde köpek eğitimi, köpek oteli, gündüz bakım ve davranış rehabilitasyonu.
            </p>
          </div>

          <nav aria-labelledby="footer-hizmetler">
            <h2 id="footer-hizmetler" className="mb-3 text-[17px] font-semibold tracking-normal text-paper-50">
              Hizmetler
            </h2>
            <ul className="space-y-1 text-[15px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className={linkCls}>
                    {s.cardTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-kurumsal">
            <h2 id="footer-kurumsal" className="mb-3 text-[17px] font-semibold tracking-normal text-paper-50">
              Barkyard
            </h2>
            <ul className="space-y-1 text-[15px]">
              <li><Link href="/hakkimizda/" className={linkCls}>Hakkımızda</Link></li>
              <li><Link href="/tesis/" className={linkCls}>Tesisimiz</Link></li>
              <li><Link href="/sss/" className={linkCls}>Sık Sorulan Sorular</Link></li>
              <li><Link href="/iletisim/" className={linkCls}>İletişim</Link></li>
              <li><Link href="/kvkk/" className={linkCls}>KVKK ve Gizlilik</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 text-[17px] font-semibold tracking-normal text-paper-50">İletişim</h2>
            <address className="space-y-1 text-[15px] not-italic">
              <p><PhoneLink source="footer" className={linkCls} /></p>
              <p><a href={`mailto:${site.email}`} className={linkCls}>{site.email}</a></p>
              <p>
                <DirectionsLink source="footer" className={`${linkCls} leading-relaxed`}>
                  {fullAddress}
                </DirectionsLink>
              </p>
              {site.hours.map((h) => (
                <p key={h.days} className="pt-1 text-paper-50/70">
                  {h.days} {h.time}
                </p>
              ))}
            </address>
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkCls} mt-3`}
              >
                Instagram: @barkyardankara
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper-50/15 pt-6 text-[14px] text-paper-50/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          {site.legalName && <p>{site.legalName}</p>}
        </div>
      </Container>
    </footer>
  );
}
