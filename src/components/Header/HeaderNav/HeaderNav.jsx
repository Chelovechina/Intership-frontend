import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./../Header.module.scss";
import HeaderNavItem from "./HeaderNavItem/HeaderNavItem";

const HeaderNav = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const onBurgerClick = () => {
    setMenuActive(!menuActive)
  }

  return (
    <>
      <div
        onClick={onBurgerClick}
        className={
          menuActive ? `${style.burgerIcon} ${style.active}` : style.burgerIcon
        }
      >
        <span></span>
      </div>
      <nav className={menuActive ? `${style.nav} ${style.active}` : style.nav}>
        <ul className={style.list}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <HeaderNavItem
              courses={props}
              title="Курсы"
              setMenuActive={setMenuActive}
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/profile"}>
            <span className={style.link}>Профиль</span>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;