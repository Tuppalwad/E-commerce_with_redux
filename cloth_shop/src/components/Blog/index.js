import React from "react";
import { useNavigate } from "react-router-dom";
export default function Index() {
  const nevigate = useNavigate()
  return <div>   <div className="  my-9">
    {/* add text here */}
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className=" text-xl font-semibold text-gray-600 sm:text-sm tracking-wide uppercase lg:text-sm">
            What our customers are Looking for ?
          </span>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            {" "}
            Blog Posts
          </p>
        </div>
      </div>
    </div>
    <div style={{ width: "76%", margin: "auto" }}>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
        <div style={{
          cursor: 'pointer'
        }}
          onClick={() => { nevigate('/blog/test') }}
          className=" block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
          <i class="fas fa-quote-left text-4xl text-gray-500"></i>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>

        <div style={{
          cursor: 'pointer'
        }} onClick={() => { nevigate('/blog/test') }} className=" block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
          <i class="fas fa-quote-left text-4xl text-gray-500"></i>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>

        <div style={{
          cursor: 'pointer'
        }} onClick={() => { nevigate('/blog/test') }} className=" block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
          <i class="fas fa-quote-left text-4xl text-gray-500"></i>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  </div></div>;
}
