import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpencart } from "../Redux/AddAddresss";
function ReviewProduct() {
  const product = [
    {
      name: "ComfortBlend Classic Tee",
      price: 399,
      offer: 10,
      quantity: 20,
      category: "grocery",
      imageid: "6526450b78d8efcd4d17",
      color: "Black",
      size: "S",
      gender: "male",
      imageUrl:
        "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/6526450b78d8efcd4d17/preview?project=64fe9e67d71d1c56225a",
    },
    {
      name: "Eco-Friendly Cotton Crew ",
      price: 299,
      offer: 10,
      quantity: 20,
      category: "grocery",
      imageid: "65264595c5a24d1bed86",
      color: "red",
      size: "M",
      gender: "female",
      imageUrl:
        "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/65264595c5a24d1bed86/preview?project=64fe9e67d71d1c56225a",
    },
  ];

  const dispach = useDispatch();
  const open = useSelector((state) => state);
  return (
    <div className="p-10">
      <div className="flex justify-between items-center border-b-2 border-gray-200 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Review Order</h2>
      </div>
      <div
        className="grid grid-cols-2 gap-3"
        style={{ width: "80%", margin: "auto" }}
      >
        <div>
          {product.map((item, index) => {
            return (
              <div
                className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-200 py-4"
                key={index}
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="ml-4">
                    <div
                      className="flex flex-col md:flex-row justify-between items-center"
                      style={{ width: "300px" }}
                    >
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      {/* edit button */}
                      <button className="text-sm font-semibold text-indigo-600 focus:outline-none focus:text-indigo-800">
                        Edit
                      </button>
                    </div>
                    <div className="flex items-center mt-2">
                      <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 12H4"></path>
                        </svg>
                      </button>
                      <span className="text-gray-700 mx-2">
                        {item.quantity}
                      </span>
                      <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 12H4"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-gray-600">₹ {item.price}</div>
              </div>
            );
          })}
        </div>

        <div className="p-5">
          <div className="py-4 px-6 bg-gray-100 rounded-lg ">
            <h1 className="text-lg font-semibold text-gray-800 mb-2">
              Order Summary
            </h1>
            <h3 className="text-lg font-semibold text-gray-800">
              Total Amount: ₹ 698
            </h3>
            {/* discount 10% */}
            <div className="flex items-center mt-4">
              <span className="text-gray-700 mx-2">Discount</span>

              <span className="text-gray-700 mx-2">₹ 69.8</span>
              {/* order total  */}
              <div className="text-gray-600">₹ 628.2</div>
            </div>
            {/* button checkout */}
            <button className="block w-full bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              Proceed to Pay
            </button>
            <button
              onClick={() =>
                dispach(setOpencart({ cartopen: !open.addrescartopen }))
              }
              className="block w-full bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Fill Address Detail
            </button>
            {/* continue shopping link  */}
            <Link
              to="/products"
              className=" p-3 underline block w-full bg-transparent hover:bg-gray-100 focus:bg-gray-100 text-indigo-700 "
            >
              {" "}
              Continue Shopping
            </Link>
          </div>

          {/* fill address detail button here  */}
        </div>
      </div>
    </div>
  );
}

export default ReviewProduct;
