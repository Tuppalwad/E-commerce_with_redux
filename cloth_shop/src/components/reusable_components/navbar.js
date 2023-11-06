import React, { useState, useContext, useEffect } from "react";
import logo from "../Asset/logo1.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../Redux/CartItemShow";
import { checklogin, logout } from "../ApiServices/Services";
import { autho } from "../Redux/AuthoApi";
import { set } from "mongoose";
function Navbar() {
  const c_items = useSelector((state) => state);
  const dispachCart = useDispatch();
  const dispatchautho = useDispatch();
  const open = useSelector((state) => state);
  const chekclogin = useSelector((state) => state);
  useEffect(() => {
    const phone = localStorage.getItem("phone") || "";
    if (phone) {
      (async () => {
        await checklogin({ phone }).then((res) => {
          if (res.data.status === "true") {
            dispatchautho(autho({ autho: true ,phone:phone}));
          }
        });
      }
      )();
    } else {
      dispatchautho(autho({ autho: false,phone:"" }));
    }
  }, []);

  console.log(chekclogin.AuthoApi.phone);
  const handlelogout = async () => {
    const phone = localStorage.getItem("phone");
    if (phone) {
      logout({ phone: phone }).then((res) => {
        if (res.data.status === "true") {
          localStorage.removeItem("phone");
          dispatchautho(autho({ autho: false }));
        }
      });
    }
  };
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

          <div class="flex items-center ">
            <p>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-dark focus:ring-4 bottom-0 outline-none focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white-600  "
                type="button"
              >
                <i class="fas fa-user mr-2"
               
                ></i>
              </button>

              <div
                id="dropdown"
                class="z-10  hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2  text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="/"
                      class="block px-4 ms-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Hello user
                    </Link>
                    {chekclogin.AuthoApi.autho ? (
                      <span class="text-xs text-gray-400 ms-3 mb-2">
                        {chekclogin.AuthoApi.phone}
                      </span>
                    ) : (
                      <></>
                    )}
                  </li>

                  {chekclogin.AuthoApi.autho ? (
                    <li>
                      {/* phone number icon */}

                      <Link
                        onClick={() =>
                          dispachCart(setOpen({ cartopen: !open.cartopen }))
                        }
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <i class="fas fa-phone-alt mr-2 "></i> My Orders
                      </Link>
                    </li>
                  ) : (
                    <>
                      {/* login button  */}
                      <li>
                        <Link
                          to="/login"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <i class="fas fa-sign-in-alt mr-2"></i>
                          Sign in
                        </Link>
                      </li>
                    </>
                  )}
                  { chekclogin.AuthoApi.autho? (
                    <li>
                      <p
                        onClick={() => {
                          handlelogout();
                        }}
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                      >
                        <i class="fas fa-sign-out-alt mr-2"></i>
                        Sign out
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </p>
            <p
              class="mr-6 text-sm  text-gray-500 dark:text-gray-900 relative"
              onClick={() => dispachCart(setOpen({ cartopen: !open.cartopen }))}
              style={{
                cursor: "pointer",
              }}
            >
              <span class="absolute -top-4 left-2 rounded-full bg-red-500 text-white p-1 text-xs">
                {c_items.cart.length}
              </span>
              <i class="fas fa-shopping-cart"></i>
            </p>
            <Link
              to="/login"
              class="text-sm  text-gray-600 dark:text-gray-500 hover:underline "
            >
              Sign in
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

export default Navbar;
