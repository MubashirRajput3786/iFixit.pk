import React from "react";
import PopUp from "../components/PopUp";
import Front from "../components/Front";
import Group from "../components/Group";
import { Particless } from "../components/Particles";
import Gallery from "../components/Gallery";
import Animated from "../components/Animated";
import Advertisment from "../components/Advertisment";
import CoreValue from "../components/CoreValue";

const Home = ({ open, setOpen }) => {
  return (
    <>
      <Particless />
      {open && <PopUp setOpen={setOpen} />}
      <div className="main">
        {/* Header removed here */}
        <Front />
      </div>
      <Group />
      <Gallery />
      <CoreValue />
      <Advertisment />
    </>
  );
};

export default Home;
