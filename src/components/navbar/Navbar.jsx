import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar({ setUserInfo, user, setSearch, setLogin }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSelect = (e) => {
    navigate(e.target.value);
  };

  const [selectValue, setSelectValue] = useState("/products/all");

  useEffect(() => {
    setSelectValue(pathname);
  }, [pathname]);

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
            <Link to={"/"}>
              <img src="/imgs/logo.png" alt="Logotip" />
            </Link>
          </div>
          <form className="search">
            <label>
              <select value={selectValue} onChange={handleSelect}>
                <option value={"/products/all"}>Все категории</option>
                <option value={"/products/monoblock"}>Моноблоки</option>
                <option value={"/products/phones"}>Телефоны, планшеты</option>
                <option value={"/products/laptops"}>Ноутбуки</option>
                <option value={"/products/accessories"}>Комплектующие</option>
                <option value={"/products/networks"}>
                  Сетевое оборудование
                </option>
                <option value={"/products/equipments"}>Оргтехника</option>
              </select>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (pathname == "/") {
                    navigate("/products/all");
                  }
                }}
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
            <div
              className="login_icon"
              onClick={() => {
                setLogin(true);
              }}
            >
              <FiUser />
              <p>Войти</p>
            </div>
            {/* {user ? (
              <div className="login_icon"
              onClick={() => {
                setUserInfo(true)
              }}>
                <FiUserCheck />
                <p>Профиль</p>
              </div>
            ) : (
              <div
                className="login_icon"
                onClick={() => {
                  setLogin(true);
                }}
              >
                <FiUser />
                <p>Войти</p>
              </div>
            )} */}
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
              <NavLink to={"/products/all"}>Наши магазины</NavLink>
            </li>
            <li className="link">
              <NavLink to={"/products/monoblock"}>Моноблоки</NavLink>
            </li>
            <li className="link">
              <NavLink to={"/products/phones"}>Телефоны, планшеты</NavLink>
            </li>
            <li className="link">
              <NavLink to={"/products/laptops"}>Ноутбуки</NavLink>
            </li>
            <li className="link">
              <NavLink to={"/products/accessories"}>Комплектующие</NavLink>
            </li>
            <li className="link">
              <NavLink to={"/products/networks"}>Сетевое оборудование</NavLink>
            </li>
            <li className="link">
              <NavLink to={"/products/equipments"}>Оргтехника</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
