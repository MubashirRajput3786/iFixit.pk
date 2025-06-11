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
    name: "iFixit Pakistan",
    address: "M-Dubai Tower, Lethrar Road, Khanna Pull, Islamabad",
    city: "FF-32 , 1st Floor",
    phone: {
      primary: "+92-51-2619229",
      secondary: "+92-308-4977779"
    },
    email: "rizwan.14397@gmail.com",
    hours: {
      weekdays: "Sat - Thurs: 11 AM to 10 PM",
    },
    // Full address for Google Maps
    fullAddress: "FF-32, 1st Floor, M-Dubai Tower, Lethrar Road, Khanna Pull, Islamabad, Pakistan"
  };

  // Function to open Google Maps with directions to iFixit.Pk
  const openGoogleMaps = () => {
    // Direct link to iFixit.Pk on Google Maps
    const googleMapsUrl = `https://www.google.com/maps/place/iFixit.Pk/@33.616007,72.921301,15z/data=!4m6!3m5!1s0x38dfeb3f071f0ba9:0x5dc4cff421ca684b!8m2!3d33.616007!4d72.921301!16s%2Fg%2F11c5h9_xyz`;
    
    // Open Google Maps in a new tab/window
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div ref={containerRef} className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div 
          ref={cardRef}
          className="text-center mb-12 relative"
        >
          <div className="absolute inset-0 rounded-3xl blur-3xl"></div>
          <div className="relative backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#1aa3dd]">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4">
              {shopData.name}
            </h1>
            <p className="text-xl text-[#1aa3dd] max-w-2xl mx-auto leading-relaxed">
              Empowering you to repair — iFixit
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Location Card */}
          <div 
            ref={addToRefs}
            className="backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            onClick={openGoogleMaps}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Visit Us</h3>
            <p className="text-[#1aa3dd] text-center text-sm leading-relaxed">
              {shopData.address}
            </p>
            <p className="text-white font-bold text-center text-sm mt-1">
              {shopData.city}
            </p>
            <p className="text-green-600 text-center text-xs mt-2 font-medium">
              Click for directions
            </p>
          </div>

          {/* Phone Card */}
          <div 
            ref={addToRefs}
            className="backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-bold text-center mt-1">Call Us</h3>
            <a 
              href={`tel:${shopData.phone.primary}`}
              className="block text-green-600 hover:text-green-700 font-medium text-center transition-colors text-sm"
            >
              {shopData.phone.primary}
            </a>
            <a 
              href={`tel:${shopData.phone.secondary}`}
              className="block text-green-600 hover:text-green-700 font-medium text-center transition-colors text-sm mt-1"
            >
              {shopData.phone.secondary}
            </a>
            <p className="text-white font-bold text-center mt-1">Tap to call</p>
          </div>

          {/* Email Card */}
          <div 
            ref={addToRefs}
            className="backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-center">Email Us</h3>
            <a 
              href={`mailto:${shopData.email}`}
              className="block text-[#1aa3dd] hover:text-blue-700 font-medium text-center transition-colors text-sm"
            >
              {shopData.email}
            </a>
            <p className="text-white font-bold text-center mt-1">Quick response</p>
          </div>

          {/* Hours Card */}
          <div 
            ref={addToRefs}
            className="backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#1aa3dd] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Opening Time</h3>
            <div className="text-center space-y-1">
              <p className="text-[#1aa3dd] text-2xl">{shopData.hours.weekdays}</p>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div 
          ref={addToRefs}
          className="backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#1aa3dd]"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Visit?</h2>
            <p className="text-[#1aa3dd] max-w-2xl mx-auto">
            Visit Our Shop – Tools, Parts & Repair Help All in One Place.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <button 
              ref={addToRefs}
              onClick={openGoogleMaps}
              className="flex-1 bg-gradient-to-r from-[#1aa3dd] to-blue-600 hover:from-blue-700 hover:to-[#1aa3dd] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl group transform hover:-translate-y-1"
            >
              <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get Directions</span>
            </button>
            
            <button 
              ref={addToRefs}
              className="flex-1 bg-white border-2 border-[#1aa3dd] hover:border-blue-600 text-[#1aa3dd] hover:text-[#1aa3dd] font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-purple-50 group transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Visit Website</span>
            </button>
          </div>
        </div>
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