import { site } from "@/lib/site";
import { Archivo, Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = site.url;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fernando Peccatiello — Growth & Demand Lead",
    template: "%s | Fernando Peccatiello",
  },
  description:
    "Growth & Demand Lead. I find the bottleneck between demand and revenue, then build the tools, funnels and experiments that close it — and ship them myself.",
  authors: [{ name: "Fernando Peccatiello", url: siteUrl }],
  creator: "Fernando Peccatiello",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fernando Peccatiello",
    title: "Fernando Peccatiello — Growth & Demand Lead",
    description:
      "Growth & Demand Lead. Strategy and hands-on execution in the same seat. Nine tools built around real growth problems.",
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: "Fernando Peccatiello — Growth & Demand Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Peccatiello — Growth & Demand Lead",
    description:
      "Growth & Demand Lead. Strategy and hands-on execution in the same seat. Nine tools built around real growth problems.",
    images: [site.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF7",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${sora.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
