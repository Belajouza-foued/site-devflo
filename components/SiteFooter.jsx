
"use client";

import { siteConfig } from "../lib/site-config";
import { useLanguage } from "../context/LanguageContext";
import "./css/SiteFooter.css";

function SiteFooter() {
  const { language } = useLanguage();

  const content = {
    fr: {
      about:
        "Des sites vitrines et e-commerce modernes, rapides et responsive, pensés pour donner à votre activité une image professionnelle en ligne.",
      navigation: "Navigation",
      contact: "Contact",
      quote: "Demander un devis",
      rights: "Tous droits réservés.",
      tunisia: "Tunisie",
    },

    en: {
      about:
        "Modern, fast and responsive business and e-commerce websites, designed to give your business a professional online presence.",
      navigation: "Navigation",
      contact: "Contact",
      quote: "Request a quote",
      rights: "All rights reserved.",
      tunisia: "Tunisia",
    },
  };

  const t = content[language];

  const navigation = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: language === "fr" ? "Activités" : "Activities",
      href: "#activites",
    },
    {
      label: language === "fr" ? "Tarifs" : "Pricing",
      href: "#tarifs",
    },
    {
      label: language === "fr" ? "Réalisations" : "Projects",
      href: "#realisations",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="row g-4 site-footer__top">

          {/* COLONNE 1 : LOGO + DESCRIPTION + RÉSEAUX */}
          <div className="col-md-4">

            <a href="#top" className="site-footer__brand">
              <img
                src="/images/logo-devflo.png"
                className="site-footer__logo"
                alt={siteConfig.brand}
              />

              <span className="site-footer__brand-info">
                <span className="site-footer__brand-name">
                  {siteConfig.brand}
                </span>

                <span className="site-footer__tagline">
                  {siteConfig.tagline}
                </span>
              </span>
            </a>

            <p className="site-footer__about">
              {t.about}
            </p>

            <div className="site-footer__social">

              <a
                href="#"
                className="site-footer__social-btn"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="site-footer__social-btn"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                className="site-footer__social-btn"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href={siteConfig.phoneHref}
                className="site-footer__social-btn"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

            </div>

          </div>

          {/* COLONNE 2 : NAVIGATION */}
          <div className="col-md-4">

            <h3 className="site-footer__heading">
              {t.navigation}
            </h3>

            <ul className="list-unstyled site-footer__navigation">

              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <i className="fa-solid fa-chevron-right"></i>
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* COLONNE 3 : CONTACT */}
          <div className="col-md-4">

            <h3 className="site-footer__heading">
              {t.contact}
            </h3>

            <ul className="list-unstyled site-footer__contact">

              <li>
                <a href={siteConfig.phoneHref}>
                  <i className="fa-solid fa-phone"></i>
                  <span>{siteConfig.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
              </li>

              <li>
                <a href={`mailto:${siteConfig.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                  <span>{siteConfig.email}</span>
                </a>
              </li>

              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                  {siteConfig.location}
                </span>
              </li>

            </ul>

            <a href="#contact" className="site-footer__cta">
              {t.quote}
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="site-footer__bottom">

          <p>
            © {new Date().getFullYear()} {siteConfig.brand}.{" "}
            {t.rights}
          </p>

          <p>
            {t.tunisia}
          </p>

        </div>

      </div>
    </footer>
  );
}

export default SiteFooter;

