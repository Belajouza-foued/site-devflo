import "./css/Process.css";

const STEPS = [
  { n: "01", title: "Échange", text: "Vous me présentez votre activité et votre idée." },
  { n: "02", title: "Proposition", text: "Je vous propose une solution adaptée à vos besoins et à votre budget." },
  { n: "03", title: "Création", text: "Je conçois votre site avec un design adapté à votre activité." },
  { n: "04", title: "Validation", text: "Nous vérifions ensemble le contenu et les différentes pages." },
  { n: "05", title: "Mise en ligne", text: "Votre site est publié sur votre domaine et accessible à vos clients." },
];

function Process() {
  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">Comment ça fonctionne</h2>

        <ol className="process__list list-unstyled">
          {STEPS.map((s) => (
            <li className="process__step" key={s.n}>
              <span className="process__dot"></span>
              <span className="process__number">{s.n}</span>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
