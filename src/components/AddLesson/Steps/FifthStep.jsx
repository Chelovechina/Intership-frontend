import React from "react";
import { Controller } from "react-hook-form";
import Editor from "../../Editor/Editor";
import style from "./../AddLesson.module.scss";

const FifthStep = (props) => {
  return (
    <div className={style.step}>
      <p className={style.inputTitle}>Рефлексия:</p>
      <Controller render={Editor} name={"reflection"} control={props.control} />
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
