import React from 'react';
import ProfileImage from '../assets/images/BannerImage.png';
import { FaThumbsUp, FaHeart, FaStar, FaHandsHelping } from 'react-icons/fa';

const values = [
  {
    icon: <FaThumbsUp className="text-sky-500 text-2xl" />,
    title: 'Positive & Optimistic',
    description:
      "Being hopeless is not acceptable in Islam, as hope is what keeps us going even when everything seems lost. That’s why a person should strive to view everything with a positive outlook.",
  },
  {
    icon: <FaHeart className="text-sky-500 text-2xl" />,
    title: 'Love Customer',
    description:
      "We treat every customer like family—with respect, care, and genuine attention. Loving our customers means listening to their needs, going the extra mile, and always putting their satisfaction first. Their trust drives us to serve with heart.",
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
      "We consider our customers part of our family. That’s why every task we handle is done with care, integrity, and honesty—doing the right thing even when no one is watching. We are committed to completing every job on time and with the highest level of trust.",
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
