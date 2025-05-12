import React from "react";
import SlidingDiv from "./SlidingDiv";
import Cards from "./Cards";
import Dot from "./Dot";

const Projects = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center p-3">
        <div className="col-lg-4  p-5">
          <div className="dot-div position-relative">
            <div className="my-dot position-absolute"></div>
            <h2 className="display-2 fw-bold ">All Projects</h2>
          </div>
          <p className="text-secondary mt-4 mb-5">
            Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.
            Euismod nisi porta lorem mollis aliquam ut porttitor. In hac
            habitasse platea dictumst. Amet massa vitae tortor condimentum
            lacinia quis.
          </p>
          <SlidingDiv content="View All" />
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
    </>
  );
};

export default Projects;
