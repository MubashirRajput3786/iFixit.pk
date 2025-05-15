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
    <section className="py-16  text-white">
      <div className="max-w-7xl mx-auto px-4">
           <div className="col-lg-6 p-5">
              <div className="dot-div position-relative">
                <div className="my-dot position-absolute"></div>
                <h2 className="display-2 fw-bold">Our Services</h2>
              </div>
            </div>
        <div className="grid my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <RepairServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
