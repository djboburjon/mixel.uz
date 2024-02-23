import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_left">
          <div className="logo">
            <Link to={"/"}><img src="/imgs/logoFooter.png" alt="Logotip" /></Link>
          </div>
          <p className="workingTime">
            График работы колл-центра <br />
            Понедельник - Суббота: 9:00–18:00
          </p>
          <p className='callCenter'>
            Колл-центр: <br />
            + 998 (91) 106-66-03
          </p>

          <div className="social_media">
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_category">
            <h3>Категории</h3>
            <a href='#'>Ноутбуки</a>
            <a href='#'>Игровые кресла</a>
            <a href='#'>Телефоны</a>
            <a href='#'>Моноблоки</a>
            <a href='#'>Модули памяти</a>
          </div>
          <div className="footer_all">
            <h3>Общее</h3>
            <a href='#'>Новости</a>
            <a href='#'>О нас</a>
            <a href='#'>Наши магазины</a>
            <a href='#'>Политика конфиденциальности</a>
            <a href='#'>Правила программы лояльности</a>
            <a href='#'>Контакты</a>
          </div>
          <div className="footer_buyers">
            <h3>Покупателям</h3>
            <a href='#'>Покупка в рассрочку</a>
            <a href='#'>Доставка и оплата</a>
            <a href='#'>Правила покупок с cashback</a>
            <a href='#'>Возврат / Обмен</a>
            <a href='#'>Правила пользования купонами</a>
            <a href='#'>Контакты</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer