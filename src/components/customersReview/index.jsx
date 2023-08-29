import React, { useState } from "react";
import CustomerCard from "./customerCard";
import CircularBtn from "../button/circularBtn";
import img from "../../assets/img/hero.png";
import rightIcon from "../../assets/icon/right-black-arrow.svg";
import leftIcon from "../../assets/icon/left-black-arrow.svg";
import "./customersReview.css";
import { useTranslation } from "react-i18next";
const CustomersReview = () => {
  const { t, i18l } = useTranslation();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const noOfCustomerReview = t("customerReview", {
    returnObjects: true,
  }).length;
  const updateCurrentReview = (step) => {
    if (noOfCustomerReview - 1 == currentReviewIndex) {
      setCurrentReviewIndex(0);
    }
    if (step == "prev") {
      setCurrentReviewIndex(currentReviewIndex - 1);
    } else {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
  };
  return (
    <div className="container customer-review__wrapper">
      <CircularBtn
        className={
          currentReviewIndex == 0
            ? "left__button hidden"
            : "left__button visible"
        }
        color="green"
        callBackAction={() => updateCurrentReview("prev")}
      >
        <img src={leftIcon} />
      </CircularBtn>
      {t("customerReview", { returnObjects: true }).map(
        ({ customerTitle, message, customerName, customerPosition }, index) => (
          <CustomerCard
            key={index}
            className={currentReviewIndex == index ? "active" : "hide"}
            imgUrl={img}
            customerTitle={customerTitle}
            message={message}
            customerName={customerName}
            customerPosition={customerPosition}
          />
        )
      )}
      <CircularBtn
        className={
          currentReviewIndex == noOfCustomerReview - 1
            ? "right__button hidden"
            : "right__button visible"
        }
        color="green"
        callBackAction={() => updateCurrentReview("next")}
      >
        <img src={rightIcon} />
      </CircularBtn>
    </div>
  );
};

export default CustomersReview;
