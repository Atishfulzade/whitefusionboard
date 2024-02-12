import React from "react";
import img from "../assets/register.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../utils/validate";
const Register = () => {
  const { handleBlur, handleChange, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className=" h-screen w-full dark:bg-slate-800 bg-white flex  justify-center  sm:px-6 lg:px-8">
      <div className="w-1/2 hidden lg:block">
        <img src={img} className="w-full mx-auto" alt="" />
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="glass py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-center text-2xl">Register</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700 dark:text-slate-200"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-600">{errors.name}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 dark:text-slate-200  text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  autoComplete="username"
                  placeholder="user@example.com"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
              "
                />
                {errors.email && touched.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 dark:text-slate-200 text-gray-700 "
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={values.password}
                  className="appearance-none block w-full px-3 py-2 bg-transparent  border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600">{errors.password}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 dark:text-slate-200 text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  className="appearance-none block bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="text-red-600">{errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account ?
            <Link to="/login" className="text-red-500 ms-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
