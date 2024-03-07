import React, { useEffect, useState } from "react";
import "./DiscountCards.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function DiscountCards() {
  const [saleProducts, setSaleProducts] = useState(null);
  const getData = async () => {
    const req = await fetch(
      "https://ecommerce0003.pythonanywhere.com/main/products/"
    );
    const data = await req.json();
    setSaleProducts(
      data.filter((item) => {
        return item.discount;
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cards">
      {saleProducts &&
        saleProducts.map((item) => {
          return (
            <div className="card">
              <Link to={`/filter/${item.id}`}>
                <div className="card-info">
                  <div className="sale">-{item.discount.amount}%</div>
                  <img
                    src={`https://ecommerce0003.pythonanywhere.com/${item.img_main}`}
                    alt=""
                  />
                  <p>
                    <del>1 529 000 сум</del> |{" "}
                    <span className="last-price">350 000 сум</span>
                  </p>
                  <h2>Умные часы Haylou RT-LS05S</h2>
                  <p>Предложение заканчивается через:</p>
                </div>
                <div className="dates">
                  <div className="dates-day">
                    <h3>27</h3> <p>ДНЕЙ</p>
                  </div>
                  <div className="dates-hour">
                    <h3>21</h3> <p>ЧАСОВ</p>
                  </div>
                  <div className="dates-min">
                    <h3>32</h3> <p>МИНУТ</p>
                  </div>
                  <div className="dates-sec">
                    <h3>05</h3> <p>СЕКУНД</p>
                  </div>
                </div>{" "}
              </Link>
              <hr />
              <div className="additions">
                <div className="shopping">
                  <PiShoppingCartSimpleFill />
                </div>
                <div className="favorits">
                  <FaHeart />
                </div>
                <div className="comparisons">
                  <FaScaleBalanced />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default DiscountCards;
