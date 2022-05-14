import { connect } from "react-redux";
import { lessonsFilterCreator } from "../../redux/redusers/lessonblock-reducer";
import { updateSearchTextCreator } from "../../redux/redusers/search-reducer";
import Search from "./Search";

const mapStateToProps = (state) => {
  return {
    searchBar: state.searchBar,
    lessonBlock: state.lessonBlock,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (text) => {
      dispatch(updateSearchTextCreator(text))
    },
    updateFilteredLessons: (text) => {
      dispatch(lessonsFilterCreator(text))
    }
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;