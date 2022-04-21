import React from "react";
import style from "./Course.module.scss";
import CourseDates from "./CourseDates/CourseDates";
import CourseDescription from "./CourseDescription/CourseDescription";
import CourseProgress from "./CourseProgress/CourseProgress";
import CourseMentors from "./CouseMentors/CourseMentors";
import CourseLessonsContainer from "./CourseLessons/CourseLessonsContainer";

const Course = (props) => {
  return (
    <div className={style.course}>
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
        <h3 className={style.sectionTitle}>Занятия:</h3>
        <CourseLessonsContainer />
      </section>
    </div>
  );
}

export default Course;