import React from "react";
import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.inner}>
          <p className={style.copyright}>Zhumashov Kubanych © 2022</p>
        </div>
      </div>
    </footer>
  ); 
}

export default Footer;