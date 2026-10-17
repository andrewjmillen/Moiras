import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moiras | Acompañamiento en Procesos de Final de Vida y Cuidados Paliativos en Argentina",
  description:
    "Equipo interdisciplinario especializado en cuidados paliativos, bioética y asesoramiento en decisiones de fin de vida. Brindamos contención médica, legal, social y emocional.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Moiras",
  description: "Equipo interdisciplinario especializado en cuidados paliativos, bioética y asesoramiento en decisiones de fin de vida.",
  email: "consultoriomoiras@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://moiras.com.ar",
  sameAs: ["https://instagram.com/consultoriomoiras"],
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  knowsAbout: ["Cuidados paliativos", "Bioética", "Decisiones de fin de vida"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-cream scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
