import React, { useEffect, useState } from "react";
import Dot from "./Dot";
import { GoDotFill } from "react-icons/go";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialTwitter,
} from "react-icons/sl";
import { FaPlay } from "react-icons/fa6";
import frontImage from "../assets/images/Phone.png";
import SlidingDiv from "./SlidingDiv";
import Typewriter from "typewriter-effect";

const Front = () => {
  const data = [
    {
      text: "We Replace Quality Accessories!",
      desc: `We use high-quality, genuine accessories for every repair.\nThey are durable, long-lasting, and perfectly compatible.\nEvery replacement ensures factory-grade performance.\nGet better charging, sound, and reliability — just like new.`,
    },
    {
      text: "We Can Fix Broken Mobile Glass!",
      desc: `Our team repairs broken screens using high-quality glass.\nPrecision tools and expert hands ensure perfect fitting.\nWe restore display clarity and touch responsiveness.\nYour phone screen will look and feel brand new.`,
    },
    {
      text: "Dead, Water Damage, Full Short, Half Short!",
      desc: `We handle advanced issues like motherboard & water damage.\nOur lab uses diagnostics tools to trace faults accurately.\nWe restore power, signal, and full phone functionality.\nEven severe faults get a second life at iFixit.`,
    },
  ];
  const [descIndex, setDescIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescIndex((prev) => (prev + 1) % data.length);
    }, 7000); // Adjust timing if needed
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
      <div className="container-fluid position-relative">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="row g-lg-4 g-sm-0 align-items-center">
              <div className="col-3 d-flex flex-column align-items-center justify-content-between gap-5">
                <div className="d-flex gap-5 flex-column fs-2 justify-content-between align-items-end">
                  <SlSocialFacebook color="gray" />
                  <SlSocialInstagram color="gray" />
                  <SlSocialTwitter color="gray" />
                  <SlSocialPintarest color="gray" />
                </div>
                <div className="scroll">
                  <div className="d-flex align-items-center jusitfy-content-center flex-column gap-2">
                    <Dot moving={true} />
                    <div className="bar3">
                      <div className="bar3-bar bg-secondary"></div>
                    </div>
                    <h6 className="scroll-text mt-5">SCROLL</h6>
                  </div>
                </div>
              </div>

              <div className="col-sm-7 col-9 d-flex flex-column gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="bar-front"></div>
                  <div className="dot">
                    <Dot size={20} moving={true} />
                  </div>
                  <p className="text-secondary m-0">Innovative Ideas</p>
                </div>

                <h1 className="display-3 fw-bold mb-0">
                  Welcome to <span className="text">iFixit Pakistan</span>{" "}
                  <GoDotFill size={25} color="#1AA3DD" />
                </h1>
                <h6 className="fw-bold display-5 text-white mt-0 mb-0">
                  <Typewriter
                    options={{
                      strings: data.map((d) => d.text),
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 60,
                      delay: 40,
                      typeSpeed: 60,
                    }}
                  />
                </h6>

                <p className="text-secondary mt-1">{data[descIndex].desc}</p>

                <div className="d-flex align-items-center hov justify-content-between">
                  <SlidingDiv content="Get Started" />
                  <a
                    href="https://www.youtube.com/watch?v=_1_H2iIQ9dY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex gap-4 align-items-center text-decoration-none text-dark"
                  >
                    <div className="video-icon">
                      <FaPlay className="play" size={20} />
                    </div>
                    View Video
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 front-image">
            <img
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
              src={frontImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
