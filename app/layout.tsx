import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivanruiz.com"),
  title: {
    default: "Iván Alejandro Ruiz Hernández | Terapeuta Holointegrativo",
    template: "%s | Iván Alejandro Ruiz Hernández",
  },
  description:
    "Iván Alejandro Ruiz Hernández es ingeniero mecatrónico, terapeuta holointegrativo certificado y fundador de ZANATTE Centro Holointegrativo en Bogotá, Colombia.",
  keywords: [
    "terapeuta holointegrativo",
    "bienestar integral",
    "medicina ancestral",
    "yagé",
    "terapias energéticas",
    "ZANATTE",
    "Bogotá",
    "Colombia",
    "Iván Ruiz",
  ],
  authors: [{ name: "Iván Alejandro Ruiz Hernández" }],
  creator: "Iván Alejandro Ruiz Hernández",
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    url: "https://ivanruiz.com",
    siteName: "Iván Alejandro Ruiz Hernández",
    title: "Iván Alejandro Ruiz Hernández | Terapeuta Holointegrativo",
    description:
      "Ingeniero mecatrónico, terapeuta holointegrativo certificado y fundador de ZANATTE Centro Holointegrativo en Bogotá, Colombia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iván Alejandro Ruiz Hernández",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iván Alejandro Ruiz Hernández | Terapeuta Holointegrativo",
    description:
      "Ingeniero mecatrónico, terapeuta holointegrativo certificado y fundador de ZANATTE Centro Holointegrativo.",
    images: ["/og-image.jpg"],
    creator: "@IvanAleRuizH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://ivanruiz.com",
    languages: {
      "es-CO": "https://ivanruiz.com",
      "en-US": "https://ivanruiz.com/en",
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iván Alejandro Ruiz Hernández",
  url: "https://ivanruiz.com",
  sameAs: [
    "https://www.instagram.com/IvanAleRuizH",
    "https://www.tiktok.com/@IvanAleRuizH",
    "https://zanatte.com.co",
  ],
  jobTitle: "Terapeuta Holointegrativo",
  description:
    "Ingeniero mecatrónico y terapeuta holointegrativo certificado, fundador de ZANATTE Centro Holointegrativo en Bogotá, Colombia.",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Universidad Nacional de Colombia",
    },
    { "@type": "EducationalOrganization", name: "AMHI Internacional" },
    { "@type": "EducationalOrganization", name: "FUNIBÁ" },
  ],
  knowsAbout: [
    "Terapia Holointegrativa",
    "Medicina Ancestral",
    "Herbología",
    "Bienestar Emocional",
    "Terapias Energéticas",
  ],
  worksFor: {
    "@type": "Organization",
    name: "ZANATTE Centro Holointegrativo",
    url: "https://zanatte.com.co",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Iván Alejandro Ruiz Hernández",
  url: "https://ivanruiz.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ivanruiz.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
