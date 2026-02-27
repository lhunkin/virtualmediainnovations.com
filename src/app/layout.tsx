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
  title: {
    default: "Virtual Media Innovations — We Build Virtual Worlds",
    template: "%s | Virtual Media Innovations",
  },
  description:
    "Creative studio specializing in virtual world design, concept art, video game assets, RPG content, and immersive digital experiences. Home of World of Asphodel.",
  keywords: [
    "virtual worlds", "game art", "concept art", "video game assets",
    "RPG", "TTRPG", "D&D 5e", "worldbuilding", "animation",
    "World of Asphodel", "creative studio", "campaign setting",
  ],
  authors: [{ name: "Virtual Media Innovations" }],
  creator: "Virtual Media Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtualmediainnovations.com",
    siteName: "Virtual Media Innovations",
    title: "Virtual Media Innovations — We Build Virtual Worlds",
    description: "Creative studio building virtual worlds, game art, and immersive digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Media Innovations — We Build Virtual Worlds",
    description: "Creative studio building virtual worlds, game art, and immersive digital experiences.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-body antialiased bg-background text-foreground grain-overlay`}>
        {children}
      </body>
    </html>
  );
}
