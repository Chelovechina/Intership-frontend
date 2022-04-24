import React, { useState } from "react";
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
          <HeaderNavItem
            courses={props}
            title="Курсы"
            setMenuActive={setMenuActive}
          />
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;