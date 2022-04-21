import React from "react";
import style from "./CourseLessons.module.scss"
import CourseLessonItem from "./CourseLessonItem";

const CourseLessons = (props) => {
  const LessonsList = props.lessons.map( lesson => {
    return <CourseLessonItem key={lesson.id} lesson={lesson} />;
  });

  return (
    <div className={style.body}>
      { LessonsList }
    </div>
  )
}

export default CourseLessons