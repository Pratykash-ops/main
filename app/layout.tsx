import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Minami Labs | Web Design & Development Studio",
    template: "%s | Minami Labs",
  },
  description: "We build beautiful websites, brands, and digital tools that grow your business. Custom, high-speed, and zero jargon.",
  keywords: ["web design", "development studio", "branding", "ecommerce", "custom websites", "india", "minami labs"],
  authors: [{ name: "Pratyaksh" }, { name: "Minami Labs" }],
  creator: "Minami Labs",
  metadataBase: new URL("https://minamilabs.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/logo_color-no_bg.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo_color-no_bg.png", type: "image/png" },
    ],
    shortcut: "/assets/logo_color-no_bg.png",
  },
  openGraph: {
    title: "Minami Labs | Web Design & Development Studio",
    description: "End-to-end digital solutions from design to deployment. Fixed price, zero hidden fees.",
    url: "https://minamilabs.in",
    siteName: "Minami Labs",
    images: [
      {
        url: "https://minamilabs.in/assets/logo_color-no_bg.png",
        width: 1200,
        height: 630,
        alt: "Minami Labs Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minami Labs | Web Design & Development Studio",
    description: "We build beautiful websites, brands, and digital tools that grow your business.",
    images: ["https://minamilabs.in/assets/logo_color-no_bg.png"],
    creator: "@minamilabs",
  },
  other: {
    "og:image": "https://minamilabs.in/assets/logo_color-no_bg.png",
    "twitter:image": "https://minamilabs.in/assets/logo_color-no_bg.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
       {/* <link rel="shortcut icon" href="favicon.png" type="image/x-icon" /> */}
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
