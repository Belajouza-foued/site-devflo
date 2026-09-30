import "./css/Services.css";

const SERVICES = [
  { icon: "fa-globe", title: "Site vitrine", text: "Présentez votre entreprise, vos services, vos produits et vos coordonnées sur un site professionnel." },
  { icon: "fa-cart-shopping", title: "Site e-commerce", text: "Vendez vos produits en ligne avec une boutique adaptée à votre activité." },
  { icon: "fa-mobile-screen-button", title: "Design responsive", text: "Votre site s'adapte parfaitement aux téléphones, tablettes et ordinateurs." },
  { icon: "fa-bolt", title: "Performance", text: "Des sites rapides et optimisés, pour une bonne expérience à chaque visite." },
  { icon: "fa-magnifying-glass", title: "Référencement", text: "Une structure et des bonnes pratiques SEO pour améliorer votre visibilité." },
  { icon: "fa-envelope", title: "Formulaire de contact", text: "Vos visiteurs vous contactent facilement, directement depuis le site." },
  { icon: "fa-language", title: "Site multilingue", text: "Un site en français, anglais et arabe, selon les besoins de vos clients." },
  { icon: "fa-rocket", title: "Mise en ligne", text: "Domaine, hébergement et publication : je vous accompagne jusqu'au bout." },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="section-title">Mes services</h2>
            <p className="section-lead">
              De la présentation en ligne à la boutique complète, chaque site
              est construit pour répondre à un objectif précis.
            </p>
          </div>
        </div>

        <div className="row services__list">
          {SERVICES.map((s) => (
            <div className="col-md-6 services__item" key={s.title}>
              <div className="services__row">
                <span className="services__icon">
                  <i className={`fa-solid ${s.icon}`}></i>
                </span>
                <div>
                  <h3 className="services__item-title">{s.title}</h3>
                  <p className="services__item-text">{s.text}</p>
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
