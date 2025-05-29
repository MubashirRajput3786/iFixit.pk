import React from 'react';
import { motion } from 'framer-motion';

// Replace with your actual images
import Step1 from '../assets/images/step1.png';
import Step2 from '../assets/images/step2.png';
import Step3 from '../assets/images/step3.png';
import Step4 from '../assets/images/step4.png';

const steps = [
  {
    img: Step1,
    title: 'Damaged Device',
    desc: 'iFixit provide a high range of service for your digital device',
  },
  {
    img: Step2,
    title: 'Hand Over to Us',
    desc: 'We have online system, You can easily reach us',
  },
  {
    img: Step3,
    title: 'Repair the Device',
    desc: 'Our expert technicians will rapidly repair your device with modern tools',
  },
  {
    img: Step4,
    title: 'Get Back From Us',
    desc: 'Get back your device with high range of service & On time.',
  },
];

const WorkingProcess = () => {
  return (
    <section className="bg-black bg-opacity-90 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-center display-4 fw-bold mb-5">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative group cursor-pointer transition-transform"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -left-3 bg-sky-400 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold z-10">
                {index + 1}
              </div>

              {/* Image with hover effect */}
              <div
                className="w-32 h-32 rounded-full border-2 border-dashed border-gray-400
                  group-hover:border-sky-400 overflow-hidden mb-4 relative z-0
                  transition duration-300 ease-in-out"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>

              {/* Description */}
              <p className="text-sm text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
