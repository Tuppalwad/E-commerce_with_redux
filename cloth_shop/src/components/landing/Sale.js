import React, { useRef } from "react";
import img from "../Asset/t-1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Overlay from "./Overlay";
import { useSelector } from "react-redux";


function Sale() {
  const products = useSelector(state => state.Products)

  const sliderRef = useRef(null);
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
