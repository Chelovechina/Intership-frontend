import React from "react";
import style from "./../../Header.module.scss";

const HeaderNavInnerItem = (props) => {
  return (
    <li onClick={() => {
      props.onCourseClick(props.course.id)
    }} className={style.innerItem}>
      <span href="#" className={style.innerlink}>
        {props.course.name}
      </span>
    </li>
  );
} 

export default HeaderNavInnerItem