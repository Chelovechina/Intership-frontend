import React from "react";
import style from "./CourseLessons.module.scss";
import CourseLessonItem from "./CourseLessonItem";

const CourseLessons = (props) => {
  const lessonsList = [];

  if (
    props.lessonBlock.filteredLessons.length > 0 &&
    props.lessonBlock.filteredLessons.length !== props.lessonBlock.allLessonsAmount
  ) {
    props.lessonBlock.filteredLessons.forEach((lesson) => {
      lessonsList.push(<CourseLessonItem key={lesson.id} lesson={lesson} />);
    });
  } else if (props.lessonBlock.currentBlock === null) {
    props.lessonBlock.lessonBlocks.forEach((element) => {
      element.lessons.forEach((lesson) => {
        lessonsList.push(<CourseLessonItem key={lesson.id} lesson={lesson} />);
      });
    });
  } else {
    props.lessonBlock.lessonBlocks.forEach((element) => {
      if (element.id === props.lessonBlock.currentBlock) {
        element.lessons.forEach((lesson) => {
          lessonsList.push(
            <CourseLessonItem key={lesson.id} lesson={lesson} />
          );
        });
      }
    });
  }

  return <div className={style.body}>{lessonsList}</div>;
};

export default CourseLessons;
