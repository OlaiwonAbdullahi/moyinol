import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Mission = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-unbounded lg:text-4xl font-bold text-[#1E3A8A] leading-tight">
                Our Mission
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1E3A8A] rounded-full"></div>
              <p className="text-lg font-lato lg:text-xl text-gray-700 leading-relaxed pl-6 font-light">
                To deliver expert-driven AML and compliance solutions that
                empower businesses to operate with integrity, transparency, and
                regulatory confidence.
              </p>
            </div>

            <div className="pt-4">
              <button className=" gap-3.5 font-unbounded inline-flex items-center px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                Learn More
                <FiArrowRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/about.png"
                width={800}
                height={600}
                alt="Modern office space representing our vision"
                className="w-full h-64 lg:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
