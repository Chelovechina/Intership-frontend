import React from "react";
import style from "./../../Header.module.scss";

const HeaderNavInnerItem = (props) => {
  return (
    <li className={style.innerItem}>
      <a href="#" className={style.innerlink}>
        {props.course.name}
      </a>
    </li>
  );
} 

export default HeaderNavInnerItem