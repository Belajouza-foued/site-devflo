
import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import Intro from "./Intro";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";
import Services from "./Services";
import Includes from "./Includes";
import FAQ from "./FAQ";
import Activities from "./Activities";
import Pricing from "./Pricing";
import WhyUs from "./WhyUs";
import Process from "./Process";
import Cta from "./Cta";
import Contact from "./Contact";
import SiteFooter from "./SiteFooter";

function LandingPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <Intro />
        <ProjectsCarousel />
        <Services />
        <Includes />
        <FAQ />
        <Activities />
        <Pricing />
        <WhyUs />
        <Process />
        <Cta />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}

export default LandingPage;

