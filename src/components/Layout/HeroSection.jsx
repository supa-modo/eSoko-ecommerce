import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[730px]">
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-7xl font-bold mb-2">
            eSoko Online Fashion Store
          </h1>
          <h1 className="text-5xl font-bold mb-4">'Spirit of Fashion'</h1>
          <p className="text-2xl italic mb-6">Shine in Your Element</p>
          <a
            href="#"
            className="px-12 py-3 mb-20 bg-brand-primary text-white hover:bg-gray-100 transition rounded-full font-semibold"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
