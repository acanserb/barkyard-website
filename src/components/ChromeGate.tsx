"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Alternatif tasarım sayfasında ortak üst/alt çubukları gizler. */
export default function ChromeGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/alternatif")) return null;
  return <>{children}</>;
}
