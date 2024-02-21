import React from "react";
import "./Home.css";
import DiscountCards from "../../components/discountCards/DiscountCards";
import FamousCategory from "../../components/famousCategory/FamousCategory";
import CheaperCards from "../../components/cheaperCards/CheaperCards";
import Recommended from "../../components/recommended/Recommended";
import Brands from "../../components/brands/Brands";
import Banner from "../../components/banner/Banner";
import Advertisement from "../../components/advertisement/Advertisement";

function Home() {
  return (
    <main>
      {/* Banner  */}
      <section>
        <div className="container">
          <Banner />
        </div>
      </section>

      {/* Discounts */}
      <section>
        <div className="container">
          <div className="content_head">
            <h2>Горящие предложения</h2>
            <p>Посмотреть все →</p>
          </div>
          <DiscountCards />
        </div>
      </section>

      {/* Famous Products */}
      <section>
        <div className="container">
          <div className="content_head">
            <h2>Популярные категории</h2>
            <p></p>
          </div>
          <FamousCategory />
        </div>
      </section>

      {/* Advertisement */}
      <section className="advertisement">
        <Advertisement/>
      </section>

      {/* Cheaper Products */}
      <section>
        <div className="container">
          <div className="content_head">
            <h2>Товары дешевле:</h2>
            <p>Посмотреть все →</p>
          </div>
          <CheaperCards />
        </div>
      </section>

      {/* Recommended */}
      <section>
        <div className="container">
          <div className="content_head">
            <h2>Рекомендуем:</h2>
            <p>Посмотреть все →</p>
          </div>
          <Recommended />
        </div>
      </section>

      {/* Brands */}
      <section>
        <div className="container">
          <div className="content_head">
            <h2>Бренды</h2>
            <p>← →</p>
          </div>
          <Brands />
        </div>
      </section>
    </main>
  );
}

export default Home;
