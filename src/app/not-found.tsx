import Link from "next/link";
import { Container, GhostButton } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 text-center sm:py-40">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-olive-600">404</p>
      <h1 className="mt-4 text-4xl">Bu sayfa bulunamadı</h1>
      <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-ink-700">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Ana sayfadan devam edebilirsiniz.
      </p>
      <div className="mt-9">
        <GhostButton href="/">Ana sayfaya dön</GhostButton>
      </div>
    </Container>
  );
}
