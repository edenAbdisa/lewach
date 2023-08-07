import React from "react";
import "../styles/topHeader.css";

function TopHeader() {
  return (
    <div className="top-header">
      <span className="top-header__logo"></span>
      <h1 className="top-header__title">Liwach</h1>
      <div className="top-header__actions-container">
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
