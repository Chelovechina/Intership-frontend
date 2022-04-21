import React from "react";
import style from "./CourseProgress.module.scss";

const CourseProgress = (props) => {
  return <p className={style.text}>{props.progress}%</p>;
}

export default CourseProgress;