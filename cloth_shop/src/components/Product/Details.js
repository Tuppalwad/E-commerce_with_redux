import { useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import img from "../Asset/2.jpg";
import Overlay from "../landing/Overlay";
import { Link } from "react-router-dom";


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
export default function Example() {


  useEffect(() => {
    // got top 
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-white">
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
                src={img}
                alt="Model wearing plain black basic tee."
                className="w-full h-full object-center object-cover sm:rounded-lg "
              />
            </div>
            {/* retlated images  */}
            <div
              className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-4"
              style={{
                width: "76%",
                margin: "auto",
              }}
            >
              {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className=" w-2/4 h-3/4 object-center object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" lg:row-span-3 lg:mt-0 pt-6 pr-6 pb-6">
          <h2 className="mt-8">Product information</h2>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="text-3xl mt-2 tracking-tight text-gray-900">
            {product.price}
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
              <h3 className="text-sm font-medium text-gray-900">Color</h3>

              <div className="flex mt-3">
                <button className="w-6 h-6 rounded-full bg-gray-900 border-2 border-transparent" />
                <button className="w-6 h-6 rounded-full bg-gray-200 ml-3 border-2 border-transparent" />
                <button className="w-6 h-6 rounded-full bg-blue-500 ml-3 border-2 border-transparent" />

              </div>

            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>
              <div className="flex mt-3">
                <button className="w-12 h-8 rounded-lg bg-white text-black border-2 border-gray-300 px-2 py-1" >
                  <span className=" text-black">S</span>
                </button>
                <button className="w-12 h-8 rounded-lg bg-white text-black ml-3 border-2 border-gray-300 px-2 py-1" >
                  <span className=" text-black">M</span>
                </button>
                <button className="w-12 h-8 rounded-lg bg-white text-black ml-3 border-2 border-gray-300 px-2 py-1" >
                  <span className=" text-black">L</span>
                </button>
                < button className="w-12 h-8 rounded-lg bg-white ml-3 text-black border-2 border-gray-300 px-2 py-1" >
                  <span className=" text-black">XL</span>
                </button>
              </div>
            </div>

            <p
              type=""
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              style={{
                cursor: "pointer",
              }}
            >
              Buy now
            </p>
          </form>

          {/* Product details */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>

            <div
              className="mt-4 prose prose-sm text-gray-500"
              dangerouslySetInnerHTML={{ __html: product.description }}
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
    </div>
  );
}
