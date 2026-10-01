"use client";

import "./css/Activities.css";
import { useLanguage } from "../context/LanguageContext";

const ACTIVITIES = {
  fr: [
    {
      icon: "fa-building",
      title: "Entreprises",
      text: "Présentez votre société, vos services, vos réalisations et vos coordonnées.",
      accent: "primary",
    },
    {
      icon: "fa-bed",
      title: "Hôtels & maisons d'hôtes",
      text: "Chambres, services, photos, tarifs et informations de contact.",
      accent: "violet",
    },
    {
      icon: "fa-store",
      title: "Commerces",
      text: "Un catalogue en ligne pour que vos clients découvrent vos produits.",
      accent: "primary",
    },
    {
      icon: "fa-utensils",
      title: "Restaurants",
      text: "Menu, galerie photos, localisation, horaires et contact.",
      accent: "violet",
    },
    {
      icon: "fa-briefcase",
      title: "Professionnels & indépendants",
      text: "Une présence professionnelle pour développer votre activité.",
      accent: "primary",
    },
  ],

  en: [
    {
      icon: "fa-building",
      title: "Businesses",
      text: "Present your company, services, projects and contact details.",
      accent: "primary",
    },
    {
      icon: "fa-bed",
      title: "Hotels & guesthouses",
      text: "Rooms, services, photos, prices and contact information.",
      accent: "violet",
    },
    {
      icon: "fa-store",
      title: "Shops",
      text: "An online catalog where your customers can discover your products.",
      accent: "primary",
    },
    {
      icon: "fa-utensils",
      title: "Restaurants",
      text: "Menu, photo gallery, location, opening hours and contact details.",
      accent: "violet",
    },
    {
      icon: "fa-briefcase",
      title: "Professionals & freelancers",
      text: "A professional online presence to help develop your business.",
      accent: "primary",
    },
  ],
};

function Activities() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Des sites adaptés à votre activité",
    },

    en: {
      title: "Websites adapted to your business",
    },
  };

  const t = content[language];
  const activities = ACTIVITIES[language];

  return (
    <section id="activites" className="activities">
      <div className="container">

        <h2 className="section-title">
          {t.title}
        </h2>

        <div className="row g-3 activities__grid">
          {activities.map((a) => (
            <div
              className="col-6 col-md-4 col-lg"
              key={a.title}
            >
              <div className="card activities__card h-100">

                <span
                  className={`activities__accent activities__accent--${a.accent}`}
                ></span>

                <i
                  className={`fa-solid ${a.icon} activities__icon`}
                ></i>

                <h3 className="activities__title">
                  {a.title}
                </h3>

                <p className="activities__text">
                  {a.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Activities;