import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import user from "../assets/user.png";
const DashBoard = () => {
  return (
    <div className="h-screen w-full  bg-white  relative dark:bg-slate-800">
      <div className="flex h-screen w-16 px-4 bg-slate-200 dark:bg-slate-700 md:w-[300px] absolute z-0  flex-col  gap-3 text-slate-700 items-center pt-3 top-0 left-0">
        <NavLink
          to="/dashboard/profile"
          className="hover:bg-violet-600 md:w-full px-3 md:px-20 dark:bg-slate-600 dark:text-slate-100  py-3 rounded-lg hover:text-white transition-all bg-slate-100 "
        >
          <div className="flex text-xl justify-start gap-2 items-center ">
            <FaUserAlt />
            <p className="hidden md:block">Profile</p>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/meeting"
          className="hover:bg-violet-600 md:w-full px-3 md:px-20 py-3 rounded-lg hover:text-white transition-all bg-slate-100 text-left dark:bg-slate-600 dark:text-slate-100 "
        >
          <div className="flex text-xl  gap-2 items-center">
            <FaUsers />
            <p className="hidden md:block">Meeting</p>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/help"
          className="hover:bg-violet-600 md:w-full px-3 md:px-20 py-3 rounded-lg hover:text-white transition-all bg-slate-100 text-left dark:bg-slate-600 dark:text-slate-100 "
        >
          <div className="flex text-xl  gap-2 items-center">
            <IoMdHelpCircle />
            <p className="hidden md:block">Help</p>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/setting"
          className="hover:bg-violet-600 md:w-full px-3 md:px-20 py-3 rounded-lg hover:text-white transition-all bg-slate-100 text-left dark:bg-slate-600 dark:text-slate-100 "
        >
          <div className="flex text-xl  gap-2 items-center">
            <IoIosSettings />
            <p className="hidden md:block">Setting</p>
          </div>
        </NavLink>
      </div>
      <div className="flex h-full w-full flex-col  pt-8 ps-20 pr-5">
        <div className="flex w-full justify-end">
          <img
            src={user}
            alt="user"
            className="h-10 w-10 object-contain  rounded-lg"
          />
        </div>
        <div className="flex pt-20 flex-col ps">
          <h3>Welcome to WhiteBoardFusion!</h3>
          <p>
            A space where ideas flow seamlessly. Whether you're a student,
            professional, or enthusiast, our real-time whiteboard sharing brings
            your creativity to life.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-10 mt-14">
          <button className="rounded-full bg-violet-600 px-10 py-4 text-white">
            Create Board
          </button>
          <button className="rounded-full border border-violet-600  px-12 py-4 text-violet-600">
            Join Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
