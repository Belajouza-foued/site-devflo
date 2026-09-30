
import "../components/css/Hero.css";
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 className="hero__title">
              Un site web qui donne à votre activité l&apos;image qu&apos;elle mérite
            </h1>

            <p className="hero__lead">
              Je conçois des sites modernes, rapides et responsive pour les
              entreprises, commerces, hôtels et restaurants qui veulent être
              visibles et joignables en ligne — de la première esquisse à la
              mise en ligne.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn-primary btn-lg rounded-pill hero__btn-primary">
                Demander un devis
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
              <a href="#realisations" className="hero__link">
                Voir mes réalisations
              </a>
            </div>

            <div className="row hero__stats g-3">
              <div className="col-4">
                <p className="hero__stat-number">5</p>
                <p className="hero__stat-label">secteurs d&apos;activité</p>
              </div>
              <div className="col-4">
                <p className="hero__stat-number">3</p>
                <p className="hero__stat-label">langues possibles</p>
              </div>
              <div className="col-4">
                <p className="hero__stat-number">500 DT</p>
                <p className="hero__stat-label">tarif de départ</p>
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
            Accueil
          </span>

          <span className="skeleton skeleton--nav-item">
            Services
          </span>

          <span className="skeleton skeleton--nav-item">
            Réalisations
          </span>

          <span className="skeleton skeleton--nav-cta">
            Contact
          </span>

        </div>

        {/* Grande bannière */}
        <div className="hero__mockup-banner">
        </div>

        {/* Texte */}
        <span className="skeleton skeleton--line-1">
          Votre site web professionnel
        </span>

        <span className="skeleton skeleton--line-2">
          Moderne, rapide et responsive
        </span>

        {/* Bouton */}
        <span className="skeleton skeleton--button">
          Demander un devis
        </span>

        {/* Cartes */}
        <div className="row g-2 hero__mockup-grid">

          <div className="col-4">
            <span className="skeleton skeleton--tile">
              Design
            </span>
          </div>

          <div className="col-4">
            <span className="skeleton skeleton--tile">
              Développement
            </span>
          </div>

          <div className="col-4">
            <span className="skeleton skeleton--tile">
              Responsive
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
        responsive
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
