import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import gsap from "gsap";

const AnimatedButton = ({ content }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0, y: -50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative w-full  px-8 py-4 overflow-hidden font-bold text-white tracking-wider 
                 transition-all duration-500 ease-in-out bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] 
                 rounded-full border-2 border-[#1AA3DD] shadow-[0_10px_30px_rgba(26,163,221,0.5)] group hover:scale-105"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1AA3DD] opacity-20 group-hover:w-56 group-hover:h-56 group-hover:rounded-full group-hover:opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      
      <div className="relative z-10 flex items-center justify-center gap-3">
        <GoDotFill className="text-[#1AA3DD] text-xl group-hover:rotate-180 transition-all duration-500" />
        <span className="text-lg group-hover:text-[#1AA3DD]">{content}</span>
      </div>
    </button>
  );
};

export default AnimatedButton;
