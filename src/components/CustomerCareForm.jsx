import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    gsap.from(formRef.current, {
      opacity: 1,
     
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleMouseEnter = () => {
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
    const ownerNumber = "923084977779";
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputClasses =
    "block w-full px-4 py-3 text-white placeholder-transparent text-base leading-relaxed bg-transparent border border-[#1aa3dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1aa3dd] focus:border-transparent peer transition duration-300";

  const labelClasses =
    "absolute left-4 text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-4 select-none break-words";

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 py-10">
        {/* Optional Left Side */}
        <div className="hidden lg:block lg:w-1/2 pr-10">
          <h2 className="text-white text-3xl font-bold mb-4">We're here to help!</h2>
          <p className="text-gray-400">Fill out the form and we'll contact you shortly.</p>
        </div>

        {/* Right Side Form */}
        <div className="animated-border p-[5px] rounded-3xl w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl lg:w-1/2">
          <div
            ref={formRef}
            className="w-full bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 bg-black"
          >
            <h1 className="text-4xl font-extrabold text-white mb-10 text-center tracking-wide select-none">
              Customer Care Form
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
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
                    placeholder={label}
                    className={inputClasses}
                  />
                  <label htmlFor={name} className={labelClasses}>
                    {label}
                  </label>
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
                  placeholder="Your Message"
                  className={`${inputClasses} resize-none`}
                />
                <label htmlFor="message" className={labelClasses}>
                  Your Message
                </label>
              </div>

              <div className="flex justify-center pt-4">
                <div className="animated-border p-[3px] inline-block rounded-xl">
                  <button
                    ref={buttonRef}
                    type="submit"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-full py-4 px-10 bg-white text-[#1aa3dd] font-bold rounded-xl shadow-lg active:scale-95 transform transition duration-200 select-none"
                  >
                    Send Message via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCareForm;
