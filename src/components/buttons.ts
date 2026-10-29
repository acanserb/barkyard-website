/** Ortak buton stilleri (sunucu ve istemci bileşenleri birlikte kullanır). */

export type ButtonVariant = "primary" | "secondary" | "light" | "outline-light";

export const btnBase =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[16px] font-semibold leading-tight transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.98]";

export const btnVariants: Record<ButtonVariant, string> = {
  primary: "bg-forest-800 text-paper-50 hover:bg-forest-600",
  secondary: "border-2 border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-paper-50",
  light: "bg-paper-50 text-forest-900 hover:bg-sun-300",
  "outline-light": "border-2 border-paper-50/50 text-paper-50 hover:border-paper-50 hover:bg-paper-50 hover:text-forest-900",
};
