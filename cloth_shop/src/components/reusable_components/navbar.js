import React from "react";
import logo from "../Asset/logo1.png";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-white">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" class="flex items-center">
            <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900">
              Shree Ganesh
            </span>
          </Link>

          {/* add search bar here  */}
          <div class="relative">
            <input
              type="text"
              class=" w-48  mt-2 md:mt-0  md:w-full h-10 pl-4 pr-10 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none "
              placeholder="Search"
            />
            <button class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700  rounded-full">
              <i class="fas fa-search mt-2 md:mt-0"></i>
            </button>
          </div>

          <div class="flex items-center">
            <Link
              to="/shippingcart"
              class="mr-6 text-sm  text-gray-500 dark:text-gray-900"
            >
              {/* add to card icon  */}
              <i class="fas fa-shopping-cart"></i>
            </Link>
            <Link
              to="/login"
              class="text-sm  text-gray-600 dark:text-gray-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  to="/"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="shop"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
