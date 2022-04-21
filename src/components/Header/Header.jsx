import React from "react";
import SearchContainer from "../Search/SearchContainer";
import style from "./Header.module.scss"
import HeaderBrand from "./HeaderBrand/HeaderBrand";
import HeaderNavContainer from "./HeaderNav/HeaderNavContainer";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.inner}>
            <HeaderBrand />
            
            <HeaderNavContainer />
          </div>
          <SearchContainer />
        </div>
      </div>
    </header>
  );
}

export default Header;