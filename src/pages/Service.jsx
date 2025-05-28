import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Particless } from "../components/Particles";
import MobileRepairServices from "../components/MobileRepaieServices";
import AnimatedButton from "../components/AnimatedButton";

const Service = () => {
  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <Particless />

      <div className="relative z-10 text-white p-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="col-lg-6 p-5">
            <div className="dot-div position-relative">
              <div className="my-dot position-absolute"></div>
              <h2 ref={headingRef} className="display-2 fw-bold">
                Our Services
              </h2>
            </div>
          </div>

          {/* Animated Button Centered */}
         

          {/* Warranty Text - Only on md and up */}
          <div className="w-full my-3 hidden md:block">
            <h2 className="text-3xl text-white font-bold text-right m-10">
              All Services Come with a 30-Day Warranty
            </h2>
          </div>

          {/* Animated Service Cards */}
          <MobileRepairServices />
          <div className="flex justify-center my-6">
            <AnimatedButton content={"Book My Repair"} />
          </div>
      </div>
        </div>
        
    </div>
  );
};

export default Service;
