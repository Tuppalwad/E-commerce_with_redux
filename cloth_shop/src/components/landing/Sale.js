import React, { useRef } from "react";
import img from "../Asset/t-1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Overlay from "./Overlay";


function Sale() {
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


  const sliderRef = useRef(null);
  const images = [img, img, img, img, img, img];
  const sliderSettings = {
    arrows: false, // Hide default arrows
    dots: false, // Hide default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  const handleImageHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.querySelector(".overlay").style.opacity = "1";
  };

  const handleImageLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.querySelector(".overlay").style.opacity = "0";
  };

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              {" "}
              On Sale T-Shirts
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "76%",
          margin: "20px auto",
        }}
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((image, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative">
                  <div
                    className="relative"
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <Overlay img={{ ...image, id: index }} />
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="relative"
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <Overlay img={{ ...image, id: index }} />
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="relative"
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <Overlay img={{ ...image, id: index }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center items-center my-5">
          <button
            onClick={handlePrevClick}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNextClick}
            className="ms-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sale;
