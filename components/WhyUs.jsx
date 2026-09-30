import "./css/WhyUs.css";

const POINTS = [
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
];

function WhyUs() {
  return (
    <section className="whyus">
      <div className="container">

        <div className="whyus__header">
          <span className="whyus__eyebrow">
            POURQUOI DEVFLO
          </span>

          <h2 className="section-title">
            Une création web pensée autour de votre activité.
          </h2>

          <p className="whyus__intro">
            Je vous accompagne de la conception à la mise en ligne,
            avec une approche simple, directe et adaptée à votre projet.
          </p>
        </div>

        <div className="whyus__timeline">
          {POINTS.map((p) => (
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