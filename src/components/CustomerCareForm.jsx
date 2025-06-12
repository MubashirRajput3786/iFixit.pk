import React, { useState } from "react";
import { Wrench, Shield, Clock, Award } from "lucide-react";

const FormContent = ({ form, setForm, isSubmitting, handleSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Get Support</h2>
        <p className="text-white/70">Tell us about your device issue</p>
      </div>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Brand *
            </label>
            <select
              name="brand"
              value={form.brand}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent"
            >
              <option value="" className="text-gray-900">Select Brand</option>
              <option value="iPhone" className="text-gray-900">iPhone</option>
              <option value="Samsung" className="text-gray-900">Samsung</option>
              <option value="Huawei" className="text-gray-900">Huawei</option>
              <option value="Xiaomi" className="text-gray-900">Xiaomi</option>
              <option value="OnePlus" className="text-gray-900">OnePlus</option>
              <option value="Oppo" className="text-gray-900">Oppo</option>
              <option value="Vivo" className="text-gray-900">Vivo</option>
              <option value="Other" className="text-gray-900">google</option>
            </select>
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Model *
            </label>
            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent"
              placeholder="e.g. iPhone 14"
            />
          </div>
        </div>

        {/* Fault Type */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Issue Type *
          </label>
          <select
            name="fault"
            value={form.fault}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent"
          >
            <option value="" className="text-gray-900">Select Issue</option>
            <option value="Screen cracked/broken" className="text-gray-900">Screen cracked/broken</option>
            <option value="Battery not charging" className="text-gray-900">Battery not charging</option>
            <option value="Water damage" className="text-gray-900">Water damage</option>
            <option value="Speaker/microphone issue" className="text-gray-900">Speaker/microphone issue</option>
            <option value="Camera not working" className="text-gray-900">Camera not working</option>
            <option value="Phone won't turn on" className="text-gray-900">Phone won't turn on</option>
            <option value="Software/OS issue" className="text-gray-900">Software/OS issue</option>
            <option value="Other issue not listed" className="text-gray-900">Other issue not listed</option>
          </select>
        </div>

        {/* Message Field (conditional) */}
        {form.fault === "Other issue not listed" && (
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Describe the Issue *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent resize-none"
              placeholder="Please describe your issue in detail..."
            />
          </div>
        )}

        {/* Privacy Policy Checkbox with Scrollable Content */}
        <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
          <input
            type="checkbox"
            id="acceptPrivacy"
            name="acceptPrivacy"
            checked={form.acceptPrivacy}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-[#1aa3dd] bg-white/10 border-white/20 rounded focus:ring-[#1aa3dd] focus:ring-2 flex-shrink-0"
          />
          <div className="flex-1">
            <label 
              htmlFor="acceptPrivacy" 
              className="text-sm text-white/80 leading-relaxed block max-h-16 sm:max-h-none overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/5 pr-2"
            >
              I agree to the{' '}
              <span className="text-[#1aa3dd] font-medium cursor-pointer underline">
                Privacy Policy
              </span>
              {' '}and understand that my contact information will be used to provide repair services, send updates about my device repair status, communicate regarding service schedules, and may be shared with authorized technicians for service delivery purposes. I consent to receiving SMS and email notifications related to my repair service.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#1aa3dd] to-[#0d7fb5] hover:from-[#0d7fb5] hover:to-[#1aa3dd] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send via WhatsApp"}
        </button>
      </div>
    </div>
  );
};

const Toast = ({ message, type }) => {
  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    loading: 'bg-blue-500',
    info: 'bg-gray-500'
  }[type] || 'bg-gray-500';

  return (
    <div className={`${bgColor} text-white px-4 py-2 rounded-lg shadow-lg animate-pulse`}>
      {message}
    </div>
  );
};

const CustomerCareForm = () => {
  const [form, setForm] = useState({
    name: "", 
    email: "", 
    phone: "", 
    brand: "", 
    model: "", 
    fault: "", 
    message: "",
    acceptPrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  };

  const generateWhatsAppLink = () => {
    const msg = `🔧 *New Customer Care Request*\n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📱 *Phone:* ${form.phone}\n📱 *Brand:* ${form.brand}\n📱 *Model:* ${form.model}\n⚠️ *Fault Type:* ${form.fault}\n${form.fault === "Other issue not listed" ? `💬 *Message:* ${form.message}\n` : ""}\n---\nSent via Customer Care Form`;
    return `https://wa.me/923084977779?text=${encodeURIComponent(msg)}`;
  };

  const resetForm = () => setForm({ 
    name: "", 
    email: "", 
    phone: "", 
    brand: "", 
    model: "", 
    fault: "", 
    message: "",
    acceptPrivacy: false 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, brand, model, fault, message, acceptPrivacy } = form;

    // Privacy policy validation first
    if (!acceptPrivacy) {
      return showToast("⚠️ Please accept the Privacy Policy to continue", 'error');
    }

    // Other validations
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !brand?.trim() || !model?.trim() || !fault?.trim()) {
      return showToast("Please fill in all required fields", 'error');
    }
    if (fault === "Other issue not listed" && !message?.trim()) {
      return showToast("Please describe the issue in the message field", 'error');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return showToast("Please enter a valid email address", 'error');
    }

    setIsSubmitting(true);
    showToast("🚀 Preparing your message...", 'loading');

    try {
      const whatsappURL = generateWhatsAppLink();
      
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
        showToast("🎉 Opening WhatsApp...", 'success');
        
        setTimeout(() => {
          resetForm();
          showToast("✨ Form reset! Message sent via WhatsApp", 'success');
        }, 1500);
      }, 1000);
    } catch (err) {
      console.error("Message sending failed:", err);
      showToast("⚠️ Failed to send message. Please try again.", 'error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen ">
      {/* Toasts */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#1aa3dd] to-[#0d7fb5] rounded-2xl flex items-center justify-center mb-6">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">iFixit.pk</h1>
          <span className="text-2xl block text-white/80 mt-2">Customer Care</span>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">Expert mobile phone repair services. We fix it right, we fix it fast.</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[{
            Icon: Shield, title: "Quality Guaranteed", desc: "Genuine parts & warranty"
          }, {
            Icon: Clock, title: "Quick Response", desc: "Fast turnaround time"
          }, {
            Icon: Award, title: "Expert Technicians", desc: "Certified & experienced"
          }].map(({ Icon, title, desc }, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border-2 border-[#1aa3dd]">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#1aa3dd]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-white/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Width Form */}
        <FormContent
          form={form}
          setForm={setForm}
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          showToast={showToast}
        />

        {/* Support Notice */}
        <div className="mt-8 p-6 bg-white/5 rounded-xl border-2 border-[#1aa3dd] text-center">
          <p className="text-white/80">
            <strong>iFixit Support Available</strong><br />
            Contact us anytime via WhatsApp for urgent repairs or queries
          </p>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Custom Scrollbar */
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CustomerCareForm;