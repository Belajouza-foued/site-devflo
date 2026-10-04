"use client";

import { useLanguage } from "../context/LanguageContext";
import "../components/css/Hero.css";

function Hero() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title:
        "Un site web qui donne à votre activité l’image qu’elle mérite",

      lead:
        "Je conçois des sites modernes, rapides et responsive pour les entreprises, commerces, hôtels et restaurants qui veulent être visibles et joignables en ligne — de la première esquisse à la mise en ligne.",

      quote: "Demander un devis",
      projects: "Voir mes réalisations",

      sectors: "secteurs d’activité",
      languages: "langues possibles",
      startingPrice: "tarif de départ",

      home: "Accueil",
      services: "Services",
      realizations: "Réalisations",
      contact: "Contact",

      mockupTitle: "Votre site web professionnel",
      mockupSubtitle: "Moderne, rapide et responsive",
      mockupQuote: "Demander un devis",

      design: "Design",
      development: "Développement",
      responsive: "Responsive",

      badge: "responsive",
    },

    en: {
      title:
        "A website that gives your business the image it deserves",

      lead:
        "I create modern, fast and responsive websites for businesses, shops, hotels and restaurants that want to be visible and reachable online — from the first sketch to launch.",

      quote: "Request a quote",
      projects: "View my projects",

      sectors: "business sectors",
      languages: "available languages",
      startingPrice: "starting price",

      home: "Home",
      services: "Services",
      realizations: "Projects",
      contact: "Contact",

      mockupTitle: "Your professional website",
      mockupSubtitle: "Modern, fast and responsive",
      mockupQuote: "Request a quote",

      design: "Design",
      development: "Development",
      responsive: "Responsive",

      badge: "responsive",
    },
  };

  const t = content[language];

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 className="hero__title">
              {t.title}
            </h1>

            <p className="hero__lead">
              {t.lead}
            </p>

            <div className="hero__actions">
               <a
            href="#contact"
            className="btn-white-custom"
          >Demander un devis
            {t.button}

            <i className="bi bi-arrow-right"></i>
          </a>

              <a href="#realisations" className="hero__link">
                {t.projects}
              </a>
            </div>

            <div className="row hero__stats g-3">
              <div className="col-4">
                <p className="hero__stat-number">5</p>
                <p className="hero__stat-label">
                  {t.sectors}
                </p>
              </div>

              <div className="col-4">
                <p className="hero__stat-number">3</p>
                <p className="hero__stat-label">
                  {t.languages}
                </p>
              </div>

              <div className="col-4">
                <p className="hero__stat-number">500 DT</p>
                <p className="hero__stat-label">
                  {t.startingPrice}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero__mockup-wrap">

              <div className="hero__mockup">

                {/* Barre navigateur */}
                <div className="hero__mockup-bar">
                  <span className="hero__dot hero__dot--violet"></span>
                  <span className="hero__dot hero__dot--primary"></span>
                  <span className="hero__dot hero__dot--ink"></span>

                  <span className="hero__mockup-url">
                    devflo.tn
                  </span>
                </div>

                {/* Contenu du site */}
                <div className="hero__mockup-body">

                  {/* Navigation */}
                  <div className="hero__mockup-nav">

                    <span className="skeleton skeleton--nav-logo">
                      DEVFLO
                    </span>

                    <span className="skeleton skeleton--nav-item">
                      {t.home}
                    </span>

                    <span className="skeleton skeleton--nav-item">
                      {t.services}
                    </span>

                    <span className="skeleton skeleton--nav-item">
                      {t.realizations}
                    </span>

                    <span className="skeleton skeleton--nav-cta">
                      {t.contact}
                    </span>

                  </div>

                  {/* Grande bannière */}
                  <div className="hero__mockup-banner"></div>

                  {/* Texte */}
                  <span className="skeleton skeleton--line-1">
                    {t.mockupTitle}
                  </span>

                  <span className="skeleton skeleton--line-2">
                    {t.mockupSubtitle}
                  </span>

                  {/* Bouton */}
                  <span className="skeleton skeleton--button">
                    {t.mockupQuote}
                  </span>

                  {/* Cartes */}
                  <div className="row g-2 hero__mockup-grid">

                    <div className="col-4">
                      <span className="skeleton skeleton--tile">
                        {t.design}
                      </span>
                    </div>

                    <div className="col-4">
                      <span className="skeleton skeleton--tile">
                        {t.development}
                      </span>
                    </div>

                    <div className="col-4">
                      <span className="skeleton skeleton--tile">
                        {t.responsive}
                      </span>
                    </div>

                  </div>

                </div>
              </div>

              {/* Badge */}
              <div className="hero__badge d-none d-sm-block">
                <p className="hero__badge-number">
                  100 %
                </p>

                <p className="hero__badge-label">
                  {t.badge}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;