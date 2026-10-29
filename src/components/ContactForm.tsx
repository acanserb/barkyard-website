"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { whatsappMessageLink } from "@/config/site";
import { services } from "@/content/services";
import { track } from "@/lib/track";
import { WhatsAppIcon } from "@/components/icons";

/**
 * İletişim formu → WhatsApp.
 *
 * GERÇEK DAVRANIŞ: Sunucu tarafı yoktur. Form doğrulandıktan sonra girilen
 * bilgilerle bir WhatsApp mesajı hazırlanır ve WhatsApp yeni sekmede açılır.
 * Site bu bilgileri hiçbir yere kaydetmez veya göndermez; mesaj ancak kullanıcı
 * WhatsApp'ta "Gönder"e bastığında işletmeye ulaşır. Formun altındaki açıklama
 * bu davranışa göre yazılmıştır — bir API/CRM eklenirse metin de güncellenmelidir.
 */

type Field = "name" | "phone" | "dog" | "service" | "note";
type Errors = Partial<Record<Field, string>>;

const NOTE_MAX = 500;

/** Türkiye telefon numarası: 05XX…, 5XX…, +90 5XX… veya sabit hat (0312…) */
function normalizePhone(raw: string): string | null {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("90") && d.length === 12) d = d.slice(2);
  if (d.startsWith("0") && d.length === 11) d = d.slice(1);
  if (d.length !== 10 || !/^[2-5]/.test(d)) return null;
  return `0${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}`;
}

function validate(v: Record<Field, string>): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Lütfen adınızı ve soyadınızı yazın.";
  else if (v.name.trim().length < 3) e.name = "Ad soyad en az 3 karakter olmalıdır.";

  if (!v.phone.trim()) e.phone = "Lütfen telefon numaranızı yazın.";
  else if (!normalizePhone(v.phone)) e.phone = "Geçerli bir telefon numarası yazın. Örnek: 0532 123 45 67";

  if (!v.dog.trim()) e.dog = "Lütfen köpeğinizin ırkını ve yaşını yazın.";
  else if (v.dog.trim().length < 3) e.dog = "Köpeğinizin ırkını ve yaşını biraz daha açık yazın.";

  if (!v.service) e.service = "Lütfen ilgilendiğiniz hizmeti seçin.";

  if (v.note.length > NOTE_MAX) e.note = `Ek açıklama en fazla ${NOTE_MAX} karakter olabilir.`;
  return e;
}

const labels: Record<Field, string> = {
  name: "Ad Soyad",
  phone: "Telefon",
  dog: "Köpeğin ırkı ve yaşı",
  service: "İlgilendiğiniz hizmet",
  note: "Ek açıklama",
};

const order: Field[] = ["name", "phone", "dog", "service", "note"];

