"use client";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsBank, BsBuilding, BsClipboardData } from "react-icons/bs";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { PiGavelLight, PiIdentificationCardLight } from "react-icons/pi";
import Image from "next/image";

const Hero = () => {
  // Icons data with different starting positions and animation properties
  const floatingIcons = [
    { Icon: BsBank, top: "10%", left: "5%", size: 45, delay: 0, duration: 20 },
    {
      Icon: PiGavelLight,
      top: "15%",
      right: "8%",
      size: 45,
      delay: 2,
      duration: 25,
    },
    {
      Icon: BsClipboardData,
      top: "30%",
      left: "12%",
      size: 45,
      delay: 5,
      duration: 22,
    },
    {
      Icon: BsBuilding,
      top: "25%",
      right: "15%",
      size: 45,
      delay: 8,
      duration: 18,
    },
    {
      Icon: LiaBalanceScaleSolid,
      top: "25%",
      left: "50%",
      size: 60,
      delay: 12,
      duration: 24,
    },
    {
      Icon: PiIdentificationCardLight,
      top: "65%",
      right: "10%",
      size: 45,
      delay: 15,
      duration: 30,
    },
  ];

  // State to control icons visibility
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    // Delay the appearance of icons slightly after component mount
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col font-lato items-center md:py-28 py-27 px-4 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Floating Icons */}
      {showIcons &&
        floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute text-[#1E3A8A]/20 animate-pulse"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animation: `float ${item.duration}s ease-in-out infinite ${item.delay}s`,
              opacity: 0.7,
            }}
          >
            <item.Icon size={item.size} />
          </div>
        ))}

      {/* Badge with dots */}
      <div className="bg-blue-100 rounded-full md:px-6 px-3 py-1 text-[#1E3A8A] font-medium text-sm mb-5 z-10">
        <div className="flex items-center space-x-2 md:space-x-1">
          <span>Innovative</span>
          <GoDotFill size={14} className="text-[#1E3A8A]" />
          <span>Professional</span>
          <GoDotFill size={14} className="text-[#1E3A8A]" />
          <span>Reliable</span>
        </div>
      </div>

      {/* Headline and subheading */}
      <div className="text-center mb-12 space-y-6 z-10">
        <h1 className="text-4xl font-unbounded md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
          Empowering Compliance Through Innovative, Risk-Based Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Moyinol Consulting Limited combines deep regulatory expertise with
          innovative solutions to help financial institutions stay compliant,
          proactive, and prepared for future challenges in AML and financial
          advisory.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="px-8 py-3 justify-center cursor-pointer whitespace-nowrap flex items-center gap-2.5 bg-[#1E3A8A] hover:bg-blue-900 text-white font-medium rounded-lg transition-colors">
            Get Started <GoArrowUpRight className="size-5" />
          </button>
          <button className="px-8 py-3 cursor-pointer justify-center whitespace-nowrap flex items-center gap-2.5 border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50 font-medium rounded-lg transition-colors">
            Learn More <IoIosArrowRoundForward className="size-5" />
          </button>
        </div>
      </div>

      {/* Hero image with gradient overlay and shadow */}
      <div className="w-full relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent rounded-2xl"></div>
        <Image
          src={"/hero.png"}
          width={1000}
          height={1000}
          alt="Digital solutions showcase"
          className="w-full h-96 md:h-96 object-cover rounded-2xl shadow-xl"
        />

        {/* Floating stats cards */}
        <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg hidden md:block">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-4xl font-bold text-[#1E3A8A]">95%</p>
              <p className="text-sm text-gray-600">Client satisfaction</p>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div>
              <p className="text-4xl font-bold text-[#1E3A8A]">500+</p>
              <p className="text-sm text-gray-600">Projects completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add this style to the component to define the float animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
