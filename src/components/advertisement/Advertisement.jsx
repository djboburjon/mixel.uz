import React from "react";
import "./Advertisement.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Advertisement() {
  return (
    <div className="advertisement">
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
          <SwiperSlide className="advert_layer">
            <div className="container">
            <div className="adver_text">
              <h1>Apple iPhone X 64 ГБ</h1>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <img
              src="./imgs/advertisement1.png"
              alt="Advertisement for iphone"
            />
            <div className="adver_price">
              <h1>1 250 900 Сум</h1>
              <p>
                <del>2 220 900 Сум</del>
              </p>
              <button>Показать еще</button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="advert_layer">
            <div className="container">
            <div className="adver_text">
              <h1>Apple iPhone X 64 ГБ</h1>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <img
              src="./imgs/advertisement1.png"
              alt="Advertisement for iphone"
            />
            <div className="adver_price">
              <h1>1 250 900 Сум</h1>
              <p>
                <del>2 220 900 Сум</del>
              </p>
              <button>Показать еще</button>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}

export default Advertisement;
