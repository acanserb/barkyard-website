/**
 * Dönüşüm sinyali gönderimi.
 *
 * Olaylar yalnızca window.dataLayer'a yazılır. Sitede şu anda GTM/GA4 kurulu
 * DEĞİLDİR (site.gtmId boş); bu durumda dataLayer sayfa içinde kalır, hiçbir
 * yere gönderilmez ve çerez oluşturmaz. GTM kurulduğunda bu olaylar GA4
 * event'i olarak tanımlanır.
 *
 * Tanımlı olaylar:
 *   whatsapp_click          WhatsApp bağlantısına tıklama
 *   phone_click             Telefon bağlantısına tıklama
 *   directions_click        Yol tarifi / harita bağlantısı
 *   lead_form_whatsapp_open İletişim formu doğrulandı ve WhatsApp açıldı
 *   service_page_view       Hizmet sayfası görüntülendi (sayfa başına bir kez)
 *
 * Her bağlantıda tek bir onClick vardır; aynı etkileşim iki event üretmez.
 */

import { site } from "@/config/site";

export type EventName =
  | "whatsapp_click"
  | "phone_click"
  | "directions_click"
  | "lead_form_whatsapp_open"
  | "service_page_view";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
    page_path: window.location.pathname,
  });

  // Google Ads dönüşümleri (ikincil). Aynı tıklama tek dönüşüm üretir;
  // GA4'ten ayrıca içe aktarılmamalıdır (çift sayım).
  const label =
    event === "whatsapp_click" || event === "lead_form_whatsapp_open"
      ? site.googleAdsLabels.whatsapp
      : event === "phone_click"
        ? site.googleAdsLabels.phone
        : "";
  if (site.googleAdsId && label && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: `${site.googleAdsId}/${label}` });
  }
}
