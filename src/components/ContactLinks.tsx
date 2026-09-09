"use client";

import type { ReactNode } from "react";
import { site, telLink } from "@/config/site";
import { track } from "@/lib/track";

export function PhoneLink({ source = "", className = "" }: { source?: string; className?: string }) {
  return (
    <a href={telLink} onClick={() => track("phone_click", { cta_source: source })} className={className}>
      {site.phoneDisplay}
    </a>
  );
}

export function DirectionsTextLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("directions_click")}
      className={className}
    >
      {children}
    </a>
  );
}
