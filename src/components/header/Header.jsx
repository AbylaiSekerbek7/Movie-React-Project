import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h3 className="header-content__logo">MOVIE</h3>
          <nav className="header-content__nav">
            <ul className="header-content__nav__list">
              <li className="header-content__nav__list__item">
                <Link
                  className="header-content__nav__list__item__link"
                  to={"/"}
                >
                  Главная
                </Link>
              </li>
              <li className="header-content__nav__list__item">
                <Link
                  className="header-content__nav__list__item__link"
                  to={"/"}
                >
                  Главная
                </Link>
              </li>
              <li className="header-content__nav__list__item">
                <Link
                  className="header-content__nav__list__item__link"
                  to={"/"}
                >
                  Главная
                </Link>
              </li>
              <li className="header-content__nav__list__item">
                <Link
                  className="header-content__nav__list__item__link"
                  to={"/"}
                >
                  Главная
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
