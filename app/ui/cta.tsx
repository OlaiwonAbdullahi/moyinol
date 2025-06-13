import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/about.png')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Ready to Transform Your Business?
          </h1>
          <p className="text-gray-300 mb-6">
            Partner with us for expert guidance and strategy that drive growth
            and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <button className="bg-transparent border border-white text-[#1E3A8A] font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
                Contact Us
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="bg-[#1E3A8A] text-white font-semibold py-2 px-6 rounded hover:bg-[#1E3A8A]/80 hover:border-[#1E3A8A] hover:border transition">
                Get Your Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
