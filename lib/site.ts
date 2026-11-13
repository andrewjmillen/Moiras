import type { Metadata } from "next";

export const siteUrl = "https://consultoriomoiras.com.ar";
export const siteName = "Moiras";
export const bookingUrl = "https://calendar.app.google/vhVL6J277Zmc8qSQ9";
export const contactEmail = "consultoriomoiras@gmail.com";
export const instagramUrl = "https://instagram.com/consultoriomoiras";

const whatsappDigits = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

export const whatsappUrl = whatsappDigits
  ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
      "Hola, quisiera hacer una consulta a Moiras.",
    )}`
  : null;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
