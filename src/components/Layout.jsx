import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
