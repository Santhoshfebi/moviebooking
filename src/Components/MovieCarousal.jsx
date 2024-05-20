import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AazamBannerCard from "../Components/SingleCards/AazamBannerCard";
import AnyoneButYouBannerCard from "../Components/SingleCards/AnyoneButYouBannerCard";
import OppenHaimerBannerCard from "../Components/SingleCards/OppenHaimerBannerCard";
import DuneBannerCard from "../Components/SingleCards/DuneBannerCard";
import GetOutBannerCard from "../Components/SingleCards/GetOutBannerCard";
import MuzzleBannerCard from "../Components/SingleCards/MuzzleBannerCard";
import DinosaursBannerCard from "../Components/SingleCards/DinosaursBannerCard";

const MovieCarousal = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        initialSlide={0}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <AazamBannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <AnyoneButYouBannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <OppenHaimerBannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <DuneBannerCard />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <GetOutBannerCard />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <MuzzleBannerCard />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <DinosaursBannerCard />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MovieCarousal;
