import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
const Service = () => {
  return (
    <div className="dark:bg-slate-700 w-full h-full flex flex-col py-5 items-center gap-7">
      <div className="glass h-[400px] flex flex-col items-center  flex-wrap w-[70%] md:flex-row shadow-md   md:justify-around md:pt-0">
        <div className=" h-28 order-2 p-5 md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-center text-3xl md:text-4xl md:text-left lg:text-5xl lg:text-left">
            Share your whiteboard
          </h2>
          <p className="text-slate-700 my-3 text-center md:text-left lg:text-2xl lg:text-left">
            Ignite Your Imagination: Explore the Boundless Possibilities of
            Realtime Whiteboard Collaboration
          </p>
        </div>
        <div className="order-1 h-1/2 md:w-1/2 md:h-full ">
          <img
            src={img1}
            className="h-full object-cover md:w-full p-6 lg:object-contain "
            alt=""
          />
        </div>
      </div>
      <div className="glass h-[400px] flex flex-col items-center  flex-wrap md:flex-row w-[70%] shadow-md  max-h-max md:justify-around md:pt-0">
        <div className=" order-2 h-1/2 md:w-1/2 md:h-ful lg:h-full">
          <img
            src={img2}
            alt="img2"
            className="h-full object-cover md:w-full p-6 lg:object-contain "
          />
        </div>
        <div className="order-1 h-28  p-5 md:w-1/2 md:flex md:flex-col lg:ps-14 md:justify-center">
          <h2 className="text-center text-3xl md:text-4xl md:text-left lg:text-5xl lg:text-left">
            Live Chat, Live Draw
          </h2>
          <p className="text-slate-700 my-3 text-center md:text-left lg:text-2xl lg:text-left">
            Transforming Communication with Realtime Whiteboard and Video
            Integration
          </p>
        </div>
      </div>
      <div className="glass h-[400px] flex flex-col items-center   md:flex-row shadow-md w-[70%] md:justify-around md:pt-0">
        <div className=" h-28 order-2 p-5 md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-center text-3xl md:text-4xl md:text-left lg:text-5xl lg:text-left">
            Video Conferencing
          </h2>
          <p className="text-slate-700 my-3 text-center md:text-left lg:text-2xl lg:text-left">
            Experience the Power of Presence: Video Conferencing and Realtime
            Whiteboard, Uniting Ideas in Real-time
          </p>
        </div>
        <div className="order-1 h-1/2 md:w-1/2 md:h-ful lg:h-full">
          <img
            src={img3}
            alt="img3"
            className="h-full object-cover md:w-full p-6 lg:object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
