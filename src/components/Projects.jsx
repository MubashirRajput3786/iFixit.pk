import React from "react";
import SlidingDiv from "./SlidingDiv";
import Cards from "./Cards";
import Dot from "./Dot";
import { FaRegThumbsUp, FaShieldAlt } from "react-icons/fa";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoHeartHalf } from "react-icons/io5";


const Projects = () => {
  return (
    <div className="row align-items-center justify-content-center p-3">
      <div className="col-lg-4 p-5">
        <div className="dot-div position-relative">
          <div className="my-dot position-absolute"></div>
          <h2 className="display-2 fw-bold">Our Core Values</h2>
        </div>

        <div className="d-flex flex-column gap-4 mt-4 mb-5">
          <div>
            <div className="d-flex align-items-center gap-3">
              <FaRegThumbsUp className="text fs-4" />
              <h4 className="mb-0">Positive & Optimistic</h4>
            </div>
            <p className="ms-5 mb-0 text">
              We embrace challenges with a can-do attitude and a hopeful mindset.
            </p>
          </div>

          <div>
            <div className="d-flex align-items-center gap-3">
              <IoHeartHalf className="text fs-4" />
              <h4 className="mb-0">Love Customer</h4>
            </div>
            <p className="ms-5 mb-0 text">
              We genuinely care about our customers' needs and success.
            </p>
          </div>

          <div>
            <div className="d-flex align-items-center gap-3">
              <IoStarHalfOutline className="text fs-4" />
              <h4 className="mb-0">Wow Customer Service</h4>
            </div>
            <p className="ms-5 mb-0 text">
              We go beyond expectations to deliver unforgettable service.
            </p>
          </div>

          <div>
            <div className="d-flex align-items-center gap-3">
              <FaShieldAlt className="text fs-4" />
              <h4 className="mb-0">Have Integrity</h4>
            </div>
            <p className="ms-5 mb-0 text">
              We do the right thing, even when no one is watching.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-7 row">
        <div className="col-lg-6">
          <Cards contentNumber={3} />
        </div>
        <div className="col-lg-6">
          <Cards contentNumber={4} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
