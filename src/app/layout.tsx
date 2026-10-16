import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Yulian Karapetkov — Software Engineer",
  description:
    "I’m Yulian, a software engineer based in Plovdiv, Bulgaria. A little about my work, music, and psychotherapy studies.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://yulian.me",
    title: "Yulian Karapetkov — Software Engineer",
    description:
      "I’m Yulian, a software engineer based in Plovdiv, Bulgaria. A little about my work, music, and psychotherapy studies.",
    siteName: "Yulian Karapetkov",
    locale: "en_US",
  },
  twitter: { card: "summary", title: "Yulian Karapetkov — Software Engineer" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
