import React from "react";
import Hero from "./hero";

import Popular from "./Popular";
import Comment from "./Comment";
import Sale from "./Sale";
import Slider from "react-slick";
export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Hero />

      <Popular />
      <Comment />
      <Sale />
    </div>
  );
}
