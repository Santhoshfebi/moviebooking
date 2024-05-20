import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../Components/Resources/img1.avif";
import img2 from "../Components/Resources/img2.avif";
import img3 from "../Components/Resources/img3.avif";
import img4 from "../Components/Resources/img4.avif";
import img5 from "../Components/Resources/img5.avif";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const CardCarousal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img1} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img2} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img3} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img4} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img5} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img1} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img2} alt="" />
            </Link>{" "}
          </button>
        </div>
        <div className="px-5">
          <button>
            <Link to={"./seatbooking"}>
              <img src={img3} alt="" />
            </Link>{" "}
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default CardCarousal;
