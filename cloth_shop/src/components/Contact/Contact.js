import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold mt-10">Contact Us</h1>
        <hr className="w-1/6  mx-auto mt-5 mb-2" />

        <div className="flex flex-col md:flex-row justify-center items-center">
          <p
            className="text-center text-gray-800 md:w-1/2 first-letter:
            text-sm md:text-lg lg:text-xl font-semibold p-3"
          >
            Quisquam voluptatum, quas, voluptatibus, voluptas accusantium quae
            quibusdam incidunt voluptate fugiat natus dolorum.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <iframe
          style={{
            width: "80%",
          }}
          className="  h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.556010740221!2d-0.1277586842297928!3d51.50735060271626!2m3!1f0!2f0!3f0!3m2!
          1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ebe3b6f7b9%3A0x52963a5addd52a99!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1630195887007!5m2!1sen!2suk"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div
        className=" grid grid-cols-1 md:grid-cols-2 gap-2"
        style={{ width: "80%", margin: "20px auto" }}
      >
        <div className=" flex flex-col  justify-start  items-start p-0 md:p-16  my-5">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <div className="flex my-4">
            <i class="fas fa-map-marker-alt"></i>
            <p className="ms-2"> 1234 Street Name, City Name, United States</p>
          </div>
          <div className="flex my-2">
            <i class="fas fa-envelope"></i>
            <p className="ms-2">
              <Link to="mailto:">ttes@gmail.com</Link>
            </p>
          </div>
          <div className="flex my-2">
            <i class="fas fa-phone-alt"></i>
            <p className=" ms-2">
              <Link to="tel:">+1 234 567 890</Link>
            </p>
          </div>
        </div>
        <div className="flex  flex-col md:flex-col justify-center items-center my-5">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-password"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-password"
                  type="email"
                  placeholder="Enter your message"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* map here  */}
    </>
  );
}
