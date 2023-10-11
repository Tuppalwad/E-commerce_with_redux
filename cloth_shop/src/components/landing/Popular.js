import React from "react";
import tshar1 from "../Asset/t-1.jpg";
import tshar2 from "../Asset/t-2.jpg";
import tshar3 from "../Asset/t-3.jpg";
import tshar4 from "../Asset/11.avif";
import tshar5 from "../Asset/22.jpg";
import tshar6 from "../Asset/33.jpg";
import Overlay from "./Overlay";

function Popular() {
  const imgs = [tshar1, tshar2, tshar3, tshar4, tshar5, tshar6];
  const products = [


    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: imgs[0],
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
    {

      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: imgs[1],
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    ,
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: imgs[2],
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: imgs[3],
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: imgs[4],
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: imgs[5],
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl ">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group ">
              <Overlay img={product.imageSrc} />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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
