import React from "react";
import "./Brands.css";

function Brands() {
  return (
    <div className="brends">
      <a href="https://www.usa.canon.com/" target="_blank">
        <img src="./imgs/canon.png" alt="canon logo" />
      </a>
      <a href="https://www.mi.com/us/" target="_blank">
        <img src="./imgs/mi.png" alt="mi logo" />
      </a>
      <a href="https://www.lg.com/us" target="_blank">
        <img src="./imgs/lg.png" alt="lg logo" />
      </a>
      <a href="https://www.samsung.com/uz_ru/" target="_blank">
        <img src="./imgs/samsung.png" alt="samsung logo" />
      </a>
      <a href="https://artelgroup.org/" target="_blank">
        <img src="./imgs/artel.png" alt="artel logo" />
      </a>
    </div>
  );
}

export default Brands;
