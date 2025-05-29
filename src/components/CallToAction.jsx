import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSupportAgent } from 'react-icons/md'; // React Icons

const imageUrls = [
  'https://humenglish.com/wp-content/uploads/2024/09/iPhone-16-price-in-Pakistan-SMK-MOJO-222-Sadaan-1024x576.jpg',
  'https://blog.metrofone.co.uk/wp-content/uploads/2020/10/iphone-12-pro-max-deals.jpg',
  'https://www.notebookcheck.net/fileadmin/_processed_/a/8/csm_Apple_iPhone_16_Pro_Concept2_619ca17f5b.jpg',
];

const CallToAction = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageUrls.length);
    }, 6000); // 6 seconds for demo

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image always centered and covered on all screens */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${imageUrls[currentImage]})`,
          zIndex: -2,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-[-1]" />

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
