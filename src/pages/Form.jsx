import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Particless } from "../components/Particles";
import MobileBookingForm from '../components/MobileBookingForm';

const form = () => {
  const headingRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  return (
    <div className="relative min-h-screen">
      <Particless />
      <div className="relative z-10 text-white p-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="col-lg-6 p-5">
            <div className="dot-div position-relative">
              <div className="my-dot position-absolute"></div>
              <h2 ref={headingRef} className="display-2 fw-bold mb-8">
                Book My Repair
              </h2>
            </div>

            {/* ✅ BookingForm Rendered */}
            
          </div>
          <div ref={formRef} className="mt-8">
              <MobileBookingForm />
            </div>
        </div>
      </div>
    </div>
  );
};

export default form;
