import React from "react";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <div className="h-full w-full dark:bg-slate-900">
      <h1 className="text-2xl text-center pt-10 dark:text-slate-200">
        Choose your favourite plane
      </h1>
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="relative self-center bg-transparent border dark:text-slate-200 rounded-lg p-0.5 flex">
          <button
            type="button"
            className="relative w-1/2 rounded-md py-2 text-sm font-medium dark:text-slate-200 whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-transparent border-slate-50 text-slate-900 shadow-sm"
          >
            Monthly billing
          </button>
        </div>
        <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900 dark:text-slate-100">
                Starter
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight dark:text-slate-200">
                For new makers who want to fine-tune and test an idea.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter dark:text-slate-200">
                  &#8377; 0
                </span>

                <span className="text-base font-medium text-slate-500 dark:text-slate-200">
                  /mo
                </span>
              </p>
              <Link className="mt-8 block w-full bg-purple-600 rounded-md py-2 text-sm font-semibold text-white text-center dark:text-slate-200">
                Join as a Starter
              </Link>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase dark:text-slate-200">
                What's included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    1 room included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Video and Audio chat
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Realtime whiteboard
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Only two user in room
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Limited use
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Real-time analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900 dark:text-slate-100">
                Superior
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight dark:text-slate-200">
                For creators with multiple ideas who want to efficiently test
                and refine them.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter dark:text-slate-200">
                  &#8377; 8
                </span>

                <span className="text-base font-medium text-slate-500 dark:text-slate-200">
                  /mo
                </span>
              </p>
              <Link className="mt-8 block w-full bg-purple-600 rounded-md py-2 text-sm font-semibold text-white text-center dark:text-slate-200">
                Join as a Superior
              </Link>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase dark:text-slate-200">
                What's included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    One room included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Video and audio chat
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Realtime whiteboard
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    Upto five user can join room
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    100% secure
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900 dark:text-slate-100">
                Shipper
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight dark:text-slate-200">
                For productive shippers who want to work more efficiently.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter dark:text-slate-200">
                  &#8377; 15
                </span>

                <span className="text-base font-medium text-slate-500 dark:text-slate-200">
                  /mo
                </span>
              </p>
              <Link className="mt-8 block w-full bg-purple-600 rounded-md py-2 text-sm font-semibold text-white text-center dark:text-slate-200">
                Join as a Shipper
              </Link>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase dark:text-slate-200">
                What's included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    All Standard features
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    20 landing pages included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    200,000 visits/mo
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    5,000 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700 dark:text-slate-200">
                    No payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
