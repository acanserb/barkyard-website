"use client";

import Link from "next/link";
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
    <header className="sticky top-0 z-40 border-b border-ink-900/8 bg-cream-50/92 backdrop-blur-md">
      <Container>
        <div className="flex h-[68px] items-center justify-between gap-4">
          <Link href="/" className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
            <span className="font-display text-[19px] font-semibold tracking-[0.14em] text-ink-900">BARKYARD</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-olive-600 sm:inline">
              Ankara
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana menü">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-[14px] transition-colors ${
                    active ? "font-semibold text-ink-900" : "text-ink-700 hover:text-ink-900"
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
                className="!px-5 !py-2.5 !text-[14px]"
              />
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menü"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 lg:hidden"
            >
              <span className="sr-only">Menü</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
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
        <div className="border-t border-ink-900/8 bg-cream-50 lg:hidden">
          <Container>
            <nav className="flex flex-col py-3" aria-label="Mobil menü">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink-900/6 py-3.5 text-[15px] text-ink-700 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <p className="py-4 text-[13px] text-ink-500">
                {site.hours[0].days} · {site.hours[0].time}
              </p>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
