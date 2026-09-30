import "./css/Activities.css";

const ACTIVITIES = [
  { icon: "fa-building", title: "Entreprises", text: "Présentez votre société, vos services, vos réalisations et vos coordonnées.", accent: "primary" },
  { icon: "fa-bed", title: "Hôtels & maisons d'hôtes", text: "Chambres, services, photos, tarifs et informations de contact.", accent: "violet" },
  { icon: "fa-store", title: "Commerces", text: "Un catalogue en ligne pour que vos clients découvrent vos produits.", accent: "primary" },
  { icon: "fa-utensils", title: "Restaurants", text: "Menu, galerie photos, localisation, horaires et contact.", accent: "violet" },
  { icon: "fa-briefcase", title: "Professionnels & indépendants", text: "Une présence professionnelle pour développer votre activité.", accent: "primary" },
];

function Activities() {
  return (
    <section id="activites" className="activities">
      <div className="container">
        <h2 className="section-title">Des sites adaptés à votre activité</h2>

        <div className="row g-3 activities__grid">
          {ACTIVITIES.map((a) => (
            <div className="col-6 col-md-4 col-lg" key={a.title}>
              <div className="card activities__card h-100">
                <span className={`activities__accent activities__accent--${a.accent}`}></span>
                <i className={`fa-solid ${a.icon} activities__icon`}></i>
                <h3 className="activities__title">{a.title}</h3>
                <p className="activities__text">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
