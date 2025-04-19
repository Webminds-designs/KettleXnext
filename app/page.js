import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";

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
        
    </div>
  );
}
