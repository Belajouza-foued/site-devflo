import "./css/Pricing.css";

const PLANS = [
  {
    name: "Starter",
    price: "500 DT",
    note: "À partir de",
    text: "Pour une petite activité qui souhaite être présente sur Internet.",
    features: [
      "Site vitrine",
      "Design moderne",
      "Responsive mobile",
      "Jusqu'à 5 pages",
      "Formulaire de contact",
      "Mise en ligne",
    ],
    cta: "Demander un devis",
    featured: false,
  },
  {
    name: "Professionnel",
    price: "900 DT",
    note: "À partir de",
    text: "Pour une entreprise qui souhaite présenter son activité de manière complète.",
    features: [
      "Design personnalisé",
      "Plusieurs pages",
      "Responsive mobile, tablette et ordinateur",
      "Formulaire de contact",
      "Galerie photos",
      "Google Maps",
      "SEO de base",
      "Mise en ligne",
      "Site multilingue selon les besoins",
    ],
    cta: "Demander un devis",
    featured: true,
  },
  {
    name: "Sur mesure",
    price: "Devis personnalisé",
    note: null,
    text: "Pour les projets nécessitant des fonctionnalités spécifiques.",
    features: [
      "E-commerce",
      "Catalogue produits",
      "Système de réservation",
      "Espace client",
      "Administration",
      "Multilingue",
      "Fonctionnalités personnalisées",
    ],
    cta: "Parlons de votre projet",
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="tarifs" className="pricing">
      <div className="container">

        <div className="row">
          <div className="col-lg-7">
            <span className="pricing__eyebrow">
              TARIFS
            </span>

            <h2 className="section-title">
              Des solutions adaptées à votre projet
            </h2>

            <p className="section-lead">
              Des offres à partir de 500 DT pour créer un site professionnel,
              moderne et adapté à votre activité. Chaque projet peut être
              personnalisé selon vos besoins.
            </p>
          </div>
        </div>

        <div className="row g-4 pricing__grid">
          {PLANS.map((plan) => (
            <div className="col-lg-4" key={plan.name}>

              <div
                className={`pricing__card ${
                  plan.featured ? "pricing__card--featured" : ""
                }`}
              >

                {plan.featured && (
                  <span className="pricing__badge">
                    Le plus choisi
                  </span>
                )}

                <h3 className="pricing__name">
                  {plan.name}
                </h3>

                <div className="pricing__price">
                  {plan.note && (
                    <span className="pricing__note">
                      {plan.note}
                    </span>
                  )}

                  <span className="pricing__amount">
                    {plan.price}
                  </span>
                </div>

                <p className="pricing__text">
                  {plan.text}
                </p>

                <ul className="pricing__features list-unstyled">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="pricing__cta"
                >
                  {plan.cta}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;