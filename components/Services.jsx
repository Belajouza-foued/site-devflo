"use client";

import { useLanguage } from "../context/LanguageContext";
import "./css/Services.css";

const SERVICES = {
  fr: [
    {
      icon: "fa-globe",
      title: "Site vitrine",
      text: "Présentez votre entreprise, vos services, vos produits et vos coordonnées sur un site professionnel.",
    },
    {
      icon: "fa-cart-shopping",
      title: "Site e-commerce",
      text: "Vendez vos produits en ligne avec une boutique adaptée à votre activité.",
    },
    {
      icon: "fa-mobile-screen-button",
      title: "Design responsive",
      text: "Votre site s'adapte parfaitement aux téléphones, tablettes et ordinateurs.",
    },
    {
      icon: "fa-bolt",
      title: "Performance",
      text: "Des sites rapides et optimisés, pour une bonne expérience à chaque visite.",
    },
    {
      icon: "fa-magnifying-glass",
      title: "Référencement",
      text: "Une structure et des bonnes pratiques SEO pour améliorer votre visibilité.",
    },
    {
      icon: "fa-envelope",
      title: "Formulaire de contact",
      text: "Vos visiteurs vous contactent facilement, directement depuis le site.",
    },
    {
      icon: "fa-language",
      title: "Site multilingue",
      text: "Un site en français, anglais et arabe, selon les besoins de vos clients.",
    },
    {
      icon: "fa-rocket",
      title: "Mise en ligne",
      text: "Domaine, hébergement et publication : je vous accompagne jusqu'au bout.",
    },
  ],

  en: [
    {
      icon: "fa-globe",
      title: "Business website",
      text: "Present your business, services, products and contact details on a professional website.",
    },
    {
      icon: "fa-cart-shopping",
      title: "E-commerce website",
      text: "Sell your products online with an online store adapted to your business.",
    },
    {
      icon: "fa-mobile-screen-button",
      title: "Responsive design",
      text: "Your website adapts perfectly to phones, tablets and computers.",
    },
    {
      icon: "fa-bolt",
      title: "Performance",
      text: "Fast and optimized websites for a smooth experience on every visit.",
    },
    {
      icon: "fa-magnifying-glass",
      title: "SEO",
      text: "A well-structured website with SEO best practices to improve your online visibility.",
    },
    {
      icon: "fa-envelope",
      title: "Contact form",
      text: "Your visitors can easily contact you directly from your website.",
    },
    {
      icon: "fa-language",
      title: "Multilingual website",
      text: "A website available in French, English and Arabic according to your customers' needs.",
    },
    {
      icon: "fa-rocket",
      title: "Website launch",
      text: "Domain, hosting and publication: I support you throughout the entire process.",
    },
  ],
};

function Services() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Mes services",
      lead:
        "De la présentation en ligne à la boutique complète, chaque site est construit pour répondre à un objectif précis.",
    },

    en: {
      title: "My services",
      lead:
        "From an online business presentation to a complete e-commerce store, each website is built to meet a specific objective.",
    },
  };

  const t = content[language];
  const services = SERVICES[language];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="section-title">{t.title}</h2>

            <p className="section-lead">
              {t.lead}
            </p>
          </div>
        </div>

        <div className="row services__list">
          {services.map((s) => (
            <div
              className="col-md-6 services__item"
              key={s.title}
            >
              <div className="services__row">
                <span className="services__icon">
                  <i className={`fa-solid ${s.icon}`}></i>
                </span>

                <div>
                  <h3 className="services__item-title">
                    {s.title}
                  </h3>

                  <p className="services__item-text">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;