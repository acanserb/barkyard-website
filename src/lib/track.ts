/**
 * Dönüşüm sinyali gönderimi.
 * Tüm olaylar dataLayer'a yazılır; GTM üzerinden GA4, Google Ads
 * ve Meta CAPI'ye buradan dağıtılır. Kodda başka hiçbir yere
 * ölçüm etiketi gömülmez.
 *
 * Tanımlı olaylar:
 *   whatsapp_click | phone_click | form_submit | directions_click
 */

type EventName = "whatsapp_click" | "phone_click" | "form_submit" | "directions_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
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
}
