import React from "react";
import { group_data } from "../data/group_data";

const Group = () => {
  return (
    <>
      <div className="container p-lg-5 my-5 ">
        <div className="row  gap-1 justify-content-between align-items-center">
          {group_data?.map((item, index) => {
            return (
              <>
                <div className="row gap-2 col-lg-3 col-md-6  p-lg-3 justify-content-lg-center  justify-content-md-center justify-content-center align-items-center text-md-start text-center">
                  <div className=" col-sm-6 ">
                    <img
                      width={"60px"}
                      className="d-block mx-auto "
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column text-md-start text-center  col-sm-10">
                    <h2>{item.title}</h2>
                    <p className="text-secondary">{item.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Group;
