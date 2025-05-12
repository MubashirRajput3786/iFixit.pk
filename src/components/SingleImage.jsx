import React from "react";

const SingleImage = ({ id, name, imageURL, image, setImage }) => {
  return (
    <>
      <img
        width={"100%"}
        style={{
          transition: "all 0.3s",
          scale: `${image == name ? "1" : "1.2"}`,
          opacity: `${image == name ? "1" : "0"}`,
        }}
        className=" blob-image position-absolute "
        src={imageURL}
        alt=""
      />
    </>
  );
};

export default SingleImage;
