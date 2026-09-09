"use client";

import { useEffect, useState } from "react";
import { site, telLink, whatsappLink } from "@/config/site";
import { track } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui";

/**
 * Mobilde sabit dönüşüm çubuğu.
 * İlk ekranda görünmez — kullanıcı sayfayı okumaya başladıktan sonra devreye girer.
 */
export default function MobileCtaBar({ context = "hizmetleriniz" }: { context?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-ink-900/10 bg-cream-50/97 backdrop-blur-md transition-transform duration-200 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md gap-2 px-4 py-2.5">
        <a
          href={whatsappLink(context)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { cta_context: context, cta_source: "mobile_bar" })}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-400 py-3 text-[15px] font-semibold text-ink-900"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          WhatsApp
        </a>
        <a
          href={telLink}
          onClick={() => track("phone_click", { cta_source: "mobile_bar" })}
          aria-label={`Telefonla ara: ${site.phoneDisplay}`}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-ink-900/20 text-ink-900"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
