import type { FaqItem } from "@/content/services";

export default function Faq({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`divide-y divide-ink-900/15 border-y-2 border-ink-900/80 ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[20px] font-semibold leading-snug tracking-[-0.01em] text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="mt-0.5 shrink-0 text-lawn-600 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-[65ch] text-[17px] leading-relaxed text-ink-700">{item.a}</p>
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
