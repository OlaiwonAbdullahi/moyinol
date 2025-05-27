import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundSize: "cover",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white  leading-tight">
            About <span className="text-[#1E3A8A]">Us</span>
          </h1>
          <div className=" z-20 text-gray-300">Home | About</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
