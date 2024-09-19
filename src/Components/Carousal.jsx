import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../Components/Resources/carousal1.avif";
import img2 from "../Components/Resources/carousal2.avif";
import img3 from "../Components/Resources/carousal3.avif";
import img4 from "../Components/Resources/carousal4.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousal = () => {
  return (
    <>
      
        <Swiper
          slidesPerView={1}         
          spaceBetween={10}
          centeredSlides={true}
          direction={"vertical"}           // Changed to the direction to vertical as informed 
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
          className="mySwiper h-80"     
        >
          <SwiperSlide>
            <img src={img1} className="rounded-2xl w-full h-full object-cover" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="rounded-2xl w-full h-full object-cover" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="rounded-2xl w-full h-full object-cover" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} className="rounded-2xl w-full h-full object-cover" alt="" />
          </SwiperSlide>
        </Swiper>
      
    </>
  );
};

export default Carousal;
