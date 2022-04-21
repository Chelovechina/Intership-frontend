import React from "react";
import style from "./CourseDescription.module.scss";
import courseLogo from "./../../../assets/img/courseLogo.png"

const CourseDescription = (props) => {
  return (
    <div className={style.inner}>
      <div className={style.img}>
        <img src={courseLogo} alt="Course Logo" className={style.logo} />
      </div>
      <div className={style.info}>
        <p className={style.text}>{`${props.description}`}</p>
      </div>
    </div>
  );
}

export default CourseDescription;