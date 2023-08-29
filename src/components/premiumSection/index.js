import react, { useState, useTransition } from "react";
import "./premiumSection.css";
import { useTranslation } from "react-i18next";
import ItemCard from "../itemCard";
import itemImage from "../../assets/img/item.png";
const PremiumSection = () => {
  const { t, i18n } = useTranslation();
  const [premiumItems, setPremiumItems] = useState([
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
    {
      img: { itemImage },
      category: "Sub category of item",
      title: "Item Name",
    },
  ]);

  return (
    <div className="premium__container container">
      <p className="premium__section__title">{t("premium.title")}</p>
      <div className="premium__category__wrapper">
        {t("premium.category", { returnObjects: true }).map(
          (category, index) => (
            <span key={index} className="premium__category">
              {category}
            </span>
          )
        )}
      </div>
      <div className="premium__container__items">
        {premiumItems.map(({ img, category, title }, index) => (
          <ItemCard
            img={itemImage}
            category={category}
            title={title}
            key={index}
          />
        ))}
      </div>
      <span className="premium__more-btn">{t("premium.morebtn")}</span>
    </div>
  );
};

export default PremiumSection;
