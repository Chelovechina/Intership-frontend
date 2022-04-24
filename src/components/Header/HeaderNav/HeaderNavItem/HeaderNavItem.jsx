import React from "react";
import style from "./../../Header.module.scss";
import HeaderNavInnerItem from "./HeaderNavInnerItem";

const HeaderNavItem = (props) => {
  const onCourseClick = (courseId) => {
    props.courses.setCurrentCourse(courseId)
    props.setMenuActive(false)
  }

  let item;

  if (props.courses.courses.length !== 1) {
    const innerItemList = props.courses.courses.map((course) => {
      return (
        <HeaderNavInnerItem
          course={course}
          key={course.id}
          onCourseClick={onCourseClick}
        />
      );
    })

    item = (
      <li className={style.item}>
        <span className={style.link}>
          {props.title}
        </span>
        <div className={style.innerBlock}>
          <ul className={style.innerList}>
            {innerItemList}
          </ul>
        </div>
      </li>
    );
  }

  return <>{item}</>;
}

export default HeaderNavItem;