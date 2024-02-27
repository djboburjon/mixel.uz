import React from "react";
import "./Recommended.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function Recommended({ data }) {
  return (
    <div className="section-content">
      <div className="sec_left">
        <img src="./imgs/sale.png" alt="" />
      </div>
      <div className="cards">
        {data?.map((item) => {
          return (
            <div className="card">
              <div className="card-info">
                <Link to={`/filter/${item.id}`}>
                  <img src={item.img} alt="" />
                </Link>
                <div className="last-price">{Math.floor((item.price / 12) * 1.3)} сум/мес</div>
                <p>{item.price} сум</p>

                <h2>{item.name}</h2>
              </div>{" "}
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
    </div>
  );
}

export default Recommended;
