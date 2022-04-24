import React from "react";
import style from "./Search.module.scss";
import svg from "./../../assets/img/sprite.svg";
import { useState } from "react";
import AutocompleteItem from "./AutocompleteItem";

const Search = (props) => {
  const [searchBarActive, setSearchBarActive] = useState(false);

  const onIconClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  const newSearchText = React.createRef();

  const onSearchTextChange = () => {
    const text = newSearchText.current.value;
    props.updateSearchText(text);
    props.updateFilteredLessons(text);
    setIsOpen(true)
  };
  
  const onItemClick = (text) => {
    props.updateSearchText(text)
    props.updateFilteredLessons(text);
    setIsOpen(!isOpen)
  }

  const fitlteredLessonsList = props.lessonBlock.filteredLessons.map(
    (lesson) => {
      return (
        <AutocompleteItem key={lesson.id}
          onItemClick={onItemClick}
          lesson={lesson}
        />
      );
    }
  );

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={style.searchBlock}>
      <div
        onClick={onIconClick}
        className={
          searchBarActive
            ? `${style.iconBlock} ${style.active}`
            : style.iconBlock
        }
      >
        <svg className={style.icon} fill="#135AA2">
          <use href={`${svg}#search`}></use>
        </svg>
      </div>
      <form
        className={
          searchBarActive ? `${style.form} ${style.active}` : style.form
        }
      >
        <input
          ref={newSearchText}
          onChange={onSearchTextChange}
          type="text"
          value={props.searchBar.searchText}
          placeholder="Введите название урока:"
          className={style.search}
        />
        <ul className={style.autocomplete}>
          {props.searchBar.searchText && isOpen ? fitlteredLessonsList : null}
        </ul>
      </form>
    </div>
  );
};

export default Search;
