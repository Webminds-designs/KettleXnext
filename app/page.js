"use client"
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import TechInfused from "./components/TechInfused";
import HowToUse from "./components/HowToUse";
import LidSection from "./components/LidSection";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const checkLoadStatus = useCallback(() => {
    if (document.readyState === 'complete') {
      // Give a slight delay to ensure smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    // Set minimum display time for preloader (1 second)
    const minDisplayTimer = setTimeout(() => {
      checkLoadStatus();
    }, 1000);

    // Increment progress over time to show activity
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        // Max progress at 90% until fully loaded
        const newProgress = prevProgress + (1 - prevProgress / 100) * 3;
        return Math.min(newProgress, 90);
      });
    }, 100);

    // Check if document is already loaded
    if (!checkLoadStatus()) {
      // If not loaded yet, add event listener
      window.addEventListener('load', () => {
        clearInterval(progressTimer);
        setProgress(100);
        checkLoadStatus();
      });

      // Fallback in case load event doesn't fire
      const fallbackTimer = setTimeout(() => {
        clearInterval(progressTimer);
        setProgress(100);
        setLoading(false);
      }, 8000); // 8 second maximum wait time

      return () => {
        clearTimeout(minDisplayTimer);
        clearInterval(progressTimer);
        clearTimeout(fallbackTimer);
        window.removeEventListener('load', checkLoadStatus);
      };
    } else {
      clearTimeout(minDisplayTimer);
      clearInterval(progressTimer);
      setProgress(100);
      return () => {};
    }
  }, [checkLoadStatus]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader progress={progress} />}
      </AnimatePresence>

      <div className={`overflow-hidden ${loading ? "hidden" : "block"}`}>
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

        <section>
          <LidSection />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}
