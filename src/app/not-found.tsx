import type { Metadata } from "next";
import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 text-center sm:py-32">
      <p className="font-display text-[6rem] font-bold leading-none text-sage-300 sm:text-[8rem]">404</p>
      <h1 className="mt-2 text-[2.25rem] sm:text-[3rem]">Bu sayfa bulunamadı</h1>
      <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-ink-700">
        Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Ana sayfadan veya aşağıdaki hizmet sayfalarından devam
        edebilirsiniz.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="primary">
          Ana sayfaya dön
        </ButtonLink>
      </div>
      <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`/${s.slug}/`} className="inline-flex min-h-11 items-center rounded-full bg-sage-100 px-4 text-[15px] font-semibold text-forest-800 hover:bg-sage-200">
              {s.cardTitle}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
