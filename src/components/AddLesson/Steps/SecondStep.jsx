import React from "react";
import style from "./../AddLesson.module.scss";

const SecondStep = (props) => {
  return (
    <div className={style.step}>
      <div className={style.block}>
        <p className={style.inputTitle}>Введите мотивацию:</p>
        <textarea
          className={style.inputTextarea}
          {...props.register("motivation", { required: true })}
        ></textarea>
        {props.errors.motivation && "Это поле обязательное"}
      </div>
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
