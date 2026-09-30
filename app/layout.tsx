
import type { Metadata } from "next"; import "bootstrap/dist/css/bootstrap.min.css"; import "./globals.css"; import "../components/css/Hero.css"; import BootstrapClient from "../components/BootstrapClient";

export const metadata: Metadata = {
  title: "Atelier Web — Création de sites internet professionnels",
  description:
    "Sites vitrines et e-commerce modernes, rapides et responsive pour entreprises, commerces, hôtels et restaurants en Tunisie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
