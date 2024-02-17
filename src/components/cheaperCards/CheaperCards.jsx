import React from "react";
import "./CheaperCards.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

function CheaperCards({filter_wide}) {
  return (
    <div className={filter_wide ? "cards filter_wide" : "cards"}>
      <div className="card">
        <div className="card-info">
          <img src="./imgs/cardimg.png" alt="" />
          
        </div>{" "}
        <div>
          <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
      <div className="card">
        <div className="card-info">
          <img src="./imgs/cardimg.png" alt="" />
          
        </div>{" "}
        <div>
          <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
      <div className="card">
        <div className="card-info">
          <img src="./imgs/cardimg.png" alt="" />
          
        </div>{" "}
        <div>
          <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
      <div className="card">
        <div className="card-info">
          <img src="./imgs/cardimg.png" alt="" />
          
        </div>{" "}
        <div>
          <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
      <div className="card">
        <div className="card-info">
          <img src="./imgs/cardimg.png" alt="" />
          
        </div>{" "}
        <div>
          <div className="last-price">18 000 сум/мес</div>
            <p>529 000 сум</p>

            <h2>Умные часы Haylou RT-LS05S</h2>
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
      
    </div>
  );
}

export default CheaperCards;
