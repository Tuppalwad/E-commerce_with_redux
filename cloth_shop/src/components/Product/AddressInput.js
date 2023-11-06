import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpencart } from "../Redux/AddAddresss";
import { deleteaddress, getaddress, setaddress } from "../ApiServices/Services";

import { setAddress, clearAddress } from "../Redux/addressSlice";

function AddressInput() {
  const checkopen = useSelector((state) => state);
  const [addressdetails, setaddressdetails] = useState(null);
  const [addressinput, setaddressinput] = useState({
    fname: "",
    lname: "",
    email: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    address: "",
  });
  const dispatch = useDispatch();
  const setclose = useDispatch();
  const [refresh, setrefresh] = useState(false); // for refresh page after delete address
  useEffect(() => {
    (async () => {
      try {
        const phone = localStorage.getItem("phone") || "";
        console.log(phone);
        if (phone) {
          const resAddress = await getaddress({ phone: phone });
          console.log(resAddress.data);
          if (
            resAddress.data.status === "true" &&
            resAddress.data.address.length > 0
          ) {
            setaddressdetails(resAddress.data.address[0]);
            dispatch(setAddress(resAddress.data.address[0]));
          } else {
            dispatch(clearAddress());
          }
        } 
      } catch (err) {
        console.log(err);
      }
    })();
  }, [refresh]);

  const handleaddaddress = async () => {
    try {
      const phone = localStorage.getItem("phone") || "";
      const resAddress = await setaddress({
        address: { ...addressinput, phone: phone },
      });
      console.log(resAddress.data);
      if (resAddress.data.status === "true") {
        setrefresh(!refresh);
        dispatch(setAddress(resAddress.data.address));
      } else {
        dispatch(clearAddress());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handledelete = async () => {
    try {
      const phone = localStorage.getItem("phone") || "";
      const resAddress = await deleteaddress({ phone: phone });
      if (resAddress.data.status === "true") {
        setaddressdetails(null);
        setrefresh(!refresh);
        dispatch(clearAddress());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return addressdetails ? (
    <div className="mt-6">
      <div className="flex flex-row justify-between bg-gray-100 p-2 rounded-md">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">Name:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.fname} {addressdetails.lname}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">Email:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.email}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">Address:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.address}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">City:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.city}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">State:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.state}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">Country:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.country}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm font-medium text-gray-700">Pincode:</p>
            <p className="text-sm font-medium text-gray-700 ml-2">
              {addressdetails.pincode}
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-row pt-3">
              <button
                className="text-sm font-medium  ml-2bg-indigo-600 px-6 py-3  text-white shadow-sm bg-indigo-700"
                onClick={handledelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-6">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  fname: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  lname: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email
                    "
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country / Region
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="country"
              id="country"
              autoComplete="country"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  country: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700"
          >
            Street address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  address: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  city: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State / Province
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="state"
              id="state"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  state: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700"
          >
            ZIP / Postal
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="zip"
              id="zip"
              autoComplete="postal-code"
              className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              onChange={(e) =>
                setaddressinput({
                  ...addressinput,
                  pincode: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="mt-6">
            <p
              onClick={handleaddaddress}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer"
            >
              Add Address
            </p>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() =>
                  setclose(
                    setOpencart({
                      cartopen: !checkopen.cartopen,
                    })
                  )
                }
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressInput;
