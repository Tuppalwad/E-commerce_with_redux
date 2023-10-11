import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img2 from "../Asset/2.jpg";
import img3 from "../Asset/3.jpg";

export default function ImageSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // Inline CSS for image style
  // const imageStyle = {
  //   width: "100%",
  //   height: "600px",
  // };

  return (
    <div className="">
      <Slider {...sliderSettings} style={{ padding: 0 }}>
        <div>
          <img src={img2} alt="Image 1" />
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}
