import React from "react";
import { GoDotFill } from "react-icons/go";

const Button = ({ content }) => {
  return (
    <>
      <button className="my-button py-3 px-4 border">
        <div className="d-flex align-items-center gap-2">
          <GoDotFill className="icon" />
          <p className="text-white m-0 p-0 btn-content">{content}</p>
        </div>
      </button>
    </>
  );
};

export default Button;
