import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import footerLogo from "../assets/img/footer-icon.svg";
import footerFacebookIcon from "../assets/icon/social/Facebook.svg";
import footerLinkedInIcon from "../assets/icon/social/LinkedIn.svg";
import footerTwitterIcon from "../assets/icon/social/Twitter.svg";

const Footer = () => {
  const footerMenuItems = [
    { link: "/", title: "Privacy Policy" },
    { link: "/", title: "Terms and Conditions" },
  ];
  const socialItems = [
    {
      link: "#",
      title: "Facebook",
      icon: footerFacebookIcon,
    },
    { link: "#", title: "Twitter", icon: footerTwitterIcon },
    { link: "#", title: "LinkedIn", icon: footerLinkedInIcon },
    { link: "#", title: "LinkedIn", icon: footerLinkedInIcon },
  ];
  return (
    <div className="footer__container">
      <div className="footer__logo-wrapper">
        <img src={footerLogo} alt="Logo" className="footer__logo" />
      </div>
      <div className="footer__quick-links__wrapper">
        <span className="footer_title">Liwach.</span>
        <ul className="footer__quick-links">
          {footerMenuItems.map((footerMenuItem, index) => (
            <li key={index}>
              <Link to={footerMenuItem.link} className="footer__menu-links">
                {footerMenuItem.title}
              </Link>
            </li>
          ))}
        </ul>
        <span className="footer_copyright">
          @2020 Liwach. All rights reserved.
        </span>
      </div>
      <div>
        {socialItems.map(({ link, title, icon }, index) => {
          const mid = socialItems.length / 2;
          return (
            <Link
              to={link}
              className={`footer__menu-social ${
                index < mid ? "left" : "right"
              }`}
              key={index}
            >
              <img src={icon} alt={title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
