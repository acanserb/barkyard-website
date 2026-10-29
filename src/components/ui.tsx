import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { hasImage, isDev } from "@/lib/media";
import { site } from "@/config/site";
import { WhatsAppButton, PhoneButton } from "@/components/actions";
import { btnBase, btnVariants, type ButtonVariant } from "@/components/buttons";
import { ArrowIcon } from "@/components/icons";

/* ============================================================
   Yerleşim
   8 px tabanlı boşluk sistemi: section dikey boşluğu 64/96 px,
   kart iç boşluğu 24/32/40 px, ızgara aralıkları 16/24 px.
   ============================================================ */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export type Tone = "paper" | "white" | "sage" | "sand" | "forest";

const tones: Record<Tone, string> = {
  paper: "bg-paper-50 text-ink-900",
  white: "bg-white text-ink-900",
  sage: "bg-sage-100 text-ink-900",
  sand: "bg-sand-100 text-ink-900",
  forest: "on-dark bg-forest-800 text-paper-50",
};

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Küçük üst etiket — cümle düzeninde, büyük harf değil */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 text-[15px] font-semibold tracking-[0.01em] ${light ? "text-sun-300" : "text-clay-600"}`}>
      {children}
    </p>
  );
}

export function H2({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <h2 id={id} className={`text-[2rem] sm:text-[2.75rem] ${className}`}>
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-4 max-w-[60ch] text-[18px] leading-[1.65] text-ink-700 ${className}`}>{children}</p>;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  light = false,
  className = "",
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-[46rem] ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <H2 id={id}>{title}</H2>
      {lead && <Lead className={light ? "!text-paper-50/85" : ""}>{lead}</Lead>}
    </div>
  );
}

/* ---------- Sayfa yolu ---------- */

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="mb-6 text-[15px] text-ink-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="underline decoration-ink-900/25 underline-offset-4 hover:text-ink-900">
            Ana sayfa
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.name} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {it.href ? (
              <Link href={it.href} className="underline decoration-ink-900/25 underline-offset-4 hover:text-ink-900">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-700">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** İç sayfa başlık bloğu */
export function PageHero({
  title,
  lead,
  crumb,
  children,
  aside,
}: {
  title: ReactNode;
  lead?: ReactNode;
  crumb: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="bg-sage-100">
      <Container className={`grid gap-10 py-12 sm:py-16 lg:py-20 ${aside ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16" : ""}`}>
        <div>
          <Breadcrumbs items={[{ name: crumb }]} />
          <h1 className="max-w-[20ch] text-[2.375rem] sm:text-[3.25rem] lg:text-[3.75rem]">{title}</h1>
          {lead && <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.65] text-ink-700 sm:text-[19px]">{lead}</p>}
          {children}
        </div>
        {aside}
      </Container>
    </section>
  );
}

/* ---------- Görsel ---------- */

/**
 * Yalnızca gerçek fotoğraf gösterir (bkz. lib/media.ts).
 * Fotoğraf yoksa canlı sitede hiçbir şey çizmez; geliştirme ortamında
 * eklenecek dosyanın yolunu yazan kesik çizgili bir kutu gösterir.
 */
export function Figure({
  src,
  alt,
  className = "",
  imgClassName = "object-cover",
  priority = false,
  sizes = "100vw",
}: {
  src?: string | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (hasImage(src)) {
    return (
      <div className={`relative overflow-hidden bg-paper-200 ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imgClassName}
        />
      </div>
    );
  }
  if (isDev) {
    return (
      <div
        className={`flex items-center justify-center border-2 border-dashed border-clay-600/60 bg-clay-100/60 p-4 text-center text-[13px] text-clay-600 ${className}`}
        aria-hidden="true"
      >
        Fotoğraf eklenecek: {src}
      </div>
    );
  }
  return null;
}

/* ---------- Butonlar ---------- */

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${btnBase} ${btnVariants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/** Kart içindeki "Ayrıntılar" ifadesi (kartın tamamı bağlantıdır) */
export function MoreLabel({ children = "Ayrıntılı bilgi" }: { children?: ReactNode }) {
  return (
    <span className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-forest-800">
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
    </span>
  );
}

/* ---------- Kapanış CTA bloğu ---------- */

export function CtaBlock({
  title = "Köpeğiniz için doğru yer miyiz? Birlikte bakalım.",
  text = "Köpeğinizi ve ihtiyacınızı kısaca yazın. Size uygun bir program olup olmadığını açıkça söyleriz.",
  context = "hizmetleriniz",
  source,
  primary = "whatsapp",
}: {
  title?: string;
  text?: string;
  context?: string;
  source: string;
  primary?: "whatsapp" | "phone";
}) {
  return (
    <section className="px-3 pb-3 sm:px-6" aria-labelledby={`cta-${source}`}>
      <div className="on-dark mx-auto max-w-[1240px] rounded-[2rem] bg-forest-800 text-paper-50">
        <Container className="grid gap-10 py-14 sm:py-20 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 id={`cta-${source}`} className="max-w-[18ch] text-[2.25rem] sm:text-[3rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-paper-50/85">{text}</p>
          </div>
          <div className="flex flex-col gap-3">
            {primary === "phone" ? (
              <>
                <PhoneButton source={source} variant="light" label={`Arayın: ${site.phoneDisplay}`} className="w-full" />
                <WhatsAppButton context={context} source={source} variant="outline-light" label="WhatsApp'tan yazın" className="w-full" />
              </>
            ) : (
              <>
                <WhatsAppButton context={context} source={source} variant="light" className="w-full" />
                <PhoneButton source={source} variant="outline-light" className="w-full" />
              </>
            )}
            <p className="mt-1 text-[15px] text-paper-50/75">
              {site.hours[0].days} {site.hours[0].time}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
