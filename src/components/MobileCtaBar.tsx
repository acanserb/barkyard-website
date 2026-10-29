"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site, telLink, whatsappLink } from "@/config/site";
import { services } from "@/content/services";
import { track } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * Mobilde sabit dönüşüm çubuğu.
 * İlk ekranda görünmez; kullanıcı biraz kaydırınca belirir.
 * Hizmet sayfalarında WhatsApp mesajı o hizmete göre hazırlanır;
 * rehabilitasyon sayfasında birincil aksiyon telefondur.
 */
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const service = services.find((s) => pathname === `/${s.slug}/`);
  const context = service?.whatsappContext ?? "hizmetleriniz";
  const phoneFirst = service?.primaryAction === "phone";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { cta_context: context, cta_source: "mobile_bar" })}
      className={`flex min-h-12 items-center justify-center gap-2 rounded-full text-[16px] font-semibold ${
        phoneFirst ? "w-12 shrink-0 border-2 border-forest-800 text-forest-800" : "flex-1 bg-forest-800 text-paper-50"
      }`}
      aria-label={phoneFirst ? "WhatsApp'tan yazın (yeni sekmede açılır)" : undefined}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {!phoneFirst && <span>WhatsApp&apos;tan yazın</span>}
    </a>
  );

  const phone = (
    <a
      href={telLink}
      onClick={() => track("phone_click", { cta_source: "mobile_bar" })}
      aria-label={phoneFirst ? undefined : `Telefonla arayın: ${site.phoneDisplay}`}
      className={`flex min-h-12 items-center justify-center gap-2 rounded-full text-[16px] font-semibold ${
        phoneFirst ? "flex-1 bg-forest-800 text-paper-50" : "w-12 shrink-0 border-2 border-forest-800 text-forest-800"
      }`}
    >
      <PhoneIcon className="h-5 w-5" />
      {phoneFirst && <span>Arayın: {site.phoneDisplay}</span>}
    </a>
  );

  return (
    <div
      inert={!visible}
      className={`mobile-cta fixed inset-x-0 bottom-0 z-30 border-t border-ink-900/10 bg-paper-50/95 backdrop-blur-md transition-transform duration-200 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md gap-2 px-4 py-2.5">
        {phoneFirst ? (
          <>
            {phone}
            {wa}
          </>
        ) : (
          <>
            {wa}
            {phone}
          </>
        )}
      </div>
    </div>
  );
}
