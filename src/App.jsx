import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Expertise from "./components/sections/Expertise";
import Process from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import Cta from "./components/sections/Cta";
import Contact from "./components/sections/Contact";
import Privacy from "./components/sections/Privacy";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Expertise />
      <Process />
      <Portfolio />
      <Cta />
      <Contact />
      <Privacy />
      <Footer />
      <BackToTop />
    </div>
  );
}
