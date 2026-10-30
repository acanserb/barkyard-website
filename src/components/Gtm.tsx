import Script from "next/script";
import { site } from "@/config/site";

/**
 * Google Tag Manager.
 * site.gtmId boşsa hiçbir script yüklenmez — sayfa hızı etkilenmez.
 * GA4, Google Ads dönüşümleri ve Meta Pixel/CAPI bu tek konteynerden yönetilir.
 * Consent Mode v2 varsayılanı "denied" olarak başlatılır; çerez onayı verilince güncellenir.
 */
export function GtmScript() {
  if (!site.gtmId) return null;
  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500});`}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`}
      </Script>
    </>
  );
}

/**
 * Google Ads etiketi (gtag.js) — GTM kurulmadan doğrudan yüklenir.
 * site.googleAdsId boşsa hiçbir script yüklenmez.
 * Consent Mode v2 varsayılanı "denied" kalır (GtmScript ile aynı politika);
 * çerez onay paneli eklendiğinde gtag('consent','update',…) ile güncellenir.
 * Onay verilmeden Google Ads yalnızca çerezsiz sinyal alır; url_passthrough açıktır.
 * Dönüşüm olayları src/lib/track.ts içinden gönderilir.
 */
export function GoogleAdsScript() {
  if (!site.googleAdsId) return null;
  const consentDefault = site.gtmId
    ? ""
    : "gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500});";
  return (
    <>
      <Script id="google-ads-init" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};
${consentDefault}
gtag('set','url_passthrough',true);
gtag('js',new Date());
gtag('config','${site.googleAdsId}');`}
      </Script>
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
        strategy="afterInteractive"
      />
    </>
  );
}

export function GtmNoScript() {
  if (!site.gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
