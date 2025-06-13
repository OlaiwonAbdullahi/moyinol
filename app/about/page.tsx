import React from "react";
import Hero from "./components/hero";
import Vision from "./components/vision";
import Mission from "./components/mision";
import Values from "./components/values";
import Intro from "./components/intro";

const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Intro />
      <Vision />
      <Mission />
      <Values />
    </div>
  );
};

export default Page;
