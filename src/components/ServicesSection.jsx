import React from "react";
import RepairServiceCard from "./RepairServiceCard";

const services = [
  {
    type: "repair",
    title: "Motherboard Repair",
    description: "Expert-level motherboard repairs using advanced tools and original components.",
  },
  {
    type: "screen",
    title: "Screen Replacement",
    description: "Quick and quality screen replacements with warranty and assurance.",
  },
  {
    type: "battery",
    title: "Battery Replacement",
    description: "Safe and certified battery replacements to extend device life.",
  },
  {
    type: "security",
    title: "Water Damage Repair",
    description: "Advanced diagnostics and repairs for water-damaged phones.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Mobile Repairing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <RepairServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
