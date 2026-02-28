import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.virtualmediainnovations.com"),
  title: {
    default: "Virtual Media Innovations — World of Asphodel & D&D World Builder",
    template: "%s | Virtual Media Innovations",
  },
  description:
    "Virtual Media Innovations (VMI) is the creative studio of Larry Hunkin, home of the World of Asphodel D&D 5e campaign setting and the World Builder platform. Immersive worldbuilding, ambient soundscapes, and free tools for tabletop RPG creators.",
  keywords: [
    "Virtual Media Innovations", "VMI",
    "World of Asphodel", "Asphodel",
    "D&D World Builder", "World Builder", "World Builder platform",
    "Larry Hunkin",
    "D&D 5e", "Dungeons and Dragons", "DnD",
    "campaign setting", "worldbuilding", "world building",
    "tabletop RPG", "TTRPG", "RPG",
    "5e SRD", "SRD 5.1",
    "Roll and Resonance", "ambient soundscapes",
    "Whispers of Morgath",
    "fantasy worldbuilding", "campaign world",
    "virtual worlds", "concept art", "game design",
    "creative studio", "digital experiences",
    "D&D sourcebook", "homebrew campaign",
    "interactive map", "living world",
  ],
  authors: [
    { name: "Larry Hunkin" },
    { name: "Virtual Media Innovations" },
  ],
  creator: "Larry Hunkin — Virtual Media Innovations",
  publisher: "Virtual Media Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.virtualmediainnovations.com",
    siteName: "Virtual Media Innovations",
    title: "Virtual Media Innovations — World of Asphodel & D&D World Builder",
    description: "Home of the World of Asphodel D&D 5e campaign setting and the World Builder platform by Larry Hunkin. Immersive worldbuilding, soundscapes, and creative tools for tabletop RPG creators.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Virtual Media Innovations — World of Asphodel & World Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Media Innovations — World of Asphodel & D&D World Builder",
    description: "Home of the World of Asphodel D&D 5e campaign setting and the World Builder platform by Larry Hunkin.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.virtualmediainnovations.com",
  },
  verification: {
    google: "google13cec120772df836",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.virtualmediainnovations.com/#organization",
      name: "Virtual Media Innovations",
      alternateName: "VMI",
      url: "https://www.virtualmediainnovations.com",
      email: "contact@virtualmediainnovations.com",
      founder: {
        "@type": "Person",
        name: "Larry Hunkin",
        url: "https://www.virtualmediainnovations.com",
      },
      description:
        "Creative studio behind the World of Asphodel D&D 5e campaign setting and the World Builder platform. Founded by Larry Hunkin.",
      sameAs: [
        "https://worldofasphodel.com",
        "https://www.youtube.com/@larryhunkin5207",
        "https://github.com/lhunkin",
        "https://www.deviantart.com/larryhunkin",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.virtualmediainnovations.com/#website",
      url: "https://www.virtualmediainnovations.com",
      name: "Virtual Media Innovations",
      description:
        "Home of the World of Asphodel and D&D World Builder platform",
      publisher: {
        "@id": "https://www.virtualmediainnovations.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.virtualmediainnovations.com/#webpage",
      url: "https://www.virtualmediainnovations.com",
      name: "Virtual Media Innovations — World of Asphodel & D&D World Builder",
      isPartOf: {
        "@id": "https://www.virtualmediainnovations.com/#website",
      },
      about: {
        "@id": "https://www.virtualmediainnovations.com/#organization",
      },
      description:
        "Virtual Media Innovations (VMI) by Larry Hunkin — home of the World of Asphodel D&D 5e campaign setting, ambient soundscapes, and the World Builder platform.",
    },
    {
      "@type": "CreativeWork",
      name: "World of Asphodel",
      description:
        "A living D&D 5e campaign setting with deep lore, interactive maps, and immersive ambient soundscapes.",
      url: "https://worldofasphodel.com",
      creator: {
        "@type": "Person",
        name: "Larry Hunkin",
      },
      genre: ["Fantasy", "Tabletop RPG", "Dungeons & Dragons"],
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      name: "World Builder",
      description:
        "Free platform to create your own professional D&D campaign world website using the same design system as World of Asphodel. 5e SRD compatible.",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@type": "Organization",
        name: "Virtual Media Innovations",
      },
    },
    {
      "@type": "Person",
      name: "Larry Hunkin",
      url: "https://www.virtualmediainnovations.com",
      email: "contact@virtualmediainnovations.com",
      jobTitle: "Founder & Creator",
      worksFor: {
        "@type": "Organization",
        name: "Virtual Media Innovations",
      },
      sameAs: [
        "https://www.youtube.com/@larryhunkin5207",
        "https://github.com/lhunkin",
        "https://www.deviantart.com/larryhunkin",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-body antialiased bg-background text-foreground grain-overlay`}>
        {children}
      </body>
    </html>
  );
}
