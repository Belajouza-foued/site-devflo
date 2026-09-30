import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";
import Activities from "./Activities";
import Pricing from "./Pricing";
import WhyUs from "./WhyUs";
import Process from "./Process";
import Contact from "./Contact";
import SiteFooter from "./SiteFooter";
import FAQ from "./FAQ"
import Cta from "./Cta"
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel"
import Includes from "./Includes";

function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <ProjectsCarousel/>
        <Services />
          <Includes/>
        <FAQ/>
        <Activities />
        <Pricing />
        <WhyUs />
        <Process />
        <Cta/>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default LandingPage;
