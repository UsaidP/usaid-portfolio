import Hero from "./components/hero/Hero.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      {/* <section id="portfolio"> */}
      <Portfolio />
      {/* </section> */}
      <section id="contact">
        <Contact />
      </section>
      {/* <Test /> */}
      {/* <Test3d /> */}
    </div>
  );
};

export default App;
