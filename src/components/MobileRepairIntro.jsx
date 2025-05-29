import React from 'react';

const MobileRepairIntro = () => {
  return (
    <div className="px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-sky-400 text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
            "We provide full & specific solutions for our every customers<br />
            We also provide complete courses of mobile repairing."
          </h1>
          <p className="text-gray-600 text-base leading-7 mb-5">
            Started in the year 2014 with a vision of providing repair solutions to customers and
            dealers all over Pakistan. iFixit.Pk, based in Islamabad, Pakistan, aims to be one of
            the best Phone repair company & leading provider of spare components and tools within
            Pakistan.
          </p>
          <p className="text-gray-600 text-base leading-7 mb-5">
            Our commitment to bring professionalism, good service & trust to the Phone repair
            service & maintenance business. We take immense pride in sending some of the most
            professional technicians.
          </p>
          <p className="text-gray-600 text-base leading-7">
            Under the brand name of "THE APEX TECHNOLOGY" We are also provide best Mobile repairing
            courses in Pakistan with lowest prices ever!
          </p>
        </div>

        {/* Video Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-2xl aspect-video rounded-md shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/_1_H2iIQ9dY"
              title="Mobile Repair Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileRepairIntro;
