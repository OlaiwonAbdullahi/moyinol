import React from "react";
import { BsShield, BsTrophy, BsLightbulb } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";

const Values = () => {
  const values = [
    {
      icon: <GoBriefcase className="text-blue-600" />,
      title: "Professionalism",
      description: "Clear focus on our goals and future aspirations",
      bg: "bg-blue-50",
    },
    {
      icon: <BsShield className="text-green-600" />,
      title: "Trust",
      description:
        "Building Lasting relationships through honesty and reliability",
      bg: "bg-green-50",
    },
    {
      icon: <BsTrophy className="text-yellow-600" />,
      title: "Compliance Excellence",
      description: "Always aligning with global best Practices",
      bg: "bg-yellow-50",
    },

    {
      icon: <BsLightbulb className="text-orange-600" />,
      title: "Innovation",
      description: "Embracing smart solutions to improve compliance outcomes ",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#1E3A8A]/10 text-[#1E3A8A] text-sm font-semibold px-4 py-2 rounded-full">
            <span>Values</span>
          </div>
          <h2 className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb2 max-w-4xl mx-auto leading-tight">
            Our core values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, autem
            fugit vel consequuntur commodi harum, temporibus quos corrupti esse
            corporis laborum velit soluta inv
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-16 h-16 ${value.bg} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#1E3A8A] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E3A8A] to-blue-400 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
      </div>
    </div>
  );
};

export default Values;
