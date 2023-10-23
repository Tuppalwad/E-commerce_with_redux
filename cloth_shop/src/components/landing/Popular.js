import React from "react";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Popular() {

  const products = useSelector(state => state.Products)


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-24 lg:max-w-7xl ">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className=" text-xl font-semibold text-gray-600 sm:text-sm tracking-wide uppercase lg:text-sm">
                Summer Collection
              </span>
              <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
                Popular T-Shirts
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={product.id} className="group ">
              <Overlay img={{ ...product, id: index }} />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/details/${index}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
