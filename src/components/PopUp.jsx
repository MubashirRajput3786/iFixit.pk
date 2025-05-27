import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { imageData } from "../data/image_data";
import SingleImage from "./SingleImage";
import { useNavigate } from "react-router-dom";

const PopUp = ({ setOpen }) => {
  const [image, setImage] = useState("blog");
  const navigate = useNavigate();

  const handleClick = (route) => {
    setOpen(false);        // popup band karo
    navigate(route);       // route par le jao
  };

  return (
    <>
      <div
        className="container-fluid pop position-relative d-flex align-items-center justify-content-center pop-up position-fixed top-0 "
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Close Button */}
        <div
          className="close position-absolute p-4 "
          style={{
            top: "10px",
            right: "10px",
          }}
        >
          <RxCross1
            className="text-red "
            size={40}
            style={{ transition: "all 0.4s" }}
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Images Area */}
        <div className="blob-images w-50 position-relative">
          {imageData?.map((item, index) => {
            return <SingleImage key={index} {...item} image={image} />;
          })}
        </div>

        {/* Clickable Items List */}
        <ul className="list-unstyled stroke-items display-1 text-uppercase w-25">
          {imageData?.map((item, index) => (
            <li
              key={index}
              className="stroke"
              onMouseOver={() => setImage(item?.name)}
              onClick={() => handleClick(item?.route)} // 👈 route par navigate
              style={{ cursor: "pointer" }} // optional: cursor pointer
            >
              {item?.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PopUp;
