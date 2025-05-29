import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Add this CSS in your global stylesheet or inside a <style> tag:
/*
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background-size: 200% 200%;
  animation: gradientMove 4s ease infinite;
}
*/

const CustomerCareForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate form container on mount: fade in and slide up
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleMouseEnter = () => {
    // Button pulse animation on hover (scale + shadow)
    gsap.to(buttonRef.current, {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(219, 39, 119, 0.7)",
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "0 4px 15px rgba(139, 92, 246, 0.6)",
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, I am ${form.name}.\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const ownerNumber = "1234567890"; // Replace with actual WhatsApp number
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      ref={formRef}
      className="relative max-w-xl w-full bg-white bg-opacity-90 z-999 backdrop-blur-md rounded-3xl shadow-2xl p-10 sm:p-14 border border-purple-300"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-wide select-none">
        Customer Care Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-10">
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone Number", name: "phone", type: "tel" },
          { label: "Subject", name: "subject", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="relative z-0 w-full group">
            <input
              type={type}
              name={name}
              id={name}
              required
              value={form[name]}
              onChange={handleChange}
              placeholder=" "
              className="block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer transition duration-300"
            />
            <label
              htmlFor={name}
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-text select-none"
            >
              {label}
            </label>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1AA3DD] transition-all duration-300 peer-focus:w-full"></span>
          </div>
        ))}

        <div className="relative z-0 w-full group">
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            placeholder=" "
            className="block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer transition duration-300"
          />
          <label
            htmlFor="message"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-text select-none"
          >
            Your Message
          </label>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1AA3DD] transition-all duration-300 peer-focus:w-full"></span>
        </div>

        <button
          ref={buttonRef}
          type="submit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full py-4 text-white font-bold rounded-xl shadow-lg shadow-pink-500/50 active:scale-95 transform transition duration-200 select-none animated-gradient"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)",
          }}
        >
          Send Message via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default CustomerCareForm;
