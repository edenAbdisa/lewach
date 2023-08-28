import React, { useState } from "react";
import "./languageSelector.css";
import i18n from "../../utils/i18n";

export default function LanguageSelector() {
  const [language, setLanguage] = useState(i18n.language);
  const languages = ["en", "am"];
  const changeLanguage = () => {
    const newLang = language === languages[0] ? languages[1] : languages[0];
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <div className="lsContainer" onClick={() => changeLanguage()}>
      <div className="lsButton">
        {(language === languages[0]
          ? languages[1]
          : languages[0]
        ).toUpperCase()}
      </div>
    </div>
  );
}
