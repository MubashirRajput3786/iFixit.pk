import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaMobileAlt,
  FaBatteryFull,
  FaTablet,
  FaTools,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const MobileRepairServices = () => {
  const cardsRef = useRef([]);

  const services = [
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Screen Replacement",
      description:
        "Cracked screen? We replace it with high-quality OEM or premium aftermarket displays.",
    },
    {
      icon: <FaBatteryFull className="w-8 h-8" />,
      title: "Battery Replacement",
      description:
        "Slow charging or quick drainage? Get a new battery with improved performance.",
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Water Damage Repair",
      description:
        "Accidental water exposure? We'll diagnose and repair water-damaged components.",
    },
    {
      icon: <FaTablet className="w-8 h-8" />,
      title: "Software Issues",
      description:
        "Freezing, crashing, or boot loops? Our software experts will fix your device.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Data Recovery",
      description:
        "Lost important data? We specialize in recovering photos, contacts, and files.",
    },
    {
      icon: <FaTachometerAlt className="w-8 h-8" />,
      title: "Performance Boost",
      description:
        "Slow device? We optimize performance through hardware and software solutions.",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:h-2"></div>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileRepairServices;
