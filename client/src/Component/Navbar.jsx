import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ isLoggedIn }) => {
  const [openToggle, setOpenToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleBar = () => {
    setOpenToggle((prve) => !prve);
  };
  const toggleMode = () => {
    setDarkMode((prve) => !prve);
  };
  useEffect(() => {
    if (darkMode == true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const navigate = useNavigate();
  return (
    <div className="flex w-full z-50  bg-white dark:bg-slate-800 h-full  relative shadow">
      <div className="flex w-full justify-between p-4 md:p-2 md:items-center md:px-4">
        <h1 className="text-2xl dark:text-slate-200 text-slate-800">
          WhiteboardFusion
        </h1>
        {darkMode ? (
          <MdLightMode
            className="text-2xl text-slate-800 dark:text-slate-200"
            onClick={toggleMode}
          />
        ) : (
          <MdDarkMode
            className="text-2xl text-slate-800 dark:text-slate-200"
            onClick={toggleMode}
          />
        )}
        <div className="lg:flex gap-6 justify-between items-center hidden">
          <NavLink
            to="/"
            className="dark:text-slate-200   py-3 "
            onClick={() => {
              setOpenToggle(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className="dark:text-slate-200   py-3 "
            onClick={() => {
              setOpenToggle(false);
            }}
          >
            Service
          </NavLink>
          <NavLink
            to="/pricing"
            className="dark:text-slate-200   py-3"
            onClick={() => {
              setOpenToggle(false);
            }}
          >
            Pricing
          </NavLink>
          {isLoggedIn ? (
            ""
          ) : (
            <>
              <button
                className="py-3 px-10 md:ml-16 bg-violet-600 text-white rounded hover:bg-violet-700"
                onClick={() => {
                  navigate("/login");
                  setOpenToggle(false);
                }}
              >
                Login
              </button>
              <button
                className="py-3 px-10 border border-violet-600  md:text-violet-600 rounded hover:bg-violet-700 text-violet-600 hover:text-white"
                onClick={() => {
                  navigate("/register");
                  setOpenToggle(false);
                }}
              >
                Register
              </button>
            </>
          )}
        </div>

        {openToggle ? (
          <IoClose
            className="text-2xl dark:text-slate-200 text-slate-800 lg:hidden"
            onClick={toggleBar}
          />
        ) : (
          <GiHamburgerMenu
            className="text-2xl dark:text-slate-200 text-slate-800 lg:hidden"
            onClick={toggleBar}
          />
        )}
      </div>
      <div
        className=" justify-center w-full absolute mt-16 bg-stone-50 z-50 dark:bg-slate-900 gap-y-2 h-[300px]  items-center flex-col lg:hidden"
        style={{ display: openToggle ? "flex" : "none" }}
      >
        <NavLink
          to="/"
          className=" px-12  py-3 dark:text-slate-200 "
          onClick={() => {
            setOpenToggle(false);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          className=" px-12  py-3 dark:text-slate-200"
          onClick={() => {
            setOpenToggle(false);
          }}
        >
          Service
        </NavLink>
        <NavLink
          to="/pricing"
          className=" px-12  py-3 dark:text-slate-200"
          onClick={() => {
            setOpenToggle(false);
          }}
        >
          Pricing
        </NavLink>
        {isLoggedIn ? (
          ""
        ) : (
          <>
            <button
              className="py-3 px-12 bg-violet-600 text-white rounded hover:bg-violet-700"
              onClick={() => {
                navigate("/login");
                setOpenToggle(false);
              }}
            >
              Login
            </button>
            <button
              className="py-3 px-9 border border-violet-600  rounded hover:bg-violet-700 text-violet-600 hover:text-white"
              onClick={() => {
                navigate("/register");
                setOpenToggle(false);
              }}
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
