import React from "react";
import Hero from "./components/hero";
import Vision from "./components/vision";
import Mission from "./components/mision";
import Values from "./components/values";

const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Vision />
      <Mission />
      <Values />
    </div>
  );
};

export default Page;
