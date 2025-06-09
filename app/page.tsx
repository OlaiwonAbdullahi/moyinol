"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
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
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
        delay: 100,
        disable: window.innerWidth < 768,
      });
      AOS.refresh();
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="industries">
        <Industries />
      </section>
      <section id="services">
        <Service />
      </section>
    </main>
  );
};

export default HomePage;
