import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
   title: "Sudha Aesthetics",
  description: "Sudha Aesthetics - Your Beauty Destination",
    icons: {
    icon: [
      { url: "logos.JPG", sizes: "any" },
      { url: "logos.JPG", sizes: "16x16", type: "image/png" },
      { url: "logos.JPG", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "logos.JPG", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "logos.JPG", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "logos.JPG", sizes: "512x512", type: "image/png" },
    ],
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
      data-scroll-behavior="smooth"
      className={`scroll-smooth ${manrope.variable} ${notoSerif.variable}`}
    >
      <body suppressHydrationWarning className="font-body-md text-on-surface bg-background">{children}</body>
    </html>
  );
}
