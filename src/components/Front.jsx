import React from "react";
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
  return (
    <>
      <div className="container-fluid position-relative">
        <div className="row align-items-center   ">
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

                <h1 className="display-3 fw-bold">
  Welcome to i<span className="text">Fixit Pakistan</span>{" "}
  <GoDotFill size={25} color="#1AA3DD" />
  <h1>
  <Typewriter
    options={{
      strings: ["We Replace Quality Accessories!", "We Can Fix Broken Mobile Glass!","Dead , Water Damage Full short , Half Short!",],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  
  </h1>
  </h1>
                <p className="text-secondary">
                Using original manufactured parts and components, we are able to
                restore your cell phones or iDevice to like-new condition.
                </p>
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
              className=""
              width={"100%"}
              height={"100%"}
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