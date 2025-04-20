import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import TechInfused from "./components/TechInfused";

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section>
        <TechInfused />
      </section>

      <section>
        <HowToUse />
      </section>

    </div>
  );
}
