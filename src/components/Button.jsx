import React from "react";
import { GoDotFill } from "react-icons/go";

const Button = ({ content, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="my-button py-3 px-4 border border-[#1AA3DD] rounded-lg transition-all duration-300 hover:bg-[#1AA3DD] hover:scale-105"
    >
      <div className="d-flex align-items-center gap-2">
        <GoDotFill className="icon text-[#1AA3DD]" />
        <p className="text-white m-0 p-0 btn-content">{content}</p>
      </div>
    </button>
  );
};

export default Button;
