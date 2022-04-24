import React from "react";
import { lessonsFilterCreator } from "../../redux/redusers/lessonblock-reducer";
import style from "./Search.module.scss";

const AutocompleteItem = (props) => {
  return <li onClick={() => {
    props.onItemClick(props.lesson.lessonsTitle)
  }} className={style.item}>{props.lesson.lessonsTitle}</li>;
}

export default AutocompleteItem;