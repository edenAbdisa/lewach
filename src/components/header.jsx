import React from "react";
import "../styles/header.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import icon from "../assets/icon/profile.svg";
const Header = () => {
  const menuList = [
    { title: "Shop", link: "shop", type: "text" },
    { title: "Promo", link: "promo", type: "text" },
    { title: "About", link: "about", type: "text" },
    { title: "Search", link: "search", type: "input" },
    { title: "Wishlist", link: "wishlist", type: "icon" },
    { title: "Cart", link: "cart", type: "icon" },
    { title: "Profile", link: "profile", type: "icon" },
  ];
  return (
    <div className="navbar">
      <ul className="navbar__menu__list">
        {menuList.map((menuItem, index) =>
          menuItem.type === "text" ? (
            <CustomLink to={menuItem.link} key={index}>
              {menuItem.title}
            </CustomLink>
          ) : menuItem.type === "icon" ? (
            <CustomLink
              to={menuItem.link}
              key={index}
              className="menu_icon-wrapper"
            >
              <span
                className={`menu__svg-icon navbar__${menuItem.link}-icon`}
              />
            </CustomLink>
          ) : (
            <li key={index}>
              <div className="navbar_search-wrapper">
                <input
                  className="navbar__search"
                  type="text"
                  placeholder="Select what you need"
                />
                <span className="navbar__search-btn"></span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={`${props.className} ${isActive ? "active" : ""}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
export default Header;
