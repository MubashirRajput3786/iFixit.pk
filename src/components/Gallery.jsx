import React from "react";
import Dot from "./Dot";
import Cards from "./Cards";

const Gallery = () => {
  return (
    <div className="container-fluid py-5">
      <header className="d-flex justify-content-center gap-3 align-items-center mb-3">
        <div className="bar-gallery"></div>
        <Dot moving={true} />
        <h2 className="text-secondary m-0 p-0">iFixit</h2>
        <Dot moving={true} />
        <div className="bar-gallery"></div>
      </header>

      <h2 className="text-center display-4 fw-bold mb-5">Meet Our Team</h2>

      <div className="row justify-content-center align-items-center">
        <div className="col-lg-3 col-sm-6 mb-4">
          <Cards contentNumber={0} />
        </div>
        <div className="col-lg-5 col-sm-6 mb-4">
          <Cards contentNumber={1} />
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <Cards contentNumber={2} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
