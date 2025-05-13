import React from "react";
import { ad_data } from "../data/advertisment_data";
import MyMarquee from "../components/Marquee";

const Advertisment = () => {
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
      <div className="row justify-content-center align-items-center container mx-auto">
        {ad_data.map((item, index) => {
          return (
            <>
              <div className="col-xl-3 col-sm-6">
                <div className="d-flex align-items-center justify-content-center gap-4">
                  <h6 className=" text-stroke">{item.number}</h6>
                  <div className="text-capitalize ">
                    <h6 className="fs-4 text">{item.title1}</h6>
                    <h6 className="fs-4 text">{item.title2}</h6>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Advertisment;
