import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Recovery = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full absolute dark:bg-slate-800   z-50  flex justify-center items-center backdrop-blur left-0 ">
      <Outlet />
      <div className="w-[500px]  top-0 rounded-lg glass  h-[300px] flex items-center  justify-center mx-auto ">
        <div className="mt-7     ">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Enter OTP
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 outline-none">
              Enter OTP from your registered Email id
            </p>
          </div>

          <div className="mt-5 bg">
            <form>
              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="otp"
                    className="block text-sm   ml-1 mb-2 dark:text-white "
                  >
                    Enter OTP
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="____"
                      name="otp"
                      className="py-3 px-4 block w-full border-2 outline-none bg-transparent dark:text-slate-200 border-gray-400 rounded-md text-sm  focus:ring-blue-500 shadow-sm"
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Enter OTP send to your Registered email
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigate("/login/recovery/resetpassword");
                  }}
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="text-red-500 cursor-pointer">Resend OTP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
