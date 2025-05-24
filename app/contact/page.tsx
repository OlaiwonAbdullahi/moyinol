import React from "react";
import Hero from "./components/hero";
import ContactForm from "./components/contactForm";
import ContactDetails from "./components/contactDetails";
import Direction from "./components/direction";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className=" flex flex-col md:flex-row  p-6 bg-white ">
        <div className=" w-1/2">
          <ContactForm />
        </div>
        <div className=" w-1/2">
          <ContactDetails />
        </div>
      </div>
      <div className=" p-6">
        <Direction />
      </div>
    </div>
  );
};

export default Page;
