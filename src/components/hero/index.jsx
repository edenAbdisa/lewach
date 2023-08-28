import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import heroImg from "../../assets/img/hero.png";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="hero__container">
      <img className="hero__img" src={heroImg} />
      <div className="hero__desc__wrapper">
        <h1 className="hero__title">{t("hero.header")}</h1>
        <p className="hero__description">{t("hero.description")}</p>
        <Link className="hero__btn">{t("hero.btn")}</Link>
      </div>
    </div>
  );
};

export default HeroSection;
