import React from "react";
import { useFormik } from "formik";
import imglogin from "../assets/login.png";
import { loginSchema } from "../utils/validate";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/helper";
import toast from "react-hot-toast";
const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const loginPromise = loginUser(values);
      toast.promise(loginPromise, {
        loading: "Creating...",
        success: "Login successful...",
        error: "There was an error",
      });
      loginPromise.then((res) => {
        console.log(res);
        let { token } = res;
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        navigate("/dashboard");
      });
    },
  });
  return (
    <div>
      <section className="h-screen dark:bg-slate-800 p-5">
        <Outlet />
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 h-fit mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 hidden md:flex ">
              <img
                src={imglogin}
                className="w-full h-full"
                alt="Sample image"
              />
            </div>

            <div className=" md:mb-0  lg:w-[30%] glass py-8 px-5 mx-auto h-fit ">
              <h1 className="text-center text-2xl  pb-3">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="email"
                    autoComplete="username"
                    className="peer block min-h-[auto] w-full  rounded border  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 border-stone-300"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    name="password"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 border-stone-300"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                    autoComplete="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-600">{errors.password}</div>
                  ) : null}
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block bg-purple-600 rounded  px-7 dark:text-slate-200 pb-2.5 pt-3 text-sm font-medium  leading-normal text-slate-200 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm  dark:text-slate-200">
                    Don't have an account ?
                    <Link
                      to="/register"
                      className="text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ms-1"
                    >
                      Register
                    </Link>
                    <br />
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        navigate("/login/enter_email");
                      }}
                    >
                      Forget password
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
