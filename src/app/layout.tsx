import type { Metadata } from "next";
import localFont from "next/font/local";
import { pageDescription, pageTitle } from "@/lib/profile";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "../../public/fonts/manrope-400.woff2", weight: "400" },
    { path: "../../public/fonts/manrope-500.woff2", weight: "500" },
    { path: "../../public/fonts/manrope-600.woff2", weight: "600" },
  ],
  variable: "--font-manrope",
  display: "swap",
});
const dmMono = localFont({
  src: "../../public/fonts/dm-mono-400.woff2",
  weight: "400",
  variable: "--font-dm-mono",
  display: "swap",
});
const caveat = localFont({
  src: "../../public/fonts/caveat-500.woff2",
  weight: "500",
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yulian.me"),
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://yulian.me",
    title: pageTitle,
    description: pageDescription,
    siteName: "Yulian Karapetkov",
    locale: "en_US",
  },
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
