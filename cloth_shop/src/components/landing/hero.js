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

  return (
    <div className=" container">
      <Slider {...sliderSettings} style={{ padding: 0 }}>
        <div>
          <img src={img2} alt="Image 1" className="" style={{
            width: "100%",
            height: "600px",
          }} />
        </div>
        <div>
          <img src={img2} alt="Image 2" style={{
            width: "100%",
            height: "600px",
          }} />
        </div>
        <div>
          <img src={img3} alt="Image 3" style={{
            width: "100%",
            height: "600px",
          }} />
        </div>
      </Slider>
    </div>
  );
}
