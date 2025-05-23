import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex font-lato flex-col md:flex-row items-center gap-8 py-16 px-4 md:px-12 bg-white">
      <div className="space-y-6 md:w-1/2 w-full">
        <div className="bg-[#1E3A8A]/20 rounded-full w-fit px-4 py-1 text-[#1E3A8A] font-medium text-sm">
          About Us
        </div>
        <h2 className="font-unbounded text-3xl font-bold text-gray-800">
          Get to Know Moyinol -Where Compliance Meets Confidence
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Moyinol Consulting Limited is a trusted provider of Anti-Money
          Laundering (AML) compliance and financial advisory services. We
          support banks, fintechs, Money Service Businesses, Insurance
          Companies, Accountants and Auditing Firms, Non-Governmental
          Organizations (NGOs), Real Estates, law firms, and other regulated
          institutions in building strong AML frameworks and maintaining ongoing
          compliance with both local and international regulatory requirements.
          With a team of certified compliance professionals, project managers
          and legal experts, we bring a practical approach to helping clients
          detect, prevent, and respond to financial crime risks. Moyinol
          Consulting combines deep regulatory expertise with tailored,
          risk-based solutions to meet the evolving demands of today&apos;s
          compliance landscape.
        </p>
        <button className="flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1e3b8ad2] transition-colors text-white px-6 py-3 rounded-md font-medium">
          Learn More
          <BsArrowRight size={16} />
        </button>
      </div>
      <div className="md:w-[712px] h-[500px] w-full flex justify-center">
        <Image
          src={"/about.jpeg"}
          alt="Team collaboration"
          width={1000}
          height={1000}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;
