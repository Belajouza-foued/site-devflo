"use client";
import { useRef, useState } from "react";
import "./ProjectsCarousel.css";

const projects = [
  {
    title: "RIMAG Export",
    description:
      "Site web professionnel pour une entreprise tunisienne spécialisée dans l’exportation de produits alimentaires.",
    image: "/images/projet-rimag.png",
    technologies: ["Next.js", "React", "TypeScript"],
    url: "https://rimag.tn",
  },

  {
    title: "Seafield",
    description:
      "Site web moderne pour une entreprise spécialisée dans les solutions et services maritimes.",
    image: "/images/projet-seafield.png",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://test-seafield.vercel.app/",
  },

  {
    title: "SPA",
    description:
      "Site web élégant pour un espace de bien-être et de soins, avec une présentation claire des services proposés.",
    image: "/images/site-spa-1.png",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://spa-massage-steel.vercel.app/",
  },

  {
    title: "World Fitness",
    description:
      "Site web dédié au fitness et au sport, avec une interface dynamique présentant les activités et les services.",
    image: "/images/projet-worldfitness.png",
    technologies: ["React", "JavaScript", "Bootstrap"],
    url: "https://react-project-git-world-fitness-foueds-projects-55b6a7cf.vercel.app/",
  },

  {
    title: "Gym Store",
    description:
      "Boutique en ligne dédiée aux équipements et accessoires de fitness, avec une interface pensée pour faciliter la navigation.",
    image: "/images/projet-gym-store.png",
    technologies: ["React","Bootstrap", "JavaScript", "Bootstrap"],
    url: "https://gym-sport-nine.vercel.app/",
  },

  {
    title: "Farjallah Auto",
    description:
      "Plateforme web pour la vente de pièces automobiles, avec catalogue de produits, recherche et gestion des commandes.",
    image: "/images/projet-farjalah.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://farjallah-react-4ffg.vercel.app",
  },

  {
    title: "Projet Guide",
    description:
      "Site web professionnel conçu pour présenter l’activité, les services et les informations essentielles de l’entreprise.",
    image: "/images/projet-firas.png",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://site-firas.vercel.app/index.html",
  },

  {
    title: "BCC",
    description:
      "Site web professionnel avec une présentation moderne de l’entreprise, de ses services et de ses informations principales.",
    image: "/images/projet-bcc.png",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://bcc-socity.vercel.app/home",
  },
  {
  title: "Printpakia",
  description:
    "Site web professionnel pour une entreprise spécialisée dans l’impression et la personnalisation de différents produits.",
  image: "/images/projet-printpakia.png",
  technologies: ["React", "JavaScript", "CSS"],
  url: "https://vercel.com/foueds-projects-55b6a7cf/printakia-offset",
},
];

function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goToProject = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart.current - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextProject();
      } else {
        previousProject();
      }
    }

    touchStart.current = null;
  };

  const project = projects[activeIndex];

  return (
    <section className="projects-carousel">
      <div className="projects-carousel__container">

        {/* HEADER */}
        <div className="projects-carousel__header">
          <span className="projects-carousel__eyebrow">
            Mes réalisations
          </span>

          <h2 className="projects-carousel__title">
            Des sites pensés pour être vus
          </h2>

          <p className="projects-carousel__intro">
            Découvrez quelques-uns de mes projets web réalisés avec une
            attention particulière au design, à l’expérience utilisateur et
            au responsive.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="projects-carousel__wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* PREVIOUS */}
          <button
            type="button"
            className="projects-carousel__arrow projects-carousel__arrow--prev"
            onClick={previousProject}
            aria-label="Projet précédent"
          >
            ‹
          </button>

          {/* CARD */}
          <article className="project-card">

            {/* BROWSER */}
            <div className="project-card__browser">

              <div className="project-card__browser-top">

                <div className="project-card__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="project-card__address">
                  {project.url.replace("https://", "")}
                </div>

              </div>

              <div className="project-card__screen">
                <img
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title}`}
                />
              </div>

            </div>

            {/* CONTENT */}
            <div className="project-card__content">

              <div className="project-card__number">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>

              <h3 className="project-card__title">
                {project.title}
              </h3>

              <p className="project-card__description">
                {project.description}
              </p>

              <div className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                Voir le projet
                <span>→</span>
              </a>

            </div>

          </article>

          {/* NEXT */}
          <button
            type="button"
            className="projects-carousel__arrow projects-carousel__arrow--next"
            onClick={nextProject}
            aria-label="Projet suivant"
          >
            ›
          </button>

        </div>

        {/* DOTS */}
        <div className="projects-carousel__dots">

          {projects.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`projects-carousel__dot ${
                activeIndex === index
                  ? "projects-carousel__dot--active"
                  : ""
              }`}
              onClick={() => goToProject(index)}
              aria-label={`Afficher ${item.title}`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectsCarousel;
