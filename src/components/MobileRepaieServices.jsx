import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Import different icons
import {
  FaDatabase,
  FaMobileAlt,
  FaBug,
  FaChargingStation,
  FaTools,
  FaHdd,
  FaEnvelopeOpenText,
  FaSmile,
  FaWindowRestore,
  FaBolt,
  FaTint,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const MobileRepairServices = () => {
  const cardsRef = useRef([]);

  const services = [
    { icon: <FaDatabase />, image: "/serviceImages/data-rescue.jpg", title: "Data Rescue", description: "Expert solutions to recover data from damaged devices. We handle hardware failures, water damage, and software corruption." },
    { icon: <FaMobileAlt />, image: "/serviceImages/screen-replacment.jpg", title: "Screen Replacement", description: "Premium quality screen replacements with warranty. We use OEM or certified aftermarket parts." },
    { icon: <FaBug />, image: "/serviceImages/data-rescue.jpg", title: "Software Troubleshooting", description: "Fix freezing, crashing, or boot loop issues with our advanced diagnostic tools." },
    { icon: <FaChargingStation />, image: "/serviceImages/data-rescue.jpg", title: "Charging Issues", description: "Repair charging ports, replace batteries, and solve power management problems." },
    { icon: <FaTools />, image: "/serviceImages/data-rescue.jpg", title: "Genuine OEM Parts", description: "We use only authentic manufacturer parts for all replacements and repairs." },
    { icon: <FaHdd />, image: "/serviceImages/data-rescue.jpg", title: "Storage Replacement", description: "EMMC, UFS, and NAND chip replacements to solve storage-related issues." },
    { icon: <FaEnvelopeOpenText />, image: "/serviceImages/data-rescue.jpg", title: "Message Removal", description: "Remove unwanted messages and notifications from your device securely." },
    { icon: <FaSmile />, image: "/serviceImages/data-rescue.jpg", title: "Face ID Repair", description: "Specialized repair services for Face ID and biometric sensor issues." },
    { icon: <FaWindowRestore />, image: "/serviceImages/data-rescue.jpg", title: "Glass Repair", description: "Professional front and back glass replacement with precision tools." },
    { icon: <FaBolt />, image: "/serviceImages/data-rescue.jpg", title: "Short Circuit Repair", description: "Diagnose and repair half and full short circuit issues in mobile devices." },
    { icon: <FaTint />, image: "/serviceImages/data-rescue.jpg", title: "Liquid Damage", description: "Advanced cleaning and repair for water-damaged devices with corrosion treatment." },
    { icon: <FaRocket />, image: "/serviceImages/data-rescue.jpg", title: "Performance Boost", description: "Hardware and software optimization to restore your device's peak performance." },
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
      
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .card-inner {
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }
        .group:hover .card-inner {
          transform: rotateY(180deg);
        }
        .card-face {
          backface-visibility: hidden;
        }
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
     

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group perspective"
            >
              <div className="card-inner relative w-full h-72 rounded-xl shadow-lg border-2 border-[#1AA3DD] ">
                {/* Front Side */}
                <div className="card-face absolute w-full h-full rounded-xl flex flex-col items-center justify-center overflow-hidden">
  <div
    className="h-full w-full relative bg-cover bg-center"
    style={{ backgroundImage: `url(${service.image})` }}
  >
    {/* Light transparent overlay without blur */}
    <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

    {/* Content on top of overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <div className="text-[#1AA3DD] text-4xl mb-2 animate-bounce">
        {service.icon}
      </div>
      <h3 className="text-white text-xl font-semibold hover:text-[#1AA3DD]">
        {service.title}
      </h3>
    </div>
  </div>
</div>


                {/* Back Side */}
                <div className="card-face card-back absolute w-full h-full p-4 rounded-xl flex flex-col items-center justify-center bg-transparent text-center">
                  <div className=" text-3xl mb-3 animate-bounce">
                    {service.icon}
                  </div>
                  <p className="text-[#1AA3DD] font-bold text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileRepairServices;
