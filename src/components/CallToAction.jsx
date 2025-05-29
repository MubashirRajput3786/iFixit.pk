import React from 'react';
import { Link } from 'react-router-dom';
import { MdSupportAgent } from 'react-icons/md'; // React Icons

const CallToAction = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center">
      {/* Background image with responsive positioning */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain sm:bg-cover sm:bg-top"
        style={{
          backgroundImage:
            "url('https://www.apple.com/v/iphone-16-pro/f/images/overview/product-stories/design/display__f5509jfp9nyq_xlarge.jpg')",
          zIndex: -2,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50 z-[-1]" />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="flex justify-center mb-6">
          <MdSupportAgent className="text-7xl text-sky-400 drop-shadow-lg animate-pulse" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-md">
          Need Help? We're Here for You
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          Whether it’s a question, issue, or feedback — our Customer Care team is just a click away.
          We’re committed to helping you quickly, efficiently, and with a human touch.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <button>Contact Customer Care</button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
