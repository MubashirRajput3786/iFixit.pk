// src/components/LoadingSpinner.jsx
import React from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div className="text-center">
        <RingLoader size={70} color="#1AA3DD" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
