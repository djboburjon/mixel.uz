import React, { useEffect, useState } from "react";
import "./Home.css";
import DiscountCards from "../../components/discountCards/DiscountCards";
import FamousCategory from "../../components/famousCategory/FamousCategory";
import CheaperCards from "../../components/cheaperCards/CheaperCards";
import Recommended from "../../components/recommended/Recommended";
import Brands from "../../components/brands/Brands";
import Banner from "../../components/banner/Banner";
import Advertisement from "../../components/advertisement/Advertisement";
import { Link } from "react-router-dom";

function Home() {

  const [cheaper, setCheaper] = useState()

  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://ecommerce0003.pythonanywhere.com/main/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCheaper(result.filter((item) => {
          return item.price < 2000000
        }))
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    getData()
  }, [])
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
            <p>
              <Link to={"/products/discount"}>Посмотреть все →</Link>
            </p>
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
      <section>
        <Advertisement/>
      </section>

      {/* Cheaper Products */}
      <section>
        <div className="container">
          <div className="content_head">
            <h2>Товары дешевле:</h2>
            <p>
              <Link to={"/products/all"}>Посмотреть все →</Link>
            </p>
          </div>
          <CheaperCards product={cheaper}/>
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
