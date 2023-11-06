import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpencart } from "../Redux/AddAddresss";
import { update } from "../Redux/SliceCard";
function ReviewProduct() {
  const items = useSelector((state) => state);
  const product = items.cart

  const dispach = useDispatch();
  const open = useSelector((state) => state);
  
  const addressValue = useSelector((state) => state.Chackaddress);

  const [edit, setEdit] = React.useState(false);
  const [edititems, setEdititems] = React.useState({
    quantity: product.length > 0 ? product[0].quantity : 0,
    size: product.length > 0 ? product[0].size : "",
    color: product.length > 0 ? product[0].color : ""
  })
  const address = useSelector((state) => state.address);
  
  const totalAmount = product.reduce((total, item) => total + item.price * item.quantity, 0);
  // take average of offer in product array
  const offer = product.map((item) => item.offer);
  const average = offer.reduce((total, item) => total + item, 0) / offer.length;
  const discount = totalAmount * (average / 100);
  const orderTotal = totalAmount - discount;

  const handlesave = (item) => {
    setEdit(false)
    dispach(update({
      ...item,
      quantity: edititems.quantity,
      size: [edititems.size],
      color: [edititems.color]

    }))
  }
  console.log(addressValue);
  return (
    <div className="p-10">
      <div className="flex justify-between items-center border-b-2 border-gray-200 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Review Order</h2>
      </div>
      <div
        className="grid grid-cols-2 gap-3"
        style={{ width: "80%", margin: "auto" }}
      >
        {
          product.length > 0 ? (
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
                          style={{ width: "460px" }}
                        >
                          <h2 className="text-lg font-semibold text-gray-800">
                            {item.name}
                          </h2>
                          {/* edit button */}
                          <div className="text-gray-600 flex space-x-3">

                            <p
                              onClick={() => setEdit(true)}
                              style={{
                                display: edit ? "none" : "block",
                                cursor: "pointer",
                              }}
                              className="text-sm font-semibold text-indigo-600 focus:outline-none focus:text-indigo-800">
                              Edit
                            </p>

                            <span>₹ {item.price * edititems.quantity}</span>
                          </div>



                        </div>

                        {
                          edit ? (
                            // add input field here 
                            <div className="flex items-center mt-2">
                              <input type="number" className="border border-gray-300 p-1 w-16" value={
                                edititems.quantity
                              } onChange={(e) => setEdititems({ ...edititems, quantity: e.target.value })} />
                              {/* input field for size and color / */}

                              < select className="border border-gray-300 p-1 w-16 ml-2" value={
                                edititems.size
                              } onChange={(e) => setEdititems({ ...edititems, size: e.target.value })}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                              </select>
                              < select className="border border-gray-300 p-1 w-18 ml-2" value={
                                edititems.color
                              } onChange={(e) => setEdititems({ ...edititems, color: e.target.value })}>
                                <option value="red">red</option>
                                <option value="blue">blue</option>
                                <option value="green">green</option>
                                <option value="yellow">yellow</option>
                              </select>
                              <button className="bg-indigo-600 text-white px-2 py-1 rounded ml-2" onClick={handlesave}>Save</button>

                              < button className="bg-red-600 text-white px-2 py-1 rounded ml-2" onClick={() => setEdit(false)}>Cancel</button>
                            </div>
                          ) : (
                            <div className="flex items-center mt-2">
                              <span className="text-gray-700 mx-2">
                                Qty
                              </span>
                              <span className="text-gray-700 mx-2">{
                                edititems.quantity
                              }</span>
                              {/* size and color  */}
                              <span className="text-gray-700 mx-2">Size</span>
                              <span className="text-gray-700 mx-2">{
                                edititems.size
                              }</span>
                              <span className="text-gray-700 mx-2">Color</span>
                              <span className="text-gray-700 mx-2">{
                                edititems.color
                              }</span>

                            </div>
                          )
                        }

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-semibold text-gray-800">
                No Product in Cart
              </h1>
            </div>
          )
          // <div className="flex justify-center items-center">
        }

        <div className="p-5">
          <div className="py-4 px-6 bg-gray-100 rounded-lg ">
            <h1 className="text-lg font-semibold text-gray-800 mb-2">
              Order Summary
            </h1>
            <h3 className="text-lg font-semibold text-gray-800">
              {
                product.length > 0 ? (<div className="flex justify-between items-center">   <span className="text-gray-700 mx-2">Total Amount</span>
                  <span className="text-gray-700 mx-2">₹ {totalAmount}</span></div>) : ""
              }
            </h3>
            {/* discount 10% */}
            <div className="flex items-center mt-4">
              <span className="text-gray-700 mx-2">Discount</span>
              < span className="text-gray-700 mx-2">
                {
                  product.length > 0 ? (
                    <span className="text-gray-700 mx-2">
                      {
                        Math.round(average) ? Math.round(average) : 0
                      }
                    </span>
                    ) : ""
                }
                %</span> <span className="text-gray-700 mx-2">-</span>
              <span className="text-gray-700 mx-2">₹ {
                Math.round(discount)? Math.round(discount):0
              }</span>

            </div>
            {/* total amount */}
            <div className="flex items-center mt-4">
              <span className="text-gray-700 mx-2">Order Total</span>
              <span className="text-gray-700 mx-2">₹ {
                Math.round(orderTotal) ? Math.round(orderTotal) : 0
              }</span>
            </div>

            {/* button checkout */}
            {
             address!==null? (
                <Link 
                  to={'/buynow'}
                className="block w-full bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                  Continue
                </Link>
              ) : (
                <button
                  onClick={() =>
                    dispach(setOpencart({ cartopen: !open.addrescartopen }))
                  }
                  className="block w-full bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                  Fill Address Detail
                </button>
              )
            }
            {/* continue shopping link  */}
            <div className="flex">
              <Link
                to="/shop"
                className=" p-3 underline block w-full bg-transparent hover:bg-gray-100 focus:bg-gray-100 text-indigo-700 "
              >
                {" "}
                Continue Shopping
              </Link>
              <p
                onClick={() =>
                  dispach(setOpencart({ cartopen: !open.addrescartopen }))
                }
                style={
                  {

                    cursor: "pointer"
                  }
                }
                className="p-3 underline block w-full bg-transparent hover:bg-gray-100 focus:bg-gray-100 text-indigo-700"
              >
                change address
              </p>
            </div>
          </div>

          {/* fill address detail button here  */}
        </div>
      </div>
    </div>
  );
}

export default ReviewProduct;
