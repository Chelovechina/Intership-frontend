import React from "react";
import style from "./Course.module.scss";

import CourseDates from "./CourseDates/CourseDates";
import CourseDescription from "./CourseDescription/CourseDescription";
import CourseProgress from "./CourseProgress/CourseProgress";
import CourseMentors from "./CouseMentors/CourseMentors";
import CourseLessonsContainer from "./CourseLessons/CourseLessonsContainer";
import CourseBlocksContainer from "./CourseBlocks/CourseBlocksContainer";

const Course = (props) => {
  const onCourseClick = (courseId) => {
    props.setCurrentCourse(courseId);
  }

  if (props.courses.currentCourse === null) {
    const coursesList = props.courses.courses.map(course => {
      return <li onClick={() => {
        onCourseClick(course.id)
      }} key={course.id} className={style.optionsItem}>{course.name}</li>;
    })

    return (
      <div className={style.container}>
        <div className={style.options}>
          <h1 className={style.title}>Выберите курс:</h1>
          <ul className={style.optionsList}>{coursesList}</ul>
        </div>
      </div>
    );
  }

  let content;

  props.courses.courses.forEach(course => {
    if (course.id === props.courses.currentCourse) {
      content = (
        <div className={style.course}>
          <h1 className={style.title}>{course.name}</h1>
          <section className={style.container}>
            <h3 className={style.sectionTitle}>Описание курса:</h3>
            <CourseDescription description={course.description} />
          </section>
          <section className={style.container}>
            <h3 className={style.sectionTitle}>Преподаватели:</h3>
            <CourseMentors mentor={course.mentor} />
          </section>
          <section className={style.container}>
            <h3 className={style.sectionTitle}>Даты проведения:</h3>
            <CourseDates date={course.dates_of_event} />
          </section>
          <section className={style.container}>
            <h3 className={style.sectionTitle}>Прогресс:</h3>
            <CourseProgress progress={course.course_completion_rate} />
          </section>
          <section className={style.container}>
            <CourseBlocksContainer />
          </section>
          <section className={style.container}>
            <h3 className={style.sectionTitle}>Занятия:</h3>
            <CourseLessonsContainer />
          </section>
        </div>
      );
    }
  })

  return content;
}

export default Course;