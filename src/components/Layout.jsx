import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({ open, setOpen }) => {
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Outlet />
    </>
  );
};

export default Layout;
