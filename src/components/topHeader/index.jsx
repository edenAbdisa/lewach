import React from "react";
import "./topHeader.css";
import LanguageSelector from "../languageSelector";

function TopHeader() {
  return (
    <div className="top-header">
      <span className="top-header__logo"></span>
      <h1 className="top-header__title">Liwach</h1>
      <div className="top-header__actions-container">
        <LanguageSelector />
        <span className="top-header__actions-container__call-center">
          Call center
        </span>
        <span className="top-header__actions-container__location">
          Location
        </span>
      </div>
    </div>
  );
}

export default TopHeader;
