import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Particless } from "../components/Particles";

const contact = () => {
  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 2.5, ease: "power3.out" }
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
              <h2
                ref={headingRef}
                className="display-2 fw-bold"
              >
                Contact
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default contact;
