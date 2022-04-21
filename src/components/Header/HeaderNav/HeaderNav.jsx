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
      <div onClick={onBurgerClick}
        className={
          menuActive ? `${style.burgerIcon} ${style.active}` : style.burgerIcon
        }>
        <span></span>
      </div>
      <nav
        className={
          menuActive ? `${style.nav} ${style.active}` : style.nav
        }
      >
        <ul className={style.list}>
          <HeaderNavItem courses={props.courses} title="Курсы" />
          <li className={style.item}>
            <a href="#" className={style.link}>
              Блоки занятий
            </a>
            <div className={style.innerBlock}>
              <ul className={style.innerList}>
                <li className={style.innerItem}>
                  <a href="#" className={style.innerlink}>
                    1. База №1
                  </a>
                </li>
                <li className={style.innerItem}>
                  <a href="#" className={style.innerlink}>
                    2. База №2
                  </a>
                </li>
                <li className={style.innerItem}>
                  <a href="#" className={style.innerlink}>
                    3. ООП
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;