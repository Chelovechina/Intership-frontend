import React from "react";
import style from "./AddLesson.module.scss";

const AddLesson = (props) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Добавить урок:</h2>
      <form>
        <input type="text" name="" id="" />
        <select name="" id="" defaultValue={"6"}>
          <option value="1">Синий</option>
          <option value="2">Зеленый</option>
          <option value="3">Желтый</option>
          <option value="4">Красный</option>
          <option value="5">Оранжевый</option>
          <option value="6">Черный</option>
        </select>
        <input list="cars" defaultValue={"BMW"} />
        <datalist id="cars">
          <option value="BMW" />
          <option value="Bentley" />
          <option value="Mercedes" />
          <option value="Audi" />
          <option value="Volkswagen" />
        </datalist>
      </form>
    </div>
  );
}

export default AddLesson;