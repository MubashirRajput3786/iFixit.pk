import React, { useEffect, useState } from "react";

const Animated = ({ word1, word2, word3 }) => {
  const [text1] = useState(word1);
  const [text2] = useState(word2);
  const [text3] = useState(word3);
  const [visibleLetters1, setVisibleLetters1] = useState(0);
  const [visibleLetters2, setVisibleLetters2] = useState(0);
  const [visibleLetters3, setVisibleLetters3] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters1((prevValue) => {
        if (prevValue < text1?.length) {
          return prevValue + 1;
        } else {
          clearInterval(timer);
          return prevValue;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [text1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters2((prevValue) => {
        if (prevValue < text2?.length) {
          return prevValue + 1;
        } else {
          clearInterval(timer);
          return prevValue;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [text2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters3((prevValue) => {
        if (prevValue < text3?.length) {
          return prevValue + 1;
        } else {
          clearInterval(timer);
          return prevValue;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [text3]);

  return (
    <div className="d-flex gap-3 justify-content-center">
      <h1 className="display-1 text-center my-5">
        {text1?.split("").map((item, index) => (
          <div
            key={index}
            className="fw-bolder d-inline-flex"
            style={{
              fontWeight: "900",
              transition: "all 0.8s",
              fontSize: "5rem",
              transform:
                index < visibleLetters1 ? "translateX(0)" : "translateX(50px)",
              opacity: index < visibleLetters1 ? "1" : "0",
              filter:
                index < visibleLetters1
                  ? "none"
                  : "drop-shadow(10px -10px 0px red)",
            }}
          >
            {item}
          </div>
        ))}
      </h1>
      <h1 className="display-1 text-center my-5">
        {text2?.split("").map((item, index) => (
          <div
            key={index}
            className="fw-bolder d-inline-flex"
            style={{
              fontWeight: "900",
              transition: "all 0.8s",
              fontSize: "5rem",
              transform:
                index < visibleLetters2 ? "translateX(0)" : "translateX(50px)",
              opacity: index < visibleLetters2 ? "1" : "0",
            }}
          >
            {item}
          </div>
        ))}
      </h1>
      <h1 className="display-1 text-center my-5">
        {text3?.split("").map((item, index) => (
          <div
            key={index}
            className="fw-bolder d-inline-flex"
            style={{
              fontWeight: "900",
              transition: "all 0.8s",
              fontSize: "5rem",
              transform:
                index < visibleLetters3 ? "translateX(0)" : "translateX(50px)",
              opacity: index < visibleLetters3 ? "1" : "0",
            }}
          >
            {item}
          </div>
        ))}
      </h1>
    </div>
  );
};

export default Animated;
