import React from "react";
import slider from "../assets/images/slider/slider-1.jpg";

const Slider = () => {
  return (
    <section id="slider">
      <div className="container-flued">
        <div className="slider-main">
          <img src={slider} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
