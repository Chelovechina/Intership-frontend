import React from "react";
import style from "./Admin.module.scss";
import CourseLessonItem from "../Course/CourseLessons/CourseLessonItem";

const Admin = (props) => {
  const LessonsList = props.lessons.map((lesson) => {
    return <CourseLessonItem key={lesson.id} lesson={lesson} />;
  });

  return <div className={style.body}>{LessonsList}</div>;
}

export default Admin;