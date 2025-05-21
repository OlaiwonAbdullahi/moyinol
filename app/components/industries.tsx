import React from "react";
import { BsBuilding, BsBank } from "react-icons/bs";
import { FaBalanceScale, FaRegBuilding } from "react-icons/fa";

const IndustryCard = ({
  title,
  description,
  icon,
  borderClasses,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderClasses: string;
}) => {
  return (
    <div
      className={`font-lato p-8 md:p-10 transition-all duration-300 hover:bg-[#1E3A8A]/5  ${borderClasses}`}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-lg mr-3">
          {icon}
        </div>
        <h3 className="font-unbounded text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <a
        href="#"
        className="inline-block mt-4 text-[#1E3A8A] font-medium text-sm hover:underline"
      >
        Learn more →
      </a>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "Finance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam atque doloribus?",
      icon: <BsBank className="w-5 h-5" />,
      borderClasses: "border-[#1E3A8A] border-r border-b rounded-br-2xl",
    },
    {
      title: "Legal & Professional Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam atque doloribus?",
      icon: <FaBalanceScale className="w-5 h-5" />,
      borderClasses: "border-[#1E3A8A] border-l border-b rounded-bl-2xl",
    },
    {
      title: "Real Estate & Investment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam atque doloribus?",
      icon: <FaRegBuilding className="w-5 h-5" />,
      borderClasses: "border-[#1E3A8A] border-r border-t rounded-tr-2xl",
    },
    {
      title: "Insurance & Pension",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam atque doloribus?",
      icon: <BsBuilding className="w-5 h-5" />,
      borderClasses: "border-[#1E3A8A] border-l border-t rounded-tl-2xl",
    },
  ];

  return (
    <div className="font-lato max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <span className="bg-[#1E3A8A]/10 text-[#1E3A8A] text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-3">
          Industries
        </span>
        <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base leading-relaxed">
          Explore how we help businesses across various industries achieve
          growth, optimize operations, and navigate challenges with our expert
          consulting services.
        </p>
      </div>

      {/* Grid with Center Divider */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Center Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full   z-10 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#1E3A8A]"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 relative">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              borderClasses={industry.borderClasses}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
