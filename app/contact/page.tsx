import React from "react";
import Hero from "./components/hero";
import ContactForm from "./components/contactForm";
import ContactDetails from "./components/contactDetails";
//import Direction from "./components/direction";

const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <div className=" flex flex-col md:flex-row  p-6 bg-white items-start ">
        <div className=" md:w-1/2 w-full">
          <ContactForm />
        </div>
        <div className=" md:w-1/2 w-full">
          <ContactDetails />
        </div>
      </div>
      {/*
      <div className=" p-6">
      <Direction />
      </div>
      */}
    </div>
  );
};

export default Page;
