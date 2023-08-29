import React from "react";
import "./customerCard.css";
const CustomerCard = ({
  imgUrl,
  customerTitle,
  message,
  customerName,
  customerPosition,
  className,
}) => {
  return (
    <div className={`review__card ${className}`}>
      <img src={imgUrl} className="review__client__img" />
      <div className="review__wrapper">
        <h1 className="company__name">{customerTitle}</h1>
        <p className="review__body">{message}</p>
        <span className="reviewer__name">{customerName}</span>
        <span className="reviewer__position">{customerPosition}</span>
      </div>
    </div>
  );
};

export default CustomerCard;
