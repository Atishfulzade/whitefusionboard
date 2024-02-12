import React from "react";
import { resetPasswordSchema } from "../utils/validate";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
const ResetPassword = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        npassword: "",
        cpassword: "",
      },
      validationSchema: resetPasswordSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  const checkPassword = () => {
    navigate("/login");
    toast.success("Password changed successfully");
  };
  return (
    <div className="h-full w-full bg-white absolute z-50 flex  justify-center pt-5 dark:bg-slate-800">
      <div className="h-[315px] w-[350px]  glass rounded shadow">
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className="text-center text-2xl pt-6 dark:text-slate-100">
          Enter Password
        </h1>
        <div className=" px-5 flex gap-5  flex-wrap items-center justify-center ">
          <div className=" md:mb-0  lg:w-[100%]  mx-auto ">
            <form
              onSubmit={handleSubmit}
              className="w-full flex items-center justify-center flex-col gap-3"
            >
              <div className="relative mt-5 " data-te-input-wrapper-init>
                <input
                  type="password"
                  name="npassword"
                  className="peer block bg-transparent w-full rounded border border-stone-400 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                  id="exampleFormControlInput"
                  placeholder="Enter New Password"
                  autoComplete="password"
                  onChange={handleChange}
                  value={values.npassword}
                />
                {errors.npassword && touched.npassword ? (
                  <div className="text-red-600">{errors.npassword}</div>
                ) : null}
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  name="cpassword"
                  className="peer block bg-transparent  w-full rounded border border-stone-400 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                  id="exampleFormControlInput23"
                  placeholder="Confirm Password"
                  autoComplete="password"
                  onChange={handleChange}
                  value={values.cpassword}
                />
                {errors.cpassword && touched.cpassword ? (
                  <div className="text-red-600">{errors.cpassword}</div>
                ) : null}
              </div>

              <div className="text-center lg:text-left absolute bottom-8">
                <button
                  type="submit"
                  className=" bg-purple-600 rounded  px-7 disabled:bg-purple-400 dark:text-slate-200 pb-2.5 pt-3 text-sm font-medium  leading-normal text-slate-200  transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={checkPassword}
                  disabled={values.npassword !== values.cpassword}
                >
                  Change password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
