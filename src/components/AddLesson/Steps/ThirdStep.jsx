import React from "react";
import style from "./../AddLesson.module.scss";

const ThirdStep = (props) => {
  const optionList = [];

  props.lessonBlocks.forEach(block => {
    block.lessons.forEach(lesson => {
      optionList.push(
        <option key={lesson.id} value={lesson.id}>
          {lesson.lessonsTitle}
        </option>
      );
    });
  });

  return (
    <div className={style.step}>
      <div className={style.block}>
        <p className={style.inputTitle}>Выберите уроки для повторение:</p>
        <select className={style.select} {...props.register("repatFirst")}>
          {optionList}
        </select>
        <select className={style.select} {...props.register("repatSecond")}>
          {optionList}
        </select>
        <select className={style.select} {...props.register("repatThird")}>
          {optionList}
        </select>
      </div>
      <div className={style.btns}>
        <button className={style.btn} onClick={props.setPreviousStep}>
          Предыдущее
        </button>
        <button className={style.btn} onClick={props.setNextStep}>
          Следующее
        </button>
      </div>
    </div>
  );
};

export default ThirdStep;
