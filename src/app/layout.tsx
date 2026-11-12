import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import Script from "next/script";
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
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794461106/logos.png", sizes: "any" },
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794461106/logos.png", sizes: "16x16", type: "image/png" },
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794461106/logos.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794461106/logos.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794461106/logos.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794461106/logos.png", sizes: "512x512", type: "image/png" },
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TGW8KZJT');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18095694782"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18095694782');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}

        {/* Event snippet for Click to call conversion */}
        <Script
          id="gtag-report-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-18095694782/iKQ9COvdkvIcEL7H2bRD',
                    'value': 1.0,
                    'currency': 'INR',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        {/* End Event snippet for Click to call conversion */}
      </head>
      <body
        suppressHydrationWarning
        className="font-body-md text-on-surface bg-background"
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGW8KZJT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}