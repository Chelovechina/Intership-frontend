import React from "react";
import style from "./../AddLesson.module.scss";

const ForthStep = (props) => {
  return (
    <div className={style.step}>
      <div className={style.block}>
        <p className={style.inputTitle}>Введите новую тему:</p>
        <input
          {...props.register("newTheme", { required: true })}
          className={style.inputText}
          type="text"
        />
        {props.errors.newTheme && "Это поле обязательное"}
      </div>
      <div className={style.btns}>
        <button className={style.btn} onClick={props.setPreviousStep}>
          Предыдущее
        </button>
        <button
          className={style.btn}
          onClick={async () => {
            const result = await props.trigger("newTheme");
            result && props.setNextStep();
          }}
        >
          Следующее
        </button>
      </div>
    </div>
  );
};

export default ForthStep;
