import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Service from "./components/service";
import Industries from "./components/industries";
import Cta from "./ui/cta";

const Page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Industries />
      <Service />
    </div>
  );
};

export default Page;
