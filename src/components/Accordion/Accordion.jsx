import React, { useState } from "react";
import svg from "./../../assets/img/sprite.svg";
import style from "./Accordion.module.scss";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const accorionItemList = props.data.map(el => {
    return <AccordionItem key={el.id} data={el} setAccordionOpen={setAccordionOpen} setCurrentBlock={props.setCurrentBlock} />;
  });

  function onAccordionClick() {
    setAccordionOpen(!accordionOpen);
  }

  return (
    <div className={style.accordion}>
      <div
        className={accordionOpen ? `${style.head} ${style.active}` : style.head}
        onClick={onAccordionClick}
      >
        <h4 className={style.title}>{props.accordionTitle}</h4>
        <div className={style.line}></div>
        <svg className={style.icon} fill="#ffffff">
          <use href={`${svg}#arrow-down`}></use>
        </svg>
      </div>
      <ul
        className={accordionOpen ? `${style.body} ${style.active}` : style.body}
      >
        {accorionItemList}
      </ul>
    </div>
  );
};

export default Accordion;
