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
        {/* Mobile: Show CEO first, Desktop: Show at left */}
        <div className="col-lg-3 col-sm-6 mb-4 order-2 order-lg-1">
          <Cards contentNumber={0} />
        </div>
        
        {/* Mobile: Show CEO first, Desktop: Show at center (larger) */}
        <div className="col-lg-5 col-sm-6 mb-4 order-1 order-lg-2">
          <Cards contentNumber={1} />
        </div>
        
        {/* Mobile: Show third, Desktop: Show at right */}
        <div className="col-lg-3 col-sm-6 mb-4 order-3 order-lg-3">
          <Cards contentNumber={2} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;