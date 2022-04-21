import React from "react";
import style from "./Search.module.scss";
import svg from "./../../assets/img/sprite.svg";
import { useState } from "react";

const Search = (props) => {
  const [searchBarActive, setSearchBarActive] = useState(false);

  const onIconClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  const newSearchText = React.createRef()

  const onSearchTextChange = () => {
    const text = newSearchText.current.value;
    props.updateSearchText(text)
  }

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
      </form>
    </div>
  );
};

export default Search;
