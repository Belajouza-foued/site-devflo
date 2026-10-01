"use client";

import { useLanguage } from "../context/LanguageContext";
import "./css/WhyUs.css";

const POINTS = {
  fr: [
    {
      number: "01",
      icon: "fa-user-check",
      title: "Un accompagnement personnalisé",
      text: "Chaque projet est conçu selon votre activité, vos objectifs et votre identité.",
    },
    {
      number: "02",
      icon: "fa-mobile-screen-button",
      title: "Un site pensé pour tous les écrans",
      text: "Votre site reste agréable à utiliser sur ordinateur, tablette et téléphone.",
    },
    {
      number: "03",
      icon: "fa-bolt",
      title: "Une technologie moderne",
      text: "React et Bootstrap pour créer des sites rapides, solides et faciles à maintenir.",
    },
    {
      number: "04",
      icon: "fa-comments",
      title: "Communication directe",
      text: "Vous échangez directement avec la personne qui réalise votre projet.",
    },
    {
      number: "05",
      icon: "fa-rocket",
      title: "Un suivi après la mise en ligne",
      text: "Le site peut continuer à évoluer avec votre activité et vos besoins.",
    },
  ],

  en: [
    {
      number: "01",
      icon: "fa-user-check",
      title: "Personalized support",
      text: "Each project is designed around your business, your goals and your identity.",
    },
    {
      number: "02",
      icon: "fa-mobile-screen-button",
      title: "A website designed for every screen",
      text: "Your website remains easy and enjoyable to use on desktop, tablet and mobile.",
    },
    {
      number: "03",
      icon: "fa-bolt",
      title: "Modern technology",
      text: "React and Bootstrap to create fast, reliable and easy-to-maintain websites.",
    },
    {
      number: "04",
      icon: "fa-comments",
      title: "Direct communication",
      text: "You communicate directly with the person building your project.",
    },
    {
      number: "05",
      icon: "fa-rocket",
      title: "Support after launch",
      text: "Your website can continue to evolve with your business and your needs.",
    },
  ],
};

function WhyUs() {
  const { language } = useLanguage();

  const content = {
    fr: {
      eyebrow: "POURQUOI DEVFLO",
      title: "Une création web pensée autour de votre activité.",
      intro:
        "Je vous accompagne de la conception à la mise en ligne, avec une approche simple, directe et adaptée à votre projet.",
    },

    en: {
      eyebrow: "WHY DEVFLO",
      title: "Web design built around your business.",
      intro:
        "I support you from design to launch, with a simple, direct approach tailored to your project.",
    },
  };

  const t = content[language];
  const points = POINTS[language];

  return (
    <section className="whyus">
      <div className="container">

        <div className="whyus__header">
          <span className="whyus__eyebrow">
            {t.eyebrow}
          </span>

          <h2 className="section-title">
            {t.title}
          </h2>

          <p className="whyus__intro">
            {t.intro}
          </p>
        </div>

        <div className="whyus__timeline">
          {points.map((p) => (
            <div className="whyus__point" key={p.title}>

              <div className="whyus__number">
                {p.number}
              </div>

              <div className="whyus__icon">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>

              <div className="whyus__content">
                <h3 className="whyus__title">
                  {p.title}
                </h3>

                <p className="whyus__text">
                  {p.text}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUs;