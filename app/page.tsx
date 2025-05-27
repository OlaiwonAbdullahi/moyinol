"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = dynamic(() => import("./components/hero"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96" />,
});

const About = dynamic(() => import("./components/about"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64" />,
});

const Service = dynamic(() => import("./components/service"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64" />,
});

const Industries = dynamic(() => import("./components/industries"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64" />,
});


const HomePage = () => {
  useEffect(() => {
    try {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true, 
        offset: 100, 
        delay: 100,
        disable: window.innerWidth < 768, 
      });

      AOS.refresh();
    } catch (error) {
      console.warn("AOS initialization failed:", error);
    }

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <section id="hero" role="banner">
        <Hero />
      </section>

      <section id="about" role="region" aria-label="About Us">
        <About />
      </section>

      <section id="industries" role="region" aria-label="Industries We Serve">
        <Industries />
      </section>

      <section id="services" role="region" aria-label="Our Services">
        <Service />
      </section>
    </main>
  );
};

export default HomePage;
