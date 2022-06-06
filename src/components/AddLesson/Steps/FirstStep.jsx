import React from "react";
import style from "./../AddLesson.module.scss";

const FirstStep = (props) => {
  const optionList = props.lessonBlocks.map((block) => {
    return (
      <option key={block.id} value={block.id}>
        {block.title}
      </option>
    );
  });

  const defaultOption = props.lessonBlocks[props.lessonBlocks.length - 1];

  return (
    <div className={style.step}>
      <div className={style.block}>
        <p className={style.inputTitle}>Введите название урока:</p>
        <input
          className={style.inputText}
          type="text"
          {...props.register("lessonsTitle", { required: true })}
        />
        {props.errors.lessonsTitle && "Это поле обязательное"}
      </div>
      <div className={style.block}>
        <p className={style.inputTitle}>Выберите блок курса:</p>
        <select
          className={style.select}
          defaultValue={defaultOption.id}
          {...props.register("lessonBlock")}
        >
          {optionList}
        </select>
      </div>
      <div className={style.btns}>
        <button
          onClick={async () => {
            const result = await props.trigger("lessonsTitle");
            result && props.setNextStep();
          }}
          className={style.btn}
        >
          Следующее
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
