import React from "react";
import style from "./../AddLesson.module.scss";

const FifthStep = (props) => {
  return (
    <div className={style.step}>
      <div className={style.block}>
        <p className={style.inputTitle}>Рефлексия:</p>
        <textarea
          {...props.register("reflection", {required: true})}
          className={style.inputTextarea}
        ></textarea>
      </div>
      <div className={style.btns}>
        <button className={style.btn} onClick={props.setPreviousStep}>
          Предыдущее
        </button>
        <button className={style.btn}>Отправить</button>
      </div>
    </div>
  );
};

export default FifthStep;
