import React from "react";
import { useNavigate } from "react-router-dom";
import homeImg from "../assets/home.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full md:h-screen flex-wrap md:flex-nowrap md:pt-10  pt-20 dark:bg-slate-900 w-full pb-6">
      <div className="hidden lg:block  ">
        <img src={homeImg} alt="home" className="w-full object-cover" />
      </div>
      <div className="  flex justify-center flex-col  md:pt-6 md:px-4">
        <h1 className="text-4xl leading-tight text-center dark:text-slate-200 md:text-[4em] md:leading-snug lg:text-left">
          <span className="text-2xl">Connect, Collaborate, Create:</span> <br />
          Your Realtime <br />
          <span className="text-purple-600">WhiteboardFusion</span> Hub
        </h1>
        <p className="pt-5 text-wrap text-center dark:text-slate-400 lg:text-left">
          Welcome to a space where ideas flow seamlessly. Whether you're a
          student, professional, or enthusiast, our real-time whiteboard sharing
          brings your creativity to life.
        </p>
        <button
          onClick={() => {}}
          className="border  py-3 px-10 mt-11 w-fit rounded border-purple-600 text-purple-600 m-auto hover:bg-purple-600 hover:text-white "
        >
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Home;
