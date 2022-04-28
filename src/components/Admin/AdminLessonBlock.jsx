import React from "react";
import style from "./Admin.module.scss";

const AdminLessonBlock = (props) => {
  const lessonsList = props.block.lessons.map((lesson) => {
    return <li className={style.item}>{lesson.lessonsTitle}</li>;
  });

  return (
    <div className={style.lessonBlock}>
      <h3 className={style.title}>{props.block.title}</h3>
      <ul className={style.lessons}>
        {lessonsList}
      </ul>
    </div>
  )
}

export default AdminLessonBlock;