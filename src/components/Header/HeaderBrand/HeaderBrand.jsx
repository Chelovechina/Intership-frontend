import React from "react";
import style from "./../Header.module.scss";
import logo from "./../../../assets/img/logo.webp";

const HeaderBrand = () => {
  return (
    <a href="#" className={style.brand}>
      <img src={logo} alt="logo" className={style.logo} />
    </a>
  );
} 

export default HeaderBrand;