import React from "react";
import "./CheaperCards.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

function CheaperCards({ filter_wide, product }) {
  return (
    <div className={filter_wide ? "cards filter_wide" : "cards"}>
      {product?.map((item) => {
        return (
          <div className="card">
            <div className="card-info">
              <img src={item.img} alt="" />
            </div>{" "}
            <div>
              <div className="last-price">{Math.floor((item.price / 12) * 1.3)} сум/мес</div>
              <p>{item.price} сум</p>

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
