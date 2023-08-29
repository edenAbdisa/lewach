import React from "react";
import "./itemCard.css";
import icon from "../../assets/icon/arrow-right.svg";
const ItemCard = ({ img, category, title }) => {
  return (
    <div className="card">
      <img className="card__image" src={img} />
      <div className="card__body">
        <span className="card__category">{category}</span>
        <h1 className="card__title">{title}</h1>
        <div className="card__action">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
