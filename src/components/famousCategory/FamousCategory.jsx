import React from "react";
import "./FamousCategory.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function FamousCategory() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="famous">
        <Link to={"products/all"}>
          <h2>Наши магазины</h2> <img src="./imgs/famous.png" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="famous">
        <Link to={"products/phones"}>
          <h2>Телефоны, планшеты</h2> <img src="./imgs/phones.png" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="famous">
        <Link to={"products/laptops"}>
          <h2>Ноутбуки</h2> <img src="./imgs/laptops.png" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="famous">
        <Link to={"products/accessories"}>
          <h2>Комплектующие</h2> <img src="./imgs/office.png" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="famous">
        <Link to={"products/networks"}>
          <h2>Сетевое оборудование</h2> <img src="./imgs/famous.png" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="famous">
        <Link to={"products/monoblock"}>
          <h2>Моноблоки</h2> <img src="./imgs/famous.png" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="famous">
        <Link to={"products/equipments"}>
          <h2>Оргтехника</h2> <img src="./imgs/famous.png" alt="" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default FamousCategory;
