import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./imgs/banner.png" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./imgs/banner.png" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./imgs/banner.png" alt="banner" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
