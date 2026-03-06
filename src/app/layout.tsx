import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://marleysystems.co.uk"),
  title: {
    default: "Marley",
    template: "Marley - %s",
  },
  description:
    "Private, secure AI for regulated industries — legal, healthcare, insurance, automotive, and more. GDPR compliant, UK data residency.",
  keywords: [
    "private AI",
    "AI for regulated industries",
    "healthcare AI",
    "legal AI",
    "insurance AI",
    "automotive AI",
    "GDPR AI",
    "UK data residency AI",
    "compliant AI platform",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://marleysystems.co.uk",
    siteName: "Marley",
    title: "Marley",
    description:
      "Private, secure AI for regulated industries — legal, healthcare, insurance, automotive, and more. GDPR compliant, UK data residency.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marley",
    description:
      "Private, secure AI for regulated industries. GDPR compliant, UK data residency.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
