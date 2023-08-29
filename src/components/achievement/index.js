import React from "react";
import { useTranslation } from "react-i18next";
import "./achievement.css";
const Achievement = () => {
  const { t, i18n } = useTranslation();
  const companies = [
    { url: "company1", alt: "Company Logo" },
    { url: "company2", alt: "Company Logo" },
    { url: "company3", alt: "Company Logo" },
  ];
  return (
    <div className="achievement__container container">
      <h1 className="achievement__title">{t("achievement")}</h1>
      <div className="achievement__img__wrapper">
        {companies.map(({ url, alt }, index) => (
          <CompanyLogo imageUrl={url} alt={alt} key={index} />
        ))}
      </div>
    </div>
  );
};

const CompanyLogo = ({ imageUrl, alt }) => {
  return (
    <img src={require(`../../assets/achievement/${imageUrl}.png`)} alt={alt} />
  );
};

export default Achievement;
