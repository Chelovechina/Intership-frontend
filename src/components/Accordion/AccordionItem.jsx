import React from "react";
import style from "./Accordion.module.scss";

const AccordionItem = (props) => {
  const onListItemClick = () => {
    props.setCurrentBlock(props.data.id)
    props.setAccordionOpen(false)
  }

  return (
    <li onClick={onListItemClick} href="#" className={style.item}>
      <p className={style.text}>{props.data.title}</p>
    </li>
  );
};

export default AccordionItem;
