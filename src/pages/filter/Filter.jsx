import React, { useState } from "react";
import "./Filter.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { TbCoins } from "react-icons/tb";
import { BsFilterLeft } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";
import { TiEqualsOutline } from "react-icons/ti";
import CheaperCards from "../../components/cheaperCards/CheaperCards";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function valuetext(value) {
  return `${value}°C`;
}

function Filter() {
  const [value, setValue] = React.useState([300, 103300000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [disableText, setDisableText] = useState(true);
  const [filter_wide, setFilter_wide] = useState(false);

  const [data, setData] = useState([
    {
      id: 0,
      img: "https://assets.asaxiy.uz/product/main_image/desktop//659911dd9cd6e.jpg",
      name: "Kir moshina",
      description: "asdasd",
      price: 3000000,
      amount: 24,
      discount: 20,
      guaranty: 2,
      deliver: true,
      owner: null,
      brand: "Artel",
      battery: null,
      country: "Uzbekistan",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 1,
      img: "https://assets.asaxiy.uz/product/items/desktop/a10390358cde813f75ac203ed7b164ed2020070912130632748YMGMS6rNUL.jpg.webp",
      name: "Konditsioner",
      description: "asdasd",
      price: 2000000,
      amount: 20,
      discount: 10,
      guaranty: 2,
      deliver: true,
      owner: null,
      brand: "Avalon",
      battery: null,
      country: "Uzbekistan",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 2,
      img: "https://assets.asaxiy.uz/product/items/desktop/5751ec3e9a4feab575962e78e006250d2023092315141339805ZzWfkPMMFW.png.webp",
      name: "Iphone 15 pro",
      description: "asdasd",
      price: 15000000,
      amount: 60,
      discount: 15,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Apple",
      battery: "4000",
      country: "USA",
      subCategory: {
        id: 1,
        name: "Telephone",
        category: {
          id: 1,
          name: "texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 3,
      img: "https://assets.asaxiy.uz/product/items/desktop/69a89c5e6a722eb5cc98c0f4a431ab7c2022112912272643093gYTuK1X6Z5.jpg.webp",
      name: "Hp probook",
      description: "asdasd",
      price: 7000000,
      amount: 20,
      discount: 5,
      guaranty: 1.5,
      deliver: true,
      owner: null,
      brand: "Hp",
      battery: "10000",
      country: "USA",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 4,
      img: "https://assets.asaxiy.uz/product/main_image/desktop//6347a8bbbb78b.jpg.webp",
      name: "Muzlatgich",
      description: "asdasd",
      price: 5000000,
      amount: 34,
      discount: 10,
      guaranty: 3,
      deliver: true,
      owner: null,
      brand: "LG",
      battery: null,
      country: "Korea",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 5,
      img: "https://assets.asaxiy.uz/product/items/desktop/ec96f542f20153a2e8c5903a90d020e42020012212344558822xA2y79w5Km.jpg.webp",
      name: "gaz plita",
      description: "asdasd",
      price: 1500000,
      amount: 20,
      discount: null,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Artel",
      battery: null,
      country: "Uzbekistan",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 6,
      img: "https://assets.asaxiy.uz/product/main_image/desktop//6525212d4e46f.jpg.webp",
      name: "smart watch",
      description: "asdasd",
      price: 500000,
      amount: 60,
      discount: null,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Xiaomi",
      battery: null,
      country: "Xitoy",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 7,
      img: "https://assets.asaxiy.uz/product/items/desktop/5751ec3e9a4feab575962e78e006250d2023092315141339805ZzWfkPMMFW.png.webp",
      name: "Iphone 13 pro",
      description: "asdasd",
      price: 15000000,
      amount: 60,
      discount: 15,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Apple",
      battery: "3000",
      country: "USA",
      subCategory: {
        id: 1,
        name: "Telephone",
        category: {
          id: 1,
          name: "texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
  ]);

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
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel1-content"
                className="panel-header"
              >
                Цена (cум)
              </AccordionSummary>
              <AccordionDetails>
                <div className="inputBox">
                  <input
                    value={`от ${value[0]}`}
                    type="text"
                    placeholder="от 300 000"
                  />
                  <input
                    value={`до ${value[1]}`}
                    type="text"
                    placeholder="до 103 300 000"
                  />
                </div>
                <Box>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    min={0}
                    max={150000000}
                    style={{ color: "#ed3729" }}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>

            <div className="availability">
              <h3>Наличие</h3>
              <FormControlLabel
                control={
                  <Checkbox style={{ color: "#ed3729" }} defaultChecked />
                }
                label="Забрать сегодня"
                style={{
                  border: "1px solid #ed3729",
                  width: "100%",
                  marginLeft: "0",
                  borderRadius: "6px",
                }}
              />
            </div>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Бренд
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel control={<Checkbox />} label="LG" />
                <span>(30)</span> <br />
                <FormControlLabel control={<Checkbox />} label="Samsung" />
                <span>(30)</span> <br />
                <FormControlLabel control={<Checkbox />} label="Artel" />
                <span>(7)</span> <br />
                <FormControlLabel control={<Checkbox />} label="Huawei" />
                <span>(30)</span>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Емкость аккумулятора
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel control={<Checkbox />} label="1821 мА⋅ч" />
                <br />
                <FormControlLabel control={<Checkbox />} label="3000 мА⋅ч" />
                <br />
                <FormControlLabel control={<Checkbox />} label="4500 мА⋅ч" />
                <br />
                <FormControlLabel control={<Checkbox />} label="5000 мА⋅ч" />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Страна производитель
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel control={<Checkbox />} label="Вьетнам" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Китай" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Artel" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Huawei" />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Количество ядер
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Фронтальная камера
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Фотокамера
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Версия ОС
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Разъем для наушников
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <button className="filter_main-btn">Показать</button>
          </div>
        </div>
        <div className="filter_right">
          <div className="filter_right-head">
            <p>
              <span>
                <TbCoins /> По цене
              </span>
              <span>
                <BsFilterLeft /> По популярности
              </span>
            </p>
            <p>
              <span
                onClick={() => {
                  setFilter_wide(false);
                }}
                style={!filter_wide ? { color: "#ED3729" } : {}}
              >
                <PiSquaresFour />{" "}
              </span>
              <span
                onClick={() => {
                  setFilter_wide(true);
                }}
                style={filter_wide ? { color: "#ed3729" } : {}}
              >
                <TiEqualsOutline />{" "}
              </span>
            </p>
          </div>
          <CheaperCards filter_wide={filter_wide} />
          <div className="views">
            <button className="showMore">Показать еще</button>
            <div className="showPages">
              <span>‹</span>
              <p>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
              </p>
              <span>›</span>
            </div>
          </div>

          <div className="popularity">
            <div className="content_head">
              <h2>Популярные категории и модели</h2>
            </div>

            <div className="popularities">
              <button>Realme</button>
              <button>Игровые</button>
              <button>Оптимальные</button>
              <button>Смартфоны Samsung</button>
              <button>Смартфоны Apple</button>
              <button>Смартфоны</button>
              <button>Смартфоны Samsung</button>
              <button>Смартфоны</button>
              <button>Игровые</button>
            </div>
          </div>

          <div className="interesting">
            <div className="content_head">
              <h2>Товары которые так же могут быть интересны</h2>
              <p>Посмотреть все →</p>
            </div>
            <CheaperCards />
          </div>

          <div className={disableText ? "whereBuy disable" : "whereBuy"}>
            <div className="content_head">
              <h2>Где купить надежный смартфон в Ташкенте?</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus tempore quaerat? Eum neque repellat sed repudiandae
              veritatis iure quibusdam velit nulla voluptatibus voluptatem qui
              quisquam itaque atque sint at libero, esse alias eaque ex
              dignissimos maiores nam accusantium impedit? Dolores eum numquam
              placeat, cum eveniet tempore quas blanditiis inventore! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Officia
              corrupti enim voluptates repudiandae, necessitatibus eaque quos
              impedit sunt provident accusamus commodi fugit ut! Odio animi
              doloremque nam nesciunt quis velit, eius est fuga at vero a quam
              earum rem fugiat sed neque minus? Quae voluptatibus saepe dolores
              architecto, enim rem corrupti autem perspiciatis alias harum
              provident recusandae ad ratione nisi eaque pariatur nihil
              molestiae quasi dolor placeat nulla quam exercitationem nam quia.
              Quasi, fuga. Ab quo perferendis ad, autem possimus aut dolorem
              pariatur labore delectus voluptatem iusto enim consectetur non
              culpa facere eveniet sint. Saepe veniam blanditiis, commodi ut
              recusandae odit, praesentium dolorum rerum, at sequi dolores
              voluptates? Laboriosam, fugit. Consequatur commodi deleniti ad
              labore dolorem, possimus reiciendis earum dicta dolores molestiae
              iure ut nulla nobis cupiditate eveniet, similique vero, error
              dolore exercitationem animi voluptas! Iste ipsam, minus cumque
              fugiat quibusdam dolorum commodi in repellat autem maxime
              adipisci, alias cupiditate quos voluptatum officia ducimus illum
              eligendi, perferendis recusandae deserunt ad nemo eaque! Sit
              tenetur corrupti sunt perferendis itaque, aut voluptatum iusto quo
              asperiores porro nisi. Harum ipsa dolorum provident recusandae
              placeat, debitis dignissimos voluptate? Libero quia suscipit
              sapiente, eaque ratione totam, reiciendis unde exercitationem
              doloremque fugit provident ipsum officiis nam!
            </p>
            <button
              onClick={() => {
                setDisableText(!disableText);
              }}
            >
              Показать больше {disableText ? <FaAngleDown /> : <FaAngleUp />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
