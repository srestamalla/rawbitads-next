import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

const siteUrl = "https://rawbitads.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rawbitads — Global Self-Serve Ad Platform",
    template: "%s | Rawbitads",
  },
  description:
    "Launch high-converting campaigns across multiple ad formats, reach quality traffic in top GEOs, and optimize performance from one self-serve dashboard.",
  openGraph: {
    type: "website",
    siteName: "Rawbitads",
    locale: "en_US",
    url: siteUrl,
    title: "Rawbitads — Global Self-Serve Ad Platform",
    description:
      "Launch high-converting campaigns across multiple ad formats, reach quality traffic in top GEOs, and optimize performance from one self-serve dashboard.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Rawbitads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawbitads — Global Self-Serve Ad Platform",
    description:
      "Launch high-converting campaigns across multiple ad formats, reach quality traffic in top GEOs, and optimize performance from one self-serve dashboard.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
