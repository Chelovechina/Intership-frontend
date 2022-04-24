import React from "react";
import style from "./CourseLessons.module.scss";

const CourseLessonItem = (props) => {
  return (
    <a href="#" className={style.item}>
      <p className={style.text}>{props.lesson.lessonsTitle}</p>
    </a>
  );
};

export default CourseLessonItem;
