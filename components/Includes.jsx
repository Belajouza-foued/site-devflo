"use client";

import { useLanguage } from "../context/LanguageContext";
import "./css/Includes.css";

const features = {
  fr: [
    {
      image: "/images/conception-reactive.png",
      title: "Design responsive",
      text: "Votre site s'adapte parfaitement aux smartphones, tablettes et ordinateurs.",
    },
    {
      image: "/images/codage.png",
      title: "Design professionnel",
      text: "Une interface moderne conçue pour présenter votre activité avec une image professionnelle.",
    },
    {
      image: "/images/seo-img.png",
      title: "Performance optimisée",
      text: "Des pages rapides et optimisées pour offrir une bonne expérience à vos visiteurs.",
    },
    {
      image: "/images/site-internet.png",
      title: "Navigation intuitive",
      text: "Une navigation claire pour permettre à vos clients de trouver facilement les informations.",
    },
  ],

  en: [
    {
      image: "/images/conception-reactive.png",
      title: "Responsive design",
      text: "Your website adapts perfectly to smartphones, tablets and computers.",
    },
    {
      image: "/images/codage.png",
      title: "Professional design",
      text: "A modern interface designed to present your business with a professional image.",
    },
    {
      image: "/images/seo-img.png",
      title: "Optimized performance",
      text: "Fast and optimized pages to provide a smooth experience for your visitors.",
    },
    {
      image: "/images/site-internet.png",
      title: "Intuitive navigation",
      text: "Clear navigation that allows your customers to easily find the information they need.",
    },
  ],
};

function Includes() {
  const { language } = useLanguage();

  const content = {
    fr: {
      label: "CE QUI EST INCLUS",
      title: "Chaque site comprend.",
    },

    en: {
      label: "WHAT'S INCLUDED",
      title: "Every website includes.",
    },
  };

  const t = content[language];
  const currentFeatures = features[language];

  return (
    <section className="includes-section">
      <div className="container">
        <div className="includes-inner">

          <div className="includes-heading">
            <span className="includes-label">
              {t.label}
            </span>

            <h2 className="includes-title">
              {t.title}
            </h2>
          </div>

          <div className="includes-grid">
            {currentFeatures.map((feature) => (
              <div
                className="includes-item"
                key={feature.title}
              >
                <div className="includes-icon">
                  <img
                    src={feature.image}
                    alt={feature.title}
                  />
                </div>

                <div className="includes-text">
                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Includes;