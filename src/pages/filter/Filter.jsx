import React from "react";
import "./Filter.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { TbCoins } from "react-icons/tb";
import { BsFilterLeft } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";
import { TiEqualsOutline } from "react-icons/ti";
import CheaperCards from "../../components/cheaperCards/CheaperCards";
import { FaAngleDown } from "react-icons/fa";


function valuetext(value) {
  return `${value}°C`;
}

function Filter() {
  const [value, setValue] = React.useState([300, 103300000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                  <input value={`от ${value[0]}`} type="text" placeholder="от 300 000" />
                  <input value={`до ${value[1]}`} type="text" placeholder="до 103 300 000" />
                </div>
                <Box>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    min={0}
                    max={150000000}
                    style={{color: "#ed3729"}}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>

            <div className="availability">
              <h3>Наличие</h3>
                <FormControlLabel control={<Checkbox style={{color: "#ed3729"}}defaultChecked />} label="Забрать сегодня" style={{border: "1px solid #ed3729", width: "100%", marginLeft: "0", borderRadius: "6px"}} />
              
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
              <AccordionDetails>
                  
                  
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
               Фронтальная камера
              </AccordionSummary>
              <AccordionDetails>
                  
                  
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Фотокамера
              </AccordionSummary>
              <AccordionDetails>
                  
                  
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Версия ОС
              </AccordionSummary>
              <AccordionDetails>
                  
                  
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                className="panel-header"
              >
                Разъем для наушников
              </AccordionSummary>
              <AccordionDetails>
                  
                  
              </AccordionDetails>
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
              <span>
                <PiSquaresFour />{" "}
              </span>
              <span>
                <TiEqualsOutline />{" "}
              </span>
            </p>
          </div>
          <CheaperCards />
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

          <div className="whereBuy">
            <div className="content_head">
              <h2>Где купить надежный смартфон в Ташкенте?</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus tempore quaerat? Eum neque repellat sed repudiandae
              veritatis iure quibusdam velit nulla voluptatibus voluptatem qui
              quisquam itaque atque sint at libero, esse alias eaque ex
              dignissimos maiores nam accusantium impedit? Dolores eum numquam
              placeat, cum eveniet tempore quas blanditiis inventore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
