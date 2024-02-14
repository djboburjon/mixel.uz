import React from "react";
import "./FamousCategory.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function FamousCategory() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="famous">
        <h2>Компьютеры</h2> <img src="./imgs/famous.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="famous">
        <h2>Компьютеры</h2> <img src="./imgs/famous.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="famous">
        <h2>Компьютеры</h2> <img src="./imgs/famous.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="famous">
        <h2>Компьютеры</h2> <img src="./imgs/famous.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="famous">
        <h2>Компьютеры</h2> <img src="./imgs/famous.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="famous">
        <h2>Компьютеры</h2> <img src="./imgs/famous.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default FamousCategory;
