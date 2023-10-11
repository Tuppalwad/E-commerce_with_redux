import React from "react";

export default function About() {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold mt-10">About Us</h1>
        <hr className="w-1/6  mx-auto mt-5 mb-5" />

        <div className="flex flex-col md:flex-row justify-center items-center">
          <p
            className="text-center text-gray-800 md:w-1/2 first-letter:
            text-2xl"
          >
            Quisquam voluptatum, quas, voluptatibus, voluptas accusantium quae
            quibusdam incidunt voluptate fugiat natus dolorum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center my-5">
          <p className="text-center text-gray-600 md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quas, voluptatibus, voluptas accusantium quae quibusdam
            incidunt voluptate fugiat natus dolorum.
          </p>
        </div>
      </div>

      {/* how it started  */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className=" text-xl font-semibold text-gray-600 sm:text-sm tracking-wide uppercase lg:text-sm">
              How it started
            </span>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              {" "}
              Our Story
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center my-5">
              <p className="text-center text-gray-600 md:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptatibus, voluptas accusantium
                quae quibusdam incidunt voluptate fugiat natus dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
