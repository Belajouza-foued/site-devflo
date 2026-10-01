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
    },

    en: {
      about:
        "Modern, fast and responsive business and e-commerce websites, designed to give your business a professional online presence.",
      navigation: "Navigation",
      contact: "Contact",
      quote: "Request a quote",
      rights: "All rights reserved.",
    },
  };

  const t = content[language];

  const navigation = [
    {
      label: language === "fr" ? "Services" : "Services",
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
      label: language === "fr" ? "Contact" : "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="row gy-5 site-footer__top">

          {/* Marque */}
          <div className="col-lg-4">
            <a
              href="#top"
              className="site-footer__brand"
            >
              <img
                src="/images/logo-devflo.png"
                className="site-footer__logo"
                alt={siteConfig.brand}
              />

              <span>
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
          </div>

          {/* Navigation */}
          <div className="col-6 col-lg-3">
            <h3 className="site-footer__heading">
              {t.navigation}
            </h3>

            <ul className="list-unstyled site-footer__links">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-lg-3">
            <h3 className="site-footer__heading">
              {t.contact}
            </h3>

            <ul className="list-unstyled site-footer__links site-footer__contact">

              <li>
                <a
                  className="res-contact"
                  href={siteConfig.phoneHref}
                >
                  <i className="fa-solid fa-phone"></i>
                  {siteConfig.phone}
                </a>
              </li>

              <li>
                <a
                  className="res-contact"
                  href={`mailto:${siteConfig.email}`}
                >
                  <i className="fa-solid fa-envelope"></i>
                  {siteConfig.email}
                </a>
              </li>

              <li className="site-footer__static">
                <i className="fa-solid fa-location-dot"></i>
                {siteConfig.location}
              </li>

            </ul>
          </div>

          {/* Appel à l'action */}
          <div className="col-lg-2">
            <a
              href="#contact"
              className="btn site-footer__cta"
            >
              {t.quote}
            </a>
          </div>

        </div>

        <div className="site-footer__bottom">

          <p className="site-footer__copy">
            © {new Date().getFullYear()} {siteConfig.brand}.{" "}
            {t.rights}
          </p>

          <p className="site-footer__copy">
            {language === "fr" ? "Tunisie" : "Tunisia"}
          </p>

        </div>

      </div>
    </footer>
  );
}

export default SiteFooter;