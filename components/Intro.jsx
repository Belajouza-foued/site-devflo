import "../components/css/Intro.css";

function Intro() {
  return (
    <section className="intro">
  <div className="container">
    <div className="row g-4">
      
      <div className="col-lg-4">
        <h2 className="intro__title">
          Votre projet web, pensé pour votre activité
        </h2>
      </div>

      <div className="col-lg-7 offset-lg-1">
        <p className="intro__text">
          Votre site web est souvent le premier contact entre votre entreprise
          et vos futurs clients. Je crée des sites modernes, rapides et
          responsive, conçus pour présenter votre activité avec une image
          professionnelle.
        </p>

        <p className="intro__text">
          De la conception au développement et à la mise en ligne, chaque projet
          est pensé pour être clair, efficace et facile à utiliser, sur
          ordinateur comme sur smartphone.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}

export default Intro;
