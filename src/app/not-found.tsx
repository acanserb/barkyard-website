import Link from "next/link";
import { Container, GhostButton } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 text-center sm:py-40">
      <p className="font-display text-[8rem] font-extrabold leading-none text-lawn-400">404</p>
      <h1 className="mt-2 text-4xl sm:text-5xl">Bu sayfa bulunamadı</h1>
      <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-ink-700">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Ana sayfadan devam edebilirsiniz.
      </p>
      <div className="mt-9">
        <GhostButton href="/">Ana sayfaya dön</GhostButton>
      </div>
    </Container>
  );
}
