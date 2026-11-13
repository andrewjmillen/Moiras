import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contactEmail, instagramUrl, siteName, siteUrl } from "@/lib/site";
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

const siteTitle =
  "Moiras | Acompañamiento en Procesos de Final de Vida y Cuidados Paliativos en Argentina";
const siteDescription =
  "Equipo interdisciplinario especializado en cuidados paliativos, bioética y asesoramiento en decisiones de fin de vida. Brindamos contención médica, legal, social y emocional.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Moiras",
      alternateName: "Consultorio Moiras",
      description:
        "Equipo interdisciplinario especializado en cuidados paliativos, bioética y asesoramiento en decisiones de fin de vida.",
      url: siteUrl,
      email: contactEmail,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moiras%20logo-bTugCLEfTgpwXh5mFlteGO0yLJRnTm.jpg",
      image: `${siteUrl}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      areaServed: { "@type": "Country", name: "Argentina" },
      sameAs: [instagramUrl],
      knowsAbout: [
        "Cuidados paliativos",
        "Bioética",
        "Directivas anticipadas",
        "Derechos del paciente",
        "Decisiones de fin de vida",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "es-AR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
