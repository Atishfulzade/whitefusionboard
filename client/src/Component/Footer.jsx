import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[20%] bg-slate-800 flex p-6 flex-col z-auto  ">
      <div className="flex justify-around flex-col md:flex-row gap-5">
        <h1 className="text-3xl text-white">WhiteboardFusion</h1>
        <div className="flex flex-col">
          <Link className="text-slate-200 hover:translate-x-1">About</Link>
          <Link className="text-slate-200 hover:translate-x-1">Service</Link>
          <Link className="text-slate-200 hover:translate-x-1">Pricing</Link>
        </div>
        <div className="flex flex-col">
          <Link className="text-slate-200 hover:translate-x-1">
            Test WhiteboardFusion
          </Link>
          <Link className="text-slate-200 hover:translate-x-1">Account</Link>
          <Link className="text-slate-200 hover:translate-x-1">
            Support Center
          </Link>
          <Link className="text-slate-200 hover:translate-x-1">Contact Us</Link>
          <Link className="text-slate-200 hover:translate-x-1">
            Accessibility
          </Link>
          <Link className="text-slate-200 hover:translate-x-1">
            WhiteboardFusion Community
          </Link>
          <Link className="text-slate-200 hover:translate-x-1">
            Privacy, Security, Legal Policies
          </Link>
          <Link className="text-slate-200 hover:translate-x-1">
            Learning Center
          </Link>
        </div>
        <div className="flex gap-3 text-2xl  ">
          <FaFacebook className="text-slate-200 hover:scale-[1.2]" />
          <IoLogoYoutube className="text-slate-200 hover:scale-[1.2]" />
          <IoLogoGithub className="text-slate-200 hover:scale-[1.2]" />
          <IoLogoDribbble className="text-slate-200 hover:scale-[1.2]" />
          <IoLogoPinterest className="text-slate-200 hover:scale-[1.2]" />
          <IoLogoInstagram
            className="text-slate-200 hover:scale-[1.2]
          
          
          "
          />
        </div>
      </div>
      <div className="h-5 mx-auto text-slate-100 p-5">
        &copy; 2024 All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
