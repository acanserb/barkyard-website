"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { Container, WhatsAppButton } from "@/components/ui";

const secondaryNav = [
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/tesis/", label: "Tesisimiz" },
  { href: "/sss/", label: "SSS" },
  { href: "/iletisim/", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = [
    ...services.map((s) => ({ href: `/${s.slug}/`, label: s.navLabel })),
    ...secondaryNav,
  ];

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6">
      <div className="mx-auto max-w-[1180px] rounded-[2rem] bg-white/90 shadow-[0_2px_24px_rgba(30,42,36,0.08)] backdrop-blur-md">
      <Container className="!px-5">
        <div className="flex h-[62px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Barkyard Ankara ana sayfa">
            <Image
              src="/images/marka/barkyard-mark.svg"
              alt=""
              width={36}
              height={39}
              priority
              className="h-[36px] w-auto"
            />
            <span className="font-display text-[22px] font-extrabold tracking-[0.06em] text-ink-900">
              BARKYARD
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[15px] transition-colors ${
                    active
                      ? "bg-paper-200 font-semibold text-ink-900"
                      : "text-ink-700 hover:bg-paper-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <WhatsAppButton
                context="hizmetleriniz"
                label="WhatsApp"
                source="header"
                className="!px-5 !py-2.5 !text-[15px]"
              />
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menü"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink-900/70 lg:hidden"
            >
              <span className="sr-only">Menü</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-ink-900/10 lg:hidden">
          <Container>
            <nav className="flex flex-col py-3" aria-label="Mobil menü">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink-900/8 py-4 font-display text-[22px] font-semibold text-ink-900 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <p className="py-4 text-[15px] text-ink-500">
                {site.hours[0].days}, {site.hours[0].time}
              </p>
            </nav>
          </Container>
        </div>
      )}
      </div>
    </header>
  );
}
