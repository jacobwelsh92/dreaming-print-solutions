import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://dreamingprintsolutions.com.au"
  ),
  title: {
    default: "Dreaming Print Solutions | Indigenous-Owned Enterprise Printer Dealer",
    template: "%s | Dreaming Print Solutions",
  },
  description:
    "Australia's first indigenous-owned enterprise printer and MFD hardware dealer. HP enterprise solutions for government and corporate clients. Supply Nation certified.",
  keywords: [
    "indigenous printer dealer",
    "aboriginal business",
    "enterprise printers",
    "HP MFD",
    "multifunction printer",
    "government procurement",
    "IPP supplier",
    "Supply Nation",
    "managed print services",
    "Australia",
  ],
  authors: [{ name: "Dreaming Print Solutions" }],
  creator: "Dreaming Print Solutions",
  publisher: "Dreaming Print Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://dreamingprintsolutions.com.au",
    siteName: "Dreaming Print Solutions",
    title: "Dreaming Print Solutions | Indigenous-Owned Enterprise Printer Dealer",
    description:
      "Australia's first indigenous-owned enterprise printer and MFD hardware dealer. HP enterprise solutions for government and corporate clients.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dreaming Print Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreaming Print Solutions | Indigenous-Owned Enterprise Printer Dealer",
    description:
      "Australia's first indigenous-owned enterprise printer and MFD hardware dealer. HP enterprise solutions for government and corporate clients.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#C25E35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-cream-50 font-sans text-charcoal-950 antialiased">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
