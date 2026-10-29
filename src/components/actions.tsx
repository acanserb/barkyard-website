"use client";

import { useEffect, type ReactNode } from "react";
import { site, telLink, whatsappLink } from "@/config/site";
import { track, type EventName } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "@/components/icons";
import { btnBase, btnVariants, type ButtonVariant } from "@/components/buttons";

/**
 * Dönüşüm aksiyonları (istemci bileşenleri).
 * Her bağlantı tek bir olay gönderir.
 */

type ActionProps = {
  context?: string;
  label?: ReactNode;
  className?: string;
  source: string;
  variant?: ButtonVariant;
};

export function WhatsAppButton({
  context = "hizmetleriniz",
  label = "WhatsApp'tan Bilgi Al",
  className = "",
  source,
  variant = "primary",
}: ActionProps) {
  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { cta_context: context, cta_source: source })}
      className={`${btnBase} ${btnVariants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
      <span className="sr-only"> (WhatsApp yeni sekmede açılır)</span>
    </a>
  );
}

export function PhoneButton({
  label,
  className = "",
  source,
  variant = "secondary",
}: Omit<ActionProps, "context">) {
  return (
    <a
      href={telLink}
      onClick={() => track("phone_click", { cta_source: source })}
      className={`${btnBase} ${btnVariants[variant]} ${className}`}
    >
      <PhoneIcon className="h-5 w-5 shrink-0" />
      <span>{label ?? site.phoneDisplay}</span>
    </a>
  );
}

export function PhoneLink({ source, className = "" }: { source: string; className?: string }) {
  return (
    <a href={telLink} onClick={() => track("phone_click", { cta_source: source })} className={className}>
      {site.phoneDisplay}
    </a>
  );
}

export function DirectionsLink({
  children,
  className = "",
  source,
  icon = false,
}: {
  children: ReactNode;
  className?: string;
  source: string;
  icon?: boolean;
}) {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("directions_click", { cta_source: source })}
      className={className}
    >
      {icon && <MapPinIcon className="h-5 w-5 shrink-0" />}
      {children}
      <span className="sr-only"> (Google Haritalar yeni sekmede açılır)</span>
    </a>
  );
}

/** Sayfa görüntüleme olayı. Geliştirme modundaki çift effect çağrısında tekrar göndermez. */
const sent = new Set<string>();
export function TrackView({ event, params }: { event: EventName; params: Record<string, string> }) {
  const key = `${event}:${JSON.stringify(params)}`;
  useEffect(() => {
    const k = `${key}:${window.location.pathname}`;
    if (sent.has(k)) return;
    sent.add(k);
    track(event, params);
    // Sayfadan ayrılınca tekrar ziyarette yeniden sayılabilsin
    return () => {
      setTimeout(() => sent.delete(k), 0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return null;
}
