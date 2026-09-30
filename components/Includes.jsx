"use client";

import "./css/Includes.css";

const features = [
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
];

export default function Includes() {
  return (
    <section className="includes-section">
      <div className="container">
        <div className="includes-inner">

          <div className="includes-heading">
            <span className="includes-label">
              CE QUI EST INCLUS
            </span>

            <h2 className="includes-title">
              Chaque site comprend.
            </h2>
          </div>

          <div className="includes-grid">
            {features.map((feature) => (
              <div className="includes-item" key={feature.title}>
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