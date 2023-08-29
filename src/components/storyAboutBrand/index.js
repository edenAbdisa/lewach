import React from "react";
import { Link } from "react-router-dom";
import "./storyAboutBrand.css";
import lewachGuyImage from "../../assets/img/liwachGuy.png";

import { useTranslation } from "react-i18next";
const StoryAboutBrand = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="story__container container">
      <img src={lewachGuyImage} className="story__image" />
      <div className="story__wrapper">
        <h1
          className="story__title"
          dangerouslySetInnerHTML={{
            __html: t("brandStory.title"),
          }}
        ></h1>
        <p className="story__body">{t("brandStory.body")}</p>
        <Link className="story__btn">{t("brandStory.btn")}</Link>
      </div>
    </div>
  );
};

export default StoryAboutBrand;
