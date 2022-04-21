import React from "react";
import style from "./CourseDates.module.scss";

const CourseDates = (props) => {
  return (
    <div className={style.inner}>
      <div className={style.info}>
        <div className={style.top}>
          <p className={style.title}>Дата и время:</p>
        </div>
        <div className={style.bottom}>
          <div className={style.item}>
            <p className={style.text}>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default CourseDates;