export default function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [waHref, setWaHref] = useState<string | null>(null);
  const [noteLen, setNoteLen] = useState(0);

  const id = (f: Field) => `${uid}-${f}`;

  function values(): Record<Field, string> {
    const data = new FormData(formRef.current!);
    return Object.fromEntries(order.map((f) => [f, String(data.get(f) ?? "")])) as Record<Field, string>;
  }

  function onBlur(f: Field) {
    setTouched((t) => ({ ...t, [f]: true }));
    const e = validate(values());
    setErrors((prev) => ({ ...prev, [f]: e[f] }));
  }

  function onChange(f: Field) {
    // Hata gösterilen alan düzeltilince hatayı hemen kaldır
    if (errors[f]) {
      const e = validate(values());
      setErrors((prev) => ({ ...prev, [f]: e[f] }));
    }
  }

  function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const v = values();
    const e = validate(v);
    setErrors(e);
    setTouched({ name: true, phone: true, dog: true, service: true, note: true });

    const firstInvalid = order.find((f) => e[f]);
    if (firstInvalid) {
      setWaHref(null);
      // Ekran okuyucu özetini duyursun, odak ilk hatalı alana gitsin
      requestAnimationFrame(() => document.getElementById(id(firstInvalid))?.focus());
      return;
    }

    const message = [
      "Merhaba, Barkyard web sitesindeki form üzerinden yazıyorum.",
      "",
      `İlgilendiğim hizmet: ${v.service}`,
      `Ad Soyad: ${v.name.trim()}`,
      `Telefon: ${normalizePhone(v.phone)}`,
      `Köpeğin ırkı ve yaşı: ${v.dog.trim()}`,
      v.note.trim() ? `Ek açıklama: ${v.note.trim()}` : "",
    ]
      .filter((line, i) => line !== "" || i === 1)
      .join("\n");

    const href = whatsappMessageLink(message);
    setWaHref(href);
    track("lead_form_whatsapp_open", { form_service: v.service });
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const errorList = order.filter((f) => errors[f] && touched[f]);

  const fieldCls = (f: Field) =>
    `w-full rounded-xl border-2 bg-white px-4 py-3 text-[17px] text-ink-900 placeholder:text-ink-500 focus:outline-none focus-visible:outline-none focus:border-forest-600 focus:ring-4 focus:ring-forest-600/15 ${
      errors[f] && touched[f] ? "border-clay-600" : "border-ink-900/20"
    }`;

  const describedBy = (f: Field, hint?: boolean) =>
    [hint ? `${id(f)}-hint` : "", errors[f] && touched[f] ? `${id(f)}-error` : ""].filter(Boolean).join(" ") || undefined;

  const errorText = (f: Field) =>
    errors[f] && touched[f] ? (
      <p id={`${id(f)}-error`} className="mt-1.5 text-[15px] font-medium text-clay-600">
        {errors[f]}
      </p>
    ) : null;

  const label = (f: Field, optional = false) => (
    <label htmlFor={id(f)} className="mb-1.5 block text-[16px] font-semibold text-ink-900">
      {labels[f]}
      {optional ? (
        <span className="font-normal text-ink-500"> (isteğe bağlı)</span>
      ) : (
        <span className="text-clay-600" aria-hidden="true"> *</span>
      )}
    </label>
  );

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="space-y-5" aria-describedby={`${uid}-privacy`}>
      <p className="text-[15px] text-ink-700">
        <span className="text-clay-600" aria-hidden="true">*</span> işaretli alanların doldurulması zorunludur.
      </p>

      {errorList.length > 0 && (
        <div role="alert" className="rounded-xl border-2 border-clay-600/40 bg-clay-100 px-4 py-3 text-[16px] text-ink-900">
          <p className="font-semibold">Formu göndermeden önce şunları düzeltin:</p>
          <ul className="mt-1 list-disc pl-5">
            {errorList.map((f) => (
              <li key={f}>
                <a href={`#${id(f)}`} className="underline underline-offset-2">
                  {labels[f]}: {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        {label("name")}
        <input
          id={id("name")}
          name="name"
          required
          aria-required="true"
          aria-invalid={!!(errors.name && touched.name)}
          aria-describedby={describedBy("name")}
          autoComplete="name"
          className={fieldCls("name")}
          onBlur={() => onBlur("name")}
          onChange={() => onChange("name")}
        />
        {errorText("name")}
      </div>

      <div>
        {label("phone")}
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          required
          aria-required="true"
          aria-invalid={!!(errors.phone && touched.phone)}
          aria-describedby={describedBy("phone", true)}
          autoComplete="tel"
          inputMode="tel"
          className={fieldCls("phone")}
          placeholder="05XX XXX XX XX"
          onBlur={() => onBlur("phone")}
          onChange={() => onChange("phone")}
        />
        <p id={`${id("phone")}-hint`} className="mt-1.5 text-[15px] text-ink-500">
          Size bu numaradan dönüş yaparız.
        </p>
        {errorText("phone")}
      </div>

      <div>
        {label("dog")}
        <input
          id={id("dog")}
          name="dog"
          required
          aria-required="true"
          aria-invalid={!!(errors.dog && touched.dog)}
          aria-describedby={describedBy("dog")}
          className={fieldCls("dog")}
          placeholder="Örn. Golden Retriever, 8 aylık"
          onBlur={() => onBlur("dog")}
          onChange={() => onChange("dog")}
        />
        {errorText("dog")}
      </div>

      <div>
        {label("service")}
        <div className="relative">
        <select
          id={id("service")}
          name="service"
          required
          aria-required="true"
          aria-invalid={!!(errors.service && touched.service)}
          aria-describedby={describedBy("service")}
          defaultValue=""
          className={`${fieldCls("service")} appearance-none pr-11`}
          onBlur={() => onBlur("service")}
          onChange={() => onChange("service")}
        >
          <option value="" disabled>
            Seçin
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.cardTitle}>
              {s.cardTitle}
            </option>
          ))}
          <option value="Tesis ziyareti / randevu">Tesis ziyareti / randevu</option>
          <option value="Henüz emin değilim">Hangisi olduğundan emin değilim</option>
        </select>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-900" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {errorText("service")}
      </div>

      <div>
        {label("note", true)}
        <textarea
          id={id("note")}
          name="note"
          rows={4}
          maxLength={NOTE_MAX}
          aria-invalid={!!(errors.note && touched.note)}
          aria-describedby={`${id("note")}-count${errors.note && touched.note ? ` ${id("note")}-error` : ""}`}
          className={fieldCls("note")}
          placeholder="Örn. konaklama tarihleri, köpeğinizin alışkanlıkları veya yaşadığınız sorun"
          onChange={(e) => {
            setNoteLen(e.currentTarget.value.length);
            onChange("note");
          }}
          onBlur={() => onBlur("note")}
        />
        <p id={`${id("note")}-count`} className="mt-1.5 text-right text-[14px] text-ink-500">
          {noteLen}/{NOTE_MAX}
        </p>
        {errorText("note")}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-forest-800 px-7 py-3 text-[16px] font-semibold text-paper-50 transition-colors hover:bg-forest-600"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp mesajını hazırla
      </button>

      <div id={`${uid}-privacy`} className="rounded-xl bg-sage-100 px-4 py-3.5 text-[15px] leading-relaxed text-ink-700">
        <p>
          <strong className="font-semibold text-ink-900">Bu form sizi WhatsApp&apos;a yönlendirir.</strong> Butona
          bastığınızda bilgileriniz WhatsApp&apos;ta bize gönderilmeye hazır bir mesaj olarak açılır. Site bu
          bilgileri kaydetmez; mesaj ancak siz WhatsApp&apos;ta gönderdiğinizde bize ulaşır.
        </p>
        <p className="mt-2">
          Ayrıntılar için{" "}
          <Link href="/kvkk/" className="font-semibold text-forest-800 underline underline-offset-2">
            KVKK ve Gizlilik
          </Link>{" "}
          sayfasına bakabilirsiniz.
        </p>
      </div>

      <div aria-live="polite">
        {waHref && (
          <p className="rounded-xl border-2 border-forest-600/30 bg-white px-4 py-3 text-[16px] text-ink-900">
            Mesajınız WhatsApp&apos;ta açıldı. Açılmadıysa{" "}
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-800 underline underline-offset-2">
              buraya dokunarak WhatsApp&apos;ı açın
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
