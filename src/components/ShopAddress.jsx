import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Star } from 'lucide-react';

const ShopAddress = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // GSAP animations
    const container = containerRef.current;
    const card = cardRef.current;
    const items = itemsRef.current;

    // Initial state
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      
      gsap.set(card, { y: 50, opacity: 0, scale: 0.9 });
      gsap.set(items, { x: -30, opacity: 0 });

      // Entrance animation
      const tl = gsap.timeline({ delay: 0.2 });
      
      tl.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .to(items, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4");

      // Hover animations
      const addHoverAnimation = (element) => {
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            y: -5,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      };

      items.forEach(addHoverAnimation);
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const shopData = {
    name: "iFixit",
    address: "123 Fashion Street, Downtown District",
    city: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "hello@urbanstyle.com",
    hours: {
      weekdays: "Mon - Fri: 9:00 AM - 8:00 PM",
      weekend: "Sat - Sun: 10:00 AM - 6:00 PM"
    },
    coordinates: "40.7128, -74.0060"
  };

  return (
    <div ref={containerRef} className="min-h-screen  p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div 
          ref={cardRef}
          className="text-center mb-12 relative"
        >
          <div className="absolute inset-0  rounded-3xl blur-3xl"></div>
          <div className="relative  backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#1aa3dd]">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold  bg-clip-text text-transparent mb-4">
              {shopData.name}
            </h1>
            <p className="text-xl text-[#1aa3dd] max-w-2xl mx-auto leading-relaxed">
              Experience fashion like never before at our premium boutique in the heart of the city
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Location Card */}
          <div 
            ref={addToRefs}
            className=" backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Visit Us</h3>
            <p className="text-[#1aa3dd] text-center text-sm leading-relaxed">
              {shopData.address}
            </p>
            <p className="text-[#1aa3dd] text-center text-sm font-medium mt-1">
              {shopData.city}
            </p>
          </div>

          {/* Phone Card */}
          <div 
            ref={addToRefs}
            className=" backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-center">Call Us</h3>
            <a 
              href={`tel:${shopData.phone}`}
              className="block text-green-600 hover:text-green-700 font-medium text-center transition-colors"
            >
              {shopData.phone}
            </a>
            <p className="text-[#1aa3dd] text-xs text-center mt-1">Tap to call</p>
          </div>

          {/* Email Card */}
          <div 
            ref={addToRefs}
            className=" backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold  mb-2 text-center">Email Us</h3>
            <a 
              href={`mailto:${shopData.email}`}
              className="block text-[#1aa3dd] hover:text-blue-700 font-medium text-center transition-colors text-sm"
            >
              {shopData.email}
            </a>
            <p className="text-gray-500 text-xs text-center mt-1">Quick response</p>
          </div>

          {/* Hours Card */}
          <div 
            ref={addToRefs}
            className=" backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Store Hours</h3>
            <div className="text-center space-y-1">
              <p className="text-[#1aa3dd] text-sm">{shopData.hours.weekdays}</p>
              <p className="text-[#1aa3dd] text-sm">{shopData.hours.weekend}</p>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div 
          ref={addToRefs}
          className=" backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#1aa3dd]"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold  mb-4">Ready to Visit?</h2>
            <p className="text-[#1aa3dd] max-w-2xl mx-auto">
              Get directions to our store or explore our collection online. We're here to help you find your perfect style.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <button 
              ref={addToRefs}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl group transform hover:-translate-y-1"
            >
              <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get Directions</span>
            </button>
            
            <button 
              ref={addToRefs}
              className="flex-1 bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-600 hover:text-purple-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-purple-50 group transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Visit Website</span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full blur-lg opacity-40"></div>
      </div>
    </div>
  );
};

// Load GSAP
if (typeof window !== 'undefined' && !window.gsap) {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
  document.head.appendChild(script);
}

export default ShopAddress;