import React from "react";
import { Controller } from "react-hook-form";
import Editor from "../../Editor/Editor";
import style from "./../AddLesson.module.scss";

const SecondStep = (props) => {
  return (
    <div className={style.step}>
      <p className={style.inputTitle}>Введите мотивацию:</p>
      <Controller render={Editor} name="motivation" control={props.control} />
      {props.errors.motivation && "Это поле обязательное"}
      <div className={style.btns}>
        <button className={style.btn} onClick={props.setPreviousStep}>
          Предыдущее
        </button>
        <button
          className={style.btn}
          onClick={async () => {
            const result = await props.trigger("motivation");
            result && props.setNextStep();
          }}
        >
          Следующее
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
