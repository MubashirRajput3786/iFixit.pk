import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Shield, Eye, Lock, Users, Phone, Mail, MapPin, Smartphone, Zap, Star } from 'lucide-react';

const PrivacyPolicySection = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const privacySections = [
    {
      id: 'information-collection',
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Information We Collect',
      gradient: 'from-pink-500 to-rose-500',
      content: `We collect information you provide directly to us when you:
      • Schedule repair appointments
      • Create an account on our website
      • Contact us for support or inquiries
      • Subscribe to our newsletter
      
      This may include your name, email address, phone number, device information, and repair details. We also automatically collect certain information about your device and how you interact with our website through cookies and similar technologies.`
    },
    {
      id: 'information-use',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'How We Use Your Information',
      gradient: 'from-purple-500 to-indigo-500',
      content: `We use the information we collect to:
      • Provide and improve our mobile repair services
      • Process and fulfill repair orders
      • Communicate with you about appointments and services
      • Send you important updates and promotional materials
      • Analyze usage patterns to enhance user experience
      • Comply with legal obligations and protect our rights`
    },
    {
      id: 'information-sharing',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Information Sharing and Disclosure',
      gradient: 'from-blue-500 to-cyan-500',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
      • With service providers who assist in our operations
      • When required by law or to protect our legal rights
      • In connection with a business transfer or acquisition
      • With your explicit consent
      
      All third-party service providers are contractually bound to protect your information and use it only for specified purposes.`
    },
    {
      id: 'data-security',
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Data Security',
      gradient: 'from-green-500 to-emerald-500',
      content: `We implement industry-standard security measures to protect your personal information:
      • SSL encryption for data transmission
      • Secure servers with restricted access
      • Regular security audits and updates
      • Employee training on data protection
      
      While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to take precautions when sharing personal information online.`
    },
    {
      id: 'your-rights',
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Your Privacy Rights',
      gradient: 'from-yellow-500 to-orange-500',
      content: `You have the right to:
      • Access the personal information we hold about you
      • Request correction of inaccurate information
      • Request deletion of your personal information
      • Opt-out of marketing communications
      • Request data portability
      
      To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.`
    },
    {
      id: 'cookies',
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Cookies and Tracking',
      gradient: 'from-violet-500 to-purple-500',
      content: `We use cookies and similar technologies to:
      • Remember your preferences and settings
      • Analyze website traffic and usage patterns
      • Provide personalized content and advertisements
      • Improve website functionality
      
      You can control cookie settings through your browser preferences. Disabling cookies may affect some website features.`
    }
  ];

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
      style={{
        left: `${20 + i * 15}%`,
        top: `${10 + i * 12}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${2 + i * 0.3}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Custom CSS for mobile scrolling animation */}
      <style jsx>{`
        @keyframes mobileScrollText {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          10% {
            transform: translateY(0);
            opacity: 1;
          }
          90% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-10px);
            opacity: 0.8;
          }
        }

        .mobile-scroll-content {
          animation: mobileScrollText 3s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .mobile-scroll-content {
            animation: none;
          }
        }

        .char {
          display: inline-block;
          opacity: 0;
          animation: charFadeIn 0.1s ease-in-out forwards;
        }

        @keyframes charFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-typing-effect {
          overflow: hidden;
        }

        @media (max-width: 639px) {
          .mobile-typing-effect .char {
            animation: mobileCharReveal 0.05s ease-in-out forwards;
          }
        }

        @keyframes mobileCharReveal {
          from {
            opacity: 0;
            transform: translateX(-5px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0">
        {floatingElements}
      </div>
      
      {/* Dynamic cursor glow - hidden on mobile */}
      <div 
        className="fixed w-64 h-64 sm:w-96 sm:h-96 rounded-full pointer-events-none z-0 opacity-10  blur-3xl transition-all duration-300 hidden sm:block"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block mb-4 sm:mb-6 lg:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full blur-lg sm:blur-xl opacity-60 animate-pulse"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 lg:mb-6  bg-clip-text text-transparent animate-pulse leading-tight">
              Privacy Policy
            </h1>
            
            <div className="relative px-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 lg:mb-8 font-light">
                Your privacy is our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold">obsession</span>. 
                Discover how we protect your digital life.
              </p>
            </div>
            
            <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl max-w-xs sm:max-w-none mx-auto">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-spin flex-shrink-0" style={{ animationDuration: '3s' }} />
              <div className="text-center sm:text-left">
                <div className="text-white font-semibold text-base sm:text-lg">Mobile Repair Experts</div>
                <div className="text-gray-400 text-xs sm:text-sm">Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
              </div>
            </div>
          </div>

          {/* Hero Introduction */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-purple-500/20">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-2 sm:mb-0 sm:mr-4 animate-pulse" />
                Our Sacred Promise
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl lg:max-w-4xl mx-auto">
                In the digital age, your privacy isn't just important—it's <span className="text-blue-400 font-bold">everything</span>. 
                We've built our entire mobile repair service around one core principle: your personal information stays personal, 
                period. Here's exactly how we make that happen.
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {privacySections.map((section, index) => (
              <div 
                key={section.id}
                className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-[1.01] group">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-1 min-w-0">
                      <div className={`relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${section.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                        <div className="relative text-white">
                          {section.icon}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 break-words">
                          {section.title}
                        </h3>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1 hidden sm:block">Click to expand details</div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-2 sm:ml-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center transform group-hover:rotate-180 transition-all duration-500`}>
                        {expandedSections[section.id] ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {expandedSections[section.id] && (
                    <div className="px-4 sm:px-6 lg:px-10 pb-4 sm:pb-6 lg:pb-8 animate-in slide-in-from-top duration-500">
                      <div className="bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 ml-0 sm:ml-16 lg:ml-22 border border-white/10">
                        <div className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg whitespace-pre-line mobile-scroll-content mobile-typing-effect">
                          {section.content.split('').map((char, charIndex) => (
                            <span 
                              key={charIndex} 
                              className="char" 
                              style={{ 
                                animationDelay: `${charIndex * 20}ms`,
                                animationFillMode: 'forwards'
                              }}
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16 relative">
            <div className="absolute inset-0  rounded-2xl sm:rounded-3xl blur-xl"></div>
            <div className="relative  backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl text-white p-6 sm:p-8 lg:p-12 border border-white/20">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4">
                  Questions? We're Here to Help!
                </h2>
                <p className="text-blue-100 text-sm sm:text-base lg:text-xl max-w-xl lg:max-w-3xl mx-auto leading-relaxed">
                  Your privacy questions deserve immediate answers. Reach out through any of these channels 
                  and get expert responses from our privacy team.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Email Us", info: "privacy@mobilerepair.com", gradient: "from-pink-500 to-rose-500" },
                  { icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Call Us", info: "+1 (555) 123-4567", gradient: "from-blue-500 to-cyan-500" },
                  { icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Visit Us", info: "123 Tech Street, City, State", gradient: "from-purple-500 to-indigo-500" }
                ].map((contact, index) => (
                  <div key={index} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 sm:col-span-1 last:sm:col-span-2 last:lg:col-span-1">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${contact.gradient} rounded-full mb-3 sm:mb-4 lg:mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative`}>
                      <div className="absolute inset-0 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300"></div>
                      <div className="relative text-white">
                        {contact.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors duration-300">{contact.title}</h3>
                    <p className="text-blue-100 text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-300 break-words">{contact.info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Note - Completed */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-block backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-2xl mx-auto">
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                This privacy policy is a <span className="text-blue-400 font-bold">living document</span> that evolves with technology and regulations. 
                We'll always notify you of any changes via email and update the "Last Modified" date above. 
                Your continued use of our services means you accept these updates.
              </p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                <p className="text-xs sm:text-sm text-gray-400">
                  © 2024 Mobile Repair Experts. All rights reserved. | Version 2.1
                </p>
              </div>
            </div>
          </div>

          {/* Integration Acknowledgment */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-500 bg-black/20 backdrop-blur rounded-full px-3 sm:px-4 py-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Integrated with modern React best practices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;