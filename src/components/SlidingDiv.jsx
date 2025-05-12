import React from "react";
import Dot from "./Dot";

const SlidingDiv = ({ content }) => {
  return (
    <>
      <div className="d-flex hov align-items-center gap-2">
        <div className="my-bar "></div>
        <Dot />
        <p className="m-0 p-0">{content}</p>
        <div className="my-bar2"></div>
      </div>
    </>
  );
};

export default SlidingDiv;
