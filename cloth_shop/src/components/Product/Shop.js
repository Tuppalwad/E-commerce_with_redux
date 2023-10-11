import React from "react";
import img1 from "../Asset/t-1.jpg";
import img2 from "../Asset/t-2.jpg";
import img3 from "../Asset/t-3.jpg";
import img4 from "../Asset/t-4.jpg";
import img5 from "../Asset/t-5.jpg";
import img6 from "../Asset/t-1.jpg";
import Overlay from "../landing/Overlay";

function Shop() {
  const images = [img1, img2, img3, img4, img5, img6];
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
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                S
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                M
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                L
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                XL
              </button>
            </div>
          </div>
          <div className="my-0 md:my-3">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Prise Range
            </label>

            {/* slider here  */}
            <div
              class="w-full h-2 bg-gray-300 rounded-full "
              style={{ margin: "20px auto", cursor: "pointer" }}
            >
              <div class="w-1/2 h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="my-0 md:my-3">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Color Family
            </label>

            {/* color box here  */}
            <div className="flex flex-row">
              <p
                class="bg-pink-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center"
                style={{
                  width: "29px",
                  height: "29px",
                }}
              ></p>
              <p
                class=" bg-yellow-300 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center ml-2"
                style={{
                  width: "29px",
                  height: "29px",
                }}
              ></p>
              <p
                class=" bg-black hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center ml-2"
                style={{
                  width: "29px",
                  height: "29px",
                }}
              ></p>
              <p
                class=" bg-red-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center ml-2"
                style={{
                  width: "29px",
                  height: "29px",
                }}
              ></p>
            </div>
          </div>

          <div className="my-0 md:my-3">
            <label
              for="countries"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-800 "
            >
              Country
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
        </div>

        <div
          className="border-r-2 border-gray-300 h-0 md:h-[500px]  "
          style={{ margin: "20px 20px" }}
        ></div>

        <div className="mt-0 md:mt-6">
          <div className="mb-3 flex justify-between">
            <span className="text-gray-500 text-sm">
              Showing 1–12 of 53 results
            </span>
            {/* disply option */}
            <div>
              <i
                class="fas fa-th-list mr-2 "
                style={{
                  cursor: "pointer",
                }}
              ></i>
              <i
                class="fas fa-th-large "
                style={{
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div
            class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-3"
            style={{
              maxHeight: "600px",
              overflow: "scroll",
            }}
          >
            {images.map((img, index) => {
              return (
                <div key={index}>
                  <Overlay img={img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
