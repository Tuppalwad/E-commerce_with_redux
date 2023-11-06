import React from "react";

function Comment() {
  return (
    <div className="  ">
      {/* add text here */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className=" text-xl font-semibold text-gray-600 sm:text-sm tracking-wide uppercase lg:text-sm">
              What our customers are saying
            </span>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              {" "}
              Reviews
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "76%", margin: "auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
          <div className=" block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
            <i class="fas fa-quote-left text-4xl text-gray-500"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Quality and Material:
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
            Comment on the quality of the t-shirt's material. Is it soft, durable, and comfortable to wear
            </p>
          </div>

          <div className=" block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
            <i class="fas fa-quote-left text-4xl text-gray-500"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Comfort and Wearability:
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
            Discuss how comfortable the t-shirt is to wear. Is it suitable for everyday use? Does it cause any discomfort or itching
            </p>
          </div>

          <div className=" block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
            <i class="fas fa-quote-left text-4xl text-gray-500"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Price and Value for Money
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
