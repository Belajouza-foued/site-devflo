
import Script from "next/script";

import { LanguageProvider } from "../context/LanguageContext";
import StructuredData from "../components/StructuredData";
import WhatsAppButton from "../components/WhatsAppButton";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://devflo.pro"),

  title: {
    default: "DEVFLO | Création de sites web",
    template: "%s | DEVFLO",
  },

  description:
    "DEVFLO crée des sites web modernes, professionnels et adaptés aux besoins des entreprises et professionnels.",
verification: { google: 
  "D1vnVv8BPSM-K6ffIiejpIgx7MFDMxjGQG7l8mbCINU", },


keywords: [
  "DEVFLO",
  "création site web",
  "création site internet",
  "création site web Tunisie",
  "développement web",
  "développeur web",
  "développeur web Tunisie",
  "web designer",
  "web designer Tunisie",
  "site vitrine",
  "site professionnel",
  "site web professionnel",
  "développeur React",
  "développeur Next.js",
  "développement frontend",
  "développement full stack",
],



  authors: [
    {
      name: "DEVFLO",
    },
  ],

  creator: "DEVFLO",
  publisher: "DEVFLO",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://devflo.pro",
    siteName: "DEVFLO",

    title: "DEVFLO | Création de sites web",

    description:
      "Création de sites web modernes, professionnels et adaptés aux besoins des entreprises et professionnels.",
  },

  twitter: {
    card: "summary_large_image",

    title: "DEVFLO | Création de sites web",

    description:
      "Création de sites web modernes, développement web et solutions digitales.",
  },

  alternates: {
    canonical: "https://devflo.pro",
  },

  category: "Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>

      <body>
        <StructuredData />

        <LanguageProvider>
          {children}
        </LanguageProvider>

        <WhatsAppButton />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D8TSVZ3LL7"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-D8TSVZ3LL7');
          `}
        </Script>
      </body>
    </html>
  );
}

