import React from "react";
import "./Filter.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

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
            {/* <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Accordion 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion> */}
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
            <CheaperCards/>
          </div>

          <div className="whereBuy">
            <div className="content_head">
              <h2>Где купить надежный смартфон в Ташкенте?</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus tempore quaerat? Eum neque repellat sed repudiandae veritatis iure quibusdam velit nulla voluptatibus voluptatem qui quisquam itaque atque sint at libero, esse alias eaque ex dignissimos maiores nam accusantium impedit? Dolores eum numquam placeat, cum eveniet tempore quas blanditiis inventore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
