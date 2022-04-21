import React from "react";
import style from "./../../Header.module.scss";
import HeaderNavInnerItem from "./HeaderNavInnerItem";

const HeaderNavItem = (props) => {
  let item;

  if (props.courses.length !== 1) {
    const innerItemList = props.courses.map((course) => {
      return <HeaderNavInnerItem course={course} key={course.id} />
    })

    item = (
      <li className={style.item}>
        <a href="#" className={style.link}>
          {props.title}
        </a>
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