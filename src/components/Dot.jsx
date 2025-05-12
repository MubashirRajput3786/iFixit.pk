import React from "react";
import { GoDotFill } from "react-icons/go";

const Dot = ({ size, moving }) => {
  return (
    <>
      <div
        className={`dot d-flex ${moving ? "scaling" : ""}`}
        size={size}
        color="#dd4242"
      ></div>
    </>
  );
};

export default Dot;
