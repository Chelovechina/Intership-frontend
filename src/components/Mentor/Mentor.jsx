import React from "react";
import style from "./../Course/Course.module.scss";
import classes from "./Mentor.module.scss"
import svg from "./../../assets/img/sprite.svg"

import CourseDescription from "../Course/CourseDescription/CourseDescription";
import CourseMentors from "../Course/CouseMentors/CourseMentors";
import CourseDates from "../Course/CourseDates/CourseDates";
import CourseProgress from "../Course/CourseProgress/CourseProgress";
import CourseBlocksContainer from "../Course/CourseBlocks/CourseBlocksContainer";
import CourseLessonsContainer from "../Course/CourseLessons/CourseLessonsContainer";
import { Link, Route, Routes } from "react-router-dom";

const Course = (props) => {
  return (
    <div className={style.course}>
      <h1 className={style.title}>Mentor</h1>
      <h1 className={style.title}>{props.course.name}</h1>
      <section className={style.container}>
        <h3 className={style.sectionTitle}>Описание курса:</h3>
        <CourseDescription description={props.course.description} />
      </section>
      <section className={style.container}>
        <h3 className={style.sectionTitle}>Преподаватели:</h3>
        <CourseMentors mentor={props.course.mentor} />
      </section>
      <section className={style.container}>
        <h3 className={style.sectionTitle}>Даты проведения:</h3>
        <CourseDates date={props.course.dates_of_event} />
      </section>
      <section className={style.container}>
        <h3 className={style.sectionTitle}>Прогресс:</h3>
        <CourseProgress progress={props.course.course_completion_rate} />
      </section>
      <section className={style.container}>
        <CourseBlocksContainer />
      </section>
      <section className={`${style.container} ${classes.block}`}>
        <h3 className={style.sectionTitle}>Занятия:</h3>
        <Link to={"/addlesson"} className={classes.addlesson}>
          <svg className={classes.icon} fill="#ffffff">
            <use href={`${svg}#plus`}></use>
          </svg>
        </Link>
        <CourseLessonsContainer />
      </section>
    </div>
  );
}

const Mentor = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Course course={props.course} />} />
    </Routes>
  )
}

export default Mentor;