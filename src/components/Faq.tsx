import type { FaqItem } from "@/content/services";
import { PlusIcon } from "@/components/icons";

/**
 * Erişilebilir akordeon: yerel <details>/<summary> kullanır.
 * Klavye (Enter/Boşluk) ve ekran okuyucu desteği tarayıcıdan gelir,
 * JavaScript gerektirmez. Açık/kapalı durumu ekran okuyucuya otomatik bildirilir.
 */
export default function Faq({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group rounded-[var(--radius-card)] border border-ink-900/8 bg-white open:shadow-[var(--shadow-soft)]">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-[var(--radius-card)] px-5 py-4 font-display text-[18px] font-semibold leading-snug text-ink-900 sm:px-6 sm:text-[19px] [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest-800 transition-transform duration-200 group-open:rotate-45"
            >
              <PlusIcon className="h-5 w-5" />
            </span>
          </summary>
          <p className="max-w-[65ch] px-5 pb-5 text-[17px] leading-relaxed text-ink-700 sm:px-6">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
