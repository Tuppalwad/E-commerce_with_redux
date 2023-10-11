import React, { useRef } from "react";
import img from "../Asset/t-1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const imageStyle = {
  width: "100%",
  height: "auto",
  transition: "transform 0.3s",
};

const overlayStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  opacity: 0,
  transition: "opacity 0.3s",
};

const iconStyle = {
  fontSize: "24px",
  color: "white",
  margin: "0 5px",
  cursor: "pointer",
};

function Sale() {
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
          {images.map((image, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative">
                  <div
                    className="relative"
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                      <div
                        style={{
                          paddingBottom: "20px",
                        }}
                      >
                        <i className="fas fa-thumbs-up" style={iconStyle}></i>
                        <i
                          className="fas fa-shopping-cart"
                          style={iconStyle}
                        ></i>
                        <i className="fas fa-thumbs-down" style={iconStyle}></i>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="relative"
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                      <div
                        style={{
                          paddingBottom: "20px",
                        }}
                      >
                        <i className="fas fa-thumbs-up" style={iconStyle}></i>
                        <i
                          className="fas fa-shopping-cart"
                          style={iconStyle}
                        ></i>
                        <i className="fas fa-thumbs-down" style={iconStyle}></i>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="relative"
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={imageStyle}
                    />
                    <div className="overlay" style={overlayStyle}>
                      <div
                        style={{
                          paddingBottom: "20px",
                        }}
                      >
                        <i className="fas fa-thumbs-up" style={iconStyle}></i>
                        <i
                          className="fas fa-shopping-cart"
                          style={iconStyle}
                        ></i>
                        <i className="fas fa-thumbs-down" style={iconStyle}></i>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                        Buy Now
                      </button>
                    </div>
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
