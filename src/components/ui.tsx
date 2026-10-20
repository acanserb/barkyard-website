"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { hasImage, isStock, resolveImage } from "@/lib/media";
import { track } from "@/lib/track";
import { site, telLink, whatsappLink } from "@/config/site";

/* ---------- Yerleşim ---------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

type Tone = "paper" | "white" | "sky" | "forest";

const tones: Record<Tone, string> = {
  paper: "bg-paper-50 text-ink-900",
  white: "bg-white text-ink-900",
  sky: "bg-sky-100 text-ink-900",
  forest: "on-dark bg-forest-800 text-paper-100",
};

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Başlık üstü kısa not. Büyük harf değil, cümle düzeni. */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 text-[15px] font-semibold ${light ? "text-accent-400" : "text-lawn-600"}`}>
      {children}
    </p>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-[2rem] sm:text-5xl ${className}`}>{children}</h2>;
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-5 max-w-[56ch] text-[18px] leading-[1.65] text-ink-700 ${className}`}>{children}</p>;
}

/** Sayfa üstü başlık bloğu (iç sayfalar) */
export function PageHero({
  title,
  children,
  eyebrow,
}: {
  title: ReactNode;
  children?: ReactNode;
  eyebrow?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-sky-100">
      <Container className="py-14 sm:py-20">
        {eyebrow}
        <h1 className="max-w-[18ch] text-[2.5rem] sm:text-6xl lg:text-[4.25rem]">{title}</h1>
        {children}
      </Container>
      {/* Kemer konturu — yalnızca büyük ekranda, dekor */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 260"
        className="pointer-events-none absolute -bottom-6 right-[6%] hidden h-[110%] w-auto text-forest-800/10 lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M10 260V100a90 90 0 0 1 180 0v160" />
        <path d="M34 260V104a66 66 0 0 1 132 0v156" />
      </svg>
    </section>
  );
}

/* ---------- Görsel ---------- */

export function Figure({
  src,
  alt,
  label,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  src?: string | null;
  alt: string;
  /** Fotoğraf henüz yoksa bu alanda ne olması gerektiğini yazın */
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (hasImage(src)) {
    return (
      <div className={`relative overflow-hidden bg-paper-200 ${className}`}>
        <Image
          src={resolveImage(src)!}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={isStock(src)}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`bk-placeholder relative flex items-end overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <span className="m-4 rounded-full bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-ink-700 backdrop-blur-sm">
        {label ?? alt}
      </span>
    </div>
  );
}

/* ---------- Aksiyonlar ---------- */

type ActionProps = { context: string; label?: string; className?: string; source?: string };

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[16px] font-semibold transition-colors duration-150";

export function WhatsAppButton({ context, label = "WhatsApp'tan yazın", className = "", source = "" }: ActionProps) {
  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { cta_context: context, cta_source: source })}
      className={`${baseBtn} bg-accent-400 text-ink-900 hover:bg-accent-300 ${className}`}
    >
      <WhatsAppIcon className="h-[19px] w-[19px]" />
      {label}
    </a>
  );
}

export function PhoneButton({ label, className = "", source = "" }: { label?: string; className?: string; source?: string }) {
  return (
    <a
      href={telLink}
      onClick={() => track("phone_click", { cta_source: source })}
      className={`${baseBtn} border-2 border-ink-900/80 bg-transparent text-ink-900 hover:bg-ink-900 hover:text-paper-50 ${className}`}
    >
      <PhoneIcon className="h-[18px] w-[18px]" />
      {label ?? site.phoneDisplay}
    </a>
  );
}

export function GhostButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`${baseBtn} border-2 border-ink-900/80 text-ink-900 hover:bg-ink-900 hover:text-paper-50 ${className}`}
    >
      {children}
    </Link>
  );
}

export function DirectionsLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("directions_click")}
      className={className}
    >
      {children}
    </a>
  );
}

/** Kartın içindeki "Ayrıntılar" bağlantısı: altı çizili, ok yok */
export function TextLink({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-b-2 border-accent-400 pb-0.5 text-[16px] font-semibold text-ink-900 transition-colors group-hover:border-ink-900">
      {children}
    </span>
  );
}

/* ---------- Kapanış CTA bloğu ---------- */

export function CtaBlock({
  title = "Köpeğiniz için doğru yer miyiz, birlikte bakalım",
  text = "Köpeğinizi ve ihtiyacınızı yazın. Size uygun olup olmadığımızı dürüstçe söyleyelim. Uygun değilsek bunu da söyleriz.",
  context = "hizmetleriniz",
  source = "cta_block",
}: {
  title?: string;
  text?: string;
  context?: string;
  source?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-forest-900 py-20 text-paper-100 sm:py-28">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="max-w-[16ch] text-[2.5rem] text-paper-50 sm:text-6xl">{title}</h2>
            <p className="mt-6 max-w-[52ch] text-[18px] leading-relaxed text-paper-200/85">{text}</p>
          </div>
          <div className="flex flex-col gap-3">
            <WhatsAppButton context={context} source={source} className="w-full" />
            <a
              href={telLink}
              onClick={() => track("phone_click", { cta_source: source })}
              className={`${baseBtn} w-full border-2 border-paper-100/40 text-paper-50 hover:bg-paper-50 hover:text-ink-900`}
            >
              <PhoneIcon className="h-[18px] w-[18px]" />
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-[15px] text-paper-200/70">
              {site.hours[0].days}, {site.hours[0].time}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- İkonlar ---------- */

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.19 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.19-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.17 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2.1Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
