import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Overlay from "../landing/Overlay";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Redux/SliceCard";
import { ToastContainer, toast } from "react-toastify";
import {checklogin} from "../ApiServices/Services"
import "react-toastify/dist/ReactToastify.css";
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const notify = () => toast("Added to cart");
  const alert = (message) => toast(message);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispach = useDispatch();
  const id = useParams();
  console.log(id.id);
  const products = useSelector((state) => state.Products);

  // get  product by using id
  let data = [];
  products.map((product, index) => {
    if (product.id ==id.id) {
      data.push(product);
    }
  });
  const item = data[0];

  const userchanges = useState({
    size: "",
    color: "",
    quantity: 1,
  });

  const addtoCart = () => {
    console.log(userchanges.quantity);
    console.log(userchanges.color)
    if (userchanges.color && userchanges.size) {
      dispach(
        addCart({
          ...item,
          quantity: parseInt(userchanges.quantity) || 1,
          id: item.id,
          color: [userchanges.color],
          size: [userchanges.size],
        })
      );
      notify();
      userchanges.color = "";
      userchanges.size = "";
      userchanges.quantity = 1;
    } else {
      alert("Please select size and color");
    }
  };

  const nevigate = useNavigate();
  const handlecheckout = async () => {
    const phone = localStorage.getItem("phone");
    console.log(phone)
    if (phone!=null){
      await checklogin ({ phone: phone }).then((res) => {
        console.log(res.data)
        if (res.data.status===true) {
          nevigate("/reviewdetails");
        }
        else{
          alert("Please login first");
        }

    }
    )}
    else{
      alert("Please login first");
    }
  }

  return (
    <div className="bg-white">
      <ToastContainer />
      <div
        className="grid grid-cols-1 md:grid-cols-2  gap-10"
        style={{
          width: "76%",
          margin: "auto",
        }}
      >
        <div className="  ">
          <div className="py-10 mt-6 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="p-6">
              <img
                src={item.imageUrl}
                alt="Model wearing plain black basic tee."
                className="w-full h-full object-center object-cover sm:rounded-lg "
              />
            </div>
            {/* retlated images  */}
            <div
              className="mt-4 grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-4"
              style={{
                width: "86%",
                margin: "auto",
                cursor: "pointer",
              }}
            >
              {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className=" w-full h-full object-center object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" lg:row-span-3 lg:mt-0 pt-6 pr-6 pb-6">
          <h2 className="mt-8">Product information</h2>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {item.name}
          </h1>
          <p className="text-3xl mt-2 tracking-tight text-gray-900">
            ₹{item.price}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a
                href={reviews.href}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            {/* Colors */}
            <div>
              <h3
                className="text-sm font-medium text-gray-900  "
                style={{
                  fontWeight: "bold",
                }}
              >
                Color
              </h3>

              <div className="flex mt-3">
                {item.colors.map((color) => (
                  <>
                    <label className="ms-2">{color}</label>
                    <input
                      type="radio"
                      name="color"
                      value={userchanges.color}
                      className="ms-2 h-6 w-6 rounded-full border-gray-300 border text-gray-600 focus:ring-indigo-500"
                      onClick={() => {
                        userchanges.color = color;
                      }}
                    />
                  </>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3
                  className="text-sm font-medium text-gray-900"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Size
                </h3>

                {/* quantity here  */}
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="count"
                    className="text-sm font-medium text-gray-900 "
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Quantity
                  </label>
                  <select
                    id="count"
                    name="count"
                    className="mt-1 p-1 ms-2 block border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={1}
                    onChange={(e) => {
                      userchanges.quantity = e.target.value;
                    }}
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex mt-3">
                {item.sizes.map((size) => (
                  <>
                    <label className="ms-2">{size}</label>
                    <input
                      type="radio"
                      name="size"
                      value={userchanges.size}
                      className="ms-2 h-6 w-6 rounded-full border-gray-300 border text-gray-600 focus:ring-indigo-500"
                      placeholder={size}
                      onClick={() => {
                        userchanges.size = size;
                      }}
                    />
                  </>
                ))}
              </div>
            </div>
            <div className="flex ">
              <p
                type=""
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  addtoCart();
                }}
              >
                Add to Cart
              </p>
              <p
                onClick={handlecheckout}
                className="mt-10 ms-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{
                  cursor: "pointer",
                }}
              >
                Buy now
              </p>
            </div>
          </form>

          {/* Product details */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>

            <div
              className="mt-4 prose prose-sm text-gray-500"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group "
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Overlay img={{ ...product, id: index }} />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/details/${index}`}>{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
