import React from "react";
import "./Filter.css";
import { TbCoins } from "react-icons/tb";
import { BsFilterLeft } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";
import { TiEqualsOutline } from "react-icons/ti";
import CheaperCards from "../../components/cheaperCards/CheaperCards";

function Filter() {
  return (
    <div className="filter">
      <div className="inWay">
        <div className="container">
          <p>
            <span>Главная ›</span> <span>Телефоны, планшеты ›</span>{" "}
            <span>Телефоны и гаджеты ›</span>
          </p>
          <p>Товаров 24 / 249</p>
        </div>
      </div>
      <div className="filter_section container">
        <div className="filter_left">
          <h2>Смартфоны в Ташкенте</h2>
          <div className="filter_main">
            
          </div>
        </div>
        <div className="filter_right">
          <div className="filter_right-head">
            <p>
              <span><TbCoins/> По цене</span>
              <span><BsFilterLeft/> По популярности</span>
            </p>
            <p>
              <span><PiSquaresFour/> </span>
              <span><TiEqualsOutline/> </span>
            </p>
          </div>
          <CheaperCards/>
        </div>
      </div>
    </div>
  );
}

export default Filter;
