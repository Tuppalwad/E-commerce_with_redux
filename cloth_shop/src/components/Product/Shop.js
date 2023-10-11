import React, { useEffect, useState } from "react";
import img1 from "../Asset/t-1.jpg";
import img2 from "../Asset/t-2.jpg";
import img3 from "../Asset/t-3.jpg";
import img4 from "../Asset/t-4.jpg";
import img5 from "../Asset/t-5.jpg";
import img6 from "../Asset/t-1.jpg";
import Overlay from "../landing/Overlay";
import { Link } from "react-router-dom";
function Shop() {
  const images = [img1, img2, img3, img4, img5, img6];

  const test = [
    {
      "name": "ComfortBlend Classic Tee",
      "price": 399,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "6526450b78d8efcd4d17",
      "color": 'Black',
      "size": 'S',
      "gender": 'male',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/6526450b78d8efcd4d17/preview?project=64fe9e67d71d1c56225a"

    },
    {
      "name": "Eco-Friendly Cotton Crew ",
      "price": 299,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "65264595c5a24d1bed86",
      "color": 'red',
      "size": 'M',
      "gender": 'female',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/65264595c5a24d1bed86/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Urban Street Style Shirt",
      "price": 199,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "gender": 'male',
      "imageid": "652645d7bac4f2fde358",
      "color": 'Blue',
      "size": 'L',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652645d7bac4f2fde358/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Retro Graphic Print Top",
      "price": 499,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "65264614baa4f7c02a7e",
      "color": 'yellow',
      "size": 'XL',
      "gender": 'female',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/65264614baa4f7c02a7e/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Athleisure Active Shirt",
      "price": 699,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "652646930fd5b31990d9",
      "color": 'white',
      "size": 'XXL',
      "gender": 'female',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652646930fd5b31990d9/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Vintage Vibe T-Shirt",
      "price": 599,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "652646c872509325b7dc",
      "color": 'green',
      "size": 'S',
      "gender": 'male',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652646c872509325b7dc/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Signature Soft Cotton Tee",
      "price": 599,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "652647b69c625267d476",
      "color": 'pink',
      "size": 'M',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652647b69c625267d476/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Modern Minimalist Jersey ",
      "price": 499,
      "offer": 10,
      "quantity": 10,
      "category": "grocery",
      "imageid": "652647f8d21f7b3a607e",
      "color": 'orange',
      "size": 'L',
      "gender": 'female',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652647f8d21f7b3a607e/preview?project=64fe9e67d71d1c56225a"
    },
    {
      "name": "Weekend Adventure Tee",
      "price": 699,
      "offer": 10,
      "quantity": 20,
      "category": "grocery",
      "imageid": "652648ba7c16d3fc6135",
      "color": 'red',
      "size": 'XL',
      "gender": 'male',
      "imageUrl": "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652648ba7c16d3fc6135/preview?project=64fe9e67d71d1c56225a"
    }
  ]


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
              <button onClick={() => {
                setFilteritem({ ...filteritem, size: 'S' })
              }} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                S
              </button>
              <button
                onClick={() =>
                  setFilteritem({ ...filteritem, size: 'M' })
                }
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                M
              </button>
              <button onClick={() =>
                setFilteritem({ ...filteritem, size: 'L' })
              } class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center ml-2">
                L
              </button>
              <button onClick={() =>
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
                onClick={() =>
                  setFilteritem({ ...filteritem, color: 'red' })
                }
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                red
              </button>
              <button onClick={() => setFilteritem({ ...filteritem, color: 'gray' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                gray
              </button>
              <button onClick={() => setFilteritem({ ...filteritem, color: 'blue' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                blue
              </button>
              <button onClick={() => setFilteritem({ ...filteritem, color: 'green' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                green
              </button>
              <button onClick={() => setFilteritem({ ...filteritem, color: 'white' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                white
              </button>
              <button onClick={() => setFilteritem({ ...filteritem, color: 'black' })} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
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
            <button onClick={() =>
              setFilteritem({
                ...filteritem, gender: 'male'
              })
            } class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
              Male
            </button>
            < button onClick={() =>
              setFilteritem({ ...filteritem, gender: 'female' })
            } class="bg-gray-200 ms-3 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
              Female
            </button>
          </div>
        </div>

        <div
          className="border-r-2 border-gray-300 h-0 md:h-[500px]  "
          style={{ margin: "20px 20px" }}
        ></div>

        <div className="mt-0 md:mt-6">
          <div className="mb-3 flex justify-between">
            <span className="text-gray-500 text-sm">
              Showing {filterdata.length > 0 ? filterdata.length : test.length}{" "} results
            </span>
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
      </div>
    </>
  );
}

export default Shop;
