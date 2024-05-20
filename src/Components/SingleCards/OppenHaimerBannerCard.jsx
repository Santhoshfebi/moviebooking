import React from "react";
import OppenHaimerbg from "../Resources/MoviePoster/OppenheimerBackground.avif";
import OppenHaimer from "../Resources/MoviePoster/OppenHeimer.avif";
import { Link } from "react-router-dom";
const OppenHaimerBannerCard = () => {
  return (
    <div className=" h-[480px] overflow-hidden relative flex justify-center">
      <img
        src={OppenHaimerbg}
        alt=""
        className="object-cover  w-full h-full transform scale-100 "
      />
      <div class="absolute inset-0 bg-gradient-to-l from-transparent via-black to-black"></div>
      <div className="   absolute  top-5 h-[450px] w-[1200px] flex flex-col ">
        <div className=" bg-white w-72 absolute top-2  rounded-xl ">
          <img src={OppenHaimer} alt="" className="object-fill rounded-xl" />
        </div>
        <div className="  left-80 relative ">
          <h2 className="absolute  text-white top-20 font-bold text-4xl">
            Oppenheimer
          </h2>
          <div className="absolute top-40 flex gap-3 ">
            <span className="bg-white px-2 py-1 rounded-sm">2D, IMAX 2D </span>
            <span className="bg-white px-2 py-1 rounded-sm">
              English, Hindi
            </span>
          </div>
          <div className="absolute top-52">
            <p className="text-white ">
              <span>
                3h 10m • Biography, Drama, Historical • UA • 21 Jul, 2023
              </span>
            </p>
          </div>
          <div className="absolute top-64 font-semibold text-white flex gap-3">
            <Link to={"./seatbooking"}>
              <button className="px-[70px] bg-[#f84464] py-3  rounded-md">
                Book Tickets
              </button>
            </Link>{" "}
            <button className="px-[70px] bg-[#f84464] py-3 rounded-md">
              Buy or Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OppenHaimerBannerCard;
