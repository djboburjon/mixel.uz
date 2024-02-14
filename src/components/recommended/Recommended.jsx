import React from "react";
import "./Recommended.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

function Recommended() {
  return (
    <div className="section-content">
      <div className="sec_left">
        <img src="./imgs/sale.png" alt="" />
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <img src="./imgs/cardimg.png" alt="" />
            <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
        <div className="card">
          <div className="card-info">
            <img src="./imgs/cardimg.png" alt="" />
            <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
        <div className="card">
          <div className="card-info">
            <img src="./imgs/cardimg.png" alt="" />
            <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
        <div className="card">
          <div className="card-info">
            <img src="./imgs/cardimg.png" alt="" />
            <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
        <div className="card">
          <div className="card-info">
            <img src="./imgs/cardimg.png" alt="" />
            <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
      </div>
    </div>
  );
}

export default Recommended;
