import { connect } from "react-redux";
import { updateSearchTextCreator } from "../../redux/redusers/search-reducer";
import Search from "./Search";

const mapStateToProps = (state) => {
  return {
    searchBar: state.searchBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (text) => {
      dispatch(updateSearchTextCreator(text))
    }
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;