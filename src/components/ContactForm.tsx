"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { track } from "@/lib/track";

/**
 * İletişim formu.
 *
 * Şu anda sunucu tarafı yoktur: form gönderildiğinde derlenmiş mesaj
 * WhatsApp'ta açılır. Böylece talep kaybolmaz ve tek bir kanalda toplanır.
 *
 * E-posta veya CRM entegrasyonu istendiğinde `submit` fonksiyonunun içi
 * bir API route çağrısıyla değiştirilir; formun geri kalanı aynı kalır.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const service = String(data.get("service") || "");
    const message = [
      `Merhaba, ${service} hakkında bilgi almak istiyorum.`,
      ``,
      `Ad Soyad: ${data.get("name")}`,
      `Telefon: ${data.get("phone")}`,
      `Köpek (cins / yaş): ${data.get("dog")}`,
      data.get("note") ? `Not: ${data.get("note")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    track("form_submit", { form_service: service });
    setSent(true);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }

  const field =
    "w-full rounded-lg border-2 border-ink-900/25 bg-white px-4 py-3 text-[17px] text-ink-900 outline-none placeholder:text-ink-500/70 focus:border-lawn-600";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[16px] font-semibold text-ink-900">
          Ad Soyad
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} placeholder="Adınız" />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-[16px] font-semibold text-ink-900">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          className={field}
          placeholder="05XX XXX XX XX"
        />
      </div>

      <div>
        <label htmlFor="dog" className="mb-1.5 block text-[16px] font-semibold text-ink-900">
          Köpeğiniz (cins ve yaş)
        </label>
        <input id="dog" name="dog" required className={field} placeholder="Örn. Golden Retriever, 8 aylık" />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-[16px] font-semibold text-ink-900">
          İlgilendiğiniz hizmet
        </label>
        <select id="service" name="service" required defaultValue="" className={field}>
          <option value="" disabled>
            Seçin
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.cardTitle}>
              {s.cardTitle}
            </option>
          ))}
          <option value="tesis ziyareti">Tesis ziyareti / randevu</option>
          <option value="emin değilim">Hangisi olduğundan emin değilim</option>
        </select>
      </div>

      <div>
        <label htmlFor="note" className="mb-1.5 block text-[16px] font-semibold text-ink-900">
          Eklemek istediğiniz (isteğe bağlı)
        </label>
        <textarea id="note" name="note" rows={3} className={field} placeholder="Kısaca durumu anlatın" />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent-400 px-7 py-3.5 text-[16px] font-semibold text-ink-900 transition-colors hover:bg-accent-300"
      >
        WhatsApp&apos;tan gönder
      </button>

      <p className="text-[15px] leading-relaxed text-ink-500">
        Gönder&apos;e bastığınızda bilgileriniz WhatsApp mesajı olarak hazırlanır; göndermeden önce
        kontrol edebilirsiniz. Verileriniz yalnızca talebinize dönüş yapmak için kullanılır.
      </p>

      {sent && (
        <p className="rounded-lg bg-lawn-600/10 px-4 py-3 text-[16px] text-forest-800" role="status">
          WhatsApp açılmadıysa {site.phoneDisplay} numarasından bize doğrudan ulaşabilirsiniz.
        </p>
      )}
    </form>
  );
}
