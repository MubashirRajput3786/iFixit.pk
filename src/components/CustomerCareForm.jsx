import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, User, Mail, Phone, FileText, MessageSquare, AlertTriangle, ChevronDown, Smartphone, Wrench, Shield, Clock, Award } from "lucide-react";

const CustomerCareForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    fault: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [toasts, setToasts] = useState([]);
  const [showFaultDropdown, setShowFaultDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [faultDropdownPosition, setFaultDropdownPosition] = useState("above");
  const [brandDropdownPosition, setBrandDropdownPosition] = useState("above");
  const brandInputRef = useRef(null);
  const brandDropdownRef = useRef(null);
  const faultDropdownRef = useRef(null);
  const faultInputRef = useRef(null);

  // Phone brands
  const phoneBrands = [
    "Apple",
    "Samsung",
    "Google",
    "OnePlus",
    "Xiaomi",
    "Oppo",
    "Vivo",
    "Huawei",
    "Realme",
    "Infinix",
    "Tecno",
    "Nokia",
    "Motorola",
    "Honor",
    "Other"
  ];

  // Fixed fault options with proper array structure
  const faultOptions = [
    {
      category: "Common Issues",
      items: [
        "Screen Replacement",
        "Battery Issues",
        "Charging Port Problems",
        "Water Damage Repair"
      ]
    },
    {
      category: "Hardware Issues",
      items: [
        "Speaker/Microphone Issues",
        "Camera Problems",
        "Home Button Repair",
        "Power Button Issues",
        "Motherboard Problems"
      ]
    },
    {
      category: "Software Issues",
      items: [
        "Software Issues",
        "Memory/Storage Issues",
        "Network/WiFi Problems",
        "Touch Screen Issues",
        "Overheating Problems"
      ]
    },
    {
      category: "Other Services",
      items: [
        "Device Unlocking",
        "Data Recovery",
        "General Consultation",
        "Physical Damage Assessment",
        "Warranty Claim Support",
        "Other issue not listed",
      ]
    }
  ];

  // Close dropdown when clicking outside and calculate dropdown position
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        brandDropdownRef.current &&
        !brandDropdownRef.current.contains(event.target) &&
        brandInputRef.current &&
        !brandInputRef.current.contains(event.target)
      ) {
        setShowBrandDropdown(false);
      }
      if (
        faultDropdownRef.current &&
        !faultDropdownRef.current.contains(event.target) &&
        faultInputRef.current &&
        !faultInputRef.current.contains(event.target)
      ) {
        setShowFaultDropdown(false);
      }
    };

    const updateDropdownPositions = () => {
      // Update fault dropdown position
      if (faultInputRef.current && showFaultDropdown) {
        const inputRect = faultInputRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const dropdownHeight = 300;

        const spaceBelow = windowHeight - inputRect.bottom;
        const spaceAbove = inputRect.top;

        if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
          setFaultDropdownPosition("above");
        } else {
          setFaultDropdownPosition("above"); // Always set to above as requested
        }
      }

      // Update brand dropdown position
      if (brandInputRef.current && showBrandDropdown) {
        const inputRect = brandInputRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const dropdownHeight = 240;

        const spaceBelow = windowHeight - inputRect.bottom;
        const spaceAbove = inputRect.top;

        if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
          setBrandDropdownPosition("above");
        } else {
          setBrandDropdownPosition("above"); // Always set to above as requested
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", updateDropdownPositions);
    window.addEventListener("scroll", updateDropdownPositions);

    if (showFaultDropdown || showBrandDropdown) {
      updateDropdownPositions();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateDropdownPositions);
      window.removeEventListener("scroll", updateDropdownPositions);
    };
  }, [showFaultDropdown, showBrandDropdown]);

  const showToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now();
    const toast = { id, message, type };
    setToasts(prev => [...prev, toast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFaultSelect = (fault) => {
    setForm({ ...form, fault });
    setShowFaultDropdown(false);
    
    if (fault !== "Other issue not listed") {
      setForm(prev => ({ ...prev, fault, message: "" }));
    } else {
      showToast("💡 Please describe your issue in the message field below", 'info', 3000);
    }
  };

  const handleBrandSelect = (brand) => {
    setForm({ ...form, brand });
    setShowBrandDropdown(false);
  };

  const handleBrandInputClick = () => {
    setShowBrandDropdown(true);
  };

  const filteredBrands = phoneBrands.filter(brand => 
    brand.toLowerCase().includes(form.brand.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.phone || !form.brand || !form.model || !form.fault) {
      showToast("Please fill in all required fields", 'error');
      return;
    }

    if (form.fault === "Other issue not listed" && !form.message.trim()) {
      showToast("Please describe the issue in the message field", 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showToast("Please enter a valid email address", 'error');
      return;
    }

    setIsSubmitting(true);
    showToast("🚀 Preparing your message...", 'loading');

    const whatsappMessage = `🔧 *New Customer Care Request*

👤 *Name:* ${form.name}
📧 *Email:* ${form.email}
📱 *Phone:* ${form.phone}
📱 *Brand:* ${form.brand}
📱 *Model:* ${form.model}
⚠️ *Fault Type:* ${form.fault}
${form.fault === "Other issue not listed" && form.message ? `💬 *Message:* ${form.message}` : ""}

---
Sent via Customer Care Form`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const ownerNumber = "923084977779";
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsSubmitting(false);
      
      showToast("🎉 Message sent successfully! Redirecting to WhatsApp...", 'success', 5000);
      
      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          phone: "",
          brand: "",
          model: "",
          fault: "",
          message: "",
        });
        showToast("✨ Form has been reset. Ready for your next message!", 'success', 3000);
      }, 2000);
    }, 1500);
  };

  const formFields = [
    { name: "name", label: "Full Name", type: "text", icon: User, placeholder: "Enter your full name" },
    { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "your.email@example.com" },
    { name: "phone", label: "Phone Number", type: "tel", icon: Phone, placeholder: "+92 300 1234567" },
  ];

  const getToastColor = (type) => {
    switch (type) {
      case 'error': return 'border-red-500 text-red-600';
      case 'success': return 'border-green-500 text-green-600';
      case 'loading': return 'border-blue-500 text-blue-600';
      default: return 'border-gray-500 text-gray-600';
    }
  };

  const showMessageField = form.fault === "Other issue not listed";

  return (
    <div className="min-h-screen ">
      {/* Toast notifications */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`bg-white px-4 py-3 rounded-lg shadow-lg border-2 font-medium text-sm max-w-sm animate-fade-in ${getToastColor(toast.type)}`}
          >
            {toast.message}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#1aa3dd] to-[#0d7fb5] rounded-2xl mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                iFixit
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/80 mt-2">
                  Customer Care
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Expert mobile phone repair services. We fix it right, we fix it fast.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#1aa3dd]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Quality Guaranteed</h3>
                  <p className="text-white/60">Professional repair with genuine parts and warranty</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#1aa3dd]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Quick Response</h3>
                  <p className="text-white/60">Fast turnaround time for most repairs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#1aa3dd]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Expert Technicians</h3>
                  <p className="text-white/60">Certified professionals with years of experience</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/80 text-sm">
                📱 <strong>24/7 Support Available</strong><br />
                Contact us anytime for urgent repairs or queries
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#1aa3dd] to-[#0d7fb5] p-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Get Help Now</h2>
                  <p className="text-white/80 text-sm">Fill out the form below and we'll get back to you</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formFields.map(({ name, label, type, icon: Icon, placeholder }) => (
                      <div key={name} className="space-y-1">
                        <label className="text-white/90 text-sm font-medium flex items-center gap-1">
                          <Icon className="w-4 h-4 text-[#1aa3dd]" />
                          {label} *
                        </label>
                        <div className="relative">
                          <input
                            type={type}
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(name)}
                            onBlur={() => setFocusedField("")}
                            placeholder={placeholder}
                            required
                            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all duration-300 text-sm ${
                              focusedField === name
                                ? "border-[#1aa3dd] focus:ring-[#1aa3dd]/30 bg-white/10"
                                : "border-white/20 hover:border-white/30"
                            }`}
                          />
                          <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1aa3dd] transition-all duration-300 ${
                            focusedField === name ? "w-full" : "w-0"
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-white/90 text-sm font-medium flex items-center gap-1">
                        <Smartphone className="w-4 h-4 text-[#1aa3dd]" />
                        Phone Brand *
                      </label>
                      <div className="relative" ref={brandInputRef}>
                        <input
                          type="text"
                          name="brand"
                          value={form.brand}
                          onChange={handleChange}
                          onClick={handleBrandInputClick}
                          onFocus={() => {
                            setFocusedField("brand");
                            setShowBrandDropdown(true);
                          }}
                          onBlur={() => setFocusedField("")}
                          placeholder="Select or type phone brand..."
                          required
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all duration-300 text-sm pr-10 ${
                            focusedField === "brand"
                              ? "border-[#1aa3dd] focus:ring-[#1aa3dd]/30 bg-white/10"
                              : "border-white/20 hover:border-white/30"
                          }`}
                        />
                        <ChevronDown 
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-transform duration-200 text-white/70 ${
                            showBrandDropdown ? 'rotate-180' : ''
                          }`}
                        />
                        {showBrandDropdown && (
                          <div 
                            ref={brandDropdownRef}
                            className={`absolute left-0 right-0 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50 ${
                              brandDropdownPosition === "above" ? "bottom-full mb-1" : "top-full mt-1"
                            }`}
                          >
                            {filteredBrands.length > 0 ? (
                              filteredBrands.map((brand, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleBrandSelect(brand)}
                                  className={`px-4 py-3 text-white hover:bg-white/10 cursor-pointer transition-colors duration-200 text-sm flex items-center ${
                                    form.brand === brand ? "bg-white/10 text-cyan-400" : ""
                                  }`}
                                >
                                  <span className="truncate">{brand}</span>
                                  {form.brand === brand && (
                                    <svg className="ml-auto h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                              ))
                            ) : (
                              <div className="px-4 py-3 text-white/50 text-sm">
                                No matching brands found
                              </div>
                            )}
                          </div>
                        )}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1aa3dd] transition-all duration-300 ${
                          focusedField === "brand" ? "w-full" : "w-0"
                        }`}></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-white/90 text-sm font-medium flex items-center gap-1">
                        <FileText className="w-4 h-4 text-[#1aa3dd]" />
                        Brand Model *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="model"
                          value={form.model}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("model")}
                          onBlur={() => setFocusedField("")}
                          placeholder="Enter your phone model (e.g. iPhone 15 Pro, Galaxy S23)"
                          required
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all duration-300 text-sm ${
                            focusedField === "model"
                              ? "border-[#1aa3dd] focus:ring-[#1aa3dd]/30 bg-white/10"
                              : "border-white/20 hover:border-white/30"
                          }`}
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1aa3dd] transition-all duration-300 ${
                          focusedField === "model" ? "w-full" : "w-0"
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Fault Selection - Full width */}
                  <div className="space-y-1">
                    <label className="text-white/90 text-sm font-medium flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-[#1aa3dd]" />
                      Fault Type *
                    </label>
                    <div className="relative" ref={faultInputRef}>
                      <div
                        onClick={() => setShowFaultDropdown(!showFaultDropdown)}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white cursor-pointer focus:outline-none focus:ring-1 transition-all duration-300 text-sm flex items-center justify-between ${
                          showFaultDropdown
                            ? "border-[#1aa3dd] focus:ring-[#1aa3dd]/30 bg-white/10"
                            : "border-white/20 hover:border-white/30"
                        }`}
                      >
                        <span className={form.fault ? "text-white" : "text-white/50"}>
                          {form.fault || "Select fault type..."}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-white/70 ${showFaultDropdown ? 'rotate-180' : ''}`} />
                      </div>
                      {showFaultDropdown && (
                        <div 
                          ref={faultDropdownRef}
                          className={`absolute left-0 right-0 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50 divide-y divide-white/10 ${
                            faultDropdownPosition === "above" ? "bottom-full mb-1" : "top-full mt-1"
                          }`}
                        >
                          {faultOptions.map((group, groupIndex) => (
                            <div key={groupIndex} className="py-1">
                              <div className="px-3 py-2 text-xs font-medium text-white/60 uppercase tracking-wider bg-white/5">
                                {group.category}
                              </div>
                              {group.items.map((fault, itemIndex) => (
                                <div
                                  key={`${groupIndex}-${itemIndex}`}
                                  onClick={() => handleFaultSelect(fault)}
                                  className={`px-4 py-3 text-white hover:bg-white/10 cursor-pointer transition-colors duration-200 text-sm flex items-center ${
                                    form.fault === fault ? "bg-white/10 text-cyan-400" : ""
                                  } ${fault === "Other issue not listed" ? "border-l-4 border-orange-500" : ""}`}
                                >
                                  <span className="truncate">
                                    {fault === "Other issue not listed" ? "🔧 Other issue not listed" : fault}
                                  </span>
                                  {form.fault === fault && (
                                    <svg className="ml-auto h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1aa3dd] transition-all duration-300 ${
                        showFaultDropdown ? "w-full" : "w-0"
                      }`}></div>
                    </div>
                  </div>

                  {showMessageField && (
                    <div className="space-y-1 animate-slide-down">
                      <label className="text-white/90 text-sm font-medium flex items-center gap-1">
                        <MessageSquare className="w-4 h-4 text-[#1aa3dd]" />
                        Describe Your Issue *
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField("")}
                          placeholder="Please describe the issue with your device in detail..."
                          required
                          rows={4}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all duration-300 text-sm resize-none ${
                            focusedField === "message"
                              ? "border-[#1aa3dd] focus:ring-[#1aa3dd]/30 bg-white/10"
                              : "border-white/20 hover:border-white/30"
                          }`}
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1aa3dd] transition-all duration-300 ${
                          focusedField === "message" ? "w-full" : "w-0"
                        }`}></div>
                      </div>
                      <p className="text-white/50 text-xs mt-1">
                        💡 Please provide as much detail as possible about the issue you're experiencing
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 text-sm ${
                      isSubmitting
                        ? "scale-95 opacity-80 cursor-not-allowed"
                        : "hover:scale-105 hover:shadow-xl active:scale-95"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send via WhatsApp</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-15px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 300px;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CustomerCareForm;