import React from "react";
import "./CheaperCards.css";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink, useParams } from "react-router-dom";

function CheaperCards({ likedProduct, filter_wide, product }) {
  const onLiked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      product: id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ecommerce0003.pythonanywhere.com/action/liked/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className={filter_wide ? "cards filter_wide" : "cards"}>
      {product?.map((item) => {
        var isliked = false;
        likedProduct.forEach((like) => {
          if (like.product == item.id) {
            isliked = true;
          }
        });
        return (
          <div className="card" key={item.id}>
            <div className="card-info">
              <Link to={`/filter/${item.id}`}>
                <img
                  src={`https://ecommerce0003.pythonanywhere.com/${item.img_main}`}
                  alt="Product image"
                />
              </Link>
            </div>{" "}
            <div>
              <div className="last-price">
                {Math.floor((item.price / 12) * 1.3)
                  .toLocaleString()
                  .replaceAll(",", " ")}{" "}
                сум/мес
              </div>
              <p>{item.price.toLocaleString().replaceAll(",", " ")} сум</p>

              <h2>{item.name.slice(0, 30)}...</h2>
            </div>
            <hr />
            <div className="additions">
              <div className="shopping">
                <PiShoppingCartSimpleFill />
              </div>
              <div className="favorits">
                {isliked ? (
                  <span className="like">
                    <FaHeart />
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      onLiked(item.id);
                      isliked = true;
                    }}
                    className="dislike"
                  >
                    <FaHeart />
                  </span>
                )}
              </div>
              <div className="comparisons">
                <FaScaleBalanced />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CheaperCards;
