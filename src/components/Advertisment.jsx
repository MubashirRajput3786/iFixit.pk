import React from "react";
import { ad_data } from "../data/advertisment_data";
import MyMarquee from "../components/Marquee";
import { Typewriter } from "react-simple-typewriter";

const Advertisment = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ✅ Typewriter Section */}
      <div className="display-5 fw-bold container text-center p-5 my-5">
        <span style={{ color: "#ffffff", fontWeight: "bold" }}>
          <Typewriter
            words={[
              "We Provide Guaranteed Solution For Every Single Device With 30 Days Warranty*",
              "That Makes Our Customers Satisfied.",
              "We Also Provide Complete Mobile Repairing Courses From Beginner to Advanced Level For Everyone."
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </span>

        {/* Images Below Typewriter */}
        
      </div>

      {/* ✅ Marquee Section */}
      <div className="container text-center py-5 my-5">
        <MyMarquee />
      </div>

      {/* ✅ Stats Section */}
      <div className="row justify-content-center align-items-center container mx-auto py-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-10 mb-5 text-center">
          <div className="position-relative">
            <h6 className="text-stroke mb-3">100+</h6>
            <div className="ad-bottom-text">
              <div>Expert</div>
              <div>Skills</div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-10 mb-5 text-center">
          <div className="position-relative">
            <h6 className="text-stroke mb-3">100K</h6>
            <div className="ad-bottom-text">
              <div>Happy</div>
              <div>Customers</div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-10 mb-5 text-center">
          <div className="position-relative">
            <h6 className="text-stroke mb-3">99%</h6>
            <div className="ad-bottom-text">
              <div>Success</div>
              <div>Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Copyright */}
      <div className="text-center text py-4">
        Copyright ©{" "}
        <a
          href="https://ifixit.pk"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-bold text-white text-decoration-none"
        >
          iFixit.Pk
        </a>
        . All rights reserved.
      </div>
    </>
  );
};

export default Advertisment;
