import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img2 from "../Asset/2.jpg";
import img3 from "../Asset/3.jpg";

export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (

    <div
      style={{
        margin: "0 auto",
        width: "100%",
        padding: "",
      }}

    >
      <Slider {...settings} className="p-0 m-0">
        <div>
          <img
            className="w-full h-auto lg:h-screen "
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-auto lg:h-screen "
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-auto lg:h-screen "
            src={img2}
            alt=""
          />
        </div>
      </Slider>
    </div>

  );
}
