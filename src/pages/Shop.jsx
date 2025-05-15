import React from "react";
import { Particless } from "../components/Particles"; // 👈 Named export ka sahi import

const Shop = () => {
  return <>
  <div className="relative bg-black min-h-screen">
      <Particless /> {/* 👈 Yahan bhi correct naam use karein */}
      
    </div>
  </>;
};

export default Shop;
