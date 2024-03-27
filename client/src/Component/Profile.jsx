import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Avatar from "../assets/user.png";
const Profile = () => {
  const [profilePic, setProfilePic] = useState();
  return (
    <div className=" h-[90%] bg-slate-500 w-[20%] absolute right-3 top-5 rounded-md p-3 flex items-center flex-col  border-2 border-white shadow-lg54 shadow-inner ">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-2xl">Profile</h1>
        <span className="text-xl">
          <IoClose />
        </span>
      </div>
      <div className=" h-28 w-28 bg-slate-50 rounded-full border-r-slate-50 relative  ">
        <label htmlFor="profilephoto">
          <img src={profilePic || Avatar} alt="profile pic" className="z-1" />
        </label>
        <input
          type="file"
          name="profile"
          id="profilePhoto"
          className="h-full w-full  rounded-md  "
        />
      </div>
    </div>
  );
};

export default Profile;
