import React from "react";
import  img from "../Asset/qrcode.png"
import {useSelector}  from "react-redux"
function BuyNow() {
    const items = useSelector((state) => state);
    const product = items.cart
    const totalAmount = product.reduce((total, item) => total + item.price * item.quantity, 0);
    const offer = product.map((item) => item.offer);              
    const average = offer.reduce((total, item) => total + item, 0) / offer.length;
    const discount = totalAmount * (average / 100);

    const finalAmount = Math.round(totalAmount - discount);
    

  return (
    <div className="my-10 mx-auto flex items-center  justify-center  ">
      <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className=" flex justify-center items-center " >
          <img
            class="rounded-t-lg p-10"
            src={img}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Amount<span> : ₹ {finalAmount}</span> 
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            scan the QR code and send the money schreenshort of successfull payment to whatsapp no that is 
            +91 7558797032 
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
