import React from "react";
import "./Navbar.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav_top">
        <div className="container">
          <div className="nav_about">
            <p>
              <IoLocationOutline /> <span>Ташкент</span>
            </p>
            <a href="#">Наши магазины</a>
            <a href="#">B2B продажи</a>
            <a href="#">Покупка в рассрочку</a>
            <a href="#">Способы оплаты</a>
            <a href="#">Гарантия на товары</a>
          </div>
          <div className="nav_call">
            <p>
              <IoCallOutline />{" "}
              <sup>
                <strong>+998 91 106 66 03</strong>
              </sup>
            </p>
            <select id="language">
              <option value="rus">Рус</option>
              <option value="uzb">Uzb</option>
              <option value="eng">Eng</option>
            </select>
          </div>
        </div>
      </div>
      <div className="nav_bottom">
        <div className="nav_bottom-top container">
          <div className="logo">
            <img src="./imgs/logo.png" alt="Logotip" />
          </div>
          <form className="search">
            <label>
              <select>
                <option>Все категории</option>
                <option>Моноблоки</option>
                <option>Телефоны, планшеты</option>
                <option>Ноутбуки</option>
                <option>Комплектующие</option>
                <option>Сетевое оборудование</option>
                <option>Оргтехника</option>
              </select>
              <input
                className="search_inp"
                type="text"
                placeholder="Телефоны и бытовая"
              />
              <span className="search_voice">
                <HiOutlineMicrophone />
              </span>
              <button className="search_btn">
                <CiSearch /> Поиск
              </button>
            </label>
          </form>
          <div className="get_info">
            <div className="login">
              <FiUser />
              <p>Войти</p>
            </div>
            <div className="comparisons">
              <div className="info_icon">
                <FaBalanceScaleLeft />
                <span>12</span>
              </div>
              <p>Сравнение</p>
            </div>
            <div className="favorites">
              <div className="info_icon">
                <FaRegHeart />
                <span>12</span>
              </div>
              <p>Избранное</p>
            </div>
            <div className="basket">
              <div className="info_icon">
                <LuShoppingCart />
                <span>12</span>
              </div>
              <p>Корзина</p>
            </div>
          </div>
        </div>
        <div className="nav_bottom-down container">
          <button className="category">
            <MdMenu />
            <span>Категории</span>
          </button>
          <ul className="links">
            <li className="link">
              <a href="#">Наши магазины</a>
            </li>
            <li className="link">
              <a href="#">Моноблоки</a>
            </li>
            <li className="link">
              {/* <Link to={"/filter"}>Телефоны, планшеты</Link> */}
              <a href="/filter"></a>
            </li>
            <li className="link">
              <a href="#">Ноутбуки</a>
            </li>
            <li className="link">
              <a href="#">Комплектующие</a>
            </li>
            <li className="link">
              <a href="#">Сетевое оборудование</a>
            </li>
            <li className="link">
              <a href="#">Оргтехника</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
