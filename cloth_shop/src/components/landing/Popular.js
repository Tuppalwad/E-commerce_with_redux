import React from "react";
import tshar1 from "../Asset/t-1.jpg";
import tshar2 from "../Asset/t-2.jpg";
import tshar3 from "../Asset/t-3.jpg";
import tshar4 from "../Asset/11.avif";
import tshar5 from "../Asset/22.jpg";
import tshar6 from "../Asset/33.jpg";
import Overlay from "./Overlay";
import { useContext } from "react";
import appProvider from "../Context/Createcontext";
import { Link } from "react-router-dom";
function Popular() {
  const imgs = [tshar1, tshar2, tshar3, tshar4, tshar5, tshar6];
  const products = [
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

  // const { allitem } = useContext(appProvider)
  // console.log(allitem)

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
                    <Link to={`/details/${product.index}`}>
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
