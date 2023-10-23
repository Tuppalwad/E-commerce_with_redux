import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setOpencart } from "../Redux/AddAddresss";
function Address() {
  const checkopen = useSelector((state) => state);
  const setclose = useDispatch();
  console.log(checkopen.addrescartopen);
  return (
    <Transition.Root show={checkopen.addrescartopen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() =>
          setclose(setOpencart({ cartopen: !checkopen.addrescartopen }))
        }
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Add Address
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() =>
                              setclose(
                                setOpencart({
                                  cartopen: !checkopen.addrescartopen,
                                })
                              )
                            }
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {/* give address detail hear  */}
                        <div className="mt-6 relative">
                          <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                          >
                            <div className="w-full border-t border-gray-300" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                              Address Details
                            </span>
                          </div>
                        </div>
                        {/* add input field hear */}
                        <div>
                          {/* first name and last name */}
                          <div className=" ">
                            <div className="mt-1 flex flex-col">
                              <label
                                htmlFor="Name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                name="fname"
                                id="fname"
                                autoComplete="fname"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="mt-1 flex flex-col">
                              <label
                                htmlFor="lname"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="lname"
                                id="lname"
                                autoComplete="lname"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="mt-1 flex flex-col">
                            <label
                              htmlFor="pincode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Pincode
                            </label>
                            <input
                              type="number"
                              name="pincode"
                              id="pincode"
                              autoComplete="pincode"
                              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="my-1">
                            <label className="block text-sm font-medium text-gray-700">
                              City
                            </label>
                            <select
                              id="city"
                              name="city"
                              autoComplete="city"
                              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option>Bangalore</option>
                              <option>Delhi</option>
                              <option>Mumbai</option>
                              <option>Chennai</option>
                            </select>
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            {/* contry and state hear */}
                            <div className="my-1">
                              {" "}
                              <label className="block text-sm font-medium text-gray-700">
                                State
                              </label>
                              <select
                                id="state"
                                name="state"
                                autoComplete="state"
                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option>Karnataka</option>
                                <option>Delhi</option>
                                <option>Maharastra</option>
                                <option>Tamil Nadu</option>
                              </select>
                            </div>
                            <div className="my-1">
                              <label className="block text-sm font-medium text-gray-700">
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option>India</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>Canada</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <textarea
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Add Address
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                              setclose(
                                setOpencart({ cartopen: !checkopen.cartopen })
                              )
                            }
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Address;
