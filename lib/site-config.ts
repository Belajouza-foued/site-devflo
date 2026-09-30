// Un seul endroit à modifier pour adapter le site à votre activité.

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brand: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  location: string;
  nav: NavItem[];
}

export const siteConfig: SiteConfig = {
  brand: "DevFlo",
  tagline: "Création de sites web modernes et professionnels",
  phone: "+216 23 782 889",
  phoneHref: "tel:+21623782889",
  whatsappHref: "https://wa.me/21623782889",
  email: "contact@atelierweb.tn",
  location: "Tunisie",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Activités", href: "#activites" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Contact", href: "#contact" },
  ],
};
