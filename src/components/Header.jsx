import React from "react";
import Button from "./Button";
import { GoDotFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { MdHorizontalRule } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import { menu_data } from "../data/menu_data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/iFixit Logo CDR.png";

const Header = ({ open, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Add this to use navigation

  return (
    <>
      <div className="d-flex p-4 justify-content-around header align-items-center">
        <div className="logo d-flex align-items-center">
          <GoDotFill size={25} color="#1AA3DD" />
          <div className="d-flex align-items-center">
            <img src={logo} alt="Fixit Logo" style={{ height: "50px" }} />
          </div>
        </div>

        <ul className="items text-uppercase d-none d-md-flex list-unstyled m-0 gap-5">
          <li className="menu-close ms-auto border-0">
            <IoMdClose size={25} />
          </li>

          {menu_data.map((item, index) => (
            <li key={item.name + index}>
              <Link
                to={item.link}
                className={`d-flex my-item text-decoration-none text-white justify-content-between ${
                  location.pathname === item.link ? "active" : ""
                } align-items-center`}
              >
                <h6>{item.name}</h6>
                <div className="menu-icon d-flex align-items-center">
                  <MdHorizontalRule className="bar" />
                  <GoChevronRight className="arrow-right" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-5">
          {/* ✅ Pass onClick handler to navigate */}
          <Button content="Book My Repair" onClick={() => navigate("/form")} />

          <div
            onClick={() => setOpen(true)}
            className="d-flex flex-column gap-3 line-parent"
            style={{ cursor: "pointer" }}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
