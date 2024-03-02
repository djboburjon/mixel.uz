import React, { useEffect, useState } from "react";
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
import { IoTimerSharp } from "react-icons/io5";
import CheaperCards from "../../components/cheaperCards/CheaperCards";
import Recommended from "../../components/recommended/Recommended";

function InfoCard() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [mainImg, setMainImg] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const getData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://ecommerce0003.pythonanywhere.com/main/products/${id}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setMainImg(
          `https://ecommerce0003.pythonanywhere.com/${result.img_main}`
        );
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <>
      {data && (
        <div>
          <div className="inWay">
            <div className="container">
              <p>
                <span>Главная ›</span> <span>Ноутбуки ›</span>{" "}
                <span>Apple ›</span>
              </p>
              <p></p>
            </div>
          </div>
          <div className="info_main">
            <div className="container">
              <div className="info_main-left">
                <div className="mainImg">
                  <img src={mainImg} alt="Info Main Image" />
                </div>
                <div className="ex-imgs">
                  {data.img_sub.map((item) => {
                    return (
                      <img
                        onClick={() => {
                          setMainImg(
                            `https://ecommerce0003.pythonanywhere.com/${item}`
                          );
                        }}
                        src={`https://ecommerce0003.pythonanywhere.com/${item}`}
                        alt="Extra Image"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="info_main-middle">
                <div className="middle_head">
                  <h1>{data.product.name}</h1>
                  <div className="price">
                    {data.product.price.toLocaleString()} cум{" "}
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
                    <button className="buy_btn2">
                      Купить в рассрочку сейчас
                    </button>
                  </div>
                  <hr />
                  <div className="specific-name">
                    <p>Описание</p>
                    <p>
                      {!showMore
                        ? data.product.description.slice(0, 200)
                        : data.product.description}
                      <span onClick={() => {
                        setShowMore(!showMore)
                        if(showMore) {
                          window.scrollTo({
                            top: 50,
                            behavior: "smooth"
                          })
                        }
                      }}>
                        {showMore ? "Read Less" : "Read More"}
                      </span>
                    </p>
                  </div>
                  <hr />
                </div>

                {data.properties.length > 0 && <div className="parameters">
                  <h2>Технические параметры</h2>
                  {
                    data.properties.map((item) => {
                      return <div className="paramInfo">
                      <p>{item.name}</p>
                      <p>{item.context}</p>
                    </div>
                    })
                  }
                </div>}
                {data.product.display && (
                  <div className="Parameters">
                    <h2>Дисплей</h2>
                    {data.product.display.surface && (
                      <div className="paramInfo">
                        <p>Поверхность</p>
                        <p>{data.product.display.surface}</p>
                      </div>
                    )}
                    <div className="paramInfo">
                      <p>Сенсорный экран</p>
                      <p>{data.product.display.touch_screen ? `Yes` : `No`}</p>
                    </div>
                    {data.product.display.frame_rate && (
                      <div className="paramInfo">
                        <p>Частота смены кадров </p>
                        <p>{data.product.display.frame_rate} Гц</p>
                      </div>
                    )}
                    {data.product.display.matrix_type && (
                      <div className="paramInfo">
                        <p>Тип матрицы </p>
                        <p>{data.product.display.matrix_type}</p>
                      </div>
                    )}
                    {data.product.display.resolution && (
                      <div className="paramInfo">
                        <p>Разрешение </p>
                        <p>{data.product.display.resolution}</p>
                      </div>
                    )}
                    {data.product.display.dioganal && (
                      <div className="paramInfo">
                        <p>Диагональ </p>
                        <p>{data.product.display.dioganal}</p>
                      </div>
                    )}
                  </div>
                )}
                {data.product.processor && (
                  <div className="Parameters">
                    <h2>Процессор</h2>
                    {data.product.processor.brand && (
                      <div className="paramInfo">
                        <p>Бренд</p>
                        <p>{data.product.processor.brand}</p>
                      </div>
                    )}
                    {data.product.processor.family && (
                      <div className="paramInfo">
                        <p>Семейство</p>
                        <p>{data.product.processor.family}</p>
                      </div>
                    )}
                    {data.product.processor.model && (
                      <div className="paramInfo">
                        <p>Модель </p>
                        <p>{data.product.processor.model}</p>
                      </div>
                    )}
                    {data.product.processor.gen && (
                      <div className="paramInfo">
                        <p>Поколение</p>
                        <p>{data.product.processor.gen}</p>
                      </div>
                    )}
                    {data.product.processor.core && (
                      <div className="paramInfo">
                        <p>Количество ядер </p>
                        <p>{data.product.processor.core}</p>
                      </div>
                    )}
                    {data.product.processor.thread && (
                      <div className="paramInfo">
                        <p>Количество потоков</p>
                        <p>{data.product.processor.thread}</p>
                      </div>
                    )}
                    {data.product.processor.min_frequency && (
                      <div className="paramInfo">
                        <p>Минимальная частота</p>
                        <p>{data.product.processor.min_frequency} ГГц</p>
                      </div>
                    )}
                    {data.product.processor.max_frequency && (
                      <div className="paramInfo">
                        <p>Максимальная частота</p>
                        <p>{data.product.processor.max_frequency} ГГц</p>
                      </div>
                    )}
                    {data.product.processor.cache && (
                      <div className="paramInfo">
                        <p>Кэш </p>
                        <p>{data.product.processor.cache} Мб</p>
                      </div>
                    )}
                    {data.product.processor.video_card && (
                      <div className="paramInfo">
                        <p>Встроенная видеокарта</p>
                        <p>{data.product.processor.video_card}</p>
                      </div>
                    )}
                  </div>
                )}
                {data.product.ram && (
                  <div className="Parameters">
                    <h2>Оперативная память</h2>
                    {data.product.ram.size && (
                      <div className="paramInfo">
                        <p>Объем оперативной памяти</p>
                        <p>{data.product.ram.size}</p>
                      </div>
                    )}
                    {data.product.ram.model && (
                      <div className="paramInfo">
                        <p>Поколение ОЗУ</p>
                        <p>{data.product.ram.model}</p>
                      </div>
                    )}
                    {data.product.ram.type && (
                      <div className="paramInfo">
                        <p>Частота оперативной памяти</p>
                        <p>{data.product.ram.type}</p>
                      </div>
                    )}
                  </div>
                )}
                {data.product.videocard && (
                  <div className="Parameters">
                    <h2>Видеокарта</h2>
                    {data.product.videocard.size && (
                      <div className="paramInfo">
                        <p>Объем Видеокарта памяти</p>
                        <p>{data.product.videocard.size}</p>
                      </div>
                    )}
                    {data.product.videocard.model && (
                      <div className="paramInfo">
                        <p>Поколение ОЗУ</p>
                        <p>{data.product.videocard.model}</p>
                      </div>
                    )}
                    {data.product.videocard.type && (
                      <div className="paramInfo">
                        <p>Частота Видеокарта памяти</p>
                        <p>{data.product.videocard.type}</p>
                      </div>
                    )}
                  </div>
                )}
                {data.product.camera && (
                  <div className="Parameters">
                    <h2>Камера</h2>
                    {data.product.camera.pixel_size && (
                      <div className="paramInfo">
                        <p>Объем пиксель</p>
                        <p>{data.product.camera.pixel_size}</p>
                      </div>
                    )}
                    {data.product.camera.model && (
                      <div className="paramInfo">
                        <p>Модель</p>
                        <p>{data.product.camera.model}</p>
                      </div>
                    )}
                    {data.product.camera.type && (
                      <div className="paramInfo">
                        <p>Тип камеры</p>
                        <p>{data.product.camera.type}</p>
                      </div>
                    )}
                  </div>
                )}
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
                  <div className="right_card-content">
                    <FaShippingFast />

                    <p>
                      <h3>Доставка:</h3> <span>Бесплатно</span>
                    </p>
                  </div>
                  <div className="right_card-content">
                    <IoTimerSharp />

                    <p>
                      <h3>Срок поставки:</h3>{" "}
                      <span>{data.product.deliver}</span>
                    </p>
                  </div>
                  <div className="right_card-content">
                    <MdOutlinePayments />
                    <h3>Cпособ оплаты:</h3>
                  </div>
                  <div className="right_card-info">
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
              {/* <Recommended data={data} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCard;
