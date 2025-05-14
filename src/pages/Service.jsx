import React from "react";
import ServicesSection from "../components/ServicesSection";
import { Particless } from "../components/Particles"; // 👈 Named export ka sahi import

const Service = () => {
  return (
    <div className="relative bg-black min-h-screen">
      <Particless /> {/* 👈 Yahan bhi correct naam use karein */}
      <div className="relative z-10 text-white p-10">
        
        <ServicesSection />
      </div>
    </div>
  );
};

export default Service;
