import React from "react";
import Dot from "./Dot";
import { GoDotFill } from "react-icons/go";
import { PiTiktokLogoLight } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";


import {
  SlSocialFacebook,
  SlSocialInstagram,
 
} from "react-icons/sl";
import frontImage from "../assets/images/Phone.png";
import SlidingDiv from "./SlidingDiv";
import Typewriter from "typewriter-effect";
import VideoPopup from "./VideoPopup"; // ← New import

const Front = () => {
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
                  <PiYoutubeLogoLight color="gray" />
                  <PiTiktokLogoLight color="gray" />
                </div>
                <div className="scroll">
                  <div className="d-flex align-items-center justify-content-center flex-column gap-2">
                    <Dot moving={true} />
                    <div className="bar3">
                      <div className="bar3-bar bg-secondary"></div>
                    </div>
                    <h6 className="scroll-text mt-5">SCROLL</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-9 d-flex flex-column gap-2">
                <div className="d-flex gap-3 align-items-center">
                  <div className="bar-front"></div>
                  <div className="dot">
                    <Dot size={20} moving={true} />
                  </div>
                  <p className="text-secondary m-0">Innovative Ideas</p>
                </div>

                <h1 className="display-3 fw-bold">
                  Welcome to i<span className="text">Fixit Pakistan</span>
                  <h1>
                    <Typewriter
                      options={{
                        strings: [
                          "Smart Phones Repair Specialist.",
                          "Quick Repair Proccess With Free Diagnostic.",
                          "30 Days Warranty on All Repairs.",
                          "No Repair No Charges!",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                      }}
                    />
                  </h1>
                </h1>
                <p className="lg:text-gray-400 sm:text-white capitalize">
                  Get Your Smartphone fixed by expert technicians using certified tools — fast,
                  reliable, & trusted mobile repair with a professional touch!
                </p>

                <div className="d-flex align-items-center hov justify-content-between">
                  <SlidingDiv content="Get Started" />
                  <VideoPopup /> {/* ← New Popup Component Here */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 front-image">
            <img
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
