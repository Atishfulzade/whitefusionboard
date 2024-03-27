import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
const Layout = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
