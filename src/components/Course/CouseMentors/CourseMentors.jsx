import React from "react";
import avatar from "./../../../assets/img/avatar.jpg";
import style from "./CourseMenotrs.module.scss";

const CourseMentors = (props) => {
  return (
    <div className={style.inner}>
      <div className={style.mentor}>
        <div className={style.avatar}>
          <img src={avatar} alt="" className={style.img} />
        </div>
        <div className={style.info}>
          <h5 className={style.title}>{props.mentor}</h5>
          <ul className={style.list}>
            <li className={style.item}>Опыт работы с Django</li>
            <li className={style.item}>5 лет разработки</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseMentors;
