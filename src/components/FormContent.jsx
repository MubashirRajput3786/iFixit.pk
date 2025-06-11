
import React, { useState, useRef, useEffect } from "react";
import { User, Mail, Phone, FileText, MessageSquare, AlertTriangle, ChevronDown, Smartphone } from "lucide-react";

const FormContent = ({ form, setForm, isSubmitting, handleSubmit, showToast }) => {
  const [focusedField, setFocusedField] = useState("");
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
    "Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo",
    "Huawei", "Realme", "Infinix", "Tecno", "Nokia", "Motorola", "Honor", "Other"
  ];

  // Fault options
  const faultOptions = [
    {
      category: "Common Issues",
      items: ["Screen Replacement", "Battery Issues", "Charging Port Problems", "Water Damage Repair"]
    },
    {
      category: "Hardware Issues",
      items: ["Speaker/Microphone Issues", "Camera Problems", "Home Button Repair", "Power Button Issues", "Motherboard Problems"]
    },
    {
      category: "Software Issues",
      items: ["Software Issues", "Memory/Storage Issues", "Network/WiFi Problems", "Touch Screen Issues", "Overheating Problems"]
    },
    {
      category: "Other Services",
      items: ["Device Unlocking", "Data Recovery", "General Consultation", "Physical Damage Assessment", "Warranty Claim Support", "Other issue not listed"]
    }
  ];

  // Handle dropdown positioning and outside clicks
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
      if (faultInputRef.current && showFaultDropdown) {
        const inputRect = faultInputRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const dropdownHeight = 300;
        const spaceBelow = windowHeight - inputRect.bottom;
        const spaceAbove = inputRect.top;
        setFaultDropdownPosition(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight ? "above" : "below");
      }

      if (brandInputRef.current && showBrandDropdown) {
        const inputRect = brandInputRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const dropdownHeight = 240;
        const spaceBelow = windowHeight - inputRect.bottom;
        const spaceAbove = inputRect.top;
        setBrandDropdownPosition(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight ? "above" : "below");
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFaultSelect = (fault) => {
    setForm({ ...form, fault, message: fault === "Other issue not listed" ? form.message : "" });
    setShowFaultDropdown(false);
    if (fault === "Other issue not listed") {
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

  const formFields = [
    { name: "name", label: "Full Name", type: "text", icon: User, placeholder: "Enter your full name" },
    { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "your.email@example.com" },
    { name: "phone", label: "Phone Number", type: "tel", icon: Phone, placeholder: "+92 300 1234567" },
  ];

  const showMessageField = form.fault === "Other issue not listed";

  return (
    <div className="w-full">
      <div className="backdrop-blur-xl bg-white/10 border-2 border-[#1aa3dd] rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#1aa3dd] to-[#0d7fb5] p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Get Help Now</h2>
            <p className="text-white/80 text-sm">Fill out the form below and we'll get back to you</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 gap-4">
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
            type="submit"
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
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send via WhatsApp</span>
                </>
              )}
            </div>
          </button>
        </form>
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

export default FormContent;







