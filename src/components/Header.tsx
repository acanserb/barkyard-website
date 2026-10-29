"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/config/site";
import { services } from "@/content/services";
import { WhatsAppButton, PhoneLink } from "@/components/actions";
import { WhatsAppIcon } from "@/components/icons";
import { track } from "@/lib/track";

const secondaryNav = [
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/tesis/", label: "Tesisimiz" },
  { href: "/sss/", label: "SSS" },
  { href: "/iletisim/", label: "İletişim" },
];

const serviceNav = services.map((s) => ({ href: `/${s.slug}/`, label: s.navLabel }));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  // Sayfa değişince menüyü kapat (render sırasında durum ayarı; effect gerektirmez)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Kaydırınca başlığa ince gölge
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Açık menü: arka plan kaydırmasını kilitle, Esc ile kapat, odağı panel içinde tut
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a, button")].filter(
        Boolean,
      ) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    // Masaüstü genişliğine geçilirse menüyü kapat
    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => mq.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      root.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 px-2 pt-2 sm:px-4 sm:pt-3">
      <div
        className={`mx-auto max-w-[1240px] rounded-[1.75rem] border border-ink-900/5 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled || open ? "shadow-[var(--shadow-soft)]" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-5">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-xl"
            aria-label="Barkyard Ankara, ana sayfa"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <Image
              src="/images/marka/barkyard-mark.svg"
              alt=""
              width={40}
              height={43}
              priority
              className="h-10 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[20px] font-bold tracking-[0.14em] text-ink-900">BARKYARD</span>
              <span className="mt-1 text-[11px] font-semibold tracking-[0.28em] text-ink-500">ANKARA</span>
            </span>
          </Link>

          <nav className="hidden xl:block" aria-label="Ana menü">
            <ul className="flex items-center gap-0.5">
              {[...serviceNav, ...secondaryNav].map((item, i) => (
                <li key={item.href} className={i === serviceNav.length ? "ml-3 border-l border-ink-900/10 pl-3" : ""}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative block whitespace-nowrap rounded-full px-3 py-2 text-[15px] transition-colors ${
                      isActive(item.href)
                        ? "bg-sage-100 font-semibold text-forest-800"
                        : "text-ink-700 hover:bg-paper-100 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton
              context="hizmetleriniz"
              label="WhatsApp"
              source="header"
              className="!hidden !min-h-11 !px-5 !py-2 !text-[15px] sm:!inline-flex"
            />
            {/* Mobilde kompakt WhatsApp erişimi */}
            <a
              href={whatsappLink("hizmetleriniz")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { cta_context: "hizmetleriniz", cta_source: "header_mobile" })}
              aria-label="WhatsApp'tan yazın (yeni sekmede açılır)"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-paper-50 hover:bg-forest-600 sm:hidden"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              className="flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border-2 border-ink-900/15 px-3 min-[380px]:px-3.5 text-[15px] font-semibold text-ink-900 hover:border-ink-900/40 xl:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
              <span className="max-[379px]:sr-only">{open ? "Kapat" : "Menü"}</span>
            </button>
          </div>
        </div>

        <div
          id="mobil-menu"
          ref={panelRef}
          hidden={!open}
          onClick={(e) => {
            // Aynı sayfaya giden bağlantıda da menü kapansın
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
          className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain border-t border-ink-900/10 px-3 pb-4 sm:px-5 xl:hidden"
        >
          <nav aria-label="Mobil menü">
            <p className="px-2 pb-1 pt-4 text-[13px] font-semibold tracking-[0.08em] text-ink-500">HİZMETLER</p>
            <ul className="grid gap-1 sm:grid-cols-2">
              {serviceNav.map((item) => (
                <MobileItem key={item.href} {...item} active={isActive(item.href)} />
              ))}
            </ul>
            <p className="px-2 pb-1 pt-4 text-[13px] font-semibold tracking-[0.08em] text-ink-500">BARKYARD</p>
            <ul className="grid gap-1 sm:grid-cols-2">
              {secondaryNav.map((item) => (
                <MobileItem key={item.href} {...item} active={isActive(item.href)} />
              ))}
            </ul>
          </nav>
          <div className="mt-4 grid gap-2 rounded-2xl bg-sage-100 p-4 sm:grid-cols-2 sm:items-center">
            <WhatsAppButton context="hizmetleriniz" source="mobile_menu" className="w-full" />
            <p className="text-[15px] text-ink-700 sm:text-right">
              <PhoneLink source="mobile_menu" className="font-semibold text-forest-800 underline underline-offset-4" />
              <br />
              {site.hours[0].days} {site.hours[0].time}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`flex min-h-12 items-center rounded-xl px-3 font-display text-[19px] font-semibold ${
          active ? "bg-sage-100 text-forest-800" : "text-ink-900 hover:bg-paper-100"
        }`}
      >
        {label}
        {active && <span className="ml-auto text-[13px] font-medium text-forest-700">Bu sayfadasınız</span>}
      </Link>
    </li>
  );
}
