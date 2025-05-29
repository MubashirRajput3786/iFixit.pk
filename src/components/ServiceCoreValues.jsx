import React from 'react';
import ProfileImage from '../assets/images/BannerImage.png';
import { FaThumbsUp, FaHeart, FaStar, FaHandsHelping } from 'react-icons/fa';

const values = [
  {
    icon: <FaThumbsUp className="text-sky-500 text-2xl" />,
    title: 'Positive & Optimistic',
    description:
      "Being hopeless is a sin for a Muslim. Because hope is the only thing that keeps us alive even after everything is lost. That's why a person should look at everything positively.",
  },
  {
    icon: <FaHeart className="text-sky-500 text-2xl" />,
    title: 'Love Customer',
    description:
      "We consider our customers as our family. That's why every one of our customer's work is done with special care and integrity. And what makes his work complete within the given time.",
  },
  {
    icon: <FaStar className="text-sky-500 text-2xl" />,
    title: 'Wow Customer Service',
    description:
      "To do our customer's job in the best possible way & give complete updates about the job status through WhatsApp and phone call is part of our mission. We must complete the job on time because our customers are our priority.",
  },
  {
    icon: <FaHandsHelping className="text-sky-500 text-2xl" />,
    title: 'Have Integrity',
    description:
      "Honesty is the best strategy. That's why we consider it our faith to do our customer's work sincerely and with complete honesty. Working honestly increases your customer base and multiplies your growth.",
  },
];

const ServiceCoreValues = () => {
  return (
    <div className="px-6 py-16 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-stretch">
        {/* Left Image */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-md shadow-lg object-cover w-full max-w-sm h-full lg:h-[100%]"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-2/3 flex flex-col justify-between">
        <div className="relative mb-10 flex justify-center">
  <div className="relative inline-block text-center">
    <span className="text-5xl md:text-5xl font-extrabold text-white z-999">
      Our Core Values
    </span>
  </div>
</div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {values.map((val, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="pt-1">{val.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCoreValues;
