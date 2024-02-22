import React from "react";
import "./InfoCard.css";
import { useParams } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import CheaperCards from "../../components/cheaperCards/CheaperCards";
import Recommended from "../../components/recommended/Recommended";

function InfoCard() {
  // const {id} = useParams()
  // const infoProduct = product.filter((item) => {
  //   return item.id == id
  // })

  return (
    <div>
      <div className="inWay">
        <div className="container">
          <p>
            <span>Главная ›</span> <span>Ноутбуки ›</span> <span>Apple ›</span>
          </p>
          <p></p>
        </div>
      </div>
      <div className="info_main">
        <div className="container">
          <div className="info_main-left">
            <img src="../imgs/notebook.png" alt="Info Main Image" />
            <div className="ex-imgs">
              <img src="../imgs/notebook1.png" alt="Info Main Image" />
              <img src="../imgs/notebook2.png" alt="Info Main Image" />
              <img src="../imgs/notebook3.png" alt="Info Main Image" />
              <img src="../imgs/notebook4.png" alt="Info Main Image" />
            </div>
          </div>
          <div className="info_main-middle">
            <div className="middle_head">
              <h1>MacBook Pro 13 MXK32ZP/A Space Gray</h1>
              <div className="price">
                16 559 000 cум{" "}
                <span>
                  <IoIosInformationCircleOutline />
                </span>
                <span>
                  <PiShoppingCartSimpleFill />
                </span>
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaScaleBalanced />
                </span>
              </div>
              <p className="comment">
                <span>
                  <FaRegComments />
                </span>{" "}
                VIP скидки для VIP клиентов
              </p>
              <div className="buy_btns">
                <button className="buy_btn1">Купить сейчас</button>
                <button className="buy_btn2">Купить в рассрочку сейчас</button>
              </div>
              <hr />
              <div className="specific-name">
                <p>Название для договора</p>
                <p>
                  MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS /
                  Core™ i7-1165G7 / 8GB RAM / 256GB SSD
                </p>
              </div>
              <hr />
            </div>
            <div className="parameters">
              <h2>Технические параметры</h2>
              <div className="paramInfo">
                <p>Название</p>
                <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
              </div>
              <div className="paramInfo">
                <p>Состояние</p>
                <p>Новый</p>
              </div>
              <div className="paramInfo">
                <p>Технические параметры</p>
                <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
              </div>
            </div>
            <div className="Parameters">
              <h2>Информация о модели</h2>
              <div className="paramInfo">
                <p>Парт Номер</p>
                <p>NX.A5UAA.006.</p>
              </div>
              <div className="paramInfo">
                <p>Линейка</p>
                <p>Swift</p>
              </div>
            </div>
            <div className="Parameters">
              <h2>Классификация</h2>
              <div className="paramInfo">
                <p>Тип</p>
                <p>Ультрабук</p>
              </div>
            </div>
            <div className="Parameters">
              <h2>Аудитория</h2>
              <div className="paramInfo">
                <p>Подходит для</p>
                <p>Руководителей Студентов и учителей Офисных сотрудников</p>
              </div>
            </div>
            <div className="Parameters">
              <h2>Дисплей</h2>
              <div className="paramInfo">
                <p>Поверхность</p>
                <p>Матовая</p>
              </div>
              <div className="paramInfo">
                <p>Сенсорный экран</p>
                <p>Нет</p>
              </div>
              <div className="paramInfo">
                <p>Частота смены кадров </p>
                <p>60 Гц</p>
              </div>
              <div className="paramInfo">
                <p>Тип матрицы </p>
                <p>IPS</p>
              </div>
              <div className="paramInfo">
                <p>Разрешение </p>
                <p>Full HD 1920x1080 Пикселей</p>
              </div>
              <div className="paramInfo">
                <p>Диагональ </p>
                <p>14.0</p>
              </div>
            </div>
            <div className="Parameters">
              <h2>Процессор</h2>
              <div className="paramInfo">
                <p>Бренд</p>
                <p>Intel®</p>
              </div>
              <div className="paramInfo">
                <p>Семейство</p>
                <p>Core™ i7</p>
              </div>
              <div className="paramInfo">
                <p>Модель </p>
                <p>1165G7</p>
              </div>
              <div className="paramInfo">
                <p>Поколение</p>
                <p>11</p>
              </div>
              <div className="paramInfo">
                <p>Количество ядер </p>
                <p>4</p>
              </div>
              <div className="paramInfo">
                <p>Количество потоков</p>
                <p>8</p>
              </div>
              <div className="paramInfo">
                <p>Минимальная частота</p>
                <p>2.8 ГГц</p>
              </div>
              <div className="paramInfo">
                <p>Максимальная частота</p>
                <p>4.7 ГГц</p>
              </div>
              <div className="paramInfo">
                <p>Кэш </p>
                <p>12 Мб</p>
              </div>
              <div className="paramInfo">
                <p>Встроенная видеокарта</p>
                <p>Intel® Iris® Xe Graphics</p>
              </div>
            </div>
            <div className="Parameters">
              <h2>Оперативная память</h2>
              <div className="paramInfo">
                <p>Объем оперативной памяти</p>
                <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
              </div>
              <div className="paramInfo">
                <p>Поколение ОЗУ</p>
                <p>Новый</p>
              </div>
              <div className="paramInfo">
                <p>Частота оперативной памяти</p>
                <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
              </div>
            </div>
          </div>
          <div className="info_main-right">
            <div className="right_card">
              <p>
                <LuRefreshCw />
              </p>
              <div className="right_card-info">
                <h3>30 дней на обмен и возврат.</h3>
                <p>
                  Если купите товар сегодня, до 06 мая можете вернуть или
                  обменять.
                </p>
                <a href="#">Подробнее о программе.</a>
              </div>
            </div>
            <div className="right_card">
              <p>
                <TfiHeadphoneAlt />
              </p>
              <div className="right_card-info">
                <h3>Есть вопросы?</h3>
                <p>
                  Телефон: <a href="#">+998 91 106 66 03</a>
                </p>
                <p>
                  Телеграм:{" "}
                  <a href="https://t.me/dj_boburjon" target="_blank">
                    @dj_boburjon
                  </a>
                </p>
                <p>
                  Эл. почта: <a href="#">djboburdev@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="right_card">
              <p>
                <FaShippingFast />
              </p>
              <div className="right_card-info">
                <h3>Доставка:</h3>
                <p>Бесплатно</p>
              </div>
              <p>
                <MdOutlinePayments />
              </p>
              <div className="right_card-info">
                <h3>Cпособ оплаты:</h3>
                <ul>
                  <li>
                    <p>Наличными (При Доставке)</p>
                  </li>
                  <li>
                    <p>Payme / Click</p>
                  </li>
                  <li>
                    <p>Перечислением с НДС</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info_main-card">
        <div className="container">
          <div className="content_head">
            <h2>Товары дешевле:</h2>
            <p>Посмотреть все →</p>
          </div>
          <Recommended />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;