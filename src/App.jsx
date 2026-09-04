import Preloader from "./components/layout/Preloader";
import NavOverlay from "./components/layout/NavOverlay";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Expertise from "./components/sections/Expertise";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Privacy from "./components/sections/Privacy";

export default function App() {
  return (
    <div className="bg-bone-50 text-ink-950">
      <Preloader />
      <NavOverlay />
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Contact />
      <Privacy />
      <Footer />
    </div>
  );
}
