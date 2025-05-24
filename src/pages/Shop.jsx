import React from "react";
import { Particless } from "../components/Particles"; // 👈 Named export ka sahi import

const Shop = () => {
  return <>
   <div className="relative bg-black min-h-screen">
              <Particless /> {/* 👈 Yahan bhi correct naam use karein */}
               <div className="relative z-10 text-white p-10">
                
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="col-lg-6 p-5">
                      <div className="dot-div position-relative">
                        <div className="my-dot position-absolute"></div>
                        <h2 className="display-2 fw-bold">Shop</h2>
                     </div>
                    </div>
             
                  </div>
               </div>
            </div>
  </>;
};

export default Shop;
