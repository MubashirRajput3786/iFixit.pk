import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MobileRepairIntro = () => {
  const containerRef = useRef(null);
  const textSectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const textSection = textSectionRef.current;
    const videoSection = videoSectionRef.current;
    const heading = headingRef.current;
    const paragraphs = paragraphsRef.current;

    // Set initial states
    gsap.set([textSection, videoSection], {
      opacity: 0,
      y: 50
    });

    gsap.set(heading, {
      opacity: 0,
      y: 30
    });

    gsap.set(paragraphs, {
      opacity: 0,
      y: 20
    });

    // Create timeline for entrance animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate text section
    tl.to(textSection, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    // Animate heading
    .to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    // Animate paragraphs with stagger
    .to(paragraphs, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.3")
    // Animate video section
    .to(videoSection, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // Add hover animation for video container
    const videoContainer = videoSection.querySelector('.aspect-video');
    
    gsap.set(videoContainer, {
      scale: 1
    });

    const hoverIn = () => {
      gsap.to(videoContainer, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const hoverOut = () => {
      gsap.to(videoContainer, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    videoContainer.addEventListener('mouseenter', hoverIn);
    videoContainer.addEventListener('mouseleave', hoverOut);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      videoContainer.removeEventListener('mouseenter', hoverIn);
      videoContainer.removeEventListener('mouseleave', hoverOut);
    };
  }, []);

  return (
    <div ref={containerRef} className="px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div ref={textSectionRef} className="lg:w-1/2 w-full">
          <h1 
            ref={headingRef}
            className="text-sky-400 text-2xl md:text-3xl font-semibold leading-relaxed mb-6"
          >
            "We provide full & specific solutions for our every customers<br />
            We also provide complete courses of mobile repairing."
          </h1>
          <p 
            ref={el => paragraphsRef.current[0] = el}
            className="text-gray-600 text-base leading-7 mb-5"
          >
            Started in the year 2014 with a vision of providing repair solutions to customers and
            dealers all over Pakistan. iFixit.Pk, based in Islamabad, Pakistan, aims to be one of
            the best Phone repair company & leading provider of spare components and tools within
            Pakistan.
          </p>
          <p 
            ref={el => paragraphsRef.current[1] = el}
            className="text-gray-600 text-base leading-7 mb-5"
          >
            Our commitment to bring professionalism, good service & trust to the Phone repair
            service & maintenance business. We take immense pride in sending some of the most
            professional technicians.
          </p>
          <p 
            ref={el => paragraphsRef.current[2] = el}
            className="text-gray-600 text-base leading-7"
          >
            Under the brand name of "THE APEX TECHNOLOGY" We are also provide best Mobile repairing
            courses in Pakistan with lowest prices ever!
          </p>
        </div>

        {/* Video Section */}
        <div ref={videoSectionRef} className="lg:w-1/2 w-full flex justify-center">
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