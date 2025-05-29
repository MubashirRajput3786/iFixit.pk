import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage =
      `New Contact Form Submission:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "923084977779";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      {/* Heading ABOVE the form */}
      <h2 className="text-4xl font-bold text-center text-[#1AA3DD] mb-10 tracking-wide animate-fade-in-down">
        Customer Care
      </h2>

      {/* Contact Form Card */}
      <div
        className="w-full max-w-4xl backdrop-blur-md border border-[#1AA3DD] shadow-xl p-10 transition-all duration-300"
        style={{
          borderRadius: '20px 0px 20px 0px',
          backgroundImage: "url('https://www.docomo.ne.jp/flcache_data/english/iphone/images/12-pro/img_main_smt.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          {[
            { label: 'Your Name *', name: 'name', type: 'text', required: true },
            { label: 'Your Email *', name: 'email', type: 'email', required: true },
            { label: 'Phone Number', name: 'phone', type: 'tel' },
            { label: 'Subject', name: 'subject', type: 'text' },
          ].map((field, idx) => (
            <div key={idx} className="relative group">
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 bg-white/70 rounded-xl px-4 pt-6 pb-2 text-gray-800 text-md placeholder-transparent transition-all duration-300 focus:border-[#1AA3DD] focus:ring-2 focus:ring-[#1AA3DD] focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1AA3DD]">
                {field.label}
              </label>
            </div>
          ))}

          {/* Message Field */}
          <div className="relative group">
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-xl bg-white/70 px-4 pt-6 pb-2 text-gray-800 text-md placeholder-transparent resize-none transition-all duration-300 focus:border-[#1AA3DD] focus:ring-2 focus:ring-[#1AA3DD] focus:outline-none"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1AA3DD]">
              Your Message *
            </label>
          </div>

          {/* WhatsApp Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1AA3DD] to-[#0C7BB3] hover:from-[#0C7BB3] hover:to-[#096193] text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaWhatsapp className="inline mr-2 text-xl" />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
