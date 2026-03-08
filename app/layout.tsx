import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Panther Moving | Tampa's Trusted Local Movers",
    template: "%s | Panther Moving",
  },
  description:
    "Professional, affordable moving services across Tampa Bay. Residential, commercial, packing & more. Licensed & insured. Get a free quote today.",
  metadataBase: new URL("https://panthermoving.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panthermoving.com",
    siteName: "Panther Moving",
    title: "Panther Moving | Tampa's Trusted Local Movers",
    description:
      "Professional, affordable moving services across Tampa Bay. Licensed & insured. Get a free quote today.",
    images: [
      {
        url: "/assets/panther-moving-branding-01.svg",
        width: 1200,
        height: 630,
        alt: "Panther Moving — Tampa's Trusted Local Movers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panther Moving | Tampa's Trusted Local Movers",
    description:
      "Professional, affordable moving services across Tampa Bay. Licensed & insured. Get a free quote today.",
    images: ["/assets/panther-moving-branding-01.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${dmSans.variable}`}>
        <a
          href="#main-content"
          className="fixed top-0 left-0 z-[100] -translate-y-full bg-gold px-4 py-2 font-heading text-sm font-semibold text-black-primary transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
