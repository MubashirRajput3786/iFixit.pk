import React from "react";
import { ad_data } from "../data/advertisment_data";
import MyMarquee from "../components/Marquee";

const Advertisment = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="display-5 fw-bold container text-center p-5 my-5 ">
        We Provide Guaranted Solution For Every Sinlge Device With 30 Days Warranty{" "}
        <img
          style={{ borderRadius: "50px" }}
          src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/content-image-small-size-4.png"
        />{" "}
        That Make Our Customer Satisfied{" "}
        <img
          src="https://aimax.wpengine.com/wp-content/uploads/2023/06/group-image.png"
          alt=""
        />{" "}
        We Also Provide Complete Mobile Repairing Courses From Beginer to Advance Level For Every One.
      </div>

      <div className="container text-center py-5 my-5">
        <MyMarquee />
      </div>

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

      {/* ✅ Copyright Section */}
      <div className="text-center text py-4">
  Copyright © <a href="https://ifixit.pk" target="_blank" rel="noopener noreferrer" className="fw-bold text-white text-decoration-none">
    ifixit.pk
  </a>. All rights reserved.
</div>

    </>
  );
};

export default Advertisment;
