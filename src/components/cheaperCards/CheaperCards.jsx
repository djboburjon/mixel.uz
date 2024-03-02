import React from "react";
import "./CheaperCards.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink, useParams } from "react-router-dom";

function CheaperCards({ filter_wide, product }) {
  return (
    <div className={filter_wide ? "cards filter_wide" : "cards"}>
      {product?.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-info">
              <Link to={`/filter/${item.id}`}>
                <img src={`https://ecommerce0003.pythonanywhere.com/${item.img_main}`} alt="Product image" />
              </Link>
            </div>{" "}
            <div>
              <div className="last-price">
                {Math.floor((item.price / 12) * 1.3).toLocaleString().replaceAll(",", " ")} сум/мес
              </div>
              <p>{item.price.toLocaleString().replaceAll(",", " ")} сум</p>

              <h2>{item.name}</h2>
            </div>
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

export default CheaperCards;
