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
      title: 'What We Collect',
      gradient: 'from-pink-500 to-rose-500',
      content: `We collect:
• Your contact details (name, email, phone)
• Device info for repairs
• Website usage data via cookies

Only what's needed for excellent service.`
    },
    {
      id: 'information-use',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'How We Use It',
      gradient: 'from-purple-500 to-indigo-500',
      content: `Your data helps us:
• Book and manage your repair services.
• Communicate about services
• Improve our platform
• Send important updates

Simple, focused, secure.`
    },
    {
      id: 'information-sharing',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Sharing Policy',
      gradient: 'from-blue-500 to-cyan-500',
      content: `We never sell your data. Period.

Limited sharing only for:
• Essential service providers
• Legal requirements
• With your consent

Your trust is everything.`
    },
    {
      id: 'data-security',
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Your Privacy, Protected',
      gradient: 'from-green-500 to-emerald-500',
      content: `Bank-level protection:
• SSL encryption everywhere
• Secure servers & access controls
• Regular security audits
• Trained staff only

Your data fortress.`
    },
    {
      id: 'your-rights',
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Your Rights',
      gradient: 'from-yellow-500 to-orange-500',
      content: `You control your data:
• View what we have
• Correct any errors
• Delete your info
• Opt-out anytime

Contact us below to exercise these rights.`
    },
    {
      id: 'cookies',
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Cookies',
      gradient: 'from-violet-500 to-purple-500',
      content: `Cookies help us:
• We use cookies to improve performance and personalize your experience. You can disable them in your browser anytime.

Manage via browser settings.`
    }
  ];

  const floatingElements = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full opacity-20 animate-pulse"
      style={{
        left: `${25 + i * 20}%`,
        top: `${15 + i * 15}%`,
        animationDelay: `${i * 0.7}s`,
        animationDuration: `${2.5 + i * 0.2}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingElements}
      </div>
      
      {/* Dynamic cursor glow - hidden on mobile */}
      <div 
        className="fixed w-64 h-64 sm:w-96 sm:h-96 rounded-full pointer-events-none z-0 opacity-10 blur-3xl transition-all duration-300 hidden sm:block"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="relative z-10 py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          
          {/* Compact Header */}
          <div className={`text-center mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block mb-3 sm:mb-4">
              <div className="absolute inset-0 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Privacy Policy
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-3 sm:mb-4">
              Simple, transparent, <span className="text-blue-400 font-bold">secure</span>.
            </p>
          </div>

          {/* Compact Hero */}
          <div className="backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 mb-6 sm:mb-8 transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 animate-pulse" />
                Our Promise
              </h2>
              <p className="w-full text-xs sm:text-sm text-gray-300 leading-relaxed mx-auto">
                At <span className='text-[#1aa3dd]'>iFixit.PK</span> your privacy is very important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or use our mobile phone repair services.
              </p>
            </div>
          </div>

          {/* Compact Privacy Sections */}
          <div className="space-y-3 sm:space-y-4">
            {privacySections.map((section, index) => (
              <div 
                key={section.id}
                className={`transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.01] group">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${section.gradient} rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                        {section.icon}
                      </div>
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {section.title}
                      </h3>
                    </div>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center transform group-hover:rotate-180 transition-all duration-300`}>
                      {expandedSections[section.id] ? (
                        <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      ) : (
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {expandedSections[section.id] && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 animate-in slide-in-from-top duration-300">
                      <div className="bg-black/20 backdrop-blur-lg rounded-lg p-3 sm:p-4 ml-10 sm:ml-13 border border-white/10">
                        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Compact Contact Section */}
          <div className="mt-6 sm:mt-8 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl text-white p-4 sm:p-6 border border-white/20">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                Questions?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto">
                Get quick answers from our privacy team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Email", info: "privacy@repair.com", gradient: "from-pink-500 to-rose-500" },
                { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Call", info: "+1 (555) 123-4567", gradient: "from-blue-500 to-cyan-500" },
                { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Visit", info: "123 Tech St, City", gradient: "from-purple-500 to-indigo-500" }
              ].map((contact, index) => (
                <div key={index} className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${contact.gradient} rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-1">{contact.title}</h3>
                  <p className="text-blue-100 text-xs group-hover:text-white transition-colors duration-300 break-words">{contact.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Footer */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="inline-block backdrop-blur-xl rounded-lg p-3 sm:p-4 border border-white/20 max-w-lg mx-auto">
              <p className="text-gray-300 text-xs sm:text-sm">
                This policy evolves with technology. We'll notify you of changes.
              </p>
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs text-gray-400">
                  © 2024 iFixit | v2.1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;