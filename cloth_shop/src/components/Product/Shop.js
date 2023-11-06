import React, { useEffect, useState } from "react";

import Overlay from "../landing/Overlay";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Shop() {

  const test = useSelector(state => state.Products)

  // now add filter logic here
  const [filteritem, setFilteritem] = useState({
    color: '',
    size: '',
    gender: '',
    price: ''
  })


  useEffect(() => {
    console.log(filteritem)
  }, [filteritem])

  const filterdata = test.filter(item => {
    return Object.keys(filteritem).every(key => {
      if (filteritem[key] === "") return true
      return String(item[key]).toLowerCase().includes(filteritem[key].toLowerCase())
    })
  })
  console.log(filterdata)

  const [towcol, setTowcol] = useState(false);

  return (
    <>
      <div className=" my-5 justify-center  text-center ">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Shop
        </h1>
        <p className="text-gray-500 text-sm">Home / Shop</p>
      </div>
      <div
        className="flex flex-col md:flex-row "
        style={{
          width: "70%",
          margin: "20px auto",
        }}
      >
        <div
          style={{ margin: "20px auto" }}
          className="gird grid-cols-1 md:grid-cols-5  gap-3"
        >
          <div>
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Categories
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="my-0 md:my-3">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Size
            </label>
            {/* check box  */}
            <div className="flex flex-row">
              <button

                style={{
                  border: filteritem.size === 'S' ? '1px solid black' : 'none'
                }}
                onClick={() => {
                  setFilteritem({ ...filteritem, size: 'S' })
                }} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                S
              </button>
              <button
                style={{ border: filteritem.size === 'M' ? '1px solid black' : 'none' }}
                onClick={() =>
                  setFilteritem({ ...filteritem, size: 'M' })
                }
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                M
              </button>
              <button
                style={{ border: filteritem.size === 'L' ? '1px solid black' : 'none' }}
                onClick={() =>
                  setFilteritem({ ...filteritem, size: 'L' })
                } class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                L
              </button>
              <button
                style={{ border: filteritem.size === 'XL' ? '1px solid black' : 'none' }}
                onClick={() =>
                  setFilteritem({ ...filteritem, size: 'XL' })
                } class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                XL
              </button>
            </div>
          </div>
          <div className="my-0 md:my-4">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Prise Range
            </label>

            {/* dorpdonw here */}
            < select

              style={{ border: ["149", "299", "499", "999"].includes(filteritem.price) ? '1px solid black' : 'none' }}

              onChange={(e) =>
                setFilteritem({ ...filteritem, price: e.target.value })
              }
              value={filteritem.price}
              id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a Price</option>
              <option value="149">Under ₹149</option>
              <option value="299">Under ₹299</option>
              <option value="499">Under ₹499</option>
              <option value="999">Under ₹999</option>
            </select>



          </div>

          <div className="my-0 md:my-3">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Color Family
            </label>

            {/* color box here  */}
            <div className="
              grid grid-cols-3 md:grid-cols-2 gap-2
            ">
              {/* add buttons for cullar with whtie backgrond and black border */}
              <button
                style={{ border: filteritem.color === 'red' ? '1px solid black' : 'none' }}
                onClick={() =>
                  setFilteritem({ ...filteritem, color: 'red' })
                }
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                red
              </button>
              <button
                style={{ border: filteritem.color === 'pink' ? '1px solid black' : 'none' }}
                onClick={() => setFilteritem({ ...filteritem, color: 'pink' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                pink
              </button>
              <button
                style={{ border: filteritem.color === 'blue' ? '1px solid black' : 'none' }}
                onClick={() => setFilteritem({ ...filteritem, color: 'blue' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                blue
              </button>
              <button
                style={{ border: filteritem.color === 'green' ? '1px solid black' : 'none' }}
                onClick={() => setFilteritem({ ...filteritem, color: 'green' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                green
              </button>
              <button
                style={{ border: filteritem.color === 'white' ? '1px solid black' : 'none' }}
                onClick={() => setFilteritem({ ...filteritem, color: 'white' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                white
              </button>
              <button
                style={{ border: filteritem.color === 'black' ? '1px solid black' : 'none' }}
                onClick={() => setFilteritem({ ...filteritem, color: 'black' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                black
              </button>
            </div>
          </div>

          <div className="my-0 md:my-3">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Gender
            </label>
            <button
              style={{
                border: filteritem.gender === "male" ? "1px solid black" : "none",
              }}

              onClick={() =>
                setFilteritem({
                  ...filteritem, gender: 'male'
                })
              } class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
              Male
            </button>
            < button
              style={{ border: filteritem.gender === "female" ? "1px solid black" : "none" }}
              onClick={() =>
                setFilteritem({ ...filteritem, gender: 'female' })
              } class="bg-gray-200 ms-3 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
              Female
            </button>
          </div>
        </div>

        <div
          className="border-r-2 border-gray-300 h-0 md:h-[500px]  "
          style={{ margin: "20px 30px" }}
        ></div>

        <div className="mt-0 md:mt-6">
          <div className="mb-3 flex justify-between">
            <span className="text-gray-500 text-sm">
              Showing {filterdata.length > 0 ? filterdata.length : test.length}{" "} results
            </span>
            {/* remove filte text here  */}
            <span className="text-gray-500 text-sm cursor-pointer"
              onClick={() => setFilteritem({  // remove all filter here
                color: '',
                size: '',
                gender: '',
                price: ''
              })}

            >
              Remove Filter
            </span>
            <div>
              <i
                class="fas fa-th-list mr-2 "
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setTowcol(false)}
              ></i>
              <i
                class="fas fa-th-large "
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setTowcol(true)}
              ></i>
            </div>
          </div>
          <div

            style={{
              maxHeight: "600px",
              overflow: "scroll",
              display: "grid",
              gridTemplateColumns: towcol ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {filterdata.length > 0 ? filterdata.map((img, index) => {
              return (
                <div key={index}>
                  <Overlay img={
                    img
                  } />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/details/${img.index}`}>
                          {img.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {img.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {img.price}
                    </p>
                  </div>
                </div>
              );
            }) : test.map((img, index) => {
              return (
                <div key={index}>
                  <Overlay img={
                    img
                  } />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/details/${img.index}`}>
                          {img.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {img.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {img.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div >
    </>
  );
}

export default Shop;